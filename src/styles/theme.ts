// Academic theme colors - refined, paper-inspired palette
export const lightTheme = {
  colors: {
    // Background colors - warm cream like paper
    background: '#FAF9F7',
    backgroundAlt: '#F0F0EE',
    backgroundCard: '#FFFFFF',

    // Text colors
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      muted: '#6B6B6B',
      subtle: '#8B8B88',
      inverse: '#FAF9F7'
    },

    // Accent colors - deep navy like academic bindings
    accent: {
      primary: '#2C5282',
      secondary: '#744210',
      hover: '#1E3A5A'
    },

    // Border colors
    border: {
      light: '#E0E0DE',
      medium: '#D0D0CE',
      dark: '#1A1A1A'
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
      hover: '#9FBAD4'
    },

    border: {
      light: '#3A3A38',
      medium: '#4A4A48',
      dark: '#E8E6E3'
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
