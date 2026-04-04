import styled from 'styled-components';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/global';

import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Lazy load route components for better performance
const AllResearch = lazy(() => import('./components/AllWorks'));
const NoteDetail = lazy(() => import('./components/NoteDetail'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

const AppContainer = styled.div<{ $wide?: boolean }>`
  max-width: ${({ $wide }) => $wide ? '1200px' : '800px'};
  margin: 0 auto;
  padding: 80px 60px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  padding: 8px 16px;
  z-index: 1000;
  transition: top 0.2s;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};

  &:focus {
    top: 0;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

function AppContent() {
  const location = useLocation();
  const isWidePage = location.pathname.startsWith('/note/');

  return (
    <AppContainer $wide={isWidePage}>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <Header />
      <Main id="main-content">
        <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/all-research" element={<AllResearch />}></Route>
            <Route path="/note/:id" element={<NoteDetail />}></Route>
            <Route path="/project/:id" element={<ProjectDetail />}></Route>
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </AppContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
