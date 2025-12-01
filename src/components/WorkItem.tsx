import styled from "styled-components";

const WorkItemWrapper = styled.div`
  margin-bottom: 8px;
`;

const WorkTitle = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 16px;
`;

const WorkDescription = styled.p`
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #333333;
  line-height: 1.6;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  color: #666666;
  font-size: 13px;
  font-style: italic;

  &:not(:last-child)::after {
    content: "•";
    margin-left: 8px;
    color: #999999;
  }
`;

interface WorkItemProps {
  title: string,
  description: string
}

function WorkItem ({title, description}: WorkItemProps) {
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
    <WorkItemWrapper>
      <WorkTitle>{title}</WorkTitle>
      <WorkDescription>{description}</WorkDescription>
      <Tags>
        {getTags(title).map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </WorkItemWrapper>
  )
}

export default WorkItem;