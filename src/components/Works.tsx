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
  return (
    <WorksWrapper>
      <SectionTitle>My Works</SectionTitle>
      <hr />
      <WorkItemsContainer>
        <WorkItem 
          image="works/image1.png"
          title="Sentiment Analysis using BERT"
          description="This project aims to perform sentiment analysis using the BERT model and Transformers by Hugging Face."
        />
        <WorkItem 
          image="works/image2.png"
          title="Fine Tuning LLM with LoRA and QLoRA"
          description="A fine-tuning technique that allows you to fine-tune and train model much more efficiently than normal training"
        />
      </WorkItemsContainer>
      <AllWorksLink href='#'>All Works</AllWorksLink>    
    </WorksWrapper>
  )
}

export default Works;