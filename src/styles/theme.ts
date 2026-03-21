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
    fontSize: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      base: '15px',
      lg: '16px',
      xl: '18px',
      xxl: '24px',
      hero: '32px',
      paper: '18px',
      display: '42px'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.4,
      normal: 1.6,
      relaxed: 1.8,
      paper: 1.7
    },
    fontFamily: {
      serif: "'Crimson Pro', Georgia, 'Times New Roman', serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'IBM Plex Mono', 'SF Mono', 'Consolas', monospace"
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
