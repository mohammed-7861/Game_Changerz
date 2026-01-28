
export function SoccerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-sky-100 to-white"></div>
      
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
        <defs>
          {/* Refined gradient definitions */}
          <linearGradient id="blueDepth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.16 }} />
            <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 0.22 }} />
          </linearGradient>
          
          <linearGradient id="greenAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0.20 }} />
            <stop offset="100%" style={{ stopColor: '#16a34a', stopOpacity: 0.12 }} />
          </linearGradient>
          
          <linearGradient id="yellowHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.32 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.18 }} />
          </linearGradient>
          
          <linearGradient id="whiteOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        
        {/* FOUNDATION LAYER: Large blue diagonal - main structural element (scale: XL) */}
        <g transform="rotate(-18 720 450)">
          <path 
            d="M 100 800 L 1000 200 L 1200 280 L 300 880 Z" 
            fill="url(#blueDepth)"
          />
        </g>
        
        {/* PRIMARY ACCENT: Major green sweep - bottom left (scale: L, positioned at 1/4 width) */}
        <g transform="rotate(-18 360 650)">
          <path 
            d="M -100 700 L 500 400 L 650 460 L 50 760 Z" 
            fill="url(#greenAccent)"
          />
        </g>
        
        {/* SECONDARY ACCENT: Green diagonal stripe - top right (scale: M, positioned at 3/4 width) */}
        <g transform="rotate(-18 1080 300)">
          <rect 
            x="980" 
            y="100" 
            width="200" 
            height="400" 
            fill="url(#greenAccent)" 
            opacity="0.7"
          />
        </g>
        
        {/* RHYTHM STRIPE 1: Blue accent band (scale: M, 1/3 position) */}
        <g transform="rotate(-18 480 450)">
          <rect 
            x="400" 
            y="0" 
            width="160" 
            height="900" 
            fill="url(#blueDepth)" 
            opacity="0.4"
          />
        </g>
        
        {/* RHYTHM STRIPE 2: Thin green accent (scale: S, creates visual spacing at 1/2 width) */}
        <g transform="rotate(-18 720 450)">
          <rect 
            x="680" 
            y="-50" 
            width="80" 
            height="1000" 
            fill="url(#greenAccent)" 
            opacity="0.5"
          />
        </g>
        
        {/* LIGHTNING ACCENT 1: Primary zig-zag (yellow) - upper left focal point (scale: M) */}
        <g transform="rotate(-18 300 200)">
          <path 
            d="M 240 80 
               L 300 220 
               L 270 224 
               L 320 340 
               L 285 344 
               L 340 480 
               L 260 440 
               L 220 320 
               L 250 324 
               L 200 208 
               L 230 204 Z" 
            fill="url(#yellowHighlight)"
          />
        </g>
        
        {/* LIGHTNING ACCENT 2: Secondary zig-zag (blue) - right side balance (scale: L) */}
        <g transform="rotate(-18 1120 500)">
          <path 
            d="M 1040 300 
               L 1120 500 
               L 1080 505 
               L 1160 700 
               L 1440 580 
               L 1440 300 Z" 
            fill="url(#blueDepth)"
            opacity="0.65"
          />
        </g>
        
        {/* LIGHTNING ACCENT 3: Small detail zig-zag (yellow) - lower right (scale: S) */}
        <g transform="rotate(-18 1100 750)">
          <path 
            d="M 1060 680 
               L 1100 770 
               L 1080 773 
               L 1115 850 
               L 1090 853 
               L 1130 940 
               L 1080 910 
               L 1050 840 
               L 1070 843 
               L 1035 768 
               L 1055 765 Z" 
            fill="url(#yellowHighlight)"
            opacity="0.85"
          />
        </g>
        
        {/* DEPTH LAYER: Large background blue anchor - bottom right corner (scale: XL) */}
        <g transform="rotate(-18 1200 750)">
          <path 
            d="M 900 800 L 1440 500 L 1440 1000 L 900 1000 Z" 
            fill="url(#blueDepth)"
            opacity="0.3"
          />
        </g>
        
        {/* TEXTURAL LAYER: Precise diagonal line pattern (reinforces 18-degree system) */}
        <defs>
          <pattern id="diagonalLines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
            <line x1="0" y1="0" x2="0" y2="100" stroke="#0284c7" strokeWidth="1.5" opacity="0.05" />
            <line x1="33" y1="0" x2="33" y2="100" stroke="#0284c7" strokeWidth="1" opacity="0.04" />
            <line x1="66" y1="0" x2="66" y2="100" stroke="#0284c7" strokeWidth="0.5" opacity="0.03" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        
        {/* READABILITY OVERLAY: Enhanced gradient for optimal text contrast */}
        <rect width="100%" height="60%" fill="url(#whiteOverlay)" />
      </svg>
    </div>
  );
}