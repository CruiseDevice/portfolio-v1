import { Link } from "react-router-dom";
import styled from "styled-components";
import WorkItem from "./WorkItem";
import worksData from "../data/works.json";

const WorksWrapper = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

const WorkItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;

const AllWorksLink = styled.p`
  margin-top: 24px;
  text-align: left;

  a {
    color: #333333;
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Works () {
  const topWorks = worksData.slice(0, 2);
  return (
    <WorksWrapper id="research">
      <SectionTitle>Research & Projects</SectionTitle>
      <WorkItemsContainer>
        {topWorks.map((work) => (
          <WorkItem
            key={work.id}
            title={work.title}
            description={work.description}
          />
        ))}
      </WorkItemsContainer>
      <AllWorksLink><Link to='/all-works'>View all projects →</Link></AllWorksLink>
    </WorksWrapper>
  )
}

export default Works;