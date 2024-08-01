import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";

const WorksWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const WorkItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  return (
    <WorksWrapper>
      <SectionTitle>My Works</SectionTitle>
      <WorkItemsContainer>
        <WorkItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
        <WorkItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
      </WorkItemsContainer>
      <AllWorksLink href='#'>All Works</AllWorksLink>    
    </WorksWrapper>
  )
}

export default Works;