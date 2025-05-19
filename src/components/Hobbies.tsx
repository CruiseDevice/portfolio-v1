import styled from "styled-components";
import HobbyTag from "./HobbyTag";

const HobbiesWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(120deg, #0062E6, #33AEFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #0062E6, transparent);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

function Hobbies() {
  return (
    <HobbiesWrapper>
      <SectionHeader>
        <Title>My Hobbies</Title>
      </SectionHeader>
      <Divider />
      <TagsContainer>
        <HobbyTag text="Reading Novels" color="#00C853" />
        <HobbyTag text="Playing Chess" color="#2962FF" />
        <HobbyTag text="Automating Tasks" color="#304FFE" />
        <HobbyTag text="Coding Personal Projects" color="#424242" />
        <HobbyTag text="Yoga" color="#AA00FF" />
        <HobbyTag text="Riding Bike" color="#D50000" />
      </TagsContainer>
    </HobbiesWrapper>
  );
}

export default Hobbies;