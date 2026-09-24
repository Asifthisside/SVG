import { useState, useRef, useEffect } from 'react';
import { Pencil, Minus, Eraser, Download, Image as ImageIcon, Code, Undo, Redo, Sun, Moon, MousePointer2, Spline, PaintBucket, Hand, Copy, Type, ImagePlus } from 'lucide-react';
import ImageTracer from 'imagetracerjs';
import './App.css';

const generateId = () => Math.random().toString(36).substr(2, 9);

const generateD = (nodes) => {
  if (!nodes || nodes.length === 0) return '';
  return nodes.map(n => {
    if (n.cmd === 'M' || n.cmd === 'L') return `${n.cmd} ${n.x} ${n.y}`;
    if (n.cmd === 'Q') return `Q ${n.cx} ${n.cy} ${n.x} ${n.y}`;
    if (n.cmd === 'C') return `C ${n.x1} ${n.y1} ${n.x2} ${n.y2} ${n.x} ${n.y}`;
    if (n.cmd === 'Z') return 'Z';
    return '';
  }).join(' ');
};

/** svgai-style: keep raw path `d` for sharp display; nodes for edit handles. */
const parsePathD = (d, scale = 1) => {
  if (!d) return [];
  const tokens = d.replace(/,/g, ' ').trim().split(/\s+/).filter(Boolean);
  const nodes = [];
  const sx = (v) => Number(v) * scale;
  let i = 0;
  let cmd = 'L';
  while (i < tokens.length) {
    const t = tokens[i];
    if (/^[MmLlHhVvCcQqTtSsAaZz]$/.test(t)) {
      cmd = t;
      i += 1;
      if (cmd === 'Z' || cmd === 'z') {
        nodes.push({ cmd: 'Z' });
        continue;
      }
    }
    if (cmd === 'M' || cmd === 'm' || cmd === 'L' || cmd === 'l') {
      if (i + 1 >= tokens.length) break;
      nodes.push({ cmd: cmd.toUpperCase() === 'M' ? 'M' : 'L', x: sx(tokens[i]), y: sx(tokens[i + 1]) });
      i += 2;
      if (cmd === 'M') cmd = 'L';
      if (cmd === 'm') cmd = 'l';
    } else if (cmd === 'Q' || cmd === 'q') {
      if (i + 3 >= tokens.length) break;
      nodes.push({
        cmd: 'Q',
        cx: sx(tokens[i]),
        cy: sx(tokens[i + 1]),
        x: sx(tokens[i + 2]),
        y: sx(tokens[i + 3]),
      });
      i += 4;
    } else if (cmd === 'C' || cmd === 'c') {
      if (i + 5 >= tokens.length) break;
      nodes.push({
        cmd: 'C',
        x1: sx(tokens[i]),
        y1: sx(tokens[i + 1]),
        x2: sx(tokens[i + 2]),
        y2: sx(tokens[i + 3]),
        x: sx(tokens[i + 4]),
        y: sx(tokens[i + 5]),
      });
      i += 6;
    } else if (cmd === 'H' || cmd === 'h') {
      if (i >= tokens.length) break;
      const prev = nodes[nodes.length - 1] || { x: 0, y: 0 };
      nodes.push({ cmd: 'L', x: sx(tokens[i]), y: prev.y });
      i += 1;
    } else if (cmd === 'V' || cmd === 'v') {
      if (i >= tokens.length) break;
      const prev = nodes[nodes.length - 1] || { x: 0, y: 0 };
      nodes.push({ cmd: 'L', x: prev.x, y: sx(tokens[i]) });
      i += 1;
    } else {
      i += 1;
    }
  }
  return nodes;
};

/** Parse an SVG document string into viewBox size + path layers (real vectors). */
const parseSvgDocument = (svgstr) => {
  if (!svgstr) return null;
  try {
    const doc = new DOMParser().parseFromString(svgstr, 'image/svg+xml');
    const svgEl = doc.querySelector('svg');
    if (!svgEl) return null;
    const vb = (svgEl.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
    const width = (vb.length === 4 && vb[2]) || parseFloat(svgEl.getAttribute('width')) || 0;
    const height = (vb.length === 4 && vb[3]) || parseFloat(svgEl.getAttribute('height')) || 0;
    const paths = [...svgEl.querySelectorAll('path')].map((p) => ({
      d: p.getAttribute('d') || '',
      fill: p.getAttribute('fill') || '#000000',
      stroke: p.getAttribute('stroke') || 'none',
      strokeWidth: parseFloat(p.getAttribute('stroke-width') || '0') || 0,
      fillRule: p.getAttribute('fill-rule') || p.getAttribute('fillRule') || 'evenodd',
    })).filter((p) => {
      if (!p.d) return false;
      // Drop full-page white / near-white paper fills from tracer
      const f = (p.fill || '').toLowerCase();
      if (f === '#fff' || f === '#ffffff' || f === 'white' || f === 'rgb(255,255,255)') return false;
      if (/^#f{3,6}$/i.test(f)) return false;
      return true;
    });
    return { width, height, paths, svg: svgstr };
  } catch {
    return null;
  }
};

/** Color-faithful CAD trace — keep greys/teals/blues, sharp corners, more detail. */
const SVGAI_TRACE_OPTS = {
  ltres: 0.8,
  qtres: 0.8,
  pathomit: 2,
  rightangleenhance: true,
  colorsampling: 2,
  numberofcolors: 32,
  mincolorratio: 0.004,
  colorquantcycles: 4,
  layering: 0,
  strokewidth: 0,
  linefilter: false,
  scale: 1,
  roundcoords: 1,
  viewbox: true,
  desc: false,
  blurradius: 0,
  blurdelta: 10,
};

const imageToSvgPromise = (dataUrl, options = SVGAI_TRACE_OPTS) =>
  new Promise((resolve, reject) => {
    try {
      ImageTracer.imageToSVG(dataUrl, (svgstr) => {
        if (!svgstr) reject(new Error('Vectorize failed'));
        else resolve(svgstr);
      }, options);
    } catch (err) {
      reject(err);
    }
  });


/** Douglas–Peucker on a polyline of {x,y} points. */
const simplifyPoints = (pts, epsilon) => {
  if (pts.length <= 2) return pts;
  let maxDist = 0;
  let idx = 0;
  const a = pts[0];
  const b = pts[pts.length - 1];
  const den = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const dist = Math.abs((b.y - a.y) * p.x - (b.x - a.x) * p.y + b.x * a.y - b.y * a.x) / den;
    if (dist > maxDist) {
      maxDist = dist;
      idx = i;
    }
  }
  if (maxDist > epsilon) {
    const left = simplifyPoints(pts.slice(0, idx + 1), epsilon);
    const right = simplifyPoints(pts.slice(idx), epsilon);
    return left.slice(0, -1).concat(right);
  }
  return [a, b];
};

/** Collapse dense M/L contours into editable corner segments (keeps Q as-is). */
const simplifyPathNodes = (nodes, epsilon = 3) => {
  if (!nodes?.length) return [];
  const out = [];
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    const simplified = simplifyPoints(buf, epsilon);
    simplified.forEach((p, i) => {
      out.push({ cmd: i === 0 ? (buf[0].startCmd || 'M') : 'L', x: p.x, y: p.y });
    });
    buf = [];
  };
  for (const n of nodes) {
    if (n.cmd === 'Z') {
      flush();
      out.push({ cmd: 'Z' });
    } else if (n.cmd === 'Q') {
      flush();
      out.push({ ...n });
    } else if (n.x != null) {
      if (!buf.length) buf.push({ x: n.x, y: n.y, startCmd: n.cmd === 'M' ? 'M' : 'L' });
      else buf.push({ x: n.x, y: n.y });
    }
  }
  flush();
  return out;
};

/** Segments between consecutive corners — each has start, end, and mid (curve handle). */
const getPathSegments = (nodes) => {
  const segs = [];
  if (!nodes?.length) return segs;
  let prev = null;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.cmd === 'Z') {
      prev = null;
      continue;
    }
    if (n.x == null) continue;
    if (n.cmd === 'M') {
      prev = { index: i, x: n.x, y: n.y };
      continue;
    }
    if (prev) {
      const isCurve = n.cmd === 'Q' && n.cx != null;
      segs.push({
        startIndex: prev.index,
        endIndex: i,
        start: { x: prev.x, y: prev.y },
        end: { x: n.x, y: n.y },
        mid: isCurve
          ? { x: n.cx, y: n.cy, isControl: true }
          : { x: (prev.x + n.x) / 2, y: (prev.y + n.y) / 2, isControl: false },
      });
    }
    prev = { index: i, x: n.x, y: n.y };
  }
  return segs;
};

const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

