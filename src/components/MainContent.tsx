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
  return (
    <ContentContainer>
      <FadeInSection><AboutMe /></FadeInSection>
      <FadeInSection><Experience /></FadeInSection>
      <FadeInSection><Education /></FadeInSection>
      <FadeInSection><Works /></FadeInSection>
      <FadeInSection><Skills /></FadeInSection>
    </ContentContainer>
  );
};

export default MainContent;