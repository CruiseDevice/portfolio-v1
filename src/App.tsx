import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import AllWorks from './components/AllWorks';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/all-works" element={<AllWorks />}></Route>
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
