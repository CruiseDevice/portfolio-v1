import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  PaperCard,
  PaperType,
  PaperTitle,
  PaperAbstract,
  PaperMeta,
  Tag,
  TagsContainer
} from "../styles/shared";
import { SpotlightWrapper } from "./SpotlightWrapper";

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SourceLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-left: auto;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Excerpt = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-style: italic;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  border-left: 2px solid ${({ theme }) => theme.colors.border.light};
  padding-left: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
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
      <SpotlightWrapper>
        <PaperCard $accent="primary">
          <HeaderRow>
            <PaperType $variant="primary">Note</PaperType>
            <SourceLink
              href={note.source.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open original article"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Source
            </SourceLink>
          </HeaderRow>
          <PaperTitle>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </PaperTitle>
          <PaperAbstract>{note.summary}</PaperAbstract>
          {note.excerpt && <Excerpt>{note.excerpt}</Excerpt>}
          <TagsContainer>
            {note.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
          <PaperMeta>
            <span>From {note.source.publication || note.source.title}</span>
            <span>Read {formatDate(note.source.dateRead)}</span>
          </PaperMeta>
        </PaperCard>
      </SpotlightWrapper>
    );
  }

  const project = data as ProjectData;
  return (
    <SpotlightWrapper>
      <PaperCard $accent="secondary">
        <PaperType $variant="secondary">Project</PaperType>
        <PaperTitle>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </PaperTitle>
        <PaperAbstract>{project.summary}</PaperAbstract>
        <TagsContainer>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        {project.year && (
          <PaperMeta>
            <span>{project.year}</span>
          </PaperMeta>
        )}
      </PaperCard>
    </SpotlightWrapper>
  );
}

export default ResearchCard;
