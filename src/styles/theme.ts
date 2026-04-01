// Academic theme colors - refined, paper-inspired palette
export const lightTheme = {
  colors: {
    // Background colors - warm aged paper palette
    background: '#F7F4ED',      // Warm cream (aged paper)
    backgroundAlt: '#F0EBE0',   // Slightly darker aged paper
    backgroundCard: '#FFFFF0',  // Ivory-white (new pages)

    // Text colors - warm ink tones
    text: {
      primary: '#2C2825',       // Warm charcoal (ink)
      secondary: '#4A4540',     // Softened black
      muted: '#6B6560',         // Aged pencil graphite
      subtle: '#8B8B88',
      inverse: '#F7F4ED'
    },

    // Accent colors - leather binding tones
    accent: {
      primary: '#8B4513',       // Saddle brown (leather binding)
      secondary: '#D2691E',     // Chocolate (aged leather)
      highlight: '#DEB887',     // Burlywood (parchment highlights)
      hover: '#A0522D'          // Sienna (hover state)
    },

    // Border colors - warm brown tones
    border: {
      light: 'rgba(139, 69, 19, 0.1)',
      medium: 'rgba(139, 69, 19, 0.2)',
      dark: 'rgba(139, 69, 19, 0.3)'
    },

    // Ink colors for annotations
    ink: {
      red: '#A52A2A',           // Red editing pen
      blue: '#1E90FF',          // Blue grading pen
      green: '#228B22',         // Green commentary
      pencil: '#6B6560'         // Pencil notes
    },

    // Semantic colors
    success: '#4A6741',
    info: '#2C5282',
    warning: '#9A7B4F',
    error: '#A14141'
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '80px',
    headerCompact: '50px',
    headerOffset: '120px'
  },

  typography: {
    fontFamily: {
      display: '"Crimson Pro", "Libre Baskerville", serif', // For hero, titles - variable width
      body: '"Source Serif Pro", Georgia, serif',          // For paragraph text - variable width
      mono: '"IBM Plex Mono", "JetBrains Mono", monospace', // For code, metadata
      handwriting: [
        '"Caveat"',  // Primary marginalia - casual, hand-written
        '"Kalam"',   // Secondary marginalia - slightly more formal
        'cursive'
      ].join(', '),
      accent: '"Space Grotesk", sans-serif'                 // For emphasis, nav
    },
    fontSize: {
      // DRAMATIC fluid typography - much bolder scale
      heroMassive: 'clamp(4rem, 10vw + 2rem, 8rem)',     // ~64-128px (for pull quotes)
      hero: 'clamp(3rem, 7vw + 1.5rem, 6rem)',            // ~48-96px (for name/hero)
      display: 'clamp(2.2rem, 4vw + 1rem, 4rem)',         // ~35-64px (section titles)
      h1: 'clamp(1.8rem, 3vw + 0.8rem, 2.8rem)',         // ~28-45px
      h2: 'clamp(1.4rem, 2vw + 0.5rem, 2.2rem)',         // ~22-35px
      h3: 'clamp(1.2rem, 1.5vw + 0.4rem, 1.8rem)',       // ~19-28px
      body: 'clamp(1rem, 0.8vw + 0.3rem, 1.125rem)',     // ~16-18px
      sm: 'clamp(0.875rem, 0.7vw + 0.2rem, 1rem)',       // ~14-16px
      xs: '0.875rem',
      marginalia: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.6rem)' // ~18-26px (hand-written notes)
    },
    fontWeight: {
      light: 400,
      normal: 500,
      semibold: 600,
      bold: 700,
      black: 900 // NEW: For dramatic emphasis
    },
    lineHeight: {
      tight: 1.1,    // Tighter for massive display text
      normal: 1.5,
      relaxed: 1.7,
      display: 1.05  // Very tight for hero text
    },
    letterSpacing: {
      tight: '-0.03em',   // Tighter for dramatic effect
      normal: '0',
      relaxed: '0.02em',
      display: '-0.04em'  // Ultra-tight for massive text
    },
    fontStretch: {
      condensed: '75%',   // For dramatic emphasis on key words
      normal: '100%',
      expanded: '125%'    // For elegant, spacious headings
    }
  },

  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    full: '9999px'
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
    md: '0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.08)'
  },

  // Texture tokens for aged-paper effect
  textures: {
    grain: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJz4KICA8ZmlsdGVyIGlkPSdwYXBlckdyYWluJz4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzUnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz4KICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9J3NhdHVyYXRlJyB2YWx1ZXM9JzAnLz4KICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICA8ZmVGdW5jQSB0eXBlPSdsaW5lYXInIHNsb3BlPScwLjE1Jy8+CiAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI3BhcGVyR3JhaW4pJy8+Cjwvc3ZnPg==',
    fiber: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSdmaWJlclBhdHRlcm4nIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz4KICAgICAgPGxpbmUgeDE9JzAnIHkxPScxMCcgeDI9JzEwMCcgeTI9JzEwJyBzdHJva2U9J3JnYmEoMCwwLDAsMC4wMiknIHN0cm9rZS13aWR0aD0nMC41Jy8+CiAgICAgIDxsaW5lIHgxPScwJyB5MT0nMzUnIHgyPScxMDAnIHkyPSczNScgc3Ryb2tlPSdyZ2JhKDAsMCwwLDAuMDE1KScgc3Ryb2tlLXdpZHRoPScwLjUnLz4KICAgICAgPGxpbmUgeDE9JzAnIHkxPSc2MCcgeDI9JzEwMCcgeTI9JjYwJyBzdHJva2U9J3JnYmEoMCwwLDAsMC4wMiknIHN0cm9rZS13aWR0aD0nMC41Jy8+CiAgICAgIDxsaW5lIHgxPScwJyB5MT0nODUnIHgyPScxMDAnIHkyPSc4NScgc3Ryb2tlPSdyZ2JhKDAsMCwwLDAuMDE1KScgc3Ryb2tlLXdpZHRoPScwLjUnLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNmaWJlclBhdHRlcm4pJy8+Cjwvc3ZnPg==',
    foxing: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJz4KICA8ZmlsdGVyIGlkPSdmb3hpbmcnPgogICAgPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyBiYXNlRnJlcXVlbmN5PScwLjAyJyBudW1PY3RhdmVzPSczJyBzZWVkPSc1Jy8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSdtYXRyaXgnIHZhbHVlcz0nMCAwIDAgMCAwLjYgIDAgMCAwIDAgMC41ICAwIDAgMCAwIDAuNCAgMCAwIDAgMC4wOCAwJy8+CiAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9J2luJyBpbjI9J1NvdXJjZUdyYXBoaWMnLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjZm94aW5nKScvPgo8L3N2Zz4=',
    opacity: {
      prominent: 0.15,  // Light mode - VISIBLE
      dark: 0.10        // Dark mode - still visible
    }
  },

  // Stagger delay tokens for animations
  staggerDelay: {
    fast: 100,   // Increased from 50
    normal: 200, // Increased from 100
    slow: 300    // Increased from 150
  }
};

// Dark theme - academic with muted tones
export const darkTheme = {
  ...lightTheme,
  colors: {
    background: '#1A1A18',
    backgroundAlt: '#242422',
    backgroundCard: '#2A2A28',

    text: {
      primary: '#E8E6E3',
      secondary: '#B8B6B3',
      muted: '#8B8986',
      subtle: '#6B6968',
      inverse: '#1A1A18'
    },

    accent: {
      primary: '#7FA6C8',
      secondary: '#C9A661',
      highlight: '#DEB887',     // Same parchment highlight
      hover: '#9FBAD4'
    },

    border: {
      light: '#3A3A38',
      medium: '#4A4A48',
      dark: '#E8E6E3'
    },

    // Ink colors for annotations (dark mode adjusted)
    ink: {
      red: '#E57373',           // Lighter red for dark background
      blue: '#64B5F6',          // Lighter blue for dark background
      green: '#81C784',         // Lighter green for dark background
      pencil: '#B8B6B3'         // Lighter pencil for dark background
    },

    success: '#8BA688',
    info: '#7FA6C8',
    warning: '#C9A661',
    error: '#C88888'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 2px 4px rgba(0, 0, 0, 0.4)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.5)'
  }
};

export type Theme = typeof lightTheme;
