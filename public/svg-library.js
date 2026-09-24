window.svgeniusLibrary = [{
    id: 'svg-anim-031',
    title: 'Flipping Hourglass',
    author: 'TimeKeeper',
    tags: ["animated", "hourglass", "time", "wait", "sand"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .hourglass-flip { transform-origin: center; animation: flip-anim 3s infinite ease-in-out; }
        @keyframes flip-anim { 0%, 40% { transform: rotate(0deg); } 60%, 100% { transform: rotate(180deg); } }
      </style>
      <g class="hourglass-flip">
        <path d="M4 2v20"></path>
        <path d="M20 2v20"></path>
        <path d="M4 6h16"></path>
        <path d="M4 18h16"></path>
        <polygon points="6 6 18 6 12 12 6 6" fill="currentColor"></polygon>
        <polygon points="6 18 18 18 12 12 6 18"></polygon>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-032',
    title: 'Camera Shutter',
    author: 'PhotoTech',
    tags: ["animated", "camera", "shutter", "aperture", "lens"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .shutter-spin { transform-origin: center; animation: shutter-anim 2s infinite cubic-bezier(0.87, 0, 0.13, 1); }
        @keyframes shutter-anim { 0% { transform: rotate(0deg); } 50%, 100% { transform: rotate(90deg); } }
      </style>
      <circle cx="12" cy="12" r="10"></circle>
      <g class="shutter-spin">
        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-033',
    title: 'Bouncing Box',
    author: 'Geometry',
    tags: ["animated", "box", "cube", "bounce", "jump"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .box-bounce { transform-origin: bottom center; animation: jump-anim 1s infinite ease-in-out alternate; }
        @keyframes jump-anim { 0% { transform: translateY(0) scaleY(0.8) scaleX(1.1); } 100% { transform: translateY(-10px) scaleY(1.1) scaleX(0.9); } }
      </style>
      <rect class="box-bounce" x="6" y="10" width="12" height="12" rx="2" ry="2"></rect>
      <line x1="2" y1="22" x2="22" y2="22"></line>
    </svg>`
  },
  {
    id: 'svg-anim-034',
    title: 'Radar Sonar',
    author: 'Navy',
    tags: ["animated", "radar", "sonar", "waves", "ping"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .ping-1 { animation: sonar-ping 2s infinite ease-out; }
        .ping-2 { animation: sonar-ping 2s infinite ease-out 0.6s; }
        .ping-3 { animation: sonar-ping 2s infinite ease-out 1.2s; }
        @keyframes sonar-ping { 0% { r: 0; stroke-opacity: 1; stroke-width: 4; } 100% { r: 10px; stroke-opacity: 0; stroke-width: 0.5; } }
      </style>
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
      <circle class="ping-1" cx="12" cy="12" r="0"></circle>
      <circle class="ping-2" cx="12" cy="12" r="0"></circle>
      <circle class="ping-3" cx="12" cy="12" r="0"></circle>
    </svg>`
  },
  {
    id: 'svg-anim-035',
    title: 'Flashing Warning',
    author: 'AlertSys',
    tags: ["animated", "warning", "alert", "danger", "flash"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .flash-alert { animation: warning-flash 1s infinite; }
        @keyframes warning-flash { 0%, 100% { stroke: currentColor; filter: none; } 50% { stroke: #ff3333; filter: drop-shadow(0 0 5px rgba(255,51,51,0.8)); } }
      </style>
      <path class="flash-alert" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line class="flash-alert" x1="12" y1="9" x2="12" y2="13"></line>
      <line class="flash-alert" x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>`
  },
  {
    id: 'svg-anim-036',
    title: 'Loading Dots',
    author: 'WaitBot',
    tags: ["animated", "loading", "dots", "wait", "typing"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .dot-1 { animation: dot-jump 1.5s infinite ease-in-out; }
        .dot-2 { animation: dot-jump 1.5s infinite ease-in-out 0.2s; }
        .dot-3 { animation: dot-jump 1.5s infinite ease-in-out 0.4s; }
        @keyframes dot-jump { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      </style>
      <circle class="dot-1" cx="6" cy="12" r="2" fill="currentColor"></circle>
      <circle class="dot-2" cx="12" cy="12" r="2" fill="currentColor"></circle>
      <circle class="dot-3" cx="18" cy="12" r="2" fill="currentColor"></circle>
    </svg>`
  },

  {
    id: 'svg-anim-025',
    title: 'Swinging Pendulum',
    author: 'TimeKeeper',
    tags: ["animated", "pendulum", "time", "swing", "hypnotic"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .pendulum-swing { transform-origin: 12px 2px; animation: swing-anim 2s infinite ease-in-out alternate; }
        @keyframes swing-anim { 0% { transform: rotate(45deg); } 100% { transform: rotate(-45deg); } }
      </style>
      <path d="M10 2h4"></path>
      <g class="pendulum-swing">
        <line x1="12" y1="2" x2="12" y2="18"></line>
        <circle cx="12" cy="18" r="3" fill="currentColor"></circle>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-026',
    title: 'Orbiting Satellite',
    author: 'SpaceX',
    tags: ["animated", "orbit", "space", "satellite", "planet"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .orbit-anim { transform-origin: center; animation: orbit-spin 3s linear infinite; }
        @keyframes orbit-spin { 100% { transform: rotate(360deg); } }
      </style>
      <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
      <g class="orbit-anim">
        <circle cx="12" cy="12" r="9" stroke-dasharray="4 4" stroke-opacity="0.5"></circle>
        <circle cx="12" cy="3" r="2" fill="currentColor"></circle>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-027',
    title: 'Hovering Ghost',
    author: 'Spooky',
    tags: ["animated", "ghost", "hover", "spooky", "float"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-on-surface">
      <style>
        .ghost-float { animation: float-anim 2s infinite ease-in-out alternate; }
        @keyframes float-anim { 0% { transform: translateY(-3px); } 100% { transform: translateY(3px); } }
      </style>
      <g class="ghost-float">
        <path d="M6 22L8 20L10 22L12 20L14 22L16 20L18 22V8C18 4.686 15.314 2 12 2C8.686 2 6 4.686 6 8V22Z"></path>
        <circle cx="10" cy="10" r="1.5" fill="currentColor"></circle>
        <circle cx="14" cy="10" r="1.5" fill="currentColor"></circle>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-028',
    title: 'Emitting Volume',
    author: 'AudioTech',
    tags: ["animated", "volume", "sound", "audio", "speaker"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .vol-1 { animation: vol-fade 1.5s infinite; }
        .vol-2 { animation: vol-fade 1.5s infinite 0.2s; }
        .vol-3 { animation: vol-fade 1.5s infinite 0.4s; }
        @keyframes vol-fade { 0%, 100% { opacity: 0; transform: translateX(-2px); } 50% { opacity: 1; transform: translateX(0); } }
      </style>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path class="vol-1" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path class="vol-2" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      <path class="vol-3" d="M22 2v20"></path>
    </svg>`
  },
  {
    id: 'svg-anim-029',
    title: 'Flickering Flame',
    author: 'Nature',
    tags: ["animated", "fire", "flame", "burn", "hot"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .flame-flicker { transform-origin: bottom center; animation: flicker-anim 0.3s infinite alternate; }
        @keyframes flicker-anim { 0% { transform: scaleY(1) skewX(2deg); } 100% { transform: scaleY(1.1) skewX(-2deg); } }
      </style>
      <path class="flame-flicker" d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
    </svg>`
  },
  {
    id: 'svg-anim-030',
    title: 'Typing Cursor',
    author: 'Coder',
    tags: ["animated", "type", "cursor", "text", "blink"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .cursor-blink { animation: blink-anim 1s step-end infinite; }
        @keyframes blink-anim { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      </style>
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
      <line class="cursor-blink" x1="18" y1="8" x2="18" y2="16" stroke-width="3"></line>
    </svg>`
  },

  {
    id: 'svg-anim-021',
    title: 'Bouncing Bar Chart',
    author: 'Analytics',
    tags: ["animated", "chart", "bar", "data", "analytics"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .bar-1 { animation: bar-anim 1.5s infinite alternate ease-in-out; }
        .bar-2 { animation: bar-anim 1.2s infinite alternate ease-in-out 0.2s; }
        .bar-3 { animation: bar-anim 1.8s infinite alternate ease-in-out 0.4s; }
        @keyframes bar-anim { 0% { transform: scaleY(0.2); } 100% { transform: scaleY(1); } }
      </style>
      <line x1="18" y1="20" x2="18" y2="10" class="bar-1" transform-origin="bottom"></line>
      <line x1="12" y1="20" x2="12" y2="4" class="bar-2" transform-origin="bottom"></line>
      <line x1="6" y1="20" x2="6" y2="14" class="bar-3" transform-origin="bottom"></line>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>`
  },
  {
    id: 'svg-anim-022',
    title: 'Liquid Loading Wave',
    author: 'MotionStudio',
    tags: ["animated", "liquid", "wave", "loading", "fluid"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .wave-anim { animation: wave-flow 2s infinite linear; }
        @keyframes wave-flow { 100% { stroke-dashoffset: -40; } }
      </style>
      <path class="wave-anim" d="M2 12 Q6 8 10 12 T18 12 T26 12" stroke-dasharray="20 20"></path>
    </svg>`
  },
  {
    id: 'svg-anim-023',
    title: 'Animated Checkmark',
    author: 'System',
    tags: ["animated", "check", "success", "tick", "done"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .check-draw { stroke-dasharray: 50; stroke-dashoffset: 50; animation: check-draw-anim 2s infinite ease-out; }
        @keyframes check-draw-anim { 0% { stroke-dashoffset: 50; } 50%, 100% { stroke-dashoffset: 0; } }
      </style>
      <path class="check-draw" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline class="check-draw" points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`
  },
  {
    id: 'svg-anim-024',
    title: 'Pulsing Play Button',
    author: 'MediaProd',
    tags: ["animated", "play", "video", "media", "pulse"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .pulse-play { animation: play-pulse-anim 1.5s infinite; }
        @keyframes play-pulse-anim { 0% { stroke-width: 2; transform: scale(1); opacity: 1; } 100% { stroke-width: 0.5; transform: scale(1.2); opacity: 0; } }
      </style>
      <circle cx="12" cy="12" r="10"></circle>
      <circle class="pulse-play" cx="12" cy="12" r="10" transform-origin="center"></circle>
      <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>`
  },

  {
    id: 'svg-anim-001',
    title: 'Spinning Gear',
    author: 'MotionStudio',
    tags: ["animated", "gear", "settings", "spin", "motion"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .spin-gear { transform-origin: center; animation: spin-gear-anim 4s linear infinite; }
        @keyframes spin-gear-anim { 100% { transform: rotate(360deg); } }
      </style>
      <g class="spin-gear">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-002',
    title: 'Pulsing Heart',
    author: 'MotionStudio',
    tags: ["animated", "heart", "pulse", "love", "health"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .pulse-heart { transform-origin: center; animation: pulse-heart-anim 1s ease-in-out infinite; }
        @keyframes pulse-heart-anim { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
      </style>
      <path class="pulse-heart" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>`
  },
  {
    id: 'svg-anim-003',
    title: 'Loading Spinner',
    author: 'SVGenius',
    tags: ["animated", "loading", "spinner", "wait"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .spin-loader { transform-origin: center; animation: spin-loader-anim 1s linear infinite; }
        @keyframes spin-loader-anim { 100% { transform: rotate(360deg); } }
      </style>
      <path class="spin-loader" d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>`
  },
  {
    id: 'svg-anim-004',
    title: 'Radar Sweep',
    author: 'TechOps',
    tags: ["animated", "radar", "sweep", "scan", "network"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full text-secondary">
      <style>
        .radar-sweep { transform-origin: center; animation: radar-sweep-anim 3s linear infinite; }
        @keyframes radar-sweep-anim { 100% { transform: rotate(360deg); } }
      </style>
      <circle cx="12" cy="12" r="10" stroke-opacity="0.3"></circle>
      <circle cx="12" cy="12" r="6" stroke-opacity="0.3"></circle>
      <circle cx="12" cy="12" r="2" stroke-opacity="0.3"></circle>
      <path class="radar-sweep" d="M12 12 L12 2" stroke-width="2"></path>
    </svg>`
  },
  {
    id: 'svg-anim-005',
    title: 'Bouncing Signal',
    author: 'NetworkCo',
    tags: ["animated", "signal", "wifi", "bounce"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .wifi-1 { animation: wifi-fade 1.5s infinite 0.4s; }
        .wifi-2 { animation: wifi-fade 1.5s infinite 0.8s; }
        .wifi-3 { animation: wifi-fade 1.5s infinite 0s; }
        @keyframes wifi-fade { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
      </style>
      <path class="wifi-1" d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path class="wifi-2" d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path class="wifi-3" d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <circle cx="12" cy="20" r="1" fill="currentColor"></circle>
    </svg>`
  },
  {
    id: 'svg-anim-006',
    title: 'Audio Equalizer',
    author: 'MusicTech',
    tags: ["animated", "audio", "sound", "equalizer", "music"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .eq-1 { animation: eq-1-anim 1.2s infinite alternate ease-in-out; }
        .eq-2 { animation: eq-2-anim 0.9s infinite alternate ease-in-out; }
        .eq-3 { animation: eq-3-anim 1.4s infinite alternate ease-in-out; }
        @keyframes eq-1-anim { 0% { transform: translateY(0); } 100% { transform: translateY(-6px); } }
        @keyframes eq-2-anim { 0% { transform: translateY(-12px); } 100% { transform: translateY(2px); } }
        @keyframes eq-3-anim { 0% { transform: translateY(-4px); } 100% { transform: translateY(-10px); } }
      </style>
      <line class="eq-1" x1="4" y1="21" x2="4" y2="10"></line>
      <line class="eq-2" x1="12" y1="21" x2="12" y2="4"></line>
      <line class="eq-3" x1="20" y1="21" x2="20" y2="14"></line>
    </svg>`
  },
  {
    id: 'svg-anim-007',
    title: 'Ticking Clock',
    author: 'TimeKeeper',
    tags: ["animated", "clock", "time", "tick", "watch"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .tick-tock { transform-origin: center; animation: tick-tock-anim 5s linear infinite; }
        @keyframes tick-tock-anim { 100% { transform: rotate(360deg); } }
      </style>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline class="tick-tock" points="12 6 12 12 16 14"></polyline>
    </svg>`
  },
  {
    id: 'svg-anim-008',
    title: 'Charging Battery',
    author: 'Energy',
    tags: ["animated", "battery", "charge", "power", "energy"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .charge-anim { animation: charge-bar 2s infinite; }
        @keyframes charge-bar { 0% { width: 0; } 25% { width: 4px; } 50% { width: 8px; } 75% { width: 12px; } 100% { width: 0; } }
      </style>
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
      <line x1="22" y1="11" x2="22" y2="13"></line>
      <rect class="charge-anim" x="4" y="9" width="4" height="6" fill="currentColor"></rect>
    </svg>`
  },
  {
    id: 'svg-anim-009',
    title: 'Bouncing Download',
    author: 'CloudOps',
    tags: ["animated", "download", "cloud", "save", "arrow"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .bounce-arrow { animation: bounce-arrow-anim 1.5s infinite; }
        @keyframes bounce-arrow-anim { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(3px); } }
      </style>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <g class="bounce-arrow">
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-010',
    title: 'Pulsing Target',
    author: 'AimBot',
    tags: ["animated", "target", "bullseye", "aim", "focus"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .pulse-1 { animation: pulse-ring 2s infinite; }
        .pulse-2 { animation: pulse-ring 2s infinite reverse; }
        @keyframes pulse-ring { 0%, 100% { stroke-opacity: 1; } 50% { stroke-opacity: 0.2; } }
      </style>
      <circle class="pulse-1" cx="12" cy="12" r="10"></circle>
      <circle class="pulse-2" cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
    </svg>`
  },
  {
    id: 'svg-anim-011',
    title: 'Rotating Sun',
    author: 'Weather',
    tags: ["animated", "sun", "weather", "light", "rotate"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .spin-sun { transform-origin: center; animation: spin-sun-anim 10s linear infinite; }
        @keyframes spin-sun-anim { 100% { transform: rotate(360deg); } }
      </style>
      <g class="spin-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-012',
    title: 'Ringing Bell',
    author: 'Notifications',
    tags: ["animated", "bell", "ring", "alert", "notification"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .ring-bell { transform-origin: top center; animation: ring-bell-anim 2s infinite; }
        @keyframes ring-bell-anim { 0%, 100% { transform: rotate(0); } 10%, 90% { transform: rotate(15deg); } 30%, 70% { transform: rotate(-15deg); } 50% { transform: rotate(10deg); } }
      </style>
      <g class="ring-bell">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-013',
    title: 'Rain Cloud',
    author: 'Weather',
    tags: ["animated", "cloud", "rain", "weather", "storm"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .rain-1 { animation: rain-drop 0.8s infinite linear; }
        .rain-2 { animation: rain-drop 0.9s infinite linear; }
        .rain-3 { animation: rain-drop 0.7s infinite linear; }
        @keyframes rain-drop { 0% { transform: translateY(-2px); } 100% { transform: translateY(4px); } }
      </style>
      <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path>
      <line class="rain-1" x1="8" y1="19" x2="8" y2="21"></line>
      <line class="rain-2" x1="12" y1="18" x2="12" y2="22"></line>
      <line class="rain-3" x1="16" y1="19" x2="16" y2="21"></line>
    </svg>`
  },
  {
    id: 'svg-anim-014',
    title: 'Blinking Eye',
    author: 'Watcher',
    tags: ["animated", "eye", "blink", "vision", "watch"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-on-surface">
      <style>
        .blink-eye { transform-origin: center; animation: blink-anim 4s infinite; }
        @keyframes blink-anim { 0%, 95%, 100% { transform: scaleY(1); } 97.5% { transform: scaleY(0.1); } }
      </style>
      <g class="blink-eye">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-015',
    title: 'Camera Flash',
    author: 'PhotoTech',
    tags: ["animated", "camera", "flash", "photo", "picture"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .flash-anim { animation: flash 3s infinite; }
        @keyframes flash { 0%, 100% { fill: transparent; } 50% { fill: #c0c1ff; } }
      </style>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle class="flash-anim" cx="12" cy="13" r="4"></circle>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>`
  },
  {
    id: 'svg-anim-016',
    title: 'Dual Cogs',
    author: 'Mechanic',
    tags: ["animated", "cogs", "gears", "settings", "spin"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .cog-1 { transform-origin: 8px 16px; animation: spin-gear-anim 4s linear infinite; }
        .cog-2 { transform-origin: 16px 8px; animation: spin-gear-anim 4s linear infinite reverse; }
        @keyframes spin-gear-anim { 100% { transform: rotate(360deg); } }
      </style>
      <g class="cog-1">
        <circle cx="8" cy="16" r="3"></circle>
        <path d="M8 11.5c-2.4 0-4.4 1.8-4.9 4l-1.3.3c-.2.9-.2 1.9 0 2.8l1.3.3c.5 2.2 2.5 4 4.9 4 2.4 0 4.4-1.8 4.9-4l1.3-.3c.2-.9.2-1.9 0-2.8l-1.3-.3c-.5-2.2-2.5-4-4.9-4z"></path>
      </g>
      <g class="cog-2">
        <circle cx="16" cy="8" r="3"></circle>
        <path d="M16 3.5c-2.4 0-4.4 1.8-4.9 4l-1.3.3c-.2.9-.2 1.9 0 2.8l1.3.3c.5 2.2 2.5 4 4.9 4 2.4 0 4.4-1.8 4.9-4l1.3-.3c.2-.9.2-1.9 0-2.8l-1.3-.3c-.5-2.2-2.5-4-4.9-4z"></path>
      </g>
    </svg>`
  },
  {
    id: 'svg-anim-017',
    title: 'Heartbeat EKG',
    author: 'Medical',
    tags: ["animated", "ekg", "heartbeat", "pulse", "health"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .ekg-line { animation: dash-ekg 1.5s infinite linear; }
        @keyframes dash-ekg { 0% { stroke-dashoffset: 35; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -35; } }
      </style>
      <polyline class="ekg-line" points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-dasharray="35" stroke-dashoffset="35"></polyline>
    </svg>`
  },
  {
    id: 'svg-anim-018',
    title: 'Searching Compass',
    author: 'Navigator',
    tags: ["animated", "compass", "search", "navigate", "location"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .compass-spin { transform-origin: center; animation: compass-anim 3s infinite ease-in-out; }
        @keyframes compass-anim { 0%, 100% { transform: rotate(0); } 30% { transform: rotate(45deg); } 70% { transform: rotate(-15deg); } }
      </style>
      <circle cx="12" cy="12" r="10"></circle>
      <polygon class="compass-spin" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>`
  },
  {
    id: 'svg-anim-019',
    title: 'Pulsing WiFi',
    author: 'NetworkCo',
    tags: ["animated", "wifi", "signal", "internet", "wireless"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .wifi-p1 { animation: wifi-fade 2s infinite 0.4s; }
        .wifi-p2 { animation: wifi-fade 2s infinite 0s; }
        .wifi-p3 { animation: wifi-fade 2s infinite 0.8s; }
        @keyframes wifi-fade { 0%, 100% { stroke-opacity: 0.3; } 50% { stroke-opacity: 1; } }
      </style>
      <path class="wifi-p1" d="M5 12.55a11 11 0 0 1 14.08 0" stroke-opacity="0.3"></path>
      <path class="wifi-p2" d="M1.42 9a16 16 0 0 1 21.16 0" stroke-opacity="0.3"></path>
      <path class="wifi-p3" d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke-opacity="0.3"></path>
      <circle cx="12" cy="20" r="1" fill="currentColor"></circle>
    </svg>`
  },
  {
    id: 'svg-anim-020',
    title: 'Upload Cloud',
    author: 'CloudOps',
    tags: ["animated", "upload", "cloud", "save", "arrow"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .upload-arrow { animation: upload-anim 1.5s infinite ease-in-out; }
        @keyframes upload-anim { 0%, 100% { transform: translateY(3px); } 50% { transform: translateY(-2px); } }
      </style>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
      <g class="upload-arrow">
        <polyline points="16 16 12 12 8 16"></polyline>
        <line x1="12" y1="12" x2="12" y2="21"></line>
      </g>
    </svg>`
  },
  {
    id: 'svg-3d-001',
    title: '3D Wireframe Cube',
    author: 'Geometry',
    tags: ["animated", "3d", "cube", "box", "wireframe"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .cube-spin { transform-origin: center; animation: cube-anim 3s infinite alternate ease-in-out; }
        @keyframes cube-anim { 0% { transform: rotate(0) scale(1); } 100% { transform: rotate(5deg) scale(1.05); } }
      </style>
      <g class="cube-spin">
        <polygon points="12 2 22 7.5 22 18.5 12 24 2 18.5 2 7.5 12 2"></polygon>
        <polyline points="2 7.5 12 13 22 7.5"></polyline>
        <line x1="12" y1="24" x2="12" y2="13"></line>
      </g>
    </svg>`
  },
  {
    id: 'svg-3d-002',
    title: 'Spinning Globe',
    author: 'Planet',
    tags: ["animated", "3d", "globe", "earth", "sphere"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .globe-spin { transform-origin: center; animation: globe-anim 8s linear infinite; }
        @keyframes globe-anim { 100% { transform: rotate(360deg); } }
      </style>
      <circle cx="12" cy="12" r="10"></circle>
      <ellipse class="globe-spin" cx="12" cy="12" rx="10" ry="4"></ellipse>
      <ellipse class="globe-spin" cx="12" cy="12" rx="4" ry="10"></ellipse>
    </svg>`
  },
  {
    id: 'svg-3d-003',
    title: 'Rotating Helix',
    author: 'Biology',
    tags: ["animated", "3d", "dna", "helix", "science"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-error">
      <style>
        .helix-path-1 { animation: helix-1 2s infinite ease-in-out; }
        .helix-path-2 { animation: helix-2 2s infinite ease-in-out; }
        @keyframes helix-1 { 0%, 100% { d: path('M4 2c0 10 16 10 16 20'); } 50% { d: path('M20 2c0 10 -16 10 -16 20'); } }
        @keyframes helix-2 { 0%, 100% { d: path('M20 2c0 10 -16 10 -16 20'); } 50% { d: path('M4 2c0 10 16 10 16 20'); } }
      </style>
      <path class="helix-path-1" d="M4 2c0 10 16 10 16 20"></path>
      <path class="helix-path-2" d="M20 2c0 10 -16 10 -16 20"></path>
      <line x1="8" y1="7" x2="16" y2="7"></line>
      <line x1="12" y1="12" x2="12" y2="12"></line>
      <line x1="8" y1="17" x2="16" y2="17"></line>
    </svg>`
  },
  {
    id: 'svg-3d-004',
    title: 'Infinity Trace',
    author: 'Math',
    tags: ["animated", "infinity", "loop", "trace", "endless"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-tertiary">
      <style>
        .trace-anim { animation: trace-line 4s infinite linear; }
        @keyframes trace-line { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: -100; } }
      </style>
      <path class="trace-anim" d="M12 12c-2-3-5-6-8-3s-1 6 3 6 6-4 9-7 7-2 6 2-3 7-7 4-5-5-8-8c-2-2-5-5-8-2s0 5 3 7 7-1 10-6z" stroke-dasharray="100" stroke-dashoffset="100"></path>
    </svg>`
  },
  {
    id: 'svg-3d-005',
    title: '3D Cylinder',
    author: 'Geometry',
    tags: ["animated", "3d", "cylinder", "database", "disk"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-secondary">
      <style>
        .cyl-anim { animation: cyl-bounce 2s infinite ease-in-out; }
        @keyframes cyl-bounce { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(2px); } }
      </style>
      <g class="cyl-anim">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
      </g>
    </svg>`
  },
  {
    id: 'svg-3d-006',
    title: 'Morphing Polygon',
    author: 'Shapes',
    tags: ["animated", "3d", "morph", "polygon", "shape"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary">
      <style>
        .morph-anim { animation: shape-morph 6s infinite; }
        @keyframes shape-morph { 
          0%, 100% { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); } 
          33% { clip-path: polygon(100% 0, 100% 100%, 0 100%); } 
          66% { clip-path: polygon(50% 0, 100% 50%, 50% 100%); } 
        }
      </style>
      <polygon class="morph-anim" points="12 2 22 22 2 22"></polygon>
    </svg>`
  },
  {
    id: 'svg-feather-001',
    title: 'Activity',
    author: 'FeatherIcons',
    tags: ["activity", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-002',
    title: 'Airplay',
    author: 'FeatherIcons',
    tags: ["airplay", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>`
  },
  {
    id: 'svg-feather-003',
    title: 'Alert Circle',
    author: 'FeatherIcons',
    tags: ["alert", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-004',
    title: 'Alert Octagon',
    author: 'FeatherIcons',
    tags: ["alert", "octagon", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-005',
    title: 'Alert Triangle',
    author: 'FeatherIcons',
    tags: ["alert", "triangle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  },
  {
    id: 'svg-feather-006',
    title: 'Align Center',
    author: 'FeatherIcons',
    tags: ["align", "center", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-007',
    title: 'Align Justify',
    author: 'FeatherIcons',
    tags: ["align", "justify", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-008',
    title: 'Align Left',
    author: 'FeatherIcons',
    tags: ["align", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-009',
    title: 'Align Right',
    author: 'FeatherIcons',
    tags: ["align", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-010',
    title: 'Anchor',
    author: 'FeatherIcons',
    tags: ["anchor", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>`
  },
  {
    id: 'svg-feather-011',
    title: 'Aperture',
    author: 'FeatherIcons',
    tags: ["aperture", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>`
  },
  {
    id: 'svg-feather-012',
    title: 'Archive',
    author: 'FeatherIcons',
    tags: ["archive", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-013',
    title: 'Arrow Down Circle',
    author: 'FeatherIcons',
    tags: ["arrow", "down", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-014',
    title: 'Arrow Down Left',
    author: 'FeatherIcons',
    tags: ["arrow", "down", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline></svg>`
  },
  {
    id: 'svg-feather-015',
    title: 'Arrow Down Right',
    author: 'FeatherIcons',
    tags: ["arrow", "down", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>`
  },
  {
    id: 'svg-feather-016',
    title: 'Arrow Down',
    author: 'FeatherIcons',
    tags: ["arrow", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-017',
    title: 'Arrow Left Circle',
    author: 'FeatherIcons',
    tags: ["arrow", "left", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-018',
    title: 'Arrow Left',
    author: 'FeatherIcons',
    tags: ["arrow", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`
  },
  {
    id: 'svg-feather-019',
    title: 'Arrow Right Circle',
    author: 'FeatherIcons',
    tags: ["arrow", "right", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-020',
    title: 'Arrow Right',
    author: 'FeatherIcons',
    tags: ["arrow", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
  },
  {
    id: 'svg-feather-021',
    title: 'Arrow Up Circle',
    author: 'FeatherIcons',
    tags: ["arrow", "up", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>`
  },
  {
    id: 'svg-feather-022',
    title: 'Arrow Up Left',
    author: 'FeatherIcons',
    tags: ["arrow", "up", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline></svg>`
  },
  {
    id: 'svg-feather-023',
    title: 'Arrow Up Right',
    author: 'FeatherIcons',
    tags: ["arrow", "up", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
  },
  {
    id: 'svg-feather-024',
    title: 'Arrow Up',
    author: 'FeatherIcons',
    tags: ["arrow", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-025',
    title: 'At Sign',
    author: 'FeatherIcons',
    tags: ["at", "sign", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>`
  },
  {
    id: 'svg-feather-026',
    title: 'Award',
    author: 'FeatherIcons',
    tags: ["award", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
  },
  {
    id: 'svg-feather-027',
    title: 'Bar Chart 2',
    author: 'FeatherIcons',
    tags: ["bar", "chart", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-028',
    title: 'Bar Chart',
    author: 'FeatherIcons',
    tags: ["bar", "chart", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-029',
    title: 'Battery Charging',
    author: 'FeatherIcons',
    tags: ["battery", "charging", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline></svg>`
  },
  {
    id: 'svg-feather-030',
    title: 'Battery',
    author: 'FeatherIcons',
    tags: ["battery", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>`
  },
  {
    id: 'svg-feather-031',
    title: 'Bell Off',
    author: 'FeatherIcons',
    tags: ["bell", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-032',
    title: 'Bell',
    author: 'FeatherIcons',
    tags: ["bell", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
  },
  {
    id: 'svg-feather-033',
    title: 'Bluetooth',
    author: 'FeatherIcons',
    tags: ["bluetooth", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>`
  },
  {
    id: 'svg-feather-034',
    title: 'Bold',
    author: 'FeatherIcons',
    tags: ["bold", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>`
  },
  {
    id: 'svg-feather-035',
    title: 'Book Open',
    author: 'FeatherIcons',
    tags: ["book", "open", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
  },
  {
    id: 'svg-feather-036',
    title: 'Book',
    author: 'FeatherIcons',
    tags: ["book", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
  },
  {
    id: 'svg-feather-037',
    title: 'Bookmark',
    author: 'FeatherIcons',
    tags: ["bookmark", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`
  },
  {
    id: 'svg-feather-038',
    title: 'Box',
    author: 'FeatherIcons',
    tags: ["box", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-039',
    title: 'Briefcase',
    author: 'FeatherIcons',
    tags: ["briefcase", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  },
  {
    id: 'svg-feather-040',
    title: 'Calendar',
    author: 'FeatherIcons',
    tags: ["calendar", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
  },
  {
    id: 'svg-feather-041',
    title: 'Camera Off',
    author: 'FeatherIcons',
    tags: ["camera", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path></svg>`
  },
  {
    id: 'svg-feather-042',
    title: 'Camera',
    author: 'FeatherIcons',
    tags: ["camera", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`
  },
  {
    id: 'svg-feather-043',
    title: 'Cast',
    author: 'FeatherIcons',
    tags: ["cast", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-044',
    title: 'Check Circle',
    author: 'FeatherIcons',
    tags: ["check", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
  },
  {
    id: 'svg-feather-045',
    title: 'Check Square',
    author: 'FeatherIcons',
    tags: ["check", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`
  },
  {
    id: 'svg-feather-046',
    title: 'Check',
    author: 'FeatherIcons',
    tags: ["check", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="20 6 9 17 4 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-047',
    title: 'Chevron Down',
    author: 'FeatherIcons',
    tags: ["chevron", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="6 9 12 15 18 9"></polyline></svg>`
  },
  {
    id: 'svg-feather-048',
    title: 'Chevron Left',
    author: 'FeatherIcons',
    tags: ["chevron", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 18 9 12 15 6"></polyline></svg>`
  },
  {
    id: 'svg-feather-049',
    title: 'Chevron Right',
    author: 'FeatherIcons',
    tags: ["chevron", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 18 15 12 9 6"></polyline></svg>`
  },
  {
    id: 'svg-feather-050',
    title: 'Chevron Up',
    author: 'FeatherIcons',
    tags: ["chevron", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="18 15 12 9 6 15"></polyline></svg>`
  },
  {
    id: 'svg-feather-051',
    title: 'Chevrons Down',
    author: 'FeatherIcons',
    tags: ["chevrons", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>`
  },
  {
    id: 'svg-feather-052',
    title: 'Chevrons Left',
    author: 'FeatherIcons',
    tags: ["chevrons", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>`
  },
  {
    id: 'svg-feather-053',
    title: 'Chevrons Right',
    author: 'FeatherIcons',
    tags: ["chevrons", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>`
  },
  {
    id: 'svg-feather-054',
    title: 'Chevrons Up',
    author: 'FeatherIcons',
    tags: ["chevrons", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>`
  },
  {
    id: 'svg-feather-055',
    title: 'Chrome',
    author: 'FeatherIcons',
    tags: ["chrome", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-056',
    title: 'Circle',
    author: 'FeatherIcons',
    tags: ["circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle></svg>`
  },
  {
    id: 'svg-feather-057',
    title: 'Clipboard',
    author: 'FeatherIcons',
    tags: ["clipboard", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`
  },
  {
    id: 'svg-feather-058',
    title: 'Clock',
    author: 'FeatherIcons',
    tags: ["clock", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
  },
  {
    id: 'svg-feather-059',
    title: 'Cloud Drizzle',
    author: 'FeatherIcons',
    tags: ["cloud", "drizzle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`
  },
  {
    id: 'svg-feather-060',
    title: 'Cloud Lightning',
    author: 'FeatherIcons',
    tags: ["cloud", "lightning", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>`
  },
  {
    id: 'svg-feather-061',
    title: 'Cloud Off',
    author: 'FeatherIcons',
    tags: ["cloud", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-062',
    title: 'Cloud Rain',
    author: 'FeatherIcons',
    tags: ["cloud", "rain", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`
  },
  {
    id: 'svg-feather-063',
    title: 'Cloud Snow',
    author: 'FeatherIcons',
    tags: ["cloud", "snow", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-064',
    title: 'Cloud',
    author: 'FeatherIcons',
    tags: ["cloud", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
  },
  {
    id: 'svg-feather-065',
    title: 'Code',
    author: 'FeatherIcons',
    tags: ["code", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    id: 'svg-feather-066',
    title: 'Codepen',
    author: 'FeatherIcons',
    tags: ["codepen", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>`
  },
  {
    id: 'svg-feather-067',
    title: 'Codesandbox',
    author: 'FeatherIcons',
    tags: ["codesandbox", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-068',
    title: 'Coffee',
    author: 'FeatherIcons',
    tags: ["coffee", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`
  },
  {
    id: 'svg-feather-069',
    title: 'Columns',
    author: 'FeatherIcons',
    tags: ["columns", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path></svg>`
  },
  {
    id: 'svg-feather-070',
    title: 'Command',
    author: 'FeatherIcons',
    tags: ["command", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>`
  },
  {
    id: 'svg-feather-071',
    title: 'Compass',
    author: 'FeatherIcons',
    tags: ["compass", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`
  },
  {
    id: 'svg-feather-072',
    title: 'Copy',
    author: 'FeatherIcons',
    tags: ["copy", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
  },
  {
    id: 'svg-feather-073',
    title: 'Corner Down Left',
    author: 'FeatherIcons',
    tags: ["corner", "down", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>`
  },
  {
    id: 'svg-feather-074',
    title: 'Corner Down Right',
    author: 'FeatherIcons',
    tags: ["corner", "down", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg>`
  },
  {
    id: 'svg-feather-075',
    title: 'Corner Left Down',
    author: 'FeatherIcons',
    tags: ["corner", "left", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path></svg>`
  },
  {
    id: 'svg-feather-076',
    title: 'Corner Left Up',
    author: 'FeatherIcons',
    tags: ["corner", "left", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path></svg>`
  },
  {
    id: 'svg-feather-077',
    title: 'Corner Right Down',
    author: 'FeatherIcons',
    tags: ["corner", "right", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>`
  },
  {
    id: 'svg-feather-078',
    title: 'Corner Right Up',
    author: 'FeatherIcons',
    tags: ["corner", "right", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path></svg>`
  },
  {
    id: 'svg-feather-079',
    title: 'Corner Up Left',
    author: 'FeatherIcons',
    tags: ["corner", "up", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>`
  },
  {
    id: 'svg-feather-080',
    title: 'Corner Up Right',
    author: 'FeatherIcons',
    tags: ["corner", "up", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>`
  },
  {
    id: 'svg-feather-081',
    title: 'Cpu',
    author: 'FeatherIcons',
    tags: ["cpu", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-082',
    title: 'Credit Card',
    author: 'FeatherIcons',
    tags: ["credit", "card", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`
  },
  {
    id: 'svg-feather-083',
    title: 'Crop',
    author: 'FeatherIcons',
    tags: ["crop", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path></svg>`
  },
  {
    id: 'svg-feather-084',
    title: 'Crosshair',
    author: 'FeatherIcons',
    tags: ["crosshair", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-085',
    title: 'Database',
    author: 'FeatherIcons',
    tags: ["database", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
  },
  {
    id: 'svg-feather-086',
    title: 'Delete',
    author: 'FeatherIcons',
    tags: ["delete", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-087',
    title: 'Disc',
    author: 'FeatherIcons',
    tags: ["disc", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-088',
    title: 'Divide Circle',
    author: 'FeatherIcons',
    tags: ["divide", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle></svg>`
  },
  {
    id: 'svg-feather-089',
    title: 'Divide Square',
    author: 'FeatherIcons',
    tags: ["divide", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>`
  },
  {
    id: 'svg-feather-090',
    title: 'Divide',
    author: 'FeatherIcons',
    tags: ["divide", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle></svg>`
  },
  {
    id: 'svg-feather-091',
    title: 'Dollar Sign',
    author: 'FeatherIcons',
    tags: ["dollar", "sign", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
  },
  {
    id: 'svg-feather-092',
    title: 'Download Cloud',
    author: 'FeatherIcons',
    tags: ["download", "cloud", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>`
  },
  {
    id: 'svg-feather-093',
    title: 'Download',
    author: 'FeatherIcons',
    tags: ["download", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
  },
  {
    id: 'svg-feather-094',
    title: 'Dribbble',
    author: 'FeatherIcons',
    tags: ["dribbble", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>`
  },
  {
    id: 'svg-feather-095',
    title: 'Droplet',
    author: 'FeatherIcons',
    tags: ["droplet", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`
  },
  {
    id: 'svg-feather-096',
    title: 'Edit 2',
    author: 'FeatherIcons',
    tags: ["edit", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`
  },
  {
    id: 'svg-feather-097',
    title: 'Edit 3',
    author: 'FeatherIcons',
    tags: ["edit", "3", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
  },
  {
    id: 'svg-feather-098',
    title: 'Edit',
    author: 'FeatherIcons',
    tags: ["edit", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`
  },
  {
    id: 'svg-feather-099',
    title: 'External Link',
    author: 'FeatherIcons',
    tags: ["external", "link", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  },
  {
    id: 'svg-feather-100',
    title: 'Eye Off',
    author: 'FeatherIcons',
    tags: ["eye", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-101',
    title: 'Eye',
    author: 'FeatherIcons',
    tags: ["eye", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-102',
    title: 'Facebook',
    author: 'FeatherIcons',
    tags: ["facebook", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
  },
  {
    id: 'svg-feather-103',
    title: 'Fast Forward',
    author: 'FeatherIcons',
    tags: ["fast", "forward", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>`
  },
  {
    id: 'svg-feather-104',
    title: 'Feather',
    author: 'FeatherIcons',
    tags: ["feather", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-105',
    title: 'Figma',
    author: 'FeatherIcons',
    tags: ["figma", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`
  },
  {
    id: 'svg-feather-106',
    title: 'File Minus',
    author: 'FeatherIcons',
    tags: ["file", "minus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-107',
    title: 'File Plus',
    author: 'FeatherIcons',
    tags: ["file", "plus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-108',
    title: 'File Text',
    author: 'FeatherIcons',
    tags: ["file", "text", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
  },
  {
    id: 'svg-feather-109',
    title: 'File',
    author: 'FeatherIcons',
    tags: ["file", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`
  },
  {
    id: 'svg-feather-110',
    title: 'Film',
    author: 'FeatherIcons',
    tags: ["film", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`
  },
  {
    id: 'svg-feather-111',
    title: 'Filter',
    author: 'FeatherIcons',
    tags: ["filter", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`
  },
  {
    id: 'svg-feather-112',
    title: 'Flag',
    author: 'FeatherIcons',
    tags: ["flag", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-113',
    title: 'Folder Minus',
    author: 'FeatherIcons',
    tags: ["folder", "minus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-114',
    title: 'Folder Plus',
    author: 'FeatherIcons',
    tags: ["folder", "plus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-115',
    title: 'Folder',
    author: 'FeatherIcons',
    tags: ["folder", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`
  },
  {
    id: 'svg-feather-116',
    title: 'Framer',
    author: 'FeatherIcons',
    tags: ["framer", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path></svg>`
  },
  {
    id: 'svg-feather-117',
    title: 'Frown',
    author: 'FeatherIcons',
    tags: ["frown", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-118',
    title: 'Gift',
    author: 'FeatherIcons',
    tags: ["gift", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`
  },
  {
    id: 'svg-feather-119',
    title: 'Git Branch',
    author: 'FeatherIcons',
    tags: ["git", "branch", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`
  },
  {
    id: 'svg-feather-120',
    title: 'Git Commit',
    author: 'FeatherIcons',
    tags: ["git", "commit", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-121',
    title: 'Git Merge',
    author: 'FeatherIcons',
    tags: ["git", "merge", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>`
  },
  {
    id: 'svg-feather-122',
    title: 'Git Pull Request',
    author: 'FeatherIcons',
    tags: ["git", "pull", "request", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>`
  },
  {
    id: 'svg-feather-123',
    title: 'Github',
    author: 'FeatherIcons',
    tags: ["github", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  },
  {
    id: 'svg-feather-124',
    title: 'Gitlab',
    author: 'FeatherIcons',
    tags: ["gitlab", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path></svg>`
  },
  {
    id: 'svg-feather-125',
    title: 'Globe',
    author: 'FeatherIcons',
    tags: ["globe", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  },
  {
    id: 'svg-feather-126',
    title: 'Grid',
    author: 'FeatherIcons',
    tags: ["grid", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
  },
  {
    id: 'svg-feather-127',
    title: 'Hard Drive',
    author: 'FeatherIcons',
    tags: ["hard", "drive", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-128',
    title: 'Hash',
    author: 'FeatherIcons',
    tags: ["hash", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`
  },
  {
    id: 'svg-feather-129',
    title: 'Headphones',
    author: 'FeatherIcons',
    tags: ["headphones", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
  },
  {
    id: 'svg-feather-130',
    title: 'Heart',
    author: 'FeatherIcons',
    tags: ["heart", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
  },
  {
    id: 'svg-feather-131',
    title: 'Help Circle',
    author: 'FeatherIcons',
    tags: ["help", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  },
  {
    id: 'svg-feather-132',
    title: 'Hexagon',
    author: 'FeatherIcons',
    tags: ["hexagon", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`
  },
  {
    id: 'svg-feather-133',
    title: 'Home',
    author: 'FeatherIcons',
    tags: ["home", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
  },
  {
    id: 'svg-feather-134',
    title: 'Image',
    author: 'FeatherIcons',
    tags: ["image", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
  },
  {
    id: 'svg-feather-135',
    title: 'Inbox',
    author: 'FeatherIcons',
    tags: ["inbox", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>`
  },
  {
    id: 'svg-feather-136',
    title: 'Info',
    author: 'FeatherIcons',
    tags: ["info", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  },
  {
    id: 'svg-feather-137',
    title: 'Instagram',
    author: 'FeatherIcons',
    tags: ["instagram", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
  },
  {
    id: 'svg-feather-138',
    title: 'Italic',
    author: 'FeatherIcons',
    tags: ["italic", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-139',
    title: 'Key',
    author: 'FeatherIcons',
    tags: ["key", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`
  },
  {
    id: 'svg-feather-140',
    title: 'Layers',
    author: 'FeatherIcons',
    tags: ["layers", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-141',
    title: 'Layout',
    author: 'FeatherIcons',
    tags: ["layout", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-142',
    title: 'Life Buoy',
    author: 'FeatherIcons',
    tags: ["life", "buoy", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>`
  },
  {
    id: 'svg-feather-143',
    title: 'Link 2',
    author: 'FeatherIcons',
    tags: ["link", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-144',
    title: 'Link',
    author: 'FeatherIcons',
    tags: ["link", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
  },
  {
    id: 'svg-feather-145',
    title: 'Linkedin',
    author: 'FeatherIcons',
    tags: ["linkedin", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
  },
  {
    id: 'svg-feather-146',
    title: 'List',
    author: 'FeatherIcons',
    tags: ["list", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-147',
    title: 'Loader',
    author: 'FeatherIcons',
    tags: ["loader", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`
  },
  {
    id: 'svg-feather-148',
    title: 'Lock',
    author: 'FeatherIcons',
    tags: ["lock", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
  },
  {
    id: 'svg-feather-149',
    title: 'Log In',
    author: 'FeatherIcons',
    tags: ["log", "in", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-150',
    title: 'Log Out',
    author: 'FeatherIcons',
    tags: ["log", "out", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-151',
    title: 'Mail',
    author: 'FeatherIcons',
    tags: ["mail", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  },
  {
    id: 'svg-feather-152',
    title: 'Map Pin',
    author: 'FeatherIcons',
    tags: ["map", "pin", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-153',
    title: 'Map',
    author: 'FeatherIcons',
    tags: ["map", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`
  },
  {
    id: 'svg-feather-154',
    title: 'Maximize 2',
    author: 'FeatherIcons',
    tags: ["maximize", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-155',
    title: 'Maximize',
    author: 'FeatherIcons',
    tags: ["maximize", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`
  },
  {
    id: 'svg-feather-156',
    title: 'Meh',
    author: 'FeatherIcons',
    tags: ["meh", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-157',
    title: 'Menu',
    author: 'FeatherIcons',
    tags: ["menu", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-158',
    title: 'Message Circle',
    author: 'FeatherIcons',
    tags: ["message", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
  },
  {
    id: 'svg-feather-159',
    title: 'Message Square',
    author: 'FeatherIcons',
    tags: ["message", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
  },
  {
    id: 'svg-feather-160',
    title: 'Mic Off',
    author: 'FeatherIcons',
    tags: ["mic", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-161',
    title: 'Mic',
    author: 'FeatherIcons',
    tags: ["mic", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-162',
    title: 'Minimize 2',
    author: 'FeatherIcons',
    tags: ["minimize", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`
  },
  {
    id: 'svg-feather-163',
    title: 'Minimize',
    author: 'FeatherIcons',
    tags: ["minimize", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>`
  },
  {
    id: 'svg-feather-164',
    title: 'Minus Circle',
    author: 'FeatherIcons',
    tags: ["minus", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-165',
    title: 'Minus Square',
    author: 'FeatherIcons',
    tags: ["minus", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-166',
    title: 'Minus',
    author: 'FeatherIcons',
    tags: ["minus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-167',
    title: 'Monitor',
    author: 'FeatherIcons',
    tags: ["monitor", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
  },
  {
    id: 'svg-feather-168',
    title: 'Moon',
    author: 'FeatherIcons',
    tags: ["moon", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
  },
  {
    id: 'svg-feather-169',
    title: 'More Horizontal',
    author: 'FeatherIcons',
    tags: ["more", "horizontal", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`
  },
  {
    id: 'svg-feather-170',
    title: 'More Vertical',
    author: 'FeatherIcons',
    tags: ["more", "vertical", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`
  },
  {
    id: 'svg-feather-171',
    title: 'Mouse Pointer',
    author: 'FeatherIcons',
    tags: ["mouse", "pointer", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>`
  },
  {
    id: 'svg-feather-172',
    title: 'Move',
    author: 'FeatherIcons',
    tags: ["move", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>`
  },
  {
    id: 'svg-feather-173',
    title: 'Music',
    author: 'FeatherIcons',
    tags: ["music", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-174',
    title: 'Navigation 2',
    author: 'FeatherIcons',
    tags: ["navigation", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`
  },
  {
    id: 'svg-feather-175',
    title: 'Navigation',
    author: 'FeatherIcons',
    tags: ["navigation", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>`
  },
  {
    id: 'svg-feather-176',
    title: 'Octagon',
    author: 'FeatherIcons',
    tags: ["octagon", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon></svg>`
  },
  {
    id: 'svg-feather-177',
    title: 'Package',
    author: 'FeatherIcons',
    tags: ["package", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-178',
    title: 'Paperclip',
    author: 'FeatherIcons',
    tags: ["paperclip", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>`
  },
  {
    id: 'svg-feather-179',
    title: 'Pause Circle',
    author: 'FeatherIcons',
    tags: ["pause", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-180',
    title: 'Pause',
    author: 'FeatherIcons',
    tags: ["pause", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
  },
  {
    id: 'svg-feather-181',
    title: 'Pen Tool',
    author: 'FeatherIcons',
    tags: ["pen", "tool", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
  },
  {
    id: 'svg-feather-182',
    title: 'Percent',
    author: 'FeatherIcons',
    tags: ["percent", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`
  },
  {
    id: 'svg-feather-183',
    title: 'Phone Call',
    author: 'FeatherIcons',
    tags: ["phone", "call", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-184',
    title: 'Phone Forwarded',
    author: 'FeatherIcons',
    tags: ["phone", "forwarded", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-185',
    title: 'Phone Incoming',
    author: 'FeatherIcons',
    tags: ["phone", "incoming", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-186',
    title: 'Phone Missed',
    author: 'FeatherIcons',
    tags: ["phone", "missed", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-187',
    title: 'Phone Off',
    author: 'FeatherIcons',
    tags: ["phone", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-188',
    title: 'Phone Outgoing',
    author: 'FeatherIcons',
    tags: ["phone", "outgoing", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-189',
    title: 'Phone',
    author: 'FeatherIcons',
    tags: ["phone", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  {
    id: 'svg-feather-190',
    title: 'Pie Chart',
    author: 'FeatherIcons',
    tags: ["pie", "chart", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`
  },
  {
    id: 'svg-feather-191',
    title: 'Play Circle',
    author: 'FeatherIcons',
    tags: ["play", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`
  },
  {
    id: 'svg-feather-192',
    title: 'Play',
    author: 'FeatherIcons',
    tags: ["play", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`
  },
  {
    id: 'svg-feather-193',
    title: 'Plus Circle',
    author: 'FeatherIcons',
    tags: ["plus", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-194',
    title: 'Plus Square',
    author: 'FeatherIcons',
    tags: ["plus", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-195',
    title: 'Plus',
    author: 'FeatherIcons',
    tags: ["plus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-196',
    title: 'Pocket',
    author: 'FeatherIcons',
    tags: ["pocket", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline></svg>`
  },
  {
    id: 'svg-feather-197',
    title: 'Power',
    author: 'FeatherIcons',
    tags: ["power", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-198',
    title: 'Printer',
    author: 'FeatherIcons',
    tags: ["printer", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`
  },
  {
    id: 'svg-feather-199',
    title: 'Radio',
    author: 'FeatherIcons',
    tags: ["radio", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`
  },
  {
    id: 'svg-feather-200',
    title: 'Refresh Ccw',
    author: 'FeatherIcons',
    tags: ["refresh", "ccw", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`
  },
  {
    id: 'svg-feather-201',
    title: 'Refresh Cw',
    author: 'FeatherIcons',
    tags: ["refresh", "cw", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`
  },
  {
    id: 'svg-feather-202',
    title: 'Repeat',
    author: 'FeatherIcons',
    tags: ["repeat", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`
  },
  {
    id: 'svg-feather-203',
    title: 'Rewind',
    author: 'FeatherIcons',
    tags: ["rewind", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>`
  },
  {
    id: 'svg-feather-204',
    title: 'Rotate Ccw',
    author: 'FeatherIcons',
    tags: ["rotate", "ccw", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>`
  },
  {
    id: 'svg-feather-205',
    title: 'Rotate Cw',
    author: 'FeatherIcons',
    tags: ["rotate", "cw", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>`
  },
  {
    id: 'svg-feather-206',
    title: 'Rss',
    author: 'FeatherIcons',
    tags: ["rss", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>`
  },
  {
    id: 'svg-feather-207',
    title: 'Save',
    author: 'FeatherIcons',
    tags: ["save", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`
  },
  {
    id: 'svg-feather-208',
    title: 'Scissors',
    author: 'FeatherIcons',
    tags: ["scissors", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'svg-feather-209',
    title: 'Search',
    author: 'FeatherIcons',
    tags: ["search", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
  },
  {
    id: 'svg-feather-210',
    title: 'Send',
    author: 'FeatherIcons',
    tags: ["send", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`
  },
  {
    id: 'svg-feather-211',
    title: 'Server',
    author: 'FeatherIcons',
    tags: ["server", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-212',
    title: 'Settings',
    author: 'FeatherIcons',
    tags: ["settings", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
  },
  {
    id: 'svg-feather-213',
    title: 'Share 2',
    author: 'FeatherIcons',
    tags: ["share", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`
  },
  {
    id: 'svg-feather-214',
    title: 'Share',
    author: 'FeatherIcons',
    tags: ["share", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-215',
    title: 'Shield Off',
    author: 'FeatherIcons',
    tags: ["shield", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-216',
    title: 'Shield',
    author: 'FeatherIcons',
    tags: ["shield", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
  },
  {
    id: 'svg-feather-217',
    title: 'Shopping Bag',
    author: 'FeatherIcons',
    tags: ["shopping", "bag", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`
  },
  {
    id: 'svg-feather-218',
    title: 'Shopping Cart',
    author: 'FeatherIcons',
    tags: ["shopping", "cart", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
  },
  {
    id: 'svg-feather-219',
    title: 'Shuffle',
    author: 'FeatherIcons',
    tags: ["shuffle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-220',
    title: 'Sidebar',
    author: 'FeatherIcons',
    tags: ["sidebar", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`
  },
  {
    id: 'svg-feather-221',
    title: 'Skip Back',
    author: 'FeatherIcons',
    tags: ["skip", "back", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>`
  },
  {
    id: 'svg-feather-222',
    title: 'Skip Forward',
    author: 'FeatherIcons',
    tags: ["skip", "forward", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`
  },
  {
    id: 'svg-feather-223',
    title: 'Slack',
    author: 'FeatherIcons',
    tags: ["slack", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>`
  },
  {
    id: 'svg-feather-224',
    title: 'Slash',
    author: 'FeatherIcons',
    tags: ["slash", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>`
  },
  {
    id: 'svg-feather-225',
    title: 'Sliders',
    author: 'FeatherIcons',
    tags: ["sliders", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-226',
    title: 'Smartphone',
    author: 'FeatherIcons',
    tags: ["smartphone", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-227',
    title: 'Smile',
    author: 'FeatherIcons',
    tags: ["smile", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
  },
  {
    id: 'svg-feather-228',
    title: 'Speaker',
    author: 'FeatherIcons',
    tags: ["speaker", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg>`
  },
  {
    id: 'svg-feather-229',
    title: 'Square',
    author: 'FeatherIcons',
    tags: ["square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`
  },
  {
    id: 'svg-feather-230',
    title: 'Star',
    author: 'FeatherIcons',
    tags: ["star", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  },
  {
    id: 'svg-feather-231',
    title: 'Stop Circle',
    author: 'FeatherIcons',
    tags: ["stop", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>`
  },
  {
    id: 'svg-feather-232',
    title: 'Sun',
    author: 'FeatherIcons',
    tags: ["sun", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
  },
  {
    id: 'svg-feather-233',
    title: 'Sunrise',
    author: 'FeatherIcons',
    tags: ["sunrise", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>`
  },
  {
    id: 'svg-feather-234',
    title: 'Sunset',
    author: 'FeatherIcons',
    tags: ["sunset", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>`
  },
  {
    id: 'svg-feather-235',
    title: 'Table',
    author: 'FeatherIcons',
    tags: ["table", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>`
  },
  {
    id: 'svg-feather-236',
    title: 'Tablet',
    author: 'FeatherIcons',
    tags: ["tablet", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-237',
    title: 'Tag',
    author: 'FeatherIcons',
    tags: ["tag", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`
  },
  {
    id: 'svg-feather-238',
    title: 'Target',
    author: 'FeatherIcons',
    tags: ["target", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`
  },
  {
    id: 'svg-feather-239',
    title: 'Terminal',
    author: 'FeatherIcons',
    tags: ["terminal", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`
  },
  {
    id: 'svg-feather-240',
    title: 'Thermometer',
    author: 'FeatherIcons',
    tags: ["thermometer", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`
  },
  {
    id: 'svg-feather-241',
    title: 'Thumbs Down',
    author: 'FeatherIcons',
    tags: ["thumbs", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>`
  },
  {
    id: 'svg-feather-242',
    title: 'Thumbs Up',
    author: 'FeatherIcons',
    tags: ["thumbs", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`
  },
  {
    id: 'svg-feather-243',
    title: 'Toggle Left',
    author: 'FeatherIcons',
    tags: ["toggle", "left", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-244',
    title: 'Toggle Right',
    author: 'FeatherIcons',
    tags: ["toggle", "right", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg>`
  },
  {
    id: 'svg-feather-245',
    title: 'Tool',
    author: 'FeatherIcons',
    tags: ["tool", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  },
  {
    id: 'svg-feather-246',
    title: 'Trash 2',
    author: 'FeatherIcons',
    tags: ["trash", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`
  },
  {
    id: 'svg-feather-247',
    title: 'Trash',
    author: 'FeatherIcons',
    tags: ["trash", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`
  },
  {
    id: 'svg-feather-248',
    title: 'Trello',
    author: 'FeatherIcons',
    tags: ["trello", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>`
  },
  {
    id: 'svg-feather-249',
    title: 'Trending Down',
    author: 'FeatherIcons',
    tags: ["trending", "down", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-250',
    title: 'Trending Up',
    author: 'FeatherIcons',
    tags: ["trending", "up", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`
  },
  {
    id: 'svg-feather-251',
    title: 'Triangle',
    author: 'FeatherIcons',
    tags: ["triangle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`
  },
  {
    id: 'svg-feather-252',
    title: 'Truck',
    author: 'FeatherIcons',
    tags: ["truck", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
  },
  {
    id: 'svg-feather-253',
    title: 'Tv',
    author: 'FeatherIcons',
    tags: ["tv", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>`
  },
  {
    id: 'svg-feather-254',
    title: 'Twitch',
    author: 'FeatherIcons',
    tags: ["twitch", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>`
  },
  {
    id: 'svg-feather-255',
    title: 'Twitter',
    author: 'FeatherIcons',
    tags: ["twitter", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`
  },
  {
    id: 'svg-feather-256',
    title: 'Type',
    author: 'FeatherIcons',
    tags: ["type", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-257',
    title: 'Umbrella',
    author: 'FeatherIcons',
    tags: ["umbrella", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path></svg>`
  },
  {
    id: 'svg-feather-258',
    title: 'Underline',
    author: 'FeatherIcons',
    tags: ["underline", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg>`
  },
  {
    id: 'svg-feather-259',
    title: 'Unlock',
    author: 'FeatherIcons',
    tags: ["unlock", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`
  },
  {
    id: 'svg-feather-260',
    title: 'Upload Cloud',
    author: 'FeatherIcons',
    tags: ["upload", "cloud", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>`
  },
  {
    id: 'svg-feather-261',
    title: 'Upload',
    author: 'FeatherIcons',
    tags: ["upload", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-262',
    title: 'User Check',
    author: 'FeatherIcons',
    tags: ["user", "check", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`
  },
  {
    id: 'svg-feather-263',
    title: 'User Minus',
    author: 'FeatherIcons',
    tags: ["user", "minus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>`
  },
  {
    id: 'svg-feather-264',
    title: 'User Plus',
    author: 'FeatherIcons',
    tags: ["user", "plus", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`
  },
  {
    id: 'svg-feather-265',
    title: 'User X',
    author: 'FeatherIcons',
    tags: ["user", "x", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>`
  },
  {
    id: 'svg-feather-266',
    title: 'User',
    author: 'FeatherIcons',
    tags: ["user", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
  },
  {
    id: 'svg-feather-267',
    title: 'Users',
    author: 'FeatherIcons',
    tags: ["users", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  {
    id: 'svg-feather-268',
    title: 'Video Off',
    author: 'FeatherIcons',
    tags: ["video", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-269',
    title: 'Video',
    author: 'FeatherIcons',
    tags: ["video", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
  },
  {
    id: 'svg-feather-270',
    title: 'Voicemail',
    author: 'FeatherIcons',
    tags: ["voicemail", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line></svg>`
  },
  {
    id: 'svg-feather-271',
    title: 'Volume 1',
    author: 'FeatherIcons',
    tags: ["volume", "1", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
  },
  {
    id: 'svg-feather-272',
    title: 'Volume 2',
    author: 'FeatherIcons',
    tags: ["volume", "2", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
  },
  {
    id: 'svg-feather-273',
    title: 'Volume X',
    author: 'FeatherIcons',
    tags: ["volume", "x", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-274',
    title: 'Volume',
    author: 'FeatherIcons',
    tags: ["volume", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>`
  },
  {
    id: 'svg-feather-275',
    title: 'Watch',
    author: 'FeatherIcons',
    tags: ["watch", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>`
  },
  {
    id: 'svg-feather-276',
    title: 'Wifi Off',
    author: 'FeatherIcons',
    tags: ["wifi", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-277',
    title: 'Wifi',
    author: 'FeatherIcons',
    tags: ["wifi", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`
  },
  {
    id: 'svg-feather-278',
    title: 'Wind',
    author: 'FeatherIcons',
    tags: ["wind", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`
  },
  {
    id: 'svg-feather-279',
    title: 'X Circle',
    author: 'FeatherIcons',
    tags: ["x", "circle", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-280',
    title: 'X Octagon',
    author: 'FeatherIcons',
    tags: ["x", "octagon", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-281',
    title: 'X Square',
    author: 'FeatherIcons',
    tags: ["x", "square", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`
  },
  {
    id: 'svg-feather-282',
    title: 'X',
    author: 'FeatherIcons',
    tags: ["x", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  },
  {
    id: 'svg-feather-283',
    title: 'Youtube',
    author: 'FeatherIcons',
    tags: ["youtube", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
  },
  {
    id: 'svg-feather-284',
    title: 'Zap Off',
    author: 'FeatherIcons',
    tags: ["zap", "off", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
  },
  {
    id: 'svg-feather-285',
    title: 'Zap',
    author: 'FeatherIcons',
    tags: ["zap", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  },
  {
    id: 'svg-feather-286',
    title: 'Zoom In',
    author: 'FeatherIcons',
    tags: ["zoom", "in", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`
  },
  {
    id: 'svg-feather-287',
    title: 'Zoom Out',
    author: 'FeatherIcons',
    tags: ["zoom", "out", "ui", "icon", "feather"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`
  },
,
  {
    id: 'untitled-ui-0',
    title: 'Untitled UI Icon 0',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.633 3.79739L7.87415 11.2853L5.81524 9.08553C5.43597 8.72793 4.83997 8.70626 4.40652 9.00968C3.9839 9.32393 3.8647 9.87659 4.12477 10.3209L6.56295 14.287C6.80135 14.6554 7.21313 14.883 7.6791 14.883C8.12339 14.883 8.54601 14.6554 8.78441 14.287C9.17451 13.7777 16.6191 4.9027 16.6191 4.9027C17.5944 3.90575 16.4132 3.02801 15.633 3.78655V3.79739Z" fill="#7F56D9"/>
</svg>`
  },
  {
    id: 'untitled-ui-1',
    title: 'Untitled UI Icon 1',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.633 3.79739L7.87415 11.2853L5.81524 9.08553C5.43597 8.72793 4.83997 8.70626 4.40652 9.00968C3.9839 9.32393 3.8647 9.87659 4.12477 10.3209L6.56295 14.287C6.80135 14.6554 7.21313 14.883 7.6791 14.883C8.12339 14.883 8.54601 14.6554 8.78441 14.287C9.17451 13.7777 16.6191 4.9027 16.6191 4.9027C17.5944 3.90575 16.4132 3.02801 15.633 3.78655V3.79739Z" fill="#7F56D9"/>
</svg>`
  },
  {
    id: 'untitled-ui-2',
    title: 'Untitled UI Icon 2',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="6.26367" y1="18.4759" x2="14.0117" y2="1.86023" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-3',
    title: 'Untitled UI Icon 3',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-4',
    title: 'Untitled UI Icon 4',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path opacity="0.12" d="M21.0001 11.5C21.0001 16.1944 17.1945 20 12.5001 20C11.4233 20 10.3933 19.7998 9.44527 19.4345C9.27193 19.3678 9.18527 19.3344 9.11635 19.3185C9.04856 19.3029 8.99949 19.2963 8.92997 19.2937C8.8593 19.291 8.78176 19.299 8.62668 19.315L3.50565 19.8444C3.01741 19.8948 2.77329 19.9201 2.62929 19.8322C2.50386 19.7557 2.41843 19.6279 2.39569 19.4828C2.36958 19.3161 2.48624 19.1002 2.71955 18.6684L4.35521 15.6408C4.48991 15.3915 4.55726 15.2668 4.58777 15.1469C4.61789 15.0286 4.62518 14.9432 4.61554 14.8214C4.60578 14.6981 4.55168 14.5376 4.44348 14.2166C4.15596 13.3636 4.00011 12.45 4.00011 11.5C4.00011 6.80558 7.80569 3 12.5001 3C17.1945 3 21.0001 6.80558 21.0001 11.5Z" fill="currentColor"/>
<path d="M10.5001 9.00224C10.6763 8.50136 11.0241 8.079 11.4818 7.80998C11.9396 7.54095 12.4778 7.4426 13.0011 7.53237C13.5245 7.62213 13.9991 7.89421 14.3411 8.30041C14.683 8.70661 14.8701 9.22072 14.8694 9.75168C14.8694 11.2506 12.621 12 12.621 12M12.65 15H12.66M12.5001 20C17.1945 20 21.0001 16.1944 21.0001 11.5C21.0001 6.80558 17.1945 3 12.5001 3C7.80569 3 4.00011 6.80558 4.00011 11.5C4.00011 12.45 4.15596 13.3636 4.44348 14.2166C4.55168 14.5376 4.60578 14.6981 4.61554 14.8214C4.62518 14.9432 4.61789 15.0286 4.58777 15.1469C4.55726 15.2668 4.48991 15.3915 4.35521 15.6408L2.71955 18.6684C2.48624 19.1002 2.36958 19.3161 2.39569 19.4828C2.41843 19.6279 2.50386 19.7557 2.62929 19.8322C2.77329 19.9201 3.01741 19.8948 3.50565 19.8444L8.62668 19.315C8.78176 19.299 8.8593 19.291 8.92997 19.2937C8.99949 19.2963 9.04856 19.3029 9.11635 19.3185C9.18527 19.3344 9.27193 19.3678 9.44527 19.4345C10.3933 19.7998 11.4233 20 12.5001 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-5',
    title: 'Untitled UI Icon 5',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-6',
    title: 'Untitled UI Icon 6',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-7',
    title: 'Untitled UI Icon 7',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-8',
    title: 'Untitled UI Icon 8',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-9',
    title: 'Untitled UI Icon 9',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'untitled-ui-10',
    title: 'Untitled UI Icon 10',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2097 18C10.6764 18 10.1697 17.8987 9.68969 17.696C9.20969 17.4933 8.78302 17.2107 8.40969 16.848C8.00435 16.9867 7.58302 17.056 7.14569 17.056C6.43102 17.056 5.76969 16.88 5.16169 16.528C4.55369 16.176 4.06302 15.696 3.68969 15.088C3.32702 14.48 3.14569 13.8027 3.14569 13.056C3.14569 12.7467 3.18835 12.4107 3.27369 12.048C2.84702 11.6533 2.51635 11.2 2.28169 10.688C2.04702 10.1653 1.92969 9.62133 1.92969 9.056C1.92969 8.48 2.05235 7.92533 2.29769 7.392C2.54302 6.85867 2.88435 6.4 3.32169 6.016C3.76969 5.62133 4.28702 5.34933 4.87369 5.2C4.99102 4.592 5.23635 4.048 5.60969 3.568C5.99369 3.07733 6.46302 2.69333 7.01769 2.416C7.57235 2.13867 8.16435 2 8.79369 2C9.32702 2 9.83369 2.10133 10.3137 2.304C10.7937 2.50667 11.2204 2.78933 11.5937 3.152C11.999 3.01333 12.4204 2.944 12.8577 2.944C13.5724 2.944 14.2337 3.12 14.8417 3.472C15.4497 3.824 15.935 4.304 16.2977 4.912C16.671 5.52 16.8577 6.19733 16.8577 6.944C16.8577 7.25333 16.815 7.58933 16.7297 7.952C17.1564 8.34667 17.487 8.80533 17.7217 9.328C17.9564 9.84 18.0737 10.3787 18.0737 10.944C18.0737 11.52 17.951 12.0747 17.7057 12.608C17.4604 13.1413 17.1137 13.6053 16.6657 14C16.2284 14.384 15.7164 14.6507 15.1297 14.8C15.0124 15.408 14.7617 15.952 14.3777 16.432C14.0044 16.9227 13.5404 17.3067 12.9857 17.584C12.431 17.8613 11.839 18 11.2097 18ZM7.25769 16C7.79102 16 8.25502 15.888 8.64969 15.664L11.6577 13.936C11.7644 13.8613 11.8177 13.76 11.8177 13.632V12.256L7.94569 14.48C7.71102 14.6187 7.47635 14.6187 7.24169 14.48L4.21769 12.736C4.21769 12.768 4.21235 12.8053 4.20169 12.848C4.20169 12.8907 4.20169 12.9547 4.20169 13.04C4.20169 13.584 4.32969 14.0853 4.58569 14.544C4.85235 14.992 5.22035 15.344 5.68969 15.6C6.15902 15.8667 6.68169 16 7.25769 16ZM7.41769 13.392C7.48169 13.424 7.54035 13.44 7.59369 13.44C7.64702 13.44 7.70035 13.424 7.75369 13.392L8.95369 12.704L5.09769 10.464C4.86302 10.3253 4.74569 10.1173 4.74569 9.84V6.368C4.21235 6.60267 3.78569 6.96533 3.46569 7.456C3.14569 7.936 2.98569 8.46933 2.98569 9.056C2.98569 9.57867 3.11902 10.08 3.38569 10.56C3.65235 11.04 3.99902 11.4027 4.42569 11.648L7.41769 13.392ZM11.2097 16.944C11.775 16.944 12.287 16.816 12.7457 16.56C13.2044 16.304 13.567 15.952 13.8337 15.504C14.1004 15.056 14.2337 14.5547 14.2337 14V10.544C14.2337 10.416 14.1804 10.32 14.0737 10.256L12.8577 9.552V14.016C12.8577 14.2933 12.7404 14.5013 12.5057 14.64L9.48169 16.384C10.0044 16.7573 10.5804 16.944 11.2097 16.944ZM11.8177 11.088V8.912L10.0097 7.888L8.18569 8.912V11.088L10.0097 12.112L11.8177 11.088ZM7.14569 5.984C7.14569 5.70667 7.26302 5.49867 7.49769 5.36L10.5217 3.616C9.99902 3.24267 9.42302 3.056 8.79369 3.056C8.22835 3.056 7.71635 3.184 7.25769 3.44C6.79902 3.696 6.43635 4.048 6.16969 4.496C5.91369 4.944 5.78569 5.44533 5.78569 6V9.44C5.78569 9.568 5.83902 9.66933 5.94569 9.744L7.14569 10.448V5.984ZM15.2737 13.632C15.807 13.3973 16.2284 13.0347 16.5377 12.544C16.8577 12.0533 17.0177 11.52 17.0177 10.944C17.0177 10.4213 16.8844 9.92 16.6177 9.44C16.351 8.96 16.0044 8.59733 15.5777 8.352L12.5857 6.624C12.5217 6.58133 12.463 6.56533 12.4097 6.576C12.3564 6.576 12.303 6.592 12.2497 6.624L11.0497 7.296L14.9217 9.552C15.039 9.616 15.1244 9.70133 15.1777 9.808C15.2417 9.904 15.2737 10.0213 15.2737 10.16V13.632ZM12.0577 5.504C12.2924 5.35467 12.527 5.35467 12.7617 5.504L15.8017 7.28C15.8017 7.20533 15.8017 7.10933 15.8017 6.992C15.8017 6.48 15.6737 5.99467 15.4177 5.536C15.1724 5.06667 14.815 4.69333 14.3457 4.416C13.887 4.13867 13.3537 4 12.7457 4C12.2124 4 11.7484 4.112 11.3537 4.336L8.34569 6.064C8.23902 6.13867 8.18569 6.24 8.18569 6.368V7.744L12.0577 5.504Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-11',
    title: 'Untitled UI Icon 11',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68092 12.639L7.83292 10.879L7.88092 10.719L7.83292 10.639H7.67292L7.14492 10.607L5.35292 10.559L3.78492 10.479L2.26492 10.399L1.88092 10.319L1.54492 9.83902L1.57692 9.59902L1.89692 9.39102L2.36092 9.42302L3.36892 9.50302L4.88892 9.59902L5.99292 9.66302L7.62492 9.85502H7.88092L7.91292 9.74302L7.83292 9.67902L7.76892 9.61502L6.18492 8.55902L4.48892 7.43902L3.59292 6.78302L3.11292 6.46302L2.87292 6.14302L2.77692 5.47102L3.20892 4.99102L3.80092 5.03902L3.94492 5.07102L4.53692 5.53502L5.81692 6.51102L7.46492 7.75902L7.70492 7.95102L7.80092 7.88702L7.81692 7.83902L7.70492 7.66302L6.82492 5.99902L5.86492 4.33502L5.43292 3.64702L5.32092 3.23102C5.27292 3.07102 5.25692 2.91102 5.25692 2.75102L5.73692 2.07902L6.02492 1.99902L6.69692 2.09502L6.95292 2.31902L7.36892 3.27902L8.02492 4.76702L9.06492 6.78302L9.38492 7.39102L9.54492 7.93502L9.59292 8.09502H9.70492V8.01502L9.78492 6.86302L9.94492 5.47102L10.1049 3.67902L10.1529 3.16702L10.4089 2.55902L10.8889 2.23902L11.3049 2.41502L11.6249 2.87902L11.5769 3.16702L11.4009 4.39902L10.9849 6.33502L10.7449 7.64702H10.8889L11.0489 7.47102L11.7049 6.60702L12.8089 5.23102L13.2889 4.67102L13.8649 4.07902L14.2329 3.79102H14.9209L15.4169 4.54302L15.1929 5.32702L14.4889 6.22302L13.8969 6.97502L13.0489 8.11102L12.5369 9.02302L12.5849 9.08702H12.6969L14.6169 8.67102L15.6409 8.49502L16.8569 8.28702L17.4169 8.54302L17.4809 8.79902L17.2569 9.34302L15.9449 9.66302L14.4089 9.98302L12.1209 10.511L12.0889 10.527L12.1209 10.575L13.1449 10.671L13.5929 10.703H14.6809L16.6969 10.863L17.2249 11.183L17.5289 11.615L17.4809 11.935L16.6649 12.351L15.5769 12.095L13.0169 11.487L12.1529 11.279H12.0249V11.343L12.7609 12.063L14.0889 13.263L15.7849 14.815L15.8649 15.199L15.6569 15.519L15.4329 15.487L13.9609 14.367L13.3849 13.887L12.1049 12.799H12.0249V12.911L12.3129 13.343L13.8809 15.695L13.9609 16.415L13.8489 16.639L13.4329 16.799L13.0009 16.703L12.0729 15.423L11.1129 13.983L10.3609 12.671L10.2809 12.735L9.81692 17.567L9.60892 17.807L9.12892 17.999L8.72892 17.679L8.50492 17.199L8.72892 16.207L8.98492 14.927L9.19292 13.903L9.38492 12.639L9.49692 12.223V12.191H9.38492L8.42492 13.519L6.98492 15.487L5.83292 16.703L5.56092 16.815L5.08092 16.575L5.12892 16.127L5.38492 15.759L6.98492 13.711L7.94492 12.447L8.58492 11.711L8.56892 11.631H8.52092L4.29692 14.383L3.54492 14.479L3.22492 14.159L3.25692 13.679L3.41692 13.519L4.69692 12.639H4.68092Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-12',
    title: 'Untitled UI Icon 12',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5473 6.0119H15.6608V2.44739C15.6607 2.32801 15.6268 2.2111 15.563 2.11022C15.4992 2.00933 15.408 1.92862 15.3002 1.87743C15.1915 1.82854 15.0715 1.81046 14.9532 1.82517C14.835 1.83988 14.723 1.88681 14.6296 1.96084L10.6285 5.29066V1.62966C10.6285 1.28621 10.3439 1 9.99962 1C9.65617 1 9.36997 1.28621 9.36997 1.62966V5.29884L5.37042 1.96084C5.27905 1.88289 5.16683 1.83345 5.04765 1.81862C4.92847 1.8038 4.80756 1.82424 4.69988 1.87743C4.59203 1.92862 4.5009 2.00933 4.43707 2.11022C4.37324 2.2111 4.33932 2.32801 4.33926 2.44739V6.01272H2.4511C2.2848 6.01379 2.12559 6.08027 2.00792 6.1978C1.89024 6.31532 1.82355 6.47444 1.82227 6.64074V13.3503C1.82227 13.6937 2.10766 13.9799 2.45192 13.9799H4.33844V17.5444C4.33844 17.7873 4.48072 18.0138 4.69824 18.1144C4.78235 18.1548 4.87478 18.175 4.96809 18.1733C5.11413 18.1716 5.25543 18.1212 5.3696 18.0302L9.37078 14.7012V18.3703C9.37078 18.7138 9.65536 19 9.99962 19C10.3431 19 10.6293 18.7138 10.6293 18.3703V14.7012L14.6296 18.0302C14.744 18.1214 14.8856 18.1718 15.032 18.1733C15.1247 18.1748 15.2166 18.1546 15.3002 18.1144C15.408 18.0632 15.4992 17.9825 15.563 17.8816C15.6268 17.7807 15.6607 17.6638 15.6608 17.5444V13.9791H17.5481C17.8916 13.9791 18.177 13.6945 18.177 13.3503V6.64074C18.1757 6.47422 18.1089 6.31489 17.9911 6.19722C17.8733 6.07954 17.7138 6.01297 17.5473 6.0119ZM14.4031 3.7893V6.0119H11.7357L14.4031 3.7893ZM5.59612 3.7893L8.26357 6.0119H5.59612V3.7893ZM3.07994 12.7222V7.2704H8.4819L4.52325 11.2282C4.46468 11.2866 4.41821 11.3559 4.3865 11.4322C4.35478 11.5086 4.33845 11.5904 4.33844 11.6731V12.7214H3.07994V12.7222ZM5.59612 13.3519V11.9339L9.37078 8.16009V13.0583L5.59612 16.2033V13.3511V13.3519ZM14.4031 16.2033L10.6285 13.0575V8.15928L14.4031 11.9339V16.2033ZM16.9185 12.7222H15.6608V11.6739C15.6608 11.5063 15.5938 11.3468 15.476 11.2299L11.5182 7.27121H16.9193L16.9185 12.7222Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-13',
    title: 'Untitled UI Icon 13',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.81623 1.00006C10.005 1.00006 10.1692 1.12898 10.2152 1.3121C10.3564 1.87222 10.5405 2.41856 10.7697 2.95003C11.3666 4.33676 12.1857 5.55055 13.2256 6.59048C14.266 7.63039 15.4794 8.44948 16.8661 9.04643C17.398 9.27557 17.9439 9.45971 18.504 9.60089C18.6871 9.64693 18.816 9.81114 18.816 9.99988C18.816 10.1886 18.6871 10.3528 18.504 10.3988C17.9439 10.54 17.3975 10.7242 16.8661 10.9533C15.4793 11.5503 14.2655 12.3694 13.2256 13.4093C12.1857 14.4497 11.3666 15.663 10.7697 17.0497C10.5405 17.5817 10.3564 18.1276 10.2152 18.6876C10.1692 18.8708 10.005 18.9997 9.81623 18.9997C9.62748 18.9997 9.46328 18.8708 9.41724 18.6876C9.27606 18.1276 9.09191 17.5812 8.86278 17.0497C8.26583 15.663 7.44723 14.4492 6.40683 13.4093C5.36637 12.3694 4.15311 11.5503 2.76637 10.9533C2.23439 10.7242 1.68856 10.54 1.12844 10.3988C0.945322 10.3528 0.816406 10.1886 0.816406 9.99988C0.81643 9.81114 0.945334 9.64693 1.12844 9.60089C1.68857 9.45971 2.2349 9.27559 2.76637 9.04643C4.15314 8.44946 5.3669 7.63042 6.40683 6.59048C7.44676 5.55055 8.2658 4.33679 8.86278 2.95003C9.09194 2.41804 9.27606 1.87222 9.41724 1.3121C9.46328 1.12899 9.62748 1.00009 9.81623 1.00006Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-14',
    title: 'Untitled UI Icon 14',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.725 12.325L14.3733 7.41083C14.6992 7.16917 15.165 7.26333 15.3208 7.6375C16.1375 9.61167 15.7725 11.9833 14.1458 13.6117C12.52 15.24 10.2567 15.5967 8.18833 14.7833L5.92917 15.8308C9.17 18.0483 13.105 17.5 15.5642 15.0367C17.515 13.0833 18.1192 10.4208 17.5542 8.02L17.5592 8.02583C16.74 4.49917 17.7608 3.08917 19.8508 0.206667C19.9008 0.138333 19.9508 0.07 20 0L17.2492 2.75417V2.74583L7.7225 12.3267M6.3525 13.5192C4.02583 11.2942 4.4275 7.85167 6.41167 5.86583C7.87917 4.39667 10.2842 3.79667 12.3833 4.67833L14.6375 3.63667C14.169 3.29201 13.6564 3.01174 13.1133 2.80333C11.7482 2.24458 10.2482 2.10199 8.80224 2.39351C7.35623 2.68502 6.02872 3.39762 4.98667 4.44167C2.87583 6.555 2.21167 9.805 3.35167 12.5783C4.20333 14.6508 2.8075 16.1167 1.40167 17.5967C0.9025 18.1217 0.4025 18.6458 0 19.2008L6.35 13.5217" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-15',
    title: 'Untitled UI Icon 15',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47939 0 0 4.47939 0 10C0 15.5206 4.47939 20 10 20C15.5098 20 20 15.5206 20 10C20 4.47939 15.5098 0 10 0ZM16.6052 4.60954C17.7983 6.06291 18.5141 7.91756 18.5358 9.92406C18.2538 9.86987 15.4338 9.295 12.5922 9.65294C12.5271 9.51194 12.4729 9.36006 12.4078 9.20825C12.2343 8.79613 12.0391 8.37312 11.8438 7.97181C14.9891 6.692 16.4208 4.84816 16.6052 4.60954ZM10 1.47506C12.1692 1.47506 14.154 2.28851 15.6616 3.62256C15.5097 3.83948 14.2191 5.56399 11.1822 6.70281C9.78306 4.13232 8.23213 2.0282 7.9935 1.70282C8.63338 1.55097 9.30588 1.47506 10 1.47506ZM6.36662 2.27766C6.59437 2.58134 8.11281 4.69631 9.53363 7.21256C5.5423 8.2755 2.01736 8.25381 1.63774 8.25381C2.19089 5.60738 3.98047 3.40564 6.36662 2.27766ZM1.45336 10.0109C1.45336 9.92406 1.45336 9.83731 1.45336 9.75056C1.82213 9.76137 5.96529 9.81562 10.2278 8.53581C10.4773 9.013 10.705 9.50106 10.9219 9.98913C10.8134 10.0217 10.6941 10.0542 10.5857 10.0867C6.18221 11.5076 3.83948 15.3904 3.64425 15.7158C2.2885 14.2082 1.45336 12.2018 1.45336 10.0109ZM10 18.5466C8.026 18.5466 6.20391 17.8742 4.76139 16.7462C4.91323 16.4317 6.64856 13.0911 11.4642 11.41C11.4859 11.3991 11.4968 11.3991 11.5184 11.3883C12.7223 14.5011 13.2104 17.1149 13.3406 17.8633C12.3102 18.308 11.1822 18.5466 10 18.5466ZM14.7614 17.0824C14.6746 16.5618 14.2191 14.0673 13.1019 10.9978C15.7809 10.5748 18.1236 11.269 18.4165 11.3666C18.0478 13.7419 16.6811 15.7917 14.7614 17.0824Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-16',
    title: 'Untitled UI Icon 16',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1385 18.75L8.72415 12.458L3.19798 18.75H0.860062L7.68691 10.9793L0.860062 1.25H6.86252L11.023 7.18013L16.2358 1.25H18.5737L12.0637 8.66084L19.1409 18.75H13.1385ZM15.742 16.9762H14.168L4.20761 3.02386H5.78181L9.77102 8.61047L10.4609 9.57989L15.742 16.9762Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-17',
    title: 'Untitled UI Icon 17',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8980_1861)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8980_1861">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    id: 'untitled-ui-18',
    title: 'Untitled UI Icon 18',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2344_514074)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1047 0.5C18.8752 0.500113 19.4999 1.12475 19.5 1.89531V18.1047C19.4999 18.8752 18.8752 19.4999 18.1047 19.5H1.89531C1.12475 19.4999 0.500113 18.8752 0.5 18.1047V1.89531C0.500112 1.12475 1.12475 0.500112 1.89531 0.5H18.1047ZM4.54678 15.6759H10.0315L10.038 7.46357H12.7739L12.7665 15.6833H15.5089L15.5154 4.72861L4.56069 4.7147L4.54678 15.6759Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2344_514074">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    id: 'untitled-ui-19',
    title: 'Untitled UI Icon 19',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1915_18683)">
<path d="M0.303095 11.4121L0.35158 4.14054C0.360065 2.82418 1.28067 1.6957 2.55158 1.44418L9.574 0.0520599C11.2613 -0.282486 12.8273 1.03812 12.8164 2.78539L12.7679 10.0581C12.7589 11.3739 11.8382 12.5018 10.5673 12.7539L3.54491 14.146C1.85764 14.4805 0.29158 13.1599 0.303095 11.4121Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M3.74364 14.3133L3.79212 7.04062C3.8 5.72546 4.72122 4.59759 5.99212 4.34546L13.0145 2.95395C14.7018 2.6194 16.2679 3.9394 16.2564 5.68728L16.2079 12.96C16.1994 14.2758 15.2788 15.4036 14.0079 15.6558L6.98546 17.0479C5.29818 17.3818 3.73212 16.0618 3.74364 14.3146V14.3133Z" fill="currentColor" fill-opacity="0.5"/>
<path d="M7.18424 17.2146L7.23273 9.94183C7.24121 8.62547 8.16182 7.4982 9.43273 7.24608L16.4552 5.85396C18.1424 5.51941 19.7085 6.84002 19.697 8.58729L19.6485 15.86C19.64 17.1764 18.7194 18.3043 17.4485 18.5558L10.4261 19.9479C8.73879 20.2824 7.17273 18.9618 7.18364 17.2146H7.18424Z" fill="currentColor" fill-opacity="0.8"/>
</g>
<defs>
<clipPath id="clip0_1915_18683">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    id: 'untitled-ui-20',
    title: 'Untitled UI Icon 20',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1915_18688)">
<path d="M9.99976 2.1408C12.5608 2.1408 12.8641 2.15204 13.8713 2.19697C14.8073 2.23815 15.3128 2.39541 15.6498 2.52646C16.0953 2.69869 16.4174 2.90837 16.7506 3.24161C17.0876 3.57859 17.2935 3.89684 17.4657 4.34241C17.5968 4.67939 17.754 5.1886 17.7952 6.12091C17.8402 7.13185 17.8514 7.43513 17.8514 9.99244C17.8514 12.5535 17.8402 12.8568 17.7952 13.864C17.754 14.8 17.5968 15.3055 17.4657 15.6425C17.2935 16.088 17.0838 16.41 16.7506 16.7433C16.4136 17.0802 16.0953 17.2862 15.6498 17.4584C15.3128 17.5895 14.8036 17.7467 13.8713 17.7879C12.8603 17.8328 12.5571 17.8441 9.99976 17.8441C7.43871 17.8441 7.13543 17.8328 6.12823 17.7879C5.19218 17.7467 4.68671 17.5895 4.34973 17.4584C3.90417 17.2862 3.58216 17.0765 3.24893 16.7433C2.91195 16.4063 2.70601 16.088 2.53378 15.6425C2.40273 15.3055 2.24548 14.7963 2.20429 13.864C2.15936 12.853 2.14813 12.5497 2.14813 9.99244C2.14813 7.43139 2.15936 7.12811 2.20429 6.12091C2.24548 5.18486 2.40273 4.67939 2.53378 4.34241C2.70601 3.89684 2.91569 3.57484 3.24893 3.24161C3.58591 2.90463 3.90417 2.69869 4.34973 2.52646C4.68671 2.39541 5.19592 2.23815 6.12823 2.19697C7.13543 2.15204 7.43871 2.1408 9.99976 2.1408ZM9.99976 0.414719C7.39752 0.414719 7.07178 0.425951 6.0496 0.470882C5.03118 0.515813 4.33101 0.680558 3.72444 0.916444C3.09167 1.16356 2.55625 1.48931 2.02457 2.02473C1.48914 2.55641 1.1634 3.09184 0.916277 3.72087C0.680391 4.33117 0.515645 5.0276 0.470715 6.04603C0.425784 7.07194 0.414551 7.39769 0.414551 9.99992C0.414551 12.6022 0.425784 12.9279 0.470715 13.9501C0.515645 14.9685 0.680391 15.6687 0.916277 16.2752C1.1634 16.908 1.48914 17.4434 2.02457 17.9751C2.55625 18.5068 3.09167 18.8363 3.7207 19.0797C4.33101 19.3155 5.02743 19.4803 6.04586 19.5252C7.06803 19.5702 7.39378 19.5814 9.99601 19.5814C12.5982 19.5814 12.924 19.5702 13.9462 19.5252C14.9646 19.4803 15.6648 19.3155 16.2713 19.0797C16.9004 18.8363 17.4358 18.5068 17.9675 17.9751C18.4991 17.4434 18.8286 16.908 19.072 16.279C19.3079 15.6687 19.4726 14.9723 19.5176 13.9538C19.5625 12.9316 19.5737 12.6059 19.5737 10.0037C19.5737 7.40144 19.5625 7.07569 19.5176 6.05352C19.4726 5.03509 19.3079 4.33492 19.072 3.72835C18.8361 3.09184 18.5104 2.55641 17.9749 2.02473C17.4433 1.49305 16.9078 1.16356 16.2788 0.920188C15.6685 0.684302 14.9721 0.519557 13.9537 0.474626C12.9277 0.425951 12.602 0.414719 9.99976 0.414719Z" fill="currentColor"/>
<path d="M9.99976 5.07627C7.28145 5.07627 5.07611 7.28162 5.07611 9.99992C5.07611 12.7182 7.28145 14.9236 9.99976 14.9236C12.7181 14.9236 14.9234 12.7182 14.9234 9.99992C14.9234 7.28162 12.7181 5.07627 9.99976 5.07627ZM9.99976 13.1937C8.23623 13.1937 6.80594 11.7635 6.80594 9.99992C6.80594 8.2364 8.23623 6.8061 9.99976 6.8061C11.7633 6.8061 13.1936 8.2364 13.1936 9.99992C13.1936 11.7635 11.7633 13.1937 9.99976 13.1937Z" fill="currentColor"/>
<path d="M16.2676 4.88154C16.2676 5.51805 15.7509 6.03101 15.1181 6.03101C14.4816 6.03101 13.9686 5.51431 13.9686 4.88154C13.9686 4.24502 14.4853 3.73206 15.1181 3.73206C15.7509 3.73206 16.2676 4.24876 16.2676 4.88154Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1915_18688">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    id: 'untitled-ui-21',
    title: 'Untitled UI Icon 21',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8008 6.00005C19.8008 6.00005 19.6055 4.62114 19.0039 4.01567C18.2422 3.2188 17.3906 3.21489 17 3.16801C14.2031 2.96489 10.0039 2.96489 10.0039 2.96489H9.99609C9.99609 2.96489 5.79687 2.96489 3 3.16801C2.60938 3.21489 1.75781 3.2188 0.996094 4.01567C0.394531 4.62114 0.203125 6.00005 0.203125 6.00005C0.203125 6.00005 0 7.62114 0 9.23833V10.754C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7735 2.75391 16.7461 3.19922 16.8321C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0235 17 16.8243C17.3906 16.7774 18.2422 16.7735 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.754V9.23833C20 7.62114 19.8008 6.00005 19.8008 6.00005ZM7.93359 12.5938V6.9727L13.3359 9.79301L7.93359 12.5938Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'untitled-ui-22',
    title: 'Untitled UI Icon 22',
    author: 'Untitled UI',
    tags: ["untitledui", "icon", "free"],
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1915_18693)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29167 1.66667C6.67791 1.66667 6.09296 1.90524 5.66456 2.32412C5.23679 2.74239 5 3.30564 5 3.88889C5 4.47214 5.23679 5.03539 5.66456 5.45365C6.09296 5.87254 6.67791 6.11111 7.29167 6.11111H9.58334V1.66667H7.29167ZM11.25 1.66667V6.11111H13.5417C13.8452 6.11111 14.1453 6.05263 14.4248 5.93947C14.7042 5.82631 14.9568 5.66093 15.1688 5.45365C15.3808 5.24643 15.5478 5.00142 15.6615 4.73314C15.7751 4.4649 15.8333 4.17808 15.8333 3.88889C15.8333 3.5997 15.7751 3.31287 15.6615 3.04463C15.5478 2.77635 15.3808 2.53136 15.1688 2.32412C14.9568 2.11685 14.7042 1.95148 14.4248 1.83832C14.1453 1.72514 13.8452 1.66667 13.5417 1.66667H11.25ZM15.9903 6.94445C16.1103 6.85159 16.2252 6.75176 16.334 6.64533C16.7024 6.28509 16.9957 5.85641 17.1961 5.38326C17.3966 4.91007 17.5 4.40222 17.5 3.88889C17.5 3.37556 17.3966 2.86772 17.1961 2.39452C16.9957 1.92137 16.7024 1.49268 16.334 1.13245C15.9656 0.772247 15.5293 0.487487 15.0504 0.293534C14.5715 0.0995933 14.0589 0 13.5417 0H7.29167C6.24782 0 5.24306 0.405276 4.49936 1.13245C3.75503 1.86023 3.33334 2.85137 3.33334 3.88889C3.33334 4.92641 3.75503 5.91754 4.49936 6.64533C4.60851 6.75206 4.72329 6.85185 4.84299 6.94444C4.72329 7.03704 4.60851 7.13683 4.49936 7.24356C3.75503 7.97135 3.33334 8.9625 3.33334 10C3.33334 11.0375 3.75503 12.0287 4.49936 12.7564C4.60852 12.8632 4.72329 12.963 4.84299 13.0556C4.72329 13.1482 4.60852 13.2479 4.49936 13.3547C3.75503 14.0825 3.33334 15.0736 3.33334 16.1111C3.33334 17.1487 3.75503 18.1397 4.49936 18.8676C5.24306 19.5947 6.24782 20 7.29167 20C8.3355 20 9.34025 19.5947 10.084 18.8676C10.8283 18.1397 11.25 17.1487 11.25 16.1111V13.1709C11.4935 13.3408 11.7561 13.4832 12.0329 13.5953C12.5118 13.7893 13.0244 13.8889 13.5417 13.8889C14.0589 13.8889 14.5715 13.7893 15.0504 13.5953C15.5293 13.4014 15.9656 13.1167 16.334 12.7564C16.7024 12.3962 16.9957 11.9675 17.1961 11.4943C17.3966 11.0212 17.5 10.5133 17.5 10C17.5 9.48667 17.3966 8.97883 17.1961 8.50567C16.9957 8.03248 16.7024 7.6038 16.334 7.24356C16.2252 7.13713 16.1103 7.0373 15.9903 6.94445ZM9.58334 12.2223V7.77777H7.29167C6.67791 7.77777 6.09296 8.01635 5.66456 8.43525C5.23679 8.8535 5 9.41675 5 10C5 10.5832 5.23679 11.1465 5.66456 11.5647C6.09296 11.9837 6.67791 12.2223 7.29167 12.2223H9.58334ZM9.58334 13.8889H7.29167C6.67791 13.8889 6.09296 14.1275 5.66456 14.5463C5.23679 14.9646 5 15.5278 5 16.1111C5 16.6943 5.23679 17.2576 5.66456 17.6759C6.09296 18.0947 6.67791 18.3333 7.29167 18.3333C7.90543 18.3333 8.49034 18.0947 8.91875 17.6759C9.34659 17.2576 9.58334 16.6943 9.58334 16.1111V13.8889ZM13.5417 7.77777C13.2382 7.77777 12.938 7.83625 12.6586 7.94943C12.3792 8.06258 12.1265 8.22797 11.9146 8.43525C11.7026 8.6425 11.5355 8.8875 11.4218 9.15575C11.3083 9.424 11.25 9.71083 11.25 10C11.25 10.2892 11.3083 10.576 11.4218 10.8442C11.5355 11.1125 11.7026 11.3575 11.9146 11.5647C12.1265 11.772 12.3792 11.9374 12.6586 12.0506C12.938 12.1637 13.2382 12.2223 13.5417 12.2223C13.8452 12.2223 14.1453 12.1637 14.4248 12.0506C14.7042 11.9374 14.9568 11.772 15.1688 11.5647C15.3808 11.3575 15.5478 11.1125 15.6615 10.8442C15.7751 10.576 15.8333 10.2892 15.8333 10C15.8333 9.71083 15.7751 9.424 15.6615 9.15575C15.5478 8.8875 15.3808 8.6425 15.1688 8.43525C14.9568 8.22797 14.7042 8.06258 14.4248 7.94943C14.1453 7.83625 13.8452 7.77777 13.5417 7.77777Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1915_18693">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
  }
];

window.svgeniusLibrary = svgeniusLibrary;
