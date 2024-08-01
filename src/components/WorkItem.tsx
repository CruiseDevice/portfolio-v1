import React from "react";
import styled from "styled-components";

const WorkItemWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const WorkImage = styled.img`
  height: auto;
  border-radius: 10px;
`;

const WorkTitle = styled.h3`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const WorkDescription = styled.p`
  color: #757575
`;

function WorkItem ({image, title, description}: {
  image: string, title: string, description: string
}) {
  return (
    <WorkItemWrapper>
      <WorkImage src={image} alt={title}/>
      <WorkTitle>{title}</WorkTitle>
      <WorkDescription>{description}</WorkDescription>
    </WorkItemWrapper>
  )
}

export default WorkItem;