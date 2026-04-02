import { createGlobalStyle } from 'styled-components';
import { paperGrainURL, paperFiberURL, foxingURL } from '../utils/paperTexture';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    background-image:
      url('${foxingURL}'),
      url('${paperFiberURL}'),
      url('${paperGrainURL}');
    background-repeat: repeat;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    transition: background-color ${({ theme }) => theme.transitions.normal},
                color ${({ theme }) => theme.transitions.normal};
  }

  /* Section breaks with deckle edges */
  .section-break {
    position: relative;
    margin: ${({ theme }) => theme.spacing.section} 0;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      height: 20px;
      background: repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 8px,
        ${({ theme }) => theme.colors.background} 8px,
        ${({ theme }) => theme.colors.background} 16px
      );
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      height: 20px;
      background: repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 11px,
        ${({ theme }) => theme.colors.background} 11px,
        ${({ theme }) => theme.colors.background} 13px,
        transparent 13px,
        transparent 18px
      );
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.serif};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-top: 0;
    letter-spacing: -0.01em;
  }

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  /* Visible focus indicators for keyboard navigation */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 2px;
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }

    body {
      background-image: url('${paperGrainURL}'); /* Keep grain, remove complex layers */
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.medium};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.muted};
  }

  /* Code blocks - academic monospace */
  code, pre {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  code {
    padding: 2px 6px;
    font-size: 0.9em;
  }

  pre {
    padding: ${({ theme }) => theme.spacing.md};
    overflow-x: auto;

    code {
      padding: 0;
      background: transparent;
    }
  }
`;