function App() {
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [elements, setElements] = useState([]);
  
  const [currentElement, setCurrentElement] = useState(null);
  const [tool, setTool] = useState('line'); // 'select', 'freehand', 'line', 'bezier', 'eraser', 'fill'
  const [color, setColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [strokeLinecap, setStrokeLinecap] = useState('round');
  const [strokeLinejoin, setStrokeLinejoin] = useState('round');
  const [opacity, setOpacity] = useState(100);
  const [theme, setTheme] = useState(() => localStorage.getItem('svgenius_theme') || 'light');
  const [inspectorTab, setInspectorTab] = useState('properties'); // properties | layers | assets | vectorize
  
  const [selectedId, setSelectedId] = useState(null);
  const [editingNodeId, setEditingNodeId] = useState(null); // ID of path in node edit mode
  const [artworkMenuId, setArtworkMenuId] = useState(null);
  const [editingLayerIndex, setEditingLayerIndex] = useState(null);
  const [editingSegmentIndex, setEditingSegmentIndex] = useState(null);
  const [draggingPoint, setDraggingPoint] = useState(null);
  const [clickStartPoint, setClickStartPoint] = useState(null);
  
  // Export Settings State
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [docTitle, setDocTitle] = useState("My SVG Artwork");
  const [docDesc, setDocDesc] = useState("Created with CAD Sketcher");
  const [docAnimate, setDocAnimate] = useState("none");
  const [traceMode, setTraceMode] = useState("outline"); // "outline" or "centerline"
  const [removeBg, setRemoveBg] = useState(true);
  const [isConverting, setIsConverting] = useState(false);
  const [convertStats, setConvertStats] = useState(null); // { pathCount, width, height, name }
  const [isDragOver, setIsDragOver] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [snapGuides, setSnapGuides] = useState([]);
  const [isDrawingFreehand, setIsDrawingFreehand] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const svgRef = useRef(null);
  const elementsRef = useRef(elements);
  const artworkBitmapsRef = useRef(new Map()); // id -> canvas for pixel eraser
  const eraserDirtyRef = useRef(false);
  const erasePreviewRafRef = useRef(null);
  const erasePreviewIdsRef = useRef(new Set());
  useEffect(() => { elementsRef.current = elements; }, [elements]);

  const primeArtworkBitmap = (id, src, sw, sh, onReady) => {
    if (!src || !id) return;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(sw || img.naturalWidth || 1));
      c.height = Math.max(1, Math.round(sh || img.naturalHeight || 1));
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0, c.width, c.height);
      artworkBitmapsRef.current.set(id, c);
      onReady?.(c);
    };
    img.src = src;
  };

  const applyEraseCanvases = (prev, ids) => {
    if (!ids.length) return prev;
    let changed = false;
    const next = prev.map((el) => {
      if (!ids.includes(el.id) || el.type !== 'tracedArtwork') return el;
      const canvas = artworkBitmapsRef.current.get(el.id);
      if (!canvas) return el;
      changed = true;
      return {
        ...el,
        imageSrc: canvas.toDataURL('image/png'),
        rasterEdited: true,
        svgString: null,
      };
    });
    return changed ? next : prev;
  };

  const flushErasePreview = () => {
    erasePreviewRafRef.current = null;
    const ids = [...erasePreviewIdsRef.current];
    erasePreviewIdsRef.current.clear();
    if (!ids.length) return;
    setElements((prev) => {
      const next = applyEraseCanvases(prev, ids);
      if (next !== prev) {
        eraserDirtyRef.current = true;
        elementsRef.current = next;
      }
      return next;
    });
  };

  const scheduleErasePreview = (id) => {
    erasePreviewIdsRef.current.add(id);
    eraserDirtyRef.current = true;
    if (erasePreviewRafRef.current == null) {
      erasePreviewRafRef.current = requestAnimationFrame(flushErasePreview);
    }
  };

  /** Erase converted CAD drawing (pixel brush) + vector nodes near cursor. */
  const eraseAtWorldPos = (pos) => {
    const radius = Math.max(8, strokeWidth * 3);

    // Pixel-erase canvases immediately; sync imageSrc via rAF
    elementsRef.current.forEach((el) => {
      if (el.type !== 'tracedArtwork' || !el.imageSrc || el.showVectors) return;
      const ox = el.pos?.x || 0;
      const oy = el.pos?.y || 0;
      const lx = pos.x - ox;
      const ly = pos.y - oy;
      const hit =
        lx >= -radius &&
        ly >= -radius &&
        lx <= (el.width || 0) + radius &&
        ly <= (el.height || 0) + radius;
      if (!hit) return;
      const canvas = artworkBitmapsRef.current.get(el.id);
      if (!canvas) return;
      const scaleX = canvas.width / (el.width || 1);
      const scaleY = canvas.height / (el.height || 1);
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(lx * scaleX, ly * scaleY, radius * Math.max(scaleX, scaleY), 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      scheduleErasePreview(el.id);
    });

    // Vector paths + freehand / line / bezier
    setElements((prev) => {
      let changed = false;
      const next = prev.map((el) => {
        if (el.type === 'tracedArtwork') {
          if (!(el.showVectors || el.hasEdits || !el.imageSrc) || !(el.layers || []).length) return el;
          const ox = el.pos?.x || 0;
          const oy = el.pos?.y || 0;
          const lx = pos.x - ox;
          const ly = pos.y - oy;
          const hit =
            lx >= -radius &&
            ly >= -radius &&
            lx <= (el.width || 0) + radius &&
            ly <= (el.height || 0) + radius;
          if (!hit) return el;

          let artChanged = false;
          const layers = el.layers.map((layer) => {
            const nodes = layer.nodes || [];
            if (!nodes.length) return layer;
            let layerChanged = false;
            const filtered = [];
            for (let i = 0; i < nodes.length; i++) {
              const n = nodes[i];
              if (n.cmd === 'Z' || n.x == null) {
                filtered.push(n);
                continue;
              }
              const d = Math.hypot(n.x + ox - pos.x, n.y + oy - pos.y);
              if (d <= radius) {
                layerChanged = true;
                continue;
              }
              filtered.push(n);
            }
            if (!layerChanged) return layer;
            artChanged = true;
            const cleaned = [];
            let needM = true;
            for (const n of filtered) {
              if (n.cmd === 'Z') {
                if (cleaned.length && cleaned[cleaned.length - 1].cmd !== 'Z') cleaned.push({ cmd: 'Z' });
                needM = true;
                continue;
              }
              if (needM) {
                cleaned.push({ ...n, cmd: 'M' });
                needM = false;
              } else {
                cleaned.push({ ...n, cmd: n.cmd === 'M' ? 'L' : n.cmd });
              }
            }
            return { ...layer, nodes: cleaned, d: null };
          }).filter((layer) => (layer.nodes || []).some((n) => n.x != null));

          if (!artChanged) return el;
          changed = true;
          return {
            ...el,
            layers,
            hasEdits: true,
            showVectors: true,
            svgString: null,
          };
        }

        if (el.type === 'freehand') {
          const hit = el.points.some((p) => Math.hypot(p.x - pos.x, p.y - pos.y) < radius);
          if (hit) {
            changed = true;
            return null;
          }
          return el;
        }

        if (el.type === 'line' || el.type === 'bezier') {
          const d1 = Math.hypot(el.p1.x - pos.x, el.p1.y - pos.y);
          const d2 = Math.hypot(el.p2.x - pos.x, el.p2.y - pos.y);
          const cp = el.cp || { x: (el.p1.x + el.p2.x) / 2, y: (el.p1.y + el.p2.y) / 2 };
          const d3 = Math.hypot(cp.x - pos.x, cp.y - pos.y);
          if (Math.min(d1, d2, d3) <= radius) {
            changed = true;
            return null;
          }
          return el;
        }

        return el;
      }).filter(Boolean);

      if (changed) eraserDirtyRef.current = true;
      return changed ? next : prev;
    });
  };

  // Listen for property changes to update selected element
  useEffect(() => {
    if (selectedId && elements.length > 0) {
      setElements(prev => prev.map(el => {
        if (el.id === selectedId) {
          if (el.type === 'tracedPath' || el.type === 'text') {
            return { ...el, fill: color, opacity: opacity / 100 };
          }
          if (el.type === 'freehand' || el.type === 'line' || el.type === 'bezier') {
            return { ...el, color: color, strokeWidth: strokeWidth, strokeLinecap, strokeLinejoin, opacity: opacity / 100 };
          }
        }
        return el;
      }));
    }
  }, [color, strokeWidth, strokeLinecap, strokeLinejoin, opacity, selectedId]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('svgenius_theme', theme);
  }, [theme]);

  const commitElements = (newElements) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newElements);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setElements(newElements);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
      setSelectedId(null);
      setClickStartPoint(null);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
      setSelectedId(null);
      setClickStartPoint(null);
    }
  };

  const calculateSnap = (rawX, rawY) => {
    let x = rawX;
    let y = rawY;
    let activeGuides = [];

    if (tool === 'line' || tool === 'bezier') {
      let snappedX = false;
      let snappedY = false;
      
      const snapPoints = [];
      elements.forEach(el => {
        if (el.p1) snapPoints.push(el.p1);
        if (el.p2) snapPoints.push(el.p2);
      });
      if (clickStartPoint) snapPoints.push(clickStartPoint);

      for (const p of snapPoints) {
        if (!snappedX && Math.abs(x - p.x) < 10) {
          x = p.x;
          snappedX = true;
          activeGuides.push({ type: 'v', x: p.x, y: p.y });
        }
        if (!snappedY && Math.abs(y - p.y) < 10) {
          y = p.y;
          snappedY = true;
          activeGuides.push({ type: 'h', x: p.x, y: p.y });
        }
      }
    }
    return { x, y, activeGuides };
  };

  const getEventPos = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    return {
      rawX: (e.clientX - rect.left - pan.x) / zoom,
      rawY: (e.clientY - rect.top - pan.y) / zoom
    };
  };

  const handlePointerDown = (e) => {
    if (e.button === 1 || e.buttons === 4 || (e.button === 0 && tool === 'pan')) { // Middle click or Hand tool for panning
      setIsPanning(true);
      return;
    }

    const { rawX, rawY } = getEventPos(e);
    let x = rawX, y = rawY;

    if (e.shiftKey && clickStartPoint && (tool === 'line' || tool === 'bezier')) {
      const dx = Math.abs(x - clickStartPoint.x);
      const dy = Math.abs(y - clickStartPoint.y);
      if (dx > dy) y = clickStartPoint.y;
      else x = clickStartPoint.x;
    }

    const snapResult = calculateSnap(x, y);
    const pos = { x: snapResult.x, y: snapResult.y };

    if (tool === 'select') {
      setSelectedId(null);
      setEditingNodeId(null);
      setArtworkMenuId(null);
      setEditingLayerIndex(null);
      return;
    }

    setEditingNodeId(null);
    setArtworkMenuId(null);
    setEditingLayerIndex(null);
    if (tool === 'eraser') {
      elementsRef.current.forEach((el) => {
        if (el.type === 'tracedArtwork' && el.imageSrc && !artworkBitmapsRef.current.has(el.id)) {
          primeArtworkBitmap(el.id, el.imageSrc, el.sourceWidth, el.sourceHeight, () => {
            eraseAtWorldPos(pos);
          });
        }
      });
      eraseAtWorldPos(pos);
      return;
    }

    if (tool === 'line' || tool === 'bezier') {
      if (!clickStartPoint) {
        setClickStartPoint(pos);
      } else {
        const newElement = {
          id: generateId(),
          type: tool,
          color,
          strokeWidth,
          strokeLinecap,
          strokeLinejoin,
          opacity: opacity / 100,
          p1: clickStartPoint,
          p2: pos,
          cp: null
        };
        commitElements([...elements, newElement]);
        setClickStartPoint(null);
        setSnapGuides([]);
      }
      return;
    }

    if (tool === 'fill') {
      performFill(rawX, rawY);
      return;
    }

    if (tool === 'fill') {
      performFill(rawX, rawY);
      return;
    }

    if (tool === 'text') {
      const text = prompt("Enter text:");
      if (text && text.trim()) {
        const newElement = {
          id: generateId(),
          type: 'text',
          pos: { x: rawX, y: rawY },
          text: text.trim(),
          color,
          opacity: opacity / 100,
          fontSize: Math.max(16, strokeWidth * 4) // simple scale with stroke width
        };
        commitElements([...elements, newElement]);
      }
      return;
    }

    if (tool === 'freehand') {
      setIsDrawingFreehand(true);
      setCurrentElement({
        id: generateId(),
        type: 'freehand',
        color,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        opacity: opacity / 100,
        points: [pos],
      });
    }
  };

  const handlePointerMove = (e) => {
    if (isPanning) {
      setPan(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
      return;
    }

    const { rawX, rawY } = getEventPos(e);
    let x = rawX, y = rawY;

    if (e.shiftKey && clickStartPoint && (tool === 'line' || tool === 'bezier')) {
      const dx = Math.abs(x - clickStartPoint.x);
      const dy = Math.abs(y - clickStartPoint.y);
      if (dx > dy) y = clickStartPoint.y;
      else x = clickStartPoint.x;
    }

    if (draggingPoint) {
      setMousePos({ x, y });
      setElements(prev => prev.map(el => {
        if (el.id !== draggingPoint.id) return el;
          if (draggingPoint.type === 'wholeElement') {
            const dx = x - draggingPoint.startX;
            const dy = y - draggingPoint.startY;
            const orig = draggingPoint.originalElement;
            const newEl = { ...orig };
            
            if (orig.type === 'line' || orig.type === 'bezier') {
              newEl.p1 = { x: orig.p1.x + dx, y: orig.p1.y + dy };
              newEl.p2 = { x: orig.p2.x + dx, y: orig.p2.y + dy };
              if (orig.cp) newEl.cp = { x: orig.cp.x + dx, y: orig.cp.y + dy };
            } else if (orig.type === 'freehand') {
              newEl.points = orig.points.map(p => ({ x: p.x + dx, y: p.y + dy }));
            } else if (orig.type === 'text' || orig.type === 'tracedPath' || orig.type === 'tracedArtwork' || orig.type === 'vectorFill' || orig.type === 'vectorImage') {
              newEl.pos = { x: (orig.pos?.x || 0) + dx, y: (orig.pos?.y || 0) + dy };
            }
            return newEl;
          } else if (draggingPoint.type === 'pathNode') {
            if (el.type === 'tracedArtwork') {
              const layers = el.layers.map((layer, li) => {
                if (li !== draggingPoint.layerIndex) return layer;
                const newNodes = [...layer.nodes];
                newNodes[draggingPoint.nodeIndex] = {
                  ...newNodes[draggingPoint.nodeIndex],
                  x: x - (el.pos?.x || 0),
                  y: y - (el.pos?.y || 0),
                };
                return { ...layer, nodes: newNodes };
              });
              return { ...el, layers, hasEdits: true, showVectors: true };
            }
            const newNodes = [...el.nodes];
            newNodes[draggingPoint.nodeIndex] = { 
              ...newNodes[draggingPoint.nodeIndex], 
              x: x - (el.pos?.x || 0), 
              y: y - (el.pos?.y || 0) 
            };
            return { ...el, nodes: newNodes };
          } else if (draggingPoint.type === 'pathMidpoint') {
            const lx = x - (el.pos?.x || 0);
            const ly = y - (el.pos?.y || 0);
            if (el.type === 'tracedArtwork') {
              const layers = el.layers.map((layer, li) => {
                if (li !== draggingPoint.layerIndex) return layer;
                const newNodes = [...layer.nodes];
                const end = newNodes[draggingPoint.endIndex];
                if (!end) return layer;
                newNodes[draggingPoint.endIndex] = {
                  ...end,
                  cmd: 'Q',
                  cx: lx,
                  cy: ly,
                  x: end.x,
                  y: end.y,
                };
                return { ...layer, nodes: newNodes };
              });
              return { ...el, layers, hasEdits: true, showVectors: true };
            }
            if (el.nodes) {
              const newNodes = [...el.nodes];
              const end = newNodes[draggingPoint.endIndex];
              if (end) {
                newNodes[draggingPoint.endIndex] = {
                  ...end,
                  cmd: 'Q',
                  cx: lx,
                  cy: ly,
                  x: end.x,
                  y: end.y,
                };
              }
              return { ...el, nodes: newNodes };
            }
            return el;
          } else if (draggingPoint.type === 'pathControlPoint') {
            if (el.type === 'tracedArtwork') {
              const layers = el.layers.map((layer, li) => {
                if (li !== draggingPoint.layerIndex) return layer;
                const newNodes = [...layer.nodes];
                newNodes[draggingPoint.nodeIndex] = {
                  ...newNodes[draggingPoint.nodeIndex],
                  cx: x - (el.pos?.x || 0),
                  cy: y - (el.pos?.y || 0),
                };
                return { ...layer, nodes: newNodes };
              });
              return { ...el, layers, hasEdits: true, showVectors: true };
            }
            const newNodes = [...el.nodes];
            newNodes[draggingPoint.nodeIndex] = { 
              ...newNodes[draggingPoint.nodeIndex], 
              cx: x - (el.pos?.x || 0), 
              cy: y - (el.pos?.y || 0) 
            };
            return { ...el, nodes: newNodes };
          } else {
            return { ...el, [draggingPoint.type]: { x, y } };
          }
      }));
      return;
    }

    const snapResult = calculateSnap(x, y);
    setMousePos({ x: snapResult.x, y: snapResult.y });
    setSnapGuides(snapResult.activeGuides);

    if (tool === 'eraser' && e.buttons === 1) {
      const pos = { x: snapResult.x, y: snapResult.y };
      eraseAtWorldPos(pos);
      return;
    }

    if (isDrawingFreehand && currentElement) {
      setCurrentElement(prev => ({
        ...prev,
        points: [...prev.points, { x: snapResult.x, y: snapResult.y }]
      }));
    }
  };

  const handlePointerUp = (e) => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }

    if (draggingPoint) {
      // Use latest elements (avoid stale closure — edits were lost on pointer up)
      commitElements(elementsRef.current);
      setDraggingPoint(null);
      return;
    }

    if (isDrawingFreehand && currentElement) {
      commitElements([...elements, currentElement]);
      setCurrentElement(null);
      setIsDrawingFreehand(false);
    } else if (tool === 'eraser') {
      if (erasePreviewRafRef.current != null) {
        cancelAnimationFrame(erasePreviewRafRef.current);
        erasePreviewRafRef.current = null;
      }
      const pendingIds = [...erasePreviewIdsRef.current];
      erasePreviewIdsRef.current.clear();
      let next = elementsRef.current;
      if (pendingIds.length) {
        next = applyEraseCanvases(next, pendingIds);
        elementsRef.current = next;
        setElements(next);
      }
      if (eraserDirtyRef.current) {
        commitElements(next);
        eraserDirtyRef.current = false;
      }
    }
  };

  const getElementsBoundingBox = () => {
    if (elements.length === 0) return { minX: 0, minY: 0, width: 100, height: 100 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    elements.forEach(el => {
      if (el.type === 'line' || el.type === 'bezier') {
        const pts = [el.p1, el.p2];
        if (el.cp) pts.push(el.cp);
        pts.forEach(p => {
          if (p) {
            if (p.x < minX) minX = p.x;
            if (p.x > maxX) maxX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.y > maxY) maxY = p.y;
          }
        });
      } else if (el.type === 'freehand') {
        el.points.forEach(p => {
          if (p.x < minX) minX = p.x;
          if (p.x > maxX) maxX = p.x;
          if (p.y < minY) minY = p.y;
          if (p.y > maxY) maxY = p.y;
        });
      } else if (el.type === 'vectorImage' || el.type === 'vectorFill' || el.type === 'tracedPath' || el.type === 'tracedArtwork') {
        const ew = el.width || el.w || 0;
        const eh = el.height || el.h || 0;
        if (el.pos.x < minX) minX = el.pos.x;
        if (el.pos.x + ew > maxX) maxX = el.pos.x + ew;
        if (el.pos.y < minY) minY = el.pos.y;
        if (el.pos.y + eh > maxY) maxY = el.pos.y + eh;
      } else if (el.type === 'text') {
        const tw = el.text.length * el.fontSize * 0.6;
        const th = el.fontSize;
        if (el.pos.x < minX) minX = el.pos.x;
        if (el.pos.x + tw > maxX) maxX = el.pos.x + tw;
        if (el.pos.y - th < minY) minY = el.pos.y - th;
        if (el.pos.y + (th * 0.2) > maxY) maxY = el.pos.y + (th * 0.2);
      }
    });
    
    if (minX === Infinity) return { minX: 0, minY: 0, width: 100, height: 100 };
    
    const padding = 15;
    return { 
      minX: minX - padding, 
      minY: minY - padding, 
      width: (maxX - minX) + padding * 2, 
      height: (maxY - minY) + padding * 2 
    };
  };

  const handleAlign = (type) => {
    if (!selectedId || elements.length === 0) return;
    
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;

    let elMinX = Infinity, elMinY = Infinity, elMaxX = -Infinity, elMaxY = -Infinity;
    if (el.type === 'line' || el.type === 'bezier') {
      const pts = [el.p1, el.p2];
      if (el.cp) pts.push(el.cp);
      pts.forEach(p => { if (p) { elMinX = Math.min(elMinX, p.x); elMaxX = Math.max(elMaxX, p.x); elMinY = Math.min(elMinY, p.y); elMaxY = Math.max(elMaxY, p.y); } });
    } else if (el.type === 'freehand') {
      el.points.forEach(p => { elMinX = Math.min(elMinX, p.x); elMaxX = Math.max(elMaxX, p.x); elMinY = Math.min(elMinY, p.y); elMaxY = Math.max(elMaxY, p.y); });
    } else if (['vectorImage', 'vectorFill', 'tracedPath', 'tracedArtwork'].includes(el.type)) {
      const ew = el.width || el.w || 0;
      const eh = el.height || el.h || 0;
      elMinX = el.pos.x; elMaxX = el.pos.x + ew;
      elMinY = el.pos.y; elMaxY = el.pos.y + eh;
    } else if (el.type === 'text') {
      const tw = el.text.length * el.fontSize * 0.6;
      const th = el.fontSize;
      elMinX = el.pos.x; elMaxX = el.pos.x + tw;
      elMinY = el.pos.y - th; elMaxY = el.pos.y + (th * 0.2);
    }
    
    if (elMinX === Infinity) return;
    const elWidth = elMaxX - elMinX;
    const elHeight = elMaxY - elMinY;

    // Viewport coordinates
    const vpMinX = -pan.x / zoom;
    const vpMinY = -pan.y / zoom;
    const vpWidth = window.innerWidth / zoom;
    const vpHeight = window.innerHeight / zoom;
    
    let targetX = elMinX;
    let targetY = elMinY;

    switch (type) {
      case 'ph-align-left': targetX = vpMinX; break;
      case 'ph-align-center-horizontal': targetX = vpMinX + vpWidth / 2 - elWidth / 2; break;
      case 'ph-align-right': targetX = vpMinX + vpWidth - elWidth; break;
      case 'ph-align-top': targetY = vpMinY; break;
      case 'ph-align-center-vertical': targetY = vpMinY + vpHeight / 2 - elHeight / 2; break;
      case 'ph-align-bottom': targetY = vpMinY + vpHeight - elHeight; break;
    }

    const dx = targetX - elMinX;
    const dy = targetY - elMinY;
    
    if (dx === 0 && dy === 0) return;

    setElements(prev => prev.map(e => {
      if (e.id !== selectedId) return e;
      const orig = { ...e };
      const newEl = { ...orig };
      if (orig.type === 'line' || orig.type === 'bezier') {
        newEl.p1 = { x: orig.p1.x + dx, y: orig.p1.y + dy };
        newEl.p2 = { x: orig.p2.x + dx, y: orig.p2.y + dy };
        if (orig.cp) newEl.cp = { x: orig.cp.x + dx, y: orig.cp.y + dy };
      } else if (orig.type === 'freehand') {
        newEl.points = orig.points.map(p => ({ x: p.x + dx, y: p.y + dy }));
      } else if (['text', 'tracedPath', 'tracedArtwork', 'vectorFill', 'vectorImage'].includes(orig.type)) {
        newEl.pos = { x: (orig.pos?.x || 0) + dx, y: (orig.pos?.y || 0) + dy };
      }
      return newEl;
    }));
  };

  const generateSvgContent = (forExport = false) => {
    if (!svgRef.current) return '';
    const svgClone = svgRef.current.cloneNode(true);
    const uiElements = svgClone.querySelectorAll('.ui-element');
    uiElements.forEach(el => el.remove());

    if (forExport) {
      const g = svgClone.querySelector('g');
      if (g) g.removeAttribute('transform');
      
      const box = getElementsBoundingBox();
      svgClone.setAttribute('viewBox', `${box.minX} ${box.minY} ${box.width} ${box.height}`);
      svgClone.setAttribute('width', '100%');
      svgClone.setAttribute('height', '100%');
      svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      
      // Inject SEO and Accessibility Metadata
      if (docTitle || docDesc || docAnimate !== 'none') {
        let injectedTags = '';
        if (docTitle) injectedTags += `<title>${docTitle}</title>\n`;
        if (docDesc) injectedTags += `<desc>${docDesc}</desc>\n`;
        
        // Inject CSS Animations if selected
        if (docAnimate !== 'none') {
          let styleContent = '';
          if (docAnimate === 'draw') {
            styleContent = `
              path, line, circle, rect {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 3s ease forwards;
              }
              @keyframes draw { to { stroke-dashoffset: 0; } }
            `;
          } else if (docAnimate === 'pulse') {
            styleContent = `
              g, path {
                transform-origin: center;
                animation: pulse 2s infinite;
              }
              @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
            `;
          } else if (docAnimate === 'spin') {
            styleContent = `
              g, path {
                transform-origin: center;
                animation: spin 4s linear infinite;
              }
              @keyframes spin { 100% { transform: rotate(360deg); } }
            `;
          }
          injectedTags += `<style>${styleContent}</style>\n`;
        }
        
        svgClone.insertAdjacentHTML('afterbegin', injectedTags);
      }
    }
    
    return svgClone.outerHTML;
  };

  const downloadSvg = () => {
    const onlyTraced = elements.length === 1 && elements[0].type === 'tracedArtwork' ? elements[0] : null;
    if (onlyTraced) {
      // Edited paths → export vectors; otherwise clear original image
      const svg = onlyTraced.hasEdits
        ? buildArtworkPathSvg(onlyTraced)
        : (buildArtworkImageSvg(onlyTraced) || buildArtworkPathSvg(onlyTraced));
      if (svg) {
        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = (onlyTraced.fileName || docTitle || 'drawing').replace(/\.[^.]+$/, '').replace(/\s+/g, '_') + '.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return;
      }
    }
    const svgContent = generateSvgContent(true);
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = (docTitle || 'drawing').replace(/\s+/g, '_') + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  /** Raster wrap — fallback only. Prefer real path SVG (svgai.org rule). */
  const buildArtworkImageSvg = (el) => {
    if (!el?.imageSrc) return '';
    const w = Math.round(el.sourceWidth || el.width || 100);
    const h = Math.round(el.sourceHeight || el.height || 100);
    const href = el.imageSrc;
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ` +
      `viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
      `<image href="${href}" xlink:href="${href}" width="${w}" height="${h}" ` +
      `preserveAspectRatio="xMidYMid meet"/>` +
      `</svg>`
    );
  };

  /** Real editable path SVG — W3C Bezier paths, not base64 raster. */
  const buildArtworkPathSvg = (el) => {
    if (!el || el.type !== 'tracedArtwork') return '';
    if (el.svgString && !el.hasEdits) return el.svgString;
    const w = Math.round(el.sourceWidth || el.width || 100);
    const h = Math.round(el.sourceHeight || el.height || 100);
    const sx = el.sourceWidth && el.width ? el.sourceWidth / el.width : 1;
    const sy = el.sourceHeight && el.height ? el.sourceHeight / el.height : 1;
    const scaleNodes = (nodes) => (nodes || []).map(n => {
      const out = { ...n };
      if (n.x != null) out.x = n.x * sx;
      if (n.y != null) out.y = n.y * sy;
      if (n.cx != null) out.cx = n.cx * sx;
      if (n.cy != null) out.cy = n.cy * sy;
      if (n.x1 != null) out.x1 = n.x1 * sx;
      if (n.y1 != null) out.y1 = n.y1 * sy;
      if (n.x2 != null) out.x2 = n.x2 * sx;
      if (n.y2 != null) out.y2 = n.y2 * sy;
      return out;
    });
    const paths = (el.layers || []).map((layer) => {
      const d = el.hasEdits
        ? generateD(scaleNodes(layer.nodes))
        : (layer.d || generateD(scaleNodes(layer.nodes)));
      if (!d) return '';
      const fill = layer.fill || 'none';
      const stroke = layer.stroke || 'none';
      const sw = layer.strokeWidth != null && stroke !== 'none' ? ` stroke-width="${layer.strokeWidth}"` : '';
      const fr = layer.fillRule ? ` fill-rule="${layer.fillRule}"` : '';
      return `<path d="${d}" fill="${fill}" stroke="${stroke}"${sw}${fr}/>`;
    }).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${paths}</svg>`;
  };

  const buildArtworkSvg = (el) => buildArtworkPathSvg(el) || buildArtworkImageSvg(el);

  const downloadArtworkSvg = (el) => {
    // As-is clear CAD (image SVG) unless user edited vector nodes
    const svg = el.hasEdits
      ? buildArtworkPathSvg(el)
      : (buildArtworkImageSvg(el) || buildArtworkPathSvg(el));
    if (!svg) {
      alert('Nothing to download.');
      return;
    }
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const suffix = el.hasEdits ? '_edited' : '';
    link.download = (el.fileName || 'converted').replace(/\.[^.]+$/, '') + suffix + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyJsx = () => {
    let svgContent = generateSvgContent(true);
    const sole = elements.length === 1 && elements[0].type === 'tracedArtwork' ? elements[0] : null;
    if (sole) {
      const built = sole.hasEdits
        ? buildArtworkPathSvg(sole)
        : (buildArtworkImageSvg(sole) || buildArtworkPathSvg(sole));
      if (built) svgContent = built;
    }
    svgContent = svgContent
      .replace(/class=/g, 'className=')
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
      .replace(/stroke-dasharray=/g, 'strokeDasharray=')
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/xlink:href=/g, 'xlinkHref=')
      .replace(/preserveAspectRatio=/g, 'preserveAspectRatio=')
      .replace(/style="([^"]*)"/g, (match, styles) => {
        const obj = {};
        styles.split(';').forEach(s => {
          if (!s.trim()) return;
          const [key, val] = s.split(':');
          if (key && val) {
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            obj[camelKey] = val.trim();
          }
        });
        return `style={${JSON.stringify(obj)}}`;
      });
      
    navigator.clipboard.writeText(svgContent).then(() => {
      alert('JSX code copied to clipboard!');
    }).catch(() => {
      const blob = new Blob([svgContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'drawing.jsx';
      link.click();
    });
  };

  const convertImageFile = async (file) => {
    if (!file) return;
    const allowed = /\.(png|jpe?g|gif|webp|bmp|tiff?)$/i;
    if (!allowed.test(file.name) && !(file.type || '').startsWith('image/')) {
      alert('Unsupported format. Use PNG, JPG, GIF, WebP, BMP, or TIFF.');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      alert('File too large (max 20MB).');
      return;
    }

    setIsConverting(true);
    setConvertStats(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('mode', traceMode);
    formData.append('remove_background', removeBg ? 'true' : 'false');

    try {
      // 1) Backend: strip watermark / prepare CAD pixels
      const response = await fetch('http://localhost:8000/api/trace', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(`Backend error: ${response.statusText}`);
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      // 2) Prefer cleaned_image for sharp as-is canvas display
      const cleanedSrc = data.cleaned_image || await fileToDataUrl(file);
      const probe = new Image();
      await new Promise((resolve, reject) => {
        probe.onload = resolve;
        probe.onerror = reject;
        probe.src = cleanedSrc;
      });
      const srcW = probe.naturalWidth || data.width || 1;
      const srcH = probe.naturalHeight || data.height || 1;
      const artW = svgRef.current?.clientWidth || 850;
      const artH = svgRef.current?.clientHeight || 540;
      const fitScale = Math.min(1, (artW * 0.88) / srcW, (artH * 0.88) / srcH);
      const width = srcW * fitScale;
      const height = srcH * fitScale;
      const centerX = -pan.x / zoom + artW / 2 / zoom;
      const centerY = -pan.y / zoom + artH / 2 / zoom;

      // 3) Prefer backend paths; fallback ImageTracer if empty
      let layers = [];
      let svgString = data.svg || null;
      try {
        if ((data.paths || []).length) {
          const pathW = data.trace_width || data.width || srcW;
          const pathScale = width / pathW;
          layers = data.paths.map((p) => ({
            id: generateId(),
            d: p.d,
            nodes: parsePathD(p.d, pathScale),
            fill: p.fill && p.fill !== 'none' ? p.fill : (p.stroke && p.stroke !== 'none' ? 'none' : '#111111'),
            stroke: p.stroke || 'none',
            strokeWidth: p.strokeWidth ?? (p.stroke && p.stroke !== 'none' ? 1.1 : 0),
            fillRule: p.fillRule || 'evenodd',
          })).filter((l) => l.d);
        } else {
          const traceSrc = data.trace_image || cleanedSrc;
          svgString = await imageToSvgPromise(traceSrc, SVGAI_TRACE_OPTS);
          const parsed = parseSvgDocument(svgString);
          if (parsed?.paths?.length) {
            const pathScale = width / (parsed.width || srcW);
            layers = parsed.paths.map((p) => ({
              id: generateId(),
              d: p.d,
              nodes: parsePathD(p.d, pathScale),
              fill: p.fill && p.fill !== 'none' ? p.fill : (p.stroke && p.stroke !== 'none' ? 'none' : '#111111'),
              stroke: p.stroke || 'none',
              strokeWidth: p.strokeWidth ?? 0,
              fillRule: p.fillRule || 'evenodd',
            })).filter((l) => l.d);
          }
        }
      } catch (traceErr) {
        console.warn('Path trace optional failed, keeping as-is image:', traceErr);
      }

      const artwork = {
        id: generateId(),
        type: 'tracedArtwork',
        pos: { x: centerX - width / 2, y: centerY - height / 2 },
        width,
        height,
        sourceWidth: srcW,
        sourceHeight: srcH,
        imageSrc: cleanedSrc,
        originalImageSrc: cleanedSrc,
        layers,
        svgString,
        fileName: file.name,
        hasEdits: false,
        showVectors: false,
      };

      primeArtworkBitmap(artwork.id, cleanedSrc, srcW, srcH);

      setElements((prev) => {
        const next = [...prev, artwork];
        setHistory((hArr) => {
          const newHistory = hArr.slice(0, historyIndex + 1);
          newHistory.push(next);
          setHistoryIndex(newHistory.length - 1);
          return newHistory;
        });
        return next;
      });
      setSelectedId(artwork.id);
      setArtworkMenuId(null);
      setEditingNodeId(null);
      setTool('select');
      setConvertStats({
        pathCount: layers.length,
        width: srcW,
        height: srcH,
        name: file.name,
        backgroundRemoved: !!data.background_removed,
        quality: data.quality || 'as-is',
        artworkId: artwork.id,
      });
    } catch (error) {
      console.error('Tracing error:', error);
      try {
        const imageSrc = await fileToDataUrl(file);
        const probe = new Image();
        await new Promise((resolve, reject) => {
          probe.onload = resolve;
          probe.onerror = reject;
          probe.src = imageSrc;
        });
        const artW = svgRef.current?.clientWidth || 850;
        const artH = svgRef.current?.clientHeight || 540;
        const fitScale = Math.min(1, (artW * 0.88) / probe.naturalWidth, (artH * 0.88) / probe.naturalHeight);
        const width = probe.naturalWidth * fitScale;
        const height = probe.naturalHeight * fitScale;
        const centerX = -pan.x / zoom + artW / 2 / zoom;
        const centerY = -pan.y / zoom + artH / 2 / zoom;
        const artwork = {
          id: generateId(),
          type: 'tracedArtwork',
          pos: { x: centerX - width / 2, y: centerY - height / 2 },
          width,
          height,
          sourceWidth: probe.naturalWidth,
          sourceHeight: probe.naturalHeight,
          imageSrc,
          layers: [],
          svgString: null,
          fileName: file.name,
          hasEdits: false,
          showVectors: false,
        };
        primeArtworkBitmap(artwork.id, imageSrc, probe.naturalWidth, probe.naturalHeight);
        setElements((prev) => [...prev, artwork]);
        setSelectedId(artwork.id);
        setTool('select');
        setConvertStats({
          pathCount: 0,
          width: probe.naturalWidth,
          height: probe.naturalHeight,
          name: file.name,
          backgroundRemoved: false,
          quality: 'as-is',
          artworkId: artwork.id,
        });
        alert('Backend clean failed — original image placed. Is the server on :8000?\n' + error.message);
      } catch {
        alert('Error converting image: ' + error.message);
      }
    } finally {
      setIsConverting(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) await convertImageFile(file);
    e.target.value = '';
  };

  const handleConvertDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) await convertImageFile(file);
  };

  const downloadPng = () => {
    const svgContent = generateSvgContent();
    const canvas = document.createElement('canvas');
    const svgNode = svgRef.current;
    
    // We want to export at 1x scale without pan offsets
    canvas.width = svgNode.clientWidth;
    canvas.height = svgNode.clientHeight;
    
    // Replace transform in SVG content before exporting to avoid cutoffs
    const adjustedContent = svgContent.replace(/transform=".*?"/, 'transform="translate(0,0) scale(1)"');
    
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = theme === 'dark' ? '#1e1e1e' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    const svgBlob = new Blob([adjustedContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      
      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = 'drawing.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = url;
  };

  const handleWheel = (e) => {
    // Zoom in/out
    const scaleAdjust = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.1, Math.min(zoom * scaleAdjust, 10));
    
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rawX = (mouseX - pan.x) / zoom;
    const rawY = (mouseY - pan.y) / zoom;
    
    const newPanX = mouseX - rawX * newZoom;
    const newPanY = mouseY - rawY * newZoom;
    
    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  const getCircleFrom3Points = (A, B, C) => {
    // Avoid NaN by checking if points are too close
    if (Math.hypot(B.x - A.x, B.y - A.y) <= 1e-5) return null;
    if (Math.hypot(C.x - B.x, C.y - B.y) <= 1e-5) return null;
    if (Math.hypot(C.x - A.x, C.y - A.y) <= 1e-5) return null;

    // Determinant formula for circumcircle
    const D = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
    
    // If D is very close to 0, points are collinear
    if (Math.abs(D) < 1e-5) return null;

    const A_sq = A.x * A.x + A.y * A.y;
    const B_sq = B.x * B.x + B.y * B.y;
    const C_sq = C.x * C.x + C.y * C.y;

    const cx = (A_sq * (B.y - C.y) + B_sq * (C.y - A.y) + C_sq * (A.y - B.y)) / D;
    const cy = (A_sq * (C.x - B.x) + B_sq * (A.x - C.x) + C_sq * (B.x - A.x)) / D;

    const radius = Math.hypot(cx - A.x, cy - A.y);
    return { cx, cy, r: radius };
  };

  const performFill = (fillX, fillY) => {
    const svgClone = svgRef.current.cloneNode(true);
    const uiElements = svgClone.querySelectorAll('.ui-element');
    uiElements.forEach(el => el.remove());
    
    const rect = svgRef.current.getBoundingClientRect();
    const width = Math.ceil(rect.width / zoom);
    const height = Math.ceil(rect.height / zoom);
    const viewBoxX = -pan.x / zoom;
    const viewBoxY = -pan.y / zoom;
    
    svgClone.setAttribute('viewBox', `${viewBoxX} ${viewBoxY} ${width} ${height}`);
    svgClone.setAttribute('width', width);
    svgClone.setAttribute('height', height);
    const g = svgClone.querySelector('g');
    if (g) g.setAttribute('transform', '');

    const svgString = new XMLSerializer().serializeToString(svgClone);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      
      const targetX = Math.floor(fillX - viewBoxX);
      const targetY = Math.floor(fillY - viewBoxY);
      
      if (targetX < 0 || targetX >= width || targetY < 0 || targetY >= height) return;
      
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      const getPixel = (x, y) => {
        const i = (y * width + x) * 4;
        return [data[i], data[i+1], data[i+2], data[i+3]];
      };
      
      const targetColor = getPixel(targetX, targetY);
      
      const hexToRgba = (hex) => {
        const r = parseInt(hex.slice(1,3), 16);
        const g = parseInt(hex.slice(3,5), 16);
        const b = parseInt(hex.slice(5,7), 16);
        return [r, g, b, 255];
      };
      const fillColorRgba = hexToRgba(color);
      
      const isMatch = (c1, c2) => Math.abs(c1[0]-c2[0])<5 && Math.abs(c1[1]-c2[1])<5 && Math.abs(c1[2]-c2[2])<5 && Math.abs(c1[3]-c2[3])<5;
      if (isMatch(targetColor, fillColorRgba)) return;
      
      const filledPixels = new Uint8Array(width * height);
      const queue = [targetX + targetY * width];
      filledPixels[targetX + targetY * width] = 1;
      
      let minX = targetX, maxX = targetX, minY = targetY, maxY = targetY;
      
      let head = 0;
      while (head < queue.length) {
        const curr = queue[head++];
        const cx = curr % width;
        const cy = Math.floor(curr / width);
        
        const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nidx = ny * width + nx;
            if (!filledPixels[nidx]) {
              const pc = getPixel(nx, ny);
              // Consider background if transparent or matches original background color
              if (pc[3] < 100 || isMatch(pc, targetColor)) { 
                filledPixels[nidx] = 1;
                queue.push(nidx);
                if (nx < minX) minX = nx;
                if (nx > maxX) maxX = nx;
                if (ny < minY) minY = ny;
                if (ny > maxY) maxY = ny;
              }
            }
          }
        }
      }
      
      if (queue.length === 0) return;
      
      const fw = maxX - minX + 1;
      const fh = maxY - minY + 1;
      const outCanvas = document.createElement('canvas');
      outCanvas.width = fw;
      outCanvas.height = fh;
      const outCtx = outCanvas.getContext('2d');
      const outImgData = outCtx.createImageData(fw, fh);
      
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          if (filledPixels[y * width + x]) {
            const idx = ((y - minY) * fw + (x - minX)) * 4;
            outImgData.data[idx] = fillColorRgba[0];
            outImgData.data[idx+1] = fillColorRgba[1];
            outImgData.data[idx+2] = fillColorRgba[2];
            outImgData.data[idx+3] = 255;
          }
        }
      }
      outCtx.putImageData(outImgData, 0, 0);
      
      const dataUrl = outCanvas.toDataURL();
      ImageTracer.imageToSVG(dataUrl, (svgstr) => {
        let innerPaths = svgstr.substring(svgstr.indexOf('>', svgstr.indexOf('<svg')) + 1);
        innerPaths = innerPaths.replace('</svg>', '');
        
        const newElement = {
          id: generateId(),
          type: 'vectorFill',
          pos: { x: minX + viewBoxX, y: minY + viewBoxY },
          width: fw,
          height: fh,
          svgString: innerPaths
        };
        
        setElements(prev => {
          const next = [...prev, newElement];
          setHistory(h => {
            const newHistory = h.slice(0, historyIndex + 1);
            newHistory.push(next);
            setHistoryIndex(newHistory.length - 1);
            return newHistory;
          });
          return next;
        });
      }, { ltres: 1, qtres: 1, scale: 1, numberofcolors: 2 });
    };
    img.src = url;
  };

  const getPathData = (el) => {
    if (!el.cp) return `M ${el.p1.x} ${el.p1.y} L ${el.p2.x} ${el.p2.y}`;
    
    if (el.type === 'bezier') {
      // Adjusted control point so the curve passes exactly through the user's dragged cp dot
      const cpX = 2 * el.cp.x - 0.5 * el.p1.x - 0.5 * el.p2.x;
      const cpY = 2 * el.cp.y - 0.5 * el.p1.y - 0.5 * el.p2.y;
      return `M ${el.p1.x} ${el.p1.y} Q ${cpX} ${cpY} ${el.p2.x} ${el.p2.y}`;
    }
    
    if (el.type === 'line') {
      const circle = getCircleFrom3Points(el.p1, el.p2, el.cp);
      if (!circle || isNaN(circle.r) || circle.r > 20000) {
        return `M ${el.p1.x} ${el.p1.y} L ${el.p2.x} ${el.p2.y}`;
      }
      
      const cross = (el.p2.x - el.p1.x)*(el.cp.y - el.p1.y) - (el.p2.y - el.p1.y)*(el.cp.x - el.p1.x);
      const sweep = cross > 0 ? 1 : 0;
      
      const v1 = { x: el.p1.x - el.cp.x, y: el.p1.y - el.cp.y };
      const v2 = { x: el.p2.x - el.cp.x, y: el.p2.y - el.cp.y };
      const dot = v1.x*v2.x + v1.y*v2.y;
      const largeArc = dot > 0 ? 1 : 0;
      
      return `M ${el.p1.x} ${el.p1.y} A ${circle.r} ${circle.r} 0 ${largeArc} ${sweep} ${el.p2.x} ${el.p2.y}`;
    }
    return '';
  };

  const renderElement = (el) => {
    if (!el) return null;
    const isSelected = selectedId === el.id;

    const selectEl = (e) => {
      if (tool !== 'select') return;
      e.stopPropagation();
      setSelectedId(el.id);
      if (el.type === 'tracedArtwork' && editingNodeId === el.id) {
        return;
      }
      const { rawX, rawY } = getEventPos(e);
      setDraggingPoint({ id: el.id, type: 'wholeElement', startX: rawX, startY: rawY, originalElement: el });
    };

    if (el.type === 'text') {
      return (
        <text
          key={el.id}
          x={el.pos.x}
          y={el.pos.y}
          fill={el.fill || el.color || color}
          opacity={el.opacity ?? (opacity / 100)}
          fontSize={el.fontSize || 16}
          style={{ cursor: tool === 'select' ? 'move' : 'inherit' }}
          stroke={isSelected ? '#7C3AED' : 'none'}
          strokeWidth={isSelected ? 0.8 : 0}
          onPointerDown={selectEl}
        >
          {el.text}
        </text>
      );
    }

    if (el.type === 'freehand') {
      const d = (el.points || []).map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
      return (
        <path
          key={el.id}
          d={d}
          fill="none"
          stroke={el.color || color}
          strokeWidth={el.strokeWidth || strokeWidth}
          strokeLinecap={el.strokeLinecap || strokeLinecap}
          strokeLinejoin={el.strokeLinejoin || strokeLinejoin}
          opacity={el.opacity ?? (opacity / 100)}
          style={{ cursor: tool === 'select' ? 'move' : 'inherit' }}
          onPointerDown={selectEl}
        />
      );
    }

    if (el.type === 'line' || el.type === 'bezier') {
      return (
        <path
          key={el.id}
          d={getPathData(el)}
          fill="none"
          stroke={el.color || color}
          strokeWidth={el.strokeWidth || strokeWidth}
          strokeLinecap={el.strokeLinecap || strokeLinecap}
          strokeLinejoin={el.strokeLinejoin || strokeLinejoin}
          opacity={el.opacity ?? (opacity / 100)}
          style={{ cursor: tool === 'select' ? 'move' : 'inherit' }}
          onPointerDown={selectEl}
        />
      );
    }

    if (el.type === 'tracedPath') {
      return (
        <g
          key={el.id}
          transform={`translate(${el.pos?.x || 0}, ${el.pos?.y || 0})`}
          opacity={el.opacity ?? (opacity / 100)}
          style={{ cursor: tool === 'select' ? 'move' : 'inherit' }}
          onPointerDown={selectEl}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setSelectedId(el.id);
            setEditingNodeId(el.id);
          }}
        >
          <path
            d={generateD(el.nodes)}
            fill={el.fill && el.fill !== 'none' ? el.fill : 'none'}
            fillRule={el.fillRule || 'evenodd'}
            stroke={el.stroke && el.stroke !== 'none' ? el.stroke : (el.fill && el.fill !== 'none' ? 'none' : (el.color || color))}
            strokeWidth={el.stroke && el.stroke !== 'none' ? (el.strokeWidth || 1) : 0}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    }

    if (el.type === 'tracedArtwork') {
      const editing = editingNodeId === el.id;
      const showPaths = editing || el.hasEdits || el.showVectors;
      const showImage = !!el.imageSrc && !el.hasEdits && !el.showVectors && !editing;
      const sw = el.sourceWidth || el.width || 1;
      const sh = el.sourceHeight || el.height || 1;
      const pickNearest = (e) => {
        e.stopPropagation();
        const { rawX, rawY } = getEventPos(e);
        const lx = rawX - (el.pos?.x || 0);
        const ly = rawY - (el.pos?.y || 0);
        let best = null;
        (el.layers || []).forEach((layer, li) => {
          const segs = getPathSegments(layer.nodes);
          segs.forEach((seg, si) => {
            const dStart = Math.hypot(seg.start.x - lx, seg.start.y - ly);
            const dEnd = Math.hypot(seg.end.x - lx, seg.end.y - ly);
            const dMid = Math.hypot(seg.mid.x - lx, seg.mid.y - ly);
            const dx = seg.end.x - seg.start.x;
            const dy = seg.end.y - seg.start.y;
            const len2 = dx * dx + dy * dy || 1;
            let t = ((lx - seg.start.x) * dx + (ly - seg.start.y) * dy) / len2;
            t = Math.max(0, Math.min(1, t));
            const dLine = Math.hypot(seg.start.x + t * dx - lx, seg.start.y + t * dy - ly);
            const dist = Math.min(dStart, dEnd, dMid, dLine);
            if (!best || dist < best.dist) {
              best = { li, si, seg, dist, dStart, dEnd, dMid };
            }
          });
        });
        if (!best) return;
        setSelectedId(el.id);
        setEditingLayerIndex(best.li);
        setEditingSegmentIndex(best.si);
        const hit = 16 / zoom;
        if (best.dMid <= hit) {
          setDraggingPoint({
            id: el.id,
            type: 'pathMidpoint',
            layerIndex: best.li,
            endIndex: best.seg.endIndex,
            startIndex: best.seg.startIndex,
          });
        } else if (best.dStart <= hit) {
          setDraggingPoint({ id: el.id, type: 'pathNode', layerIndex: best.li, nodeIndex: best.seg.startIndex });
        } else if (best.dEnd <= hit) {
          setDraggingPoint({ id: el.id, type: 'pathNode', layerIndex: best.li, nodeIndex: best.seg.endIndex });
        }
      };
      return (
        <g
          key={el.id}
          transform={`translate(${el.pos?.x || 0}, ${el.pos?.y || 0})`}
          opacity={el.opacity ?? (opacity / 100)}
          style={{ cursor: editing ? 'crosshair' : (tool === 'select' ? 'move' : 'inherit') }}
          onPointerDown={editing ? pickNearest : selectEl}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setSelectedId(el.id);
          }}
        >
          {showImage && (
            <image
              href={el.imageSrc}
              x={0}
              y={0}
              width={el.width}
              height={el.height}
              preserveAspectRatio="xMidYMid meet"
              style={{ imageRendering: 'auto', pointerEvents: 'none' }}
            />
          )}
          {showPaths && !editing && !el.hasEdits && (
            <svg
              width={el.width}
              height={el.height}
              viewBox={`0 0 ${sw} ${sh}`}
              overflow="visible"
              style={{ pointerEvents: 'none' }}
            >
              {(el.layers || []).map((layer, li) => (
                <path
                  key={`vec-layer-${li}`}
                  d={layer.d || generateD(layer.nodes)}
                  fill={layer.fill || 'none'}
                  fillRule={layer.fillRule || 'evenodd'}
                  stroke={layer.stroke && layer.stroke !== 'none' ? layer.stroke : 'none'}
                  strokeWidth={layer.strokeWidth || 0}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  shapeRendering="geometricPrecision"
                />
              ))}
            </svg>
          )}
          {showPaths && !editing && el.hasEdits && (el.layers || []).map((layer, li) => (
            <path
              key={`edited-layer-${li}`}
              d={generateD(layer.nodes)}
              fill={layer.fill || 'none'}
              fillRule={layer.fillRule || 'evenodd'}
              stroke={layer.stroke && layer.stroke !== 'none' ? layer.stroke : 'none'}
              strokeWidth={layer.strokeWidth || 0}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              shapeRendering="geometricPrecision"
            />
          ))}
          {editing && (el.layers || []).map((layer, li) => (
            <path
              key={`edit-layer-${li}`}
              d={generateD(layer.nodes)}
              fill="none"
              fillRule={layer.fillRule || 'evenodd'}
              stroke={li === editingLayerIndex ? '#7C3AED' : '#C4B5FD'}
              strokeWidth={(li === editingLayerIndex ? 1.8 : 1.1) / zoom}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              className="ui-element pointer-events-none"
            />
          ))}
          <rect
            x={0}
            y={0}
            width={el.width}
            height={el.height}
            fill="transparent"
            className="ui-element"
          />
          {isSelected && !editing && (
            <rect
              x={0}
              y={0}
              width={el.width}
              height={el.height}
              fill="none"
              stroke="#7C3AED"
              strokeWidth={1 / zoom}
              strokeDasharray="4 3"
              className="ui-element pointer-events-none"
            />
          )}
        </g>
      );
    }

    if (el.type === 'vectorFill' || el.type === 'vectorImage') {
      return (
        <g
          key={el.id}
          transform={`translate(${el.pos?.x || 0}, ${el.pos?.y || 0})`}
          opacity={el.opacity ?? (opacity / 100)}
          style={{ cursor: tool === 'select' ? 'move' : 'inherit' }}
          onPointerDown={selectEl}
          dangerouslySetInnerHTML={{ __html: el.svgString || '' }}
        />
      );
    }

    return null;
  };

  const renderControlPoints = () => {
    const editing = elements.find(el => el.id === editingNodeId);
    const selected = elements.find(el => el.id === selectedId);
    const target = editing || selected;
    if (!target) return null;

    const r = 5 / zoom;
    const startDrag = (e, type, extra = {}) => {
      e.stopPropagation();
      setSelectedId(target.id);
      setDraggingPoint({ id: target.id, type, ...extra });
    };

    if ((target.type === 'line' || target.type === 'bezier') && selectedId === target.id) {
      const mid = (!target.cp && target.p1 && target.p2)
        ? { x: (target.p1.x + target.p2.x) / 2, y: (target.p1.y + target.p2.y) / 2 }
        : null;
      const handles = [
        { key: 'p1', p: target.p1 },
        { key: 'p2', p: target.p2 },
        { key: 'cp', p: target.cp || mid }
      ].filter(h => h.p);

      return (
        <g className="ui-element">
          {target.cp && (
            <>
              <line x1={target.p1.x} y1={target.p1.y} x2={target.cp.x} y2={target.cp.y} stroke="#7C3AED" strokeWidth={1 / zoom} strokeDasharray="4 2" />
              <line x1={target.p2.x} y1={target.p2.y} x2={target.cp.x} y2={target.cp.y} stroke="#7C3AED" strokeWidth={1 / zoom} strokeDasharray="4 2" />
            </>
          )}
          {handles.map(({ key, p }) => (
            <circle
              key={key}
              cx={p.x}
              cy={p.y}
              r={r}
              fill={key === 'cp' ? '#7C3AED' : '#FFFFFF'}
              stroke={key === 'cp' ? '#FFFFFF' : '#475569'}
              strokeWidth={2 / zoom}
              style={{ cursor: 'move' }}
              onPointerDown={(e) => startDrag(e, key)}
            />
          ))}
        </g>
      );
    }

    if (target.type === 'tracedArtwork' && editingNodeId === target.id) {
      if (editingLayerIndex == null || !target.layers?.[editingLayerIndex]) return null;
      const ox = target.pos?.x || 0;
      const oy = target.pos?.y || 0;
      const layer = target.layers[editingLayerIndex];
      const segs = getPathSegments(layer.nodes);
      if (!segs.length) return null;
      const cornerR = 5 / zoom;
      const midR = 4 / zoom;
      const activeR = 6 / zoom;
      // Show start / mid / end on every segment of the active layer
      return (
        <g className="ui-element">
          {segs.map((seg, si) => {
            const active = si === (editingSegmentIndex ?? 0);
            const cr = active ? activeR : cornerR;
            const mr = active ? activeR - 0.5 / zoom : midR;
            return (
              <g key={`seg-${editingLayerIndex}-${si}`}>
                {active && (
                  <line
                    x1={seg.start.x + ox} y1={seg.start.y + oy}
                    x2={seg.end.x + ox} y2={seg.end.y + oy}
                    stroke="#7C3AED" strokeWidth={2 / zoom} strokeOpacity={0.35}
                    className="pointer-events-none"
                  />
                )}
                {seg.mid.isControl && active && (
                  <>
                    <line x1={seg.start.x + ox} y1={seg.start.y + oy} x2={seg.mid.x + ox} y2={seg.mid.y + oy} stroke="#A78BFA" strokeWidth={1 / zoom} strokeDasharray="4 2" />
                    <line x1={seg.end.x + ox} y1={seg.end.y + oy} x2={seg.mid.x + ox} y2={seg.mid.y + oy} stroke="#A78BFA" strokeWidth={1 / zoom} strokeDasharray="4 2" />
                  </>
                )}
                <circle
                  cx={seg.start.x + ox} cy={seg.start.y + oy} r={cr}
                  fill="#FFFFFF" stroke="#7C3AED" strokeWidth={2 / zoom}
                  style={{ cursor: 'move' }}
                  onPointerDown={(e) => {
                    setEditingSegmentIndex(si);
                    startDrag(e, 'pathNode', { nodeIndex: seg.startIndex, layerIndex: editingLayerIndex });
                  }}
                />
                <circle
                  cx={seg.end.x + ox} cy={seg.end.y + oy} r={cr}
                  fill="#FFFFFF" stroke="#7C3AED" strokeWidth={2 / zoom}
                  style={{ cursor: 'move' }}
                  onPointerDown={(e) => {
                    setEditingSegmentIndex(si);
                    startDrag(e, 'pathNode', { nodeIndex: seg.endIndex, layerIndex: editingLayerIndex });
                  }}
                />
                <circle
                  cx={seg.mid.x + ox} cy={seg.mid.y + oy} r={mr}
                  fill="#7C3AED" stroke="#FFFFFF" strokeWidth={2 / zoom}
                  style={{ cursor: 'move' }}
                  onPointerDown={(e) => {
                    setEditingSegmentIndex(si);
                    startDrag(e, 'pathMidpoint', {
                      layerIndex: editingLayerIndex,
                      endIndex: seg.endIndex,
                      startIndex: seg.startIndex,
                    });
                  }}
                />
              </g>
            );
          })}
        </g>
      );
    }

    if (target.type === 'tracedPath' && editingNodeId === target.id && target.nodes) {
      const ox = target.pos?.x || 0;
      const oy = target.pos?.y || 0;
      const segs = getPathSegments(target.nodes);
      const activeSeg = segs[editingSegmentIndex] || segs[0];
      if (!activeSeg) return null;
      const cornerR = 5.5 / zoom;
      const midR = 4.5 / zoom;
      return (
        <g className="ui-element">
          <circle
            cx={activeSeg.start.x + ox} cy={activeSeg.start.y + oy} r={cornerR}
            fill="#FFFFFF" stroke="#7C3AED" strokeWidth={2 / zoom} style={{ cursor: 'move' }}
            onPointerDown={(e) => startDrag(e, 'pathNode', { nodeIndex: activeSeg.startIndex })}
          />
          <circle
            cx={activeSeg.end.x + ox} cy={activeSeg.end.y + oy} r={cornerR}
            fill="#FFFFFF" stroke="#7C3AED" strokeWidth={2 / zoom} style={{ cursor: 'move' }}
            onPointerDown={(e) => startDrag(e, 'pathNode', { nodeIndex: activeSeg.endIndex })}
          />
          <circle
            cx={activeSeg.mid.x + ox} cy={activeSeg.mid.y + oy} r={midR}
            fill="#7C3AED" stroke="#FFFFFF" strokeWidth={2 / zoom} style={{ cursor: 'move' }}
            onPointerDown={(e) => startDrag(e, 'pathMidpoint', {
              endIndex: activeSeg.endIndex,
              startIndex: activeSeg.startIndex,
            })}
          />
        </g>
      );
    }

    return null;
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans select-none antialiased bg-slate-100 text-slate-900 dark:bg-[#090d16] dark:text-slate-100">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/png,image/jpeg,image/gif,image/webp,image/bmp,image/tiff,.png,.jpg,.jpeg,.gif,.webp,.bmp,.tif,.tiff"
        style={{ display: 'none' }}
      />

      {/* Header */}
      <header className="h-12 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0f1422]/95 backdrop-blur-md px-3 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/20 ring-1 ring-purple-500/20">
              <i className="ph-bold ph-bezier-curve text-sm"></i>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-[15px] tracking-tight bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">SVGenius</span>
              <span className="bg-purple-100 dark:bg-purple-950/60 text-brand-700 dark:text-purple-300 font-bold text-[10px] tracking-wide px-1.5 py-0.5 rounded uppercase">PRO</span>
            </div>
          </div>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
          <nav className="hidden sm:flex items-center gap-3" aria-label="Studio navigation">
            <a
              href="/dashboard.html"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-md transition"
              title="Back to Dashboard"
            >
              <i className="ph ph-arrow-left text-sm"></i>
              <span>Back</span>
            </a>
            <a
              href="/dashboard.html"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/40 border border-brand-200/70 dark:border-brand-800/50 rounded-full transition hover:bg-brand-100 dark:hover:bg-brand-950/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
              Dashboard
            </a>
            <a
              href="/settings.html"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-md transition"
            >
              <i className="ph ph-gear text-sm"></i>
              Settings
            </a>
          </nav>

        </div>

        <div className="flex-1 max-w-md mx-4 hidden md:block relative z-[100]">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-500" style={{ paddingLeft: '12px' }}>
              <i className="ph ph-magnifying-glass text-sm"></i>
            </div>
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                const query = e.target.value.toLowerCase();
                if (query.trim() === '') {
                  setSearchResults([]);
                } else if (window.svgeniusLibrary) {
                  const res = window.svgeniusLibrary.filter(item =>
                    item.title.toLowerCase().includes(query) ||
                    item.tags.some(t => t.toLowerCase().includes(query))
                  );
                  setSearchResults(res.slice(0, 8));
                }
              }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full py-1.5 text-xs bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              style={{ paddingLeft: '36px', paddingRight: '48px' }}
              placeholder="Search layers, vectorize commands, tools..."
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none" style={{ paddingRight: '10px' }}>
              <kbd className="font-mono text-[10px] bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 shadow-sm text-slate-500">⌘K</kbd>
            </div>
          </div>
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden z-[100] max-h-[400px] overflow-y-auto">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-2 bg-slate-50 dark:bg-slate-900/50">Library Results</div>
              {searchResults.map(result => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer border-b border-slate-100 dark:border-slate-800 last:border-0 flex items-center gap-3"
                  onClick={() => {
                    const centerX = -pan.x / zoom + (svgRef.current.clientWidth / 2) / zoom;
                    const centerY = -pan.y / zoom + (svgRef.current.clientHeight / 2) / zoom;
                    const newElement = {
                      id: generateId(),
                      type: 'vectorImage',
                      pos: { x: centerX - 50, y: centerY - 50 },
                      width: 100,
                      height: 100,
                      svgString: result.svg
                    };
                    setElements(prev => [...prev, newElement]);
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                >
                  <div className="w-9 h-9 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 flex-shrink-0 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: result.svg }}></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{result.title}</div>
                    <div className="text-[10px] text-slate-400 truncate">{result.tags.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-10 pl-2">
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <i className="ph ph-sun text-base"></i> : <i className="ph ph-moon text-base"></i>}
          </button>
          <button type="button" onClick={copyJsx} className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm transition">
            <i className="ph ph-copy text-sm text-brand-500"></i>
            <span>Copy JSX</span>
          </button>
          <button type="button" onClick={() => setShowExportDialog(true)} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 rounded-lg transition shadow-sm shadow-purple-600/30">
            <i className="ph-bold ph-export text-sm"></i>
            <span>Export SVG</span>
          </button>
          <a
            href="/settings.html"
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors sm:hidden"
            title="Settings"
          >
            <i className="ph ph-gear text-base"></i>
          </a>
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-500 to-pink-500 p-0.5 cursor-pointer ring-2 ring-transparent hover:ring-purple-400 transition">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center font-bold text-[11px] text-brand-600 dark:text-brand-400">SV</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left icon toolbar */}
        <aside className="w-16 border-r border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0d121f]/95 backdrop-blur flex flex-col justify-start pb-4 items-center z-20 shrink-0" style={{ paddingTop: '24px' }}>
          <div className="flex flex-col gap-3 items-center w-full px-2" style={{ marginTop: '24px' }}>
            {[
              { id: 'select', label: 'Select', kbd: 'V', icon: 'ph-cursor' },
              { id: 'pan', label: 'Pan', kbd: 'H', icon: 'ph-hand-grabbing' },
              { id: 'freehand', label: 'Freehand', kbd: 'P', icon: 'ph-pencil-simple' },
              { id: 'line', label: 'Arc Line', kbd: 'A', icon: 'ph-line-segments' },
              { id: 'bezier', label: 'Bezier', kbd: 'B', icon: 'ph-bezier-curve' },
              { id: 'text', label: 'Text', kbd: 'T', icon: 'ph-text-t' },
              { id: 'fill', label: 'Fill', kbd: 'F', icon: 'ph-paint-bucket' },
              { id: 'eraser', label: 'Eraser', kbd: 'E', icon: 'ph-eraser' },
            ].map(t => (
              <button
                key={t.id}
                type="button"
                title={`${t.label} (${t.kbd})`}
                onClick={() => {
                  setTool(t.id);
                  if (t.id === 'line' || t.id === 'bezier') {
                    setClickStartPoint(null);
                    setSnapGuides([]);
                  }
                }}
                className={`tool-btn-pro w-10 h-10 rounded-lg flex items-center justify-center relative group transition-colors ${tool === t.id ? 'active-tool bg-brand-600 text-white shadow-md shadow-brand-500/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                <i className={`ph ${t.icon} text-lg`}></i>
                <span className="absolute left-12 bg-slate-900 dark:bg-slate-800 text-white text-[11px] px-2 py-0.5 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50">
                  {t.label} <span className="text-slate-400 font-mono text-[10px]">{t.kbd}</span>
                </span>
              </button>
            ))}
            <div className="w-8 h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
            <button
              type="button"
              onClick={() => setInspectorTab('vectorize')}
              className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all relative group ${inspectorTab === 'vectorize' ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-sm scale-105' : 'text-slate-500 hover:text-white hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-purple-600 hover:shadow-sm hover:scale-105'}`}
              title="Image Vectorizer — Image to SVG"
            >
              <i className="ph-bold ph-image text-lg"></i>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
              <span className="absolute left-12 bg-slate-900 dark:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-full shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50 font-medium">
                Image Vectorizer
              </span>
            </button>
          </div>
        </aside>

        {/* Main canvas */}
        <main
          className={`flex-1 relative overflow-hidden flex items-center justify-center ${theme === 'dark' ? 'canvas-dots-dark' : 'canvas-dots-light'}`}
          style={{ cursor: isPanning ? 'grabbing' : (tool === 'pan' ? 'grab' : (tool === 'select' ? 'default' : 'crosshair')) }}
        >
          <div className="relative w-full h-full p-4">
            <div className="relative w-full h-full bg-white dark:bg-[#131929] rounded-xl shadow-2xl shadow-slate-400/30 dark:shadow-black/70 border border-slate-200/80 dark:border-slate-800/80 overflow-visible">
              <div className="absolute top-2 left-3 flex items-center space-x-2 text-[10px] font-mono text-slate-400 tracking-wider uppercase pointer-events-none z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span>Artboard 1 · Full Canvas</span>
              </div>

              <svg
                ref={svgRef}
                className="w-full h-full"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onWheel={handleWheel}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="neonWave" x1="50" x2="800" y1="100" y2="450">
                    <stop offset="0%" stopColor="#7C3AED"></stop>
                    <stop offset="50%" stopColor="#3B82F6"></stop>
                    <stop offset="100%" stopColor="#EC4899"></stop>
                  </linearGradient>
                  <linearGradient id="fillAreaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.12"></stop>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0"></stop>
                  </linearGradient>
                  <filter height="140%" id="vectorGlow" width="140%" x="-20%" y="-20%">
                    <feDropShadow dx="0" dy="4" floodColor="#7C3AED" floodOpacity="0.28" stdDeviation="8"></feDropShadow>
                  </filter>
                </defs>

                <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
                  {elements.map(el => renderElement(el))}
                  {currentElement && renderElement(currentElement)}

                  {snapGuides.map((guide, i) => (
                    <line
                      key={`guide-${i}`}
                      x1={guide.type === 'v' ? guide.x : -50000}
                      y1={guide.type === 'h' ? guide.y : -50000}
                      x2={guide.type === 'v' ? guide.x : 50000}
                      y2={guide.type === 'h' ? guide.y : 50000}
                      stroke="#10b981"
                      strokeWidth={1 / zoom}
                      strokeDasharray="5,5"
                      className="pointer-events-none"
                    />
                  ))}
                  {(tool === 'line' || tool === 'bezier') && elements.map((el, i) => (
                    <g key={`snap-dots-${i}`} className="pointer-events-none">
                      {el.p1 && <circle cx={el.p1.x} cy={el.p1.y} r={3 / zoom} fill="#10b981" opacity="0.5" />}
                      {el.p2 && <circle cx={el.p2.x} cy={el.p2.y} r={3 / zoom} fill="#10b981" opacity="0.5" />}
                    </g>
                  ))}
                  {clickStartPoint && (tool === 'line' || tool === 'bezier') && (
                    <line
                      x1={clickStartPoint.x} y1={clickStartPoint.y}
                      x2={mousePos.x} y2={mousePos.y}
                      stroke={color} strokeWidth={strokeWidth} strokeDasharray="5,5"
                      className="pointer-events-none"
                    />
                  )}
                  {renderControlPoints()}
                </g>
              </svg>

              {artworkMenuId && (() => {
                const art = elements.find(el => el.id === artworkMenuId && el.type === 'tracedArtwork');
                if (!art) return null;
                return (
                  <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-40 bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 whitespace-nowrap"
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 pr-3 border-r border-slate-200 dark:border-slate-700">Editing</span>
                    <button
                      type="button"
                      onClick={() => {
                        const eps = Math.max(2, Math.min(art.width || 100, art.height || 100) * 0.006);
                        setElements(prev => prev.map(el => {
                          if (el.id !== art.id) return el;
                          return {
                            ...el,
                            showVectors: true,
                            layers: (el.layers || []).map(layer => ({
                              ...layer,
                              editBackup: layer.editBackup || layer.nodes,
                              nodes: simplifyPathNodes(layer.nodes, eps),
                            })),
                          };
                        }));
                        setSelectedId(art.id);
                        setEditingNodeId(art.id);
                        setEditingLayerIndex(art.layers?.length ? 0 : null);
                        setEditingSegmentIndex(0);
                        setTool('select');
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition whitespace-nowrap ${editingNodeId === art.id ? 'bg-brand-600 text-white' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      Edit paths
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setElements(prev => prev.map(el => {
                          if (el.id !== art.id) return el;
                          return {
                            ...el,
                            hasEdits: false,
                            showVectors: false,
                            layers: (el.layers || []).map(layer => ({
                              ...layer,
                              nodes: layer.editBackup || layer.nodes,
                            })),
                          };
                        }));
                        setEditingNodeId(null);
                        setEditingLayerIndex(null);
                        setEditingSegmentIndex(null);
                      }}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition whitespace-nowrap"
                    >
                      Reset to original
                    </button>
                    <button
                      type="button"
                      onClick={() => downloadArtworkSvg(art)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg text-brand-700 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition whitespace-nowrap"
                    >
                      Download SVG
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingNodeId(null);
                        setEditingLayerIndex(null);
                        setEditingSegmentIndex(null);
                        setArtworkMenuId(null);
                      }}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition whitespace-nowrap"
                    >
                      Done
                    </button>
                    {editingNodeId === art.id && (
                      <span className="text-[11px] text-slate-500 pl-2 border-l border-slate-200 dark:border-slate-700">
                        Click a line → white = corners, purple = curve
                      </span>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Floating bottom HUD — zoom / fit / undo / active tool */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-white/95 dark:bg-[#131929]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-800 gap-3 text-xs z-30">
              <label className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition relative overflow-hidden">
                <span className="w-4 h-4 rounded-full ring-2 ring-white dark:ring-slate-800 shadow-sm" style={{ backgroundColor: color }}></span>
                <span className="text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-200 uppercase">{color}</span>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="absolute opacity-0 cursor-pointer w-full h-full" />
              </label>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setZoom(Math.max(0.1, zoom - 0.1))} className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" title="Zoom Out">
                  <i className="ph ph-minus text-sm"></i>
                </button>
                <span className="font-mono text-xs font-semibold w-12 text-center text-slate-700 dark:text-slate-200">{Math.round(zoom * 100)}%</span>
                <button type="button" onClick={() => setZoom(Math.min(10, zoom + 0.1))} className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" title="Zoom In">
                  <i className="ph ph-plus text-sm"></i>
                </button>
                <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="px-2.5 py-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" title="Fit Screen">
                  Fit
                </button>
              </div>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  onClick={handleUndo}
                  disabled={historyIndex === 0}
                  className={`p-1.5 rounded-lg transition ${historyIndex === 0 ? 'text-slate-300 dark:text-slate-600' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
                  title="Undo (Ctrl+Z)"
                >
                  <i className="ph ph-arrow-u-up-left text-base"></i>
                </button>
                <button
                  type="button"
                  onClick={handleRedo}
                  disabled={historyIndex === history.length - 1}
                  className={`p-1.5 rounded-lg transition ${historyIndex === history.length - 1 ? 'text-slate-300 dark:text-slate-600' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
                  title="Redo (Ctrl+Y)"
                >
                  <i className="ph ph-arrow-u-up-right text-base"></i>
                </button>
              </div>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pr-0.5">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                <span className="capitalize">{tool} tool</span>
              </div>
            </div>
          </div>
        </main>

        {/* Right inspector */}
        <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0f1422]/95 backdrop-blur flex flex-col z-20 shrink-0 select-none">
          <div className="grid grid-cols-4 border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold tracking-tight text-center bg-slate-50 dark:bg-slate-900/50">
            {[
              { id: 'properties', label: 'Props' },
              { id: 'layers', label: 'Layers' },
              { id: 'assets', label: 'Library' },
              { id: 'vectorize', label: 'Vectorize', dot: true },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setInspectorTab(tab.id)}
                className={`border-b-2 flex items-center justify-center transition ${inspectorTab === tab.id ? 'border-brand-600 text-brand-600 dark:text-brand-400 bg-white dark:bg-[#0f1422]' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
                style={{ padding: '0.875rem 0', gap: '0.25rem' }}
              >
                <span>{tab.label}</span>
                {tab.dot && <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ padding: '1.25rem' }}>
            {inspectorTab === 'properties' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Align &amp; Distribute</span>
                  </div>
                  <div className="grid grid-cols-6 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800/80" style={{ padding: '0.5rem', gap: '0.5rem' }}>
                    {['ph-align-left', 'ph-align-center-horizontal', 'ph-align-right', 'ph-align-top', 'ph-align-center-vertical', 'ph-align-bottom'].map(icon => (
                      <button key={icon} type="button" onClick={() => handleAlign(icon)} className="hover:bg-white dark:hover:bg-slate-800 rounded flex justify-center text-slate-600 dark:text-slate-300 transition-colors shadow-sm" style={{ padding: '0.5rem' }} disabled={!selectedId}>
                        <i className={`ph ${icon} text-[16px] ${!selectedId ? 'opacity-50' : ''}`}></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800"></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Stroke &amp; Path</span>
                    <span className="text-brand-600 dark:text-brand-400 text-[11px] font-semibold normal-case tracking-normal">Selected</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="flex items-center justify-between text-xs" style={{ padding: '0 0.25rem' }}>
                      <label className="text-slate-600 dark:text-slate-300 text-[11px] font-medium">Stroke Width</label>
                      <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 rounded" style={{ padding: '0.125rem 0.5rem' }}>{strokeWidth} px</span>
                    </div>
                    <input type="range" min="0.5" max="24" step="0.5" value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} className="w-full accent-brand-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer" style={{ marginTop: '0.25rem' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="text-[10px] uppercase font-bold text-slate-400" style={{ padding: '0 0.25rem' }}>End Caps</label>
                    <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs text-center font-medium" style={{ gap: '0.25rem', padding: '0.375rem' }}>
                      {['round', 'butt', 'square'].map(cap => (
                        <button key={cap} type="button" onClick={() => setStrokeLinecap(cap)} className={`rounded capitalize transition-all ${strokeLinecap === cap ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600 dark:text-purple-300 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`} style={{ padding: '0.375rem 0' }}>{cap}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="text-[10px] uppercase font-bold text-slate-400" style={{ padding: '0 0.25rem' }}>Corner Join</label>
                    <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs text-center font-medium" style={{ gap: '0.25rem', padding: '0.375rem' }}>
                      {['round', 'miter', 'bevel'].map(join => (
                        <button key={join} type="button" onClick={() => setStrokeLinejoin(join)} className={`rounded capitalize transition-all ${strokeLinejoin === join ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600 dark:text-purple-300 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`} style={{ padding: '0.375rem 0' }}>{join}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="text-[10px] uppercase font-bold text-slate-400" style={{ padding: '0 0.25rem' }}>Color</label>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800" style={{ gap: '0.5rem', padding: '0.5rem' }}>
                      <label className="w-8 h-8 rounded-md ring-2 ring-purple-400/50 shadow-sm shrink-0 cursor-pointer relative overflow-hidden" style={{ backgroundColor: color }}>
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="opacity-0 absolute w-full h-full cursor-pointer" />
                      </label>
                      <input type="text" value={color} readOnly className="flex-1 text-xs font-mono font-medium bg-transparent text-slate-700 dark:text-slate-200 outline-none" style={{ padding: '0 0.25rem' }} />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800"></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Opacity</span>
                    <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded normal-case tracking-normal" style={{ padding: '0.125rem 0.5rem' }}>{opacity}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full accent-brand-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer" style={{ marginTop: '0.25rem' }} />
                </div>
              </div>
            )}

            {inspectorTab === 'layers' && (
              <div className="flex flex-col gap-2">
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex justify-between items-center">
                  <span>Scene Layers ({elements.length})</span>
                </div>
                {[...elements].reverse().map((el, index) => (
                  <div
                    key={el.id}
                    onClick={() => setSelectedId(el.id)}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${selectedId === el.id ? 'bg-purple-50 dark:bg-purple-950/40 border border-brand-200 dark:border-purple-800/60' : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent'}`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <i className={`ph ${el.type === 'tracedArtwork' ? 'ph-image' : el.type === 'text' ? 'ph-text-t' : 'ph-line-segment'} text-sm ${selectedId === el.id ? 'text-brand-600' : 'text-slate-400'}`}></i>
                      <span className={`text-xs truncate ${selectedId === el.id ? 'font-semibold text-brand-900 dark:text-purple-200' : 'text-slate-700 dark:text-slate-300'}`}>
                        {(el.fileName || el.type).toString().slice(0, 28)} {elements.length - index}
                      </span>
                    </div>
                  </div>
                ))}
                {elements.length === 0 && (
                  <p className="text-xs text-slate-400 px-2 py-6 text-center">No layers yet — draw or vectorize an image.</p>
                )}
              </div>
            )}

            {inspectorTab === 'assets' && (
              <div className="p-4 space-y-3">
                <div className="relative">
                  <input
                    className="w-full text-xs pl-8 pr-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Search vector shapes..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      const query = e.target.value.toLowerCase();
                      if (!query.trim()) setSearchResults([]);
                      else if (window.svgeniusLibrary) {
                        setSearchResults(window.svgeniusLibrary.filter(item =>
                          item.title.toLowerCase().includes(query) ||
                          item.tags.some(t => t.toLowerCase().includes(query))
                        ).slice(0, 24));
                      }
                    }}
                  />
                  <i className="ph ph-magnifying-glass absolute left-2.5 top-2 text-slate-400 text-sm"></i>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(searchResults.length ? searchResults : (window.svgeniusLibrary || []).slice(0, 12)).map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const centerX = -pan.x / zoom + (svgRef.current.clientWidth / 2) / zoom;
                        const centerY = -pan.y / zoom + (svgRef.current.clientHeight / 2) / zoom;
                        setElements(prev => [...prev, {
                          id: generateId(),
                          type: 'vectorImage',
                          pos: { x: centerX - 50, y: centerY - 50 },
                          width: 100,
                          height: 100,
                          svgString: item.svg,
                        }]);
                      }}
                      className="h-20 flex flex-col items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 bg-slate-50 dark:bg-slate-900/40 group transition"
                    >
                      <div className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-brand-500" dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                      <span className="text-[10px] text-slate-500 mt-1 truncate w-full text-center">{item.title}</span>
                    </button>
                  ))}
                  {!(window.svgeniusLibrary || []).length && (
                    <p className="col-span-3 text-xs text-slate-400 text-center py-8">Library empty — load svg-library.js</p>
                  )}
                </div>
              </div>
            )}

            {inspectorTab === 'vectorize' && (
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-brand-600 dark:text-purple-300 shrink-0">
                    <i className="ph-bold ph-image text-base"></i>
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white">Image Vectorizer</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">Convert image PNG/JPG to sharp clean SVG</p>
                  </div>
                </div>

                <div
                  onDragEnter={(e) => { e.preventDefault(); setIsDragOver(true); }}
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleConvertDrop}
                  onClick={() => !isConverting && fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl px-4 py-6 text-center cursor-pointer transition ${isDragOver ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-950/30' : 'border-slate-300 dark:border-slate-700 hover:border-brand-500 bg-slate-50/50 dark:bg-slate-900/30'} ${isConverting ? 'opacity-70 pointer-events-none' : ''}`}
                >
                  <div className="w-11 h-11 mx-auto rounded-full bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 mb-3">
                    <i className="ph-bold ph-upload-simple text-xl"></i>
                  </div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {isConverting ? 'Converting…' : 'Drop image or browse'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1.5 px-2 leading-relaxed">PNG, JPG, GIF, WebP, BMP · Max 20MB</p>
                  {isConverting && (
                    <div className="mt-4 mx-2 h-1 rounded-full bg-brand-100 dark:bg-brand-950 overflow-hidden">
                      <div className="h-full w-1/2 bg-brand-500 animate-pulse rounded-full"></div>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block">Vectorize Mode</label>
                    <select
                      value={traceMode}
                      onChange={(e) => setTraceMode(e.target.value)}
                      className="w-full text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-slate-800 dark:text-slate-100 outline-none focus:ring-1 focus:ring-brand-500"
                    >
                      <option value="outline">Full color (exact regions)</option>
                      <option value="centerline">Centerline (single stroke)</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer py-0.5">
                    <input
                      type="checkbox"
                      checked={removeBg}
                      onChange={(e) => setRemoveBg(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-brand-600 focus:ring-brand-500 h-4 w-4 shrink-0"
                    />
                    <span>Remove background automatically</span>
                  </label>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-2.5 py-1.5 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-[11px] font-semibold rounded-full border border-brand-100 dark:border-brand-900">
                      Paths: {convertStats?.pathCount ?? '—'}
                    </span>
                    <span className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[11px] font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                      {convertStats ? `${convertStats.width}×${convertStats.height}` : 'Ready'}
                    </span>
                    {convertStats?.quality && (
                      <span className="px-2.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold rounded-full border border-emerald-100 dark:border-emerald-900 uppercase">
                        {convertStats.quality}
                      </span>
                    )}
                  </div>

                  {convertStats?.artworkId && (
                    <button
                      type="button"
                      onClick={() => {
                        const art = elements.find(el => el.id === convertStats.artworkId);
                        if (art) downloadArtworkSvg(art);
                      }}
                      className="w-full mt-1 py-2.5 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white text-xs font-bold rounded-lg shadow-md shadow-brand-500/25 transition"
                    >
                      Download Clear SVG
                    </button>
                  )}

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2">
                    <span>Vector Engine v2.4</span>
                    <span className="text-emerald-500 font-semibold">● Ready</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-9 border-t border-slate-200 dark:border-slate-800 px-3 flex items-center justify-between text-[11px] text-slate-400 shrink-0 bg-slate-50/50 dark:bg-slate-900/30 font-mono">
            <span>{elements.length} layers</span>
            <span className="text-brand-500">{tool}</span>
          </div>
        </aside>
      </div>

      {showExportDialog && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[1000] flex items-center justify-center">
          <div className="bg-white dark:bg-[#131929] p-8 rounded-xl shadow-2xl min-w-[400px] border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl text-slate-900 dark:text-white mb-6 font-bold flex items-center gap-2">
              <i className="ph-bold ph-export text-brand-600"></i>
              Export SVG
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block font-semibold">Document Title (SEO)</label>
                <input type="text" value={docTitle} onChange={e => setDocTitle(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block font-semibold">Description (SEO)</label>
                <input type="text" value={docDesc} onChange={e => setDocDesc(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block font-semibold">Add CSS Animation</label>
                <select value={docAnimate} onChange={e => setDocAnimate(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all">
                  <option value="none">None</option>
                  <option value="draw">Draw Path (Slowly draws the lines)</option>
                  <option value="pulse">Pulse (Scale in and out)</option>
                  <option value="spin">Spin (Rotate continuously)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button type="button" onClick={() => setShowExportDialog(false)}
                className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                Cancel
              </button>
              <button type="button" onClick={() => { downloadSvg(); setShowExportDialog(false); }}
                className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-colors font-medium shadow-md">
                Download SVG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
