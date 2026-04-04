import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import '../styles/highlight-theme.css';
import notesData from '../data/notes.json';

// Custom code block component with language label
const CustomPre = ({ children, ...props }: any) => {
  const className = (children as any)?.props?.className || '';
  // Extract language from className (e.g., "language-python hljs" -> "python")
  const language = className
    .replace(/language-/, '')
    .replace(/hljs/, '')
    .trim() || 'code';

  return (
    <pre {...props} data-language={language}>
      {children}
    </pre>
  );
};

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  background: #faf9f7;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Breadcrumb = styled.nav`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary};
      text-decoration: underline;
    }
  }

  span {
    margin: 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.subtle};
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const TypeBadge = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SourceInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SourceLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.accent.primary};
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const Content = styled.div`
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};

  h1 {
    font-size: 24px;
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-top: 28px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.accent.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  /* Let highlight.js handle code blocks with syntax highlighting */
  pre code.hljs {
    background: transparent;
    padding: 0;
    font-family: inherit;
  }

  pre {
    position: relative;
    overflow-x: auto;
    margin: ${({ theme }) => theme.spacing.xl} 0;
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border: 1px solid ${({ theme }) => theme.colors.border.medium};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    line-height: 1.6;

    &[data-language]::before {
      content: attr(data-language);
      position: absolute;
      top: 0;
      right: 0;
      font-family: ${({ theme }) => theme.typography.fontFamily.mono};
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      padding: 6px 12px;
      color: ${({ theme }) => theme.colors.text.muted};
      background: ${({ theme }) => theme.colors.background};
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
      border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      pointer-events: none;
      border: 1px solid ${({ theme }) => theme.colors.border.light};
      border-top: none;
      border-right: none;
      z-index: 1;
    }

    code {
      background: transparent;
      padding: 0;
      color: inherit;
      display: block;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.accent.primary};
    padding-left: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => theme.spacing.md} 0;
    color: ${({ theme }) => theme.colors.text.muted};
    font-style: italic;
  }

  ul, ol {
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: ${({ theme }) => theme.spacing.md} 0;

    th, td {
      border: 1px solid ${({ theme }) => theme.colors.border.light};
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
      text-align: left;
    }

    th {
      background: ${({ theme }) => theme.colors.backgroundAlt};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }

  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin: ${({ theme }) => theme.spacing.md} 0;
  }
`;

const RelatedNotes = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const RelatedTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RelatedLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent.primary};
    color: white;
    transform: translateX(4px);
  }
`;

const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.warning}20;
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const LoadingSpinner = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

function NoteDetail() {
  const { id } = useParams<{ id: string }>();
  const note = notesData.find(n => n.id === id);
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!note) {
      setIsLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/notes/${note.markdownFile}`);
        if (!response.ok) {
          throw new Error(`Failed to load: ${response.statusText}`);
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load note');
        console.error('Could not load markdown file:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [note]);

  if (!note) {
    return (
      <Container>
        <Breadcrumb>
          <Link to="/">← Back to home</Link>
        </Breadcrumb>
        <ErrorMessage>
          Note not found. The note you're looking for doesn't exist or has been removed.
        </ErrorMessage>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Breadcrumb>
          <Link to="/">← Back to home</Link>
        </Breadcrumb>
        <LoadingSpinner>Loading note...</LoadingSpinner>
      </Container>
    );
  }

  const relatedNotes = note.relatedIds
    .map(relatedId => notesData.find(n => n.id === relatedId))
    .filter(Boolean) as typeof notesData;

  return (
    <Container>
      <Breadcrumb>
        <Link to="/">← Back to home</Link>
        <span>/</span>
        <Link to="/all-research">Research & Notes</Link>
      </Breadcrumb>

      <Header>
        <TypeBadge>Note</TypeBadge>
        <Title>{note.title}</Title>
        <SourceInfo>
          <SourceLink href={note.source.url} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {note.source.title}
          </SourceLink>
          {note.source.author && <span>by {note.source.author}</span>}
          <span>Read {formatDate(note.source.dateRead)}</span>
        </SourceInfo>
        <Tags>
          {note.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Header>

      {error && (
        <ErrorMessage>
          Could not load note content: {error}
        </ErrorMessage>
      )}

      {markdownContent && !error && (
        <Content>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
            components={{
              pre: CustomPre
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </Content>
      )}

      {relatedNotes.length > 0 && (
        <RelatedNotes>
          <RelatedTitle>Related Notes</RelatedTitle>
          {relatedNotes.map(related => (
            <RelatedLink key={related.id} to={`/note/${related.id}`}>
              {related.title}
            </RelatedLink>
          ))}
        </RelatedNotes>
      )}
    </Container>
  );
}

export default NoteDetail;
