import styled from 'styled-components';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Works from './Works';
import Skills from './Skills';
import FadeInSection from './FadeInSection';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = () => {
  // SLOWED stagger delays for dramatic effect (200-400ms gaps)
  const delays = [0, 200, 400, 600, 800];

  return (
    <ContentContainer>
      <FadeInSection delay={delays[0]}><AboutMe /></FadeInSection>
      <FadeInSection delay={delays[1]}><Experience /></FadeInSection>
      <FadeInSection delay={delays[2]}><Education /></FadeInSection>
      <FadeInSection delay={delays[3]}><Works /></FadeInSection>
      <FadeInSection delay={delays[4]}><Skills /></FadeInSection>
    </ContentContainer>
  );
};

export default MainContent;