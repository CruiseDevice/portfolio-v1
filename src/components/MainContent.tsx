import styled from 'styled-components';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Works from './Works';
import Hobbies from './Hobbies';
import HireMe from './HireMe';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 10px 5px;
  width: 100%;

  /* Add a subtle animation for content sections as they come into view */
  & > * {
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add sequential delay to each section */
  & > *:nth-child(1) { animation-delay: 0.1s; }
  & > *:nth-child(2) { animation-delay: 0.2s; }
  & > *:nth-child(3) { animation-delay: 0.3s; }
  & > *:nth-child(4) { animation-delay: 0.4s; }
  & > *:nth-child(5) { animation-delay: 0.5s; }
  & > *:nth-child(6) { animation-delay: 0.6s; }
`;

const MainContent = () => {
  return (
    <ContentContainer>
      <AboutMe />
      <Experience />
      <Education />
      <Works />
      <Hobbies />
      <HireMe />
    </ContentContainer>
  );
};

export default MainContent;