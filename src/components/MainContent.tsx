import styled from 'styled-components';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Works from './Works';
import Skills from './Skills';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = () => {
  return (
    <ContentContainer>
      <AboutMe />
      <Experience />
      <Education />
      <Works />
      <Skills />
    </ContentContainer>
  );
};

export default MainContent;