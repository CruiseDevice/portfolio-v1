// Light theme colors
export const lightTheme = {
  colors: {
    // Background colors
    background: '#ffffff',
    backgroundAlt: '#f8f9fa',
    backgroundCard: '#ffffff',

    // Text colors
    text: {
      primary: '#1a1a1a',
      secondary: '#333333',
      muted: '#666666',
      subtle: '#888888',
      inverse: '#ffffff'
    },

    // Accent colors
    accent: {
      primary: '#007BFF',
      secondary: '#28a745',
      hover: '#0056b3'
    },

    // Border colors
    border: {
      light: '#e0e0e0',
      medium: '#d0d0d0',
      dark: '#1a1a1a'
    },

    // Semantic colors
    success: '#28a745',
    info: '#007BFF',
    warning: '#ffc107',
    error: '#dc3545'
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '80px'
  },

  typography: {
    fontSize: {
      xs: '12px',
      sm: '13px',
      md: '15px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      hero: '32px'
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
      relaxed: 1.8
    }
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px'
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  }
};

// Dark theme - GitHub-inspired dark palette
export const darkTheme = {
  ...lightTheme,
  colors: {
    background: '#0d1117',
    backgroundAlt: '#161b22',
    backgroundCard: '#21262d',

    text: {
      primary: '#f0f6fc',
      secondary: '#c9d1d9',
      muted: '#8b949e',
      subtle: '#6e7681',
      inverse: '#0d1117'
    },

    accent: {
      primary: '#58a6ff',
      secondary: '#3fb950',
      hover: '#79b8ff'
    },

    border: {
      light: '#30363d',
      medium: '#484f58',
      dark: '#f0f6fc'
    },

    success: '#3fb950',
    info: '#58a6ff',
    warning: '#d29922',
    error: '#f85149'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px rgba(0, 0, 0, 0.25)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)'
  }
};

export type Theme = typeof lightTheme;
