import { useState } from "react";
import styled from "styled-components";

const WorkItemWrapper = styled.div`
  text-align: center;
  margin: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  border-radius: 12px 12px 0 0;
`;

const WorkImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Overlay = styled.div<{isHovered: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 123, 255, 0), rgba(0, 123, 255, 0.7));
  opacity: ${props => props.isHovered ? 1 : 0};
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewButton = styled.button`
  background: white;
  color: #007bff;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &{WorkItemWrapper}.hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 15px;
`;

const WorkTitle = styled.h3`
  margin: 0 0 10px;
  font-weight: bold;
  color: #333;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #007BFF;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  ${WorkItemWrapper}:hover &:after {
    width: 50px;
  }
`;

const WorkDescription = styled.p`
  color: #757575
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const Tag = styled.span`
  background: #f0f7ff;
  color: #007BFF;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
`;

interface WorkItemProps {
  image: string,
  title: string,
  description: string
}

function WorkItem ({image, title, description}: WorkItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTags = (title: string) => {
    if (title.includes("BERT")) {
      return ["NLP", "Machine Learning", "Python"];
    } else if (title.includes("LLM")) {
      return ["AI", "Deep Learning", "Python"];
    } else {
      return ["Web", "React", "TypeScript"];
    }
  };
  
  return (
    <WorkItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer>
        <WorkImage src={image} alt={title}/>
        <Overlay isHovered={isHovered}>
          <ViewButton>View Project</ViewButton>
        </Overlay>
      </ImageContainer>
      <ContentContainer>
        <WorkTitle>{title}</WorkTitle>
        <WorkDescription>{description}</WorkDescription>
        <Tags>
          {getTags(title).map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </ContentContainer>
    </WorkItemWrapper>
  )
}

export default WorkItem;