import styled from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/global';

import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import AllResearch from './components/AllWorks';
import NoteDetail from './components/NoteDetail';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.xl};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/all-research" element={<AllResearch />}></Route>
            <Route path="/note/:id" element={<NoteDetail />}></Route>
            <Route path="/project/:id" element={<ProjectDetail />}></Route>
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
