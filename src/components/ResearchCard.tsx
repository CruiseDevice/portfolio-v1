import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div<{ $isNote: boolean }>`
  margin-bottom: 8px;
  padding-left: ${props => props.$isNote ? '16px' : '0'};
  border-left: ${props => props.$isNote ? '3px solid #007BFF' : 'none'};
  background: ${props => props.$isNote ? 'rgba(0, 123, 255, 0.03)' : 'transparent'};
  padding-top: ${props => props.$isNote ? '12px' : '0'};
  padding-bottom: ${props => props.$isNote ? '12px' : '0'};
  padding-right: ${props => props.$isNote ? '16px' : '0'};
  border-radius: ${props => props.$isNote ? '0 8px 8px 0' : '0'};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$isNote ? 'rgba(0, 123, 255, 0.06)' : 'transparent'};
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const TypeBadge = styled.span<{ $isNote: boolean }>`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  background: ${props => props.$isNote ? '#007BFF' : '#28a745'};
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h3<{ $isNote: boolean }>`
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 16px;
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${props => props.$isNote ? '#007BFF' : '#28a745'};
    }
  }
`;

const SourceLink = styled.a`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;

  &:hover {
    color: #007BFF;
    text-decoration: underline;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Description = styled.p`
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #333333;
  line-height: 1.6;
`;

const Excerpt = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #555555;
  font-style: italic;
  line-height: 1.5;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
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

const MetaInfo = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 6px;
`;

export interface ProjectData {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string;
  markdownFile?: string;
}

export interface NoteData {
  id: string;
  title: string;
  source: {
    url: string;
    title: string;
    author?: string;
    publication?: string;
    dateRead: string;
  };
  tags: string[];
  relatedIds: string[];
  summary: string;
  excerpt: string;
  markdownFile: string;
}

export interface ResearchCardProps {
  type: 'project' | 'note';
  data: ProjectData | NoteData;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

function ResearchCard({ type, data }: ResearchCardProps) {
  const isNote = type === 'note';

  if (isNote) {
    const note = data as NoteData;
    return (
      <CardWrapper $isNote={true}>
        <HeaderRow>
          <TypeBadge $isNote={true}>Note</TypeBadge>
          <Title $isNote={true}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </Title>
          <SourceLink href={note.source.url} target="_blank" rel="noopener noreferrer" aria-label="Open original article">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Source
          </SourceLink>
        </HeaderRow>
        <Description>{note.summary}</Description>
        {note.excerpt && <Excerpt>{note.excerpt}</Excerpt>}
        <Tags>
          {note.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <MetaInfo>
          From {note.source.publication || note.source.title} • Read {formatDate(note.source.dateRead)}
        </MetaInfo>
      </CardWrapper>
    );
  }

  const project = data as ProjectData;
  return (
    <CardWrapper $isNote={false}>
      <HeaderRow>
        <TypeBadge $isNote={false}>Project</TypeBadge>
        <Title $isNote={false}>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </Title>
      </HeaderRow>
      <Description>{project.summary}</Description>
      <Tags>
        {project.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      {project.year && (
        <MetaInfo>{project.year}</MetaInfo>
      )}
    </CardWrapper>
  );
}

export default ResearchCard;
