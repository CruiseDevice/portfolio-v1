import { DefaultTheme } from 'styled-components';

// Creates deckle-edge (ragged paper) effects for section breaks
export const createDeckleEdge = (side: 'top' | 'bottom' | 'both' = 'both', theme?: DefaultTheme) => {
  if (!theme) {
    console.warn('createDeckleEdge: theme not provided, using fallback color');
    return { topEdge: 'none', bottomEdge: 'none' };
  }

  const topEdge = side === 'top' || side === 'both'
    ? `repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 8px,
      ${theme.colors.background} 8px,
      ${theme.colors.background} 16px
    )`
    : 'none';

  const bottomEdge = side === 'bottom' || side === 'both'
    ? `repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 11px,
      ${theme.colors.background} 11px,
      ${theme.colors.background} 13px,
      transparent 13px,
      transparent 18px
    )`
    : 'none';

  return { topEdge, bottomEdge };
};
