import './App.css';
import styled from 'styled-components';

import ProfileCard from './components/ProfileCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactMe from './components/ContactMe';
import MainContent from './components/MainContent';

const AppContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8); /* Add shadow effect */
  background-color: white; /* To ensure the shadow is visible */
  border-radius: 10px; /* Optional: to match the rounded corners of the shadow */
  padding: 20px; /* Optional: add padding inside the main section */
  overflow-y: auto; /* Make it scrollable */
  max-width: 100%; /* Ensure it doesn't overflow on smaller screens */

  @media (max-width: 768px) {
    padding: 10px;
    width: 90%; /* Adjust width for smaller screens */
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <ProfileCard/>
        <MainSection>
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
          </Routes>
        </MainSection>
      </AppContainer>
    </Router>
  );
}

export default App;
