import React, { useState } from 'react';
import styled from 'styled-components';

const CitationButton = styled.button<{ $color: string }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 4px;
  padding: 6px 12px;
  font-family: ${({ theme }) => theme.typography.fontFamily.handwriting};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${props => props.$color};
  cursor: pointer;
  opacity: 0;
  transform: rotate(-2deg);
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: rotate(0deg) scale(1.05);
    background: ${({ theme }) => theme.colors.backgroundCard};
    border-color: ${props => props.$color};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    &:hover {
      transform: none;
    }
  }
`;

const CitationWrapper = styled.div`
  position: relative;

  &:hover ${CitationButton} {
    opacity: 1;
  }
`;

interface CitationButtonProps {
  title: string;
  author?: string;
  year?: string;
  format?: 'apa' | 'mla' | 'chicago';
  color?: 'red' | 'blue' | 'green' | 'pencil';
}

export function WithCitation({
  children,
  title,
  author,
  year,
  format = 'apa',
  color = 'blue'
}: CitationButtonProps & { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const generateCitation = () => {
    let citation = '';
    const currentYear = year || new Date().getFullYear().toString();

    switch(format) {
      case 'apa':
        citation = author
          ? `${author}. (${currentYear}). ${title}. Portfolio.`
          : `(${currentYear}). ${title}. Portfolio.`;
        break;
      case 'mla':
        citation = author
          ? `${author}. "${title}." Portfolio, ${currentYear}.`
          : `"${title}." Portfolio, ${currentYear}.`;
        break;
      case 'chicago':
        citation = author
          ? `${author}. "${title}." Portfolio, ${currentYear}.`
          : `"${title}." Portfolio, ${currentYear}.`;
        break;
    }

    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colorMap = {
    red: '#A52A2A',
    blue: '#1E90FF',
    green: '#228B22',
    pencil: '#6B6560'
  };

  return (
    <CitationWrapper>
      {children}
      <CitationButton
        onClick={generateCitation}
        title={`Copy ${format.toUpperCase()} citation`}
        $color={colorMap[color]}
      >
        {copied ? '✓ Copied!' : 'Cite'}
      </CitationButton>
    </CitationWrapper>
  );
}
