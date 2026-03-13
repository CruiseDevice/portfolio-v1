import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div<{ $isNote: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.lg};
  border-left: 3px solid ${({ theme, $isNote }) =>
    $isNote ? theme.colors.accent.primary : theme.colors.accent.secondary};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundCard};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.border.light};
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const TypeBadge = styled.span<{ $isNote: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme, $isNote }) =>
    $isNote ? theme.colors.accent.primary : theme.colors.accent.secondary};
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h3<{ $isNote: boolean }>`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme, $isNote }) =>
        $isNote ? theme.colors.accent.primary : theme.colors.accent.secondary};
    }
  }
`;

const SourceLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

const Excerpt = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-style: italic;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  border-left: 2px solid ${({ theme }) => theme.colors.border.light};
  padding-left: ${({ theme }) => theme.spacing.sm};

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
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  transition: all ${({ theme }) => theme.transitions.fast};
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.primary};
    color: white;
    transform: translateY(-1px);
  }
`;

const MetaInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.subtle};
  margin-top: ${({ theme }) => theme.spacing.sm};
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
