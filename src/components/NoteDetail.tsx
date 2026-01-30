import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import notesData from '../data/notes.json';

const Container = styled.div`
  margin-top: 40px;
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  color: #666666;
  margin-bottom: 24px;

  a {
    color: #333333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 8px;
    color: #999999;
  }
`;

const Header = styled.header`
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const TypeBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 16px;
  background: #007BFF;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
`;

const SourceInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const SourceLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #007BFF;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 13px;
  padding: 4px 10px;
  background: #f0f0f0;
  border-radius: 12px;
  color: #555;
`;

const Content = styled.div`
  line-height: 1.7;
  color: #333;

  h1 {
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  h2 {
    font-size: 20px;
    margin-top: 28px;
    margin-bottom: 12px;
    color: #1a1a1a;
  }

  h3 {
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: #007BFF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 14px;
  }

  pre {
    background: #1a1a1a;
    color: #f8f8f2;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 16px 0;

    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }

  blockquote {
    border-left: 4px solid #007BFF;
    padding-left: 16px;
    margin: 16px 0;
    color: #555;
    font-style: italic;
  }

  ul, ol {
    padding-left: 24px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;

    th, td {
      border: 1px solid #e0e0e0;
      padding: 8px 12px;
      text-align: left;
    }

    th {
      background: #f5f5f5;
      font-weight: 600;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 24px 0;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 16px 0;
  }
`;

const RelatedNotes = styled.div`
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
`;

const RelatedTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const RelatedLink = styled(Link)`
  display: block;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
    color: #007BFF;
  }
`;

const ErrorMessage = styled.div`
  padding: 24px;
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  color: #856404;
`;

const LoadingSpinner = styled.div`
  padding: 40px;
  text-align: center;
  color: #666;
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
            rehypePlugins={[rehypeKatex]}
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
