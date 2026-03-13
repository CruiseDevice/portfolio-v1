import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import profileData from "../data/profile.json";
import { useTheme } from "../contexts/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { useHeaderCompact } from "../hooks/useScrollPosition";
import { useState } from "react";

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme, $scrolled }) =>
    $scrolled
      ? `rgba(${theme.colors.background === '#ffffff' ? '255, 255, 255' : '13, 17, 23'}, 0.95)`
      : theme.colors.background};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  will-change: background, backdrop-filter;
`;

const HeroView = styled.div<{ $scrolled: boolean }>`
  text-align: center;
  padding: 0 0 40px 0;
  transform: ${({ $scrolled }) => $scrolled ? 'translateY(-100%)' : 'translateY(0)'};
  opacity: ${({ $scrolled }) => $scrolled ? 0 : 1};
  pointer-events: ${({ $scrolled }) => $scrolled ? 'none' : 'auto'};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
  will-change: transform, opacity;
  ${({ $scrolled }) => $scrolled && `
    position: absolute;
    width: 100%;
  `}
`;

const CompactView = styled.div<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  transform: ${({ $scrolled }) => $scrolled ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ $scrolled }) => $scrolled ? 1 : 0};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
  pointer-events: ${({ $scrolled }) => $scrolled ? 'auto' : 'none'};
  will-change: transform, opacity;

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;

const CompactLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CompactImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const CompactName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CompactNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CompactActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border.light};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.hero};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0 0 20px 0;
`;

const Nav = styled.nav`
  margin: 24px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active: boolean; $compact?: boolean }>`
  margin: 0 ${({ $compact }) => $compact ? '2px' : '8px'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.text.secondary};
  font-size: ${({ theme, $compact }) =>
    $compact ? theme.typography.fontSize.sm : theme.typography.fontSize.md};
  padding: ${({ $compact }) => $compact ? '4px 8px' : '8px 12px'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => $active ? '20px' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.backgroundAlt};

    &:after {
      width: 20px;
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
    border: 1px solid ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    cursor: pointer;
    padding: 10px;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 101;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent.primary};
    }

    span {
      width: 20px;
      height: 2px;
      background: ${({ theme }) => theme.colors.text.primary};
      transition: all ${({ theme }) => theme.transitions.fast};
      transform-origin: center;

      &:nth-child(1) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
      }
      &:nth-child(2) {
        opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
      }
    }
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.sm};
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    transition: all ${({ theme }) => theme.transitions.normal};
    pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const MobileNavLink = styled.a<{ $active: boolean }>`
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.backgroundAlt : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;

const HeaderActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const CVLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: 8px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    text-decoration: none;
  }
`;

const ThemeToggleButton = styled.button<{ $size?: 'sm' | 'md' }>`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ $size }) => $size === 'sm' ? '4px' : '8px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }

  svg {
    width: ${({ $size }) => $size === 'sm' ? '16px' : '20px'};
    height: ${({ $size }) => $size === 'sm' ? '16px' : '20px'};
    fill: ${({ theme }) => theme.colors.text.primary};
    transition: fill ${({ theme }) => theme.transitions.fast};
  }
`;

// Icons for theme toggle
const SunIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      fill="currentColor"
    />
  </svg>
);

const sectionIds = ['about', 'experience', 'education', 'research', 'skills'];

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const scrolled = useHeaderCompact(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <HeaderContainer $scrolled={scrolled}>
      {/* Full hero view */}
      <HeroView $scrolled={scrolled}>
        <ProfileImage src={profileData.profileImage} alt={profileData.name} />
        <Name>{profileData.name}</Name>
        <Title>{profileData.title}</Title>

        {/* Desktop Navigation */}
        <Nav>
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

        <SocialLinks>
          <SocialIcon
            url={profileData.socialLinks.linkedin}
            style={{ height: 32, width: 32 }}
            bgColor={isDark ? '#c9d1d9' : '#333333'}
          />
          <SocialIcon
            url={profileData.socialLinks.github}
            style={{ height: 32, width: 32 }}
            bgColor={isDark ? '#c9d1d9' : '#333333'}
          />
        </SocialLinks>

        <HeaderActions>
          <CVLink href={profileData.resumePath} download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Curriculum Vitae
          </CVLink>
          <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </ThemeToggleButton>
        </HeaderActions>
      </HeroView>

      {/* Compact scrolled view - positioned absolutely to overlay */}
      <CompactView $scrolled={scrolled}>
        <CompactLeft>
          <CompactImage src={profileData.profileImage} alt={profileData.name} />
          <CompactName>{profileData.name}</CompactName>
        </CompactLeft>
        <CompactNav>
          {navItems.map(item => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              $active={activeSection === item.id}
              $compact
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </CompactNav>
        <CompactActions>
          <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme" $size="sm">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </ThemeToggleButton>
        </CompactActions>
      </CompactView>

      {/* Mobile Menu Button */}
      <MobileMenuButton
        $isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      {/* Mobile Navigation */}
      <MobileNav $isOpen={mobileMenuOpen}>
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
    </HeaderContainer>
  );
}

export default Header;
