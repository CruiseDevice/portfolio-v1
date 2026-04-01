// Prominent paper textures for aged-paper aesthetic

// Primary grain texture - MORE PROMINENT
export const paperGrainSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
  <filter id='paperGrain'>
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/>
    <feColorMatrix type='saturate' values='0'/>
    <feComponentTransfer>
      <feFuncA type='linear' slope='0.15'/> <!-- DOUBLED for visibility -->
    </feComponentTransfer>
  </filter>
  <rect width='100%' height='100%' filter='url(#paperGrain)'/>
</svg>`;

// Fiber texture - adds directional paper fiber
export const paperFiberSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
  <defs>
    <pattern id='fiberPattern' patternUnits='userSpaceOnUse' width='100' height='100'>
      <line x1='0' y1='10' x2='100' y2='10' stroke='rgba(0,0,0,0.02)' stroke-width='0.5'/>
      <line x1='0' y1='35' x2='100' y2='35' stroke='rgba(0,0,0,0.015)' stroke-width='0.5'/>
      <line x1='0' y1='60' x2='100' y2='60' stroke='rgba(0,0,0,0.02)' stroke-width='0.5'/>
      <line x1='0' y1='85' x2='100' y2='85' stroke='rgba(0,0,0,0.015)' stroke-width='0.5'/>
    </pattern>
  </defs>
  <rect width='100%' height='100%' fill='url(#fiberPattern)'/>
</svg>`;

// Foxing (age spots) texture
export const foxingSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='foxing'>
    <feTurbulence type='turbulence' baseFrequency='0.02' numOctaves='3' seed='5'/>
    <feColorMatrix type='matrix' values='0 0 0 0 0.6  0 0 0 0 0.5  0 0 0 0 0.4  0 0 0 0.08 0'/>
    <feComposite operator='in' in2='SourceGraphic'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#foxing)'/>
</svg>`;

export const paperGrainURL = `data:image/svg+xml;base64,${btoa(paperGrainSVG)}`;
export const paperFiberURL = `data:image/svg+xml;base64,${btoa(paperFiberSVG)}`;
export const foxingURL = `data:image/svg+xml;base64,${btoa(foxingSVG)}`;
