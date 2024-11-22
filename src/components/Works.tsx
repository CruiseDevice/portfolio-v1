import styled from "styled-components";
import WorkItem from "./WorkItem";
import worksData from "../data/works.json";

const WorksWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const WorkItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const AllWorksLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Works () {
  const topWorks = worksData.slice(0, 2);
  return (
    <WorksWrapper>
      <SectionTitle>My Works</SectionTitle>
      <hr />
      <WorkItemsContainer>
        {topWorks.map((work) => (
          <WorkItem 
            key={work.id}
            image={`works/image${work.id}.png`} // Assuming images are named by id
            title={work.title}
            description={work.description}
          />
        ))}
      </WorkItemsContainer>
      <AllWorksLink href='/all-works'>All Works</AllWorksLink>    
    </WorksWrapper>
  )
}

export default Works;