import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import profileData from "../data/profile.json";
import { useTheme } from "../contexts/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { usePageLoad } from "../hooks/usePageLoad";
import { HEADER_SCROLL_OFFSET } from "../constants/scroll";

const HeaderContainer = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.primary};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NameSection = styled.div<{ $hasLoaded?: boolean; $delay?: number }>`
  flex: 1;
  opacity: ${({ $hasLoaded }) => $hasLoaded ? 1 : 0};
  transform: translateY(${({ $hasLoaded }) => $hasLoaded ? '0' : '8px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ $delay }) => $delay ? `${$delay}ms` : '0'};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition-delay: 0ms;
  }
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.hero};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.display};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
`;

const ContactInfo = styled.div<{ $hasLoaded?: boolean; $delay?: number }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  text-align: right;
  white-space: nowrap;
  opacity: ${({ $hasLoaded }) => $hasLoaded ? 1 : 0};
  transform: translateY(${({ $hasLoaded }) => $hasLoaded ? '0' : '8px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ $delay }) => $delay ? `${$delay}ms` : '0'};

  @media (max-width: 768px) {
    text-align: left;
    white-space: normal;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition-delay: 0ms;
  }
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.text.muted};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

const Nav = styled.nav<{ $hasLoaded?: boolean; $delay?: number }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  opacity: ${({ $hasLoaded }) => $hasLoaded ? 1 : 0};
  transform: translateY(${({ $hasLoaded }) => $hasLoaded ? '0' : '8px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ $delay }) => $delay ? `${$delay}ms` : '0'};

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition-delay: 0ms;
  }
`;

const NavLink = styled.a<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding-bottom: 4px;
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0'};
    height: 1px;
    background: ${({ theme }) => theme.colors.accent.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};

    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border.medium};
    cursor: pointer;
    padding: 8px 12px;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 101;
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent.primary};
    }

    span {
      width: 16px;
      height: 1px;
      background: ${({ theme }) => theme.colors.text.primary};
      transition: all ${({ theme }) => theme.transitions.fast};
      transform-origin: center;

      &:nth-child(1) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'};
      }
      &:nth-child(2) {
        opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'};
      }
    }
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.md};
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    transition: all ${({ theme }) => theme.transitions.normal};
    pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  }
`;

const MobileNavLink = styled.a<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

const ThemeToggleButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 16px;
  transition: border-color ${({ theme }) => theme.transitions.fast}, color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

// Icons for theme toggle
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const sectionIds = ['about', 'experience', 'education', 'research', 'skills'];

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const hasLoaded = usePageLoad();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - HEADER_SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    mobileMenuButtonRef.current?.focus();
  };

  const handleMobileMenuKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  };

  useEffect(() => {
    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      const firstNavLink = document.querySelector('#mobile-nav a') as HTMLElement;
      firstNavLink?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <HeaderContainer>
      {/* Mobile Menu Button */}
      <MobileMenuButton
        $isOpen={mobileMenuOpen}
        onClick={toggleMobileMenu}
        onKeyDown={handleMobileMenuKeyDown}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav"
        aria-haspopup="true"
        ref={mobileMenuButtonRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      <HeaderTop>
        <NameSection $hasLoaded={hasLoaded} $delay={0}>
          <Name>{profileData.name}</Name>
          <Title>{profileData.title}</Title>
        </NameSection>
        <ContactInfo $hasLoaded={hasLoaded} $delay={200}>
          <ContactLink href={`mailto:${profileData.email}`}>
            {profileData.email}
          </ContactLink>
          <ContactLink
            href={profileData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profileData.socialLinks.linkedin.replace('https://linkedin.com/in/', '')}
          </ContactLink>
          <ContactLink
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profileData.socialLinks.github.replace('https://github.com/', '')}
          </ContactLink>
          <ContactLink href={profileData.resumePath}>
            [CV PDF]
          </ContactLink>
        </ContactInfo>
      </HeaderTop>

      {/* Desktop Navigation */}
      <Nav aria-label="Main navigation" $hasLoaded={hasLoaded} $delay={300}>
        {navItems.map(item => (
          <NavLink
            key={item.id}
            href={`#${item.id}`}
            $active={activeSection === item.id}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </NavLink>
        ))}
      </Nav>

      {/* Mobile Navigation */}
      <MobileNav
        $isOpen={mobileMenuOpen}
        id="mobile-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map(item => (
          <MobileNavLink
            key={item.id}
            href={`#${item.id}`}
            $active={activeSection === item.id}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileNav>

      {/* Theme Toggle */}
      <ThemeToggleButton
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px'
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </ThemeToggleButton>
    </HeaderContainer>
  );
}

export default Header;
