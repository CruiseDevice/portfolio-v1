import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const RevealContainer = styled.span`
  display: inline;
`;

const RevealWord = styled.span<{ $delay: number; $visible: boolean }>`
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '8px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ $delay }) => $delay}ms;
  display: inline-block;
  white-space: pre;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition-delay: 0ms;
  }
`;

interface TextRevealProps {
  text: string;
  delay?: number; // Base delay before starting
  speed?: number; // Delay between words (default 50ms)
}

export function TextReveal({ text, delay = 0, speed = 50 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <RevealContainer ref={ref}>
      {words.map((word, index) => (
        <RevealWord
          key={`${word}-${index}`}
          $delay={delay + (index * speed)}
          $visible={isVisible}
        >
          {word}
        </RevealWord>
      ))}
    </RevealContainer>
  );
}
