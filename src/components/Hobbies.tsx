import styled from "styled-components";
import HobbyTag from "./HobbyTag";

const HobbiesWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;  

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Hobbies () {
  return (
    <HobbiesWrapper>
      <SectionTitle>My Hobbies</SectionTitle>
      <hr />
      <TagsContainer>
        <HobbyTag text="Reading Novels" color="#00C853" />
        <HobbyTag text="Playing Chess" color="#2962FF" />
        <HobbyTag text="Automating Tasks" color="#304FFE" />
        <HobbyTag text="Coding Personal Projects" color="#424242" />
        <HobbyTag text="Yoga" color="#AA00FF" />
        <HobbyTag text="Riding Bike" color="#D50000" />
      </TagsContainer>
    </HobbiesWrapper>
  )
}

export default Hobbies;