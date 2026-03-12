import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import projectsData from '../content/projects/index.json';

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
  background: #28a745;
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

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
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
    color: #28a745;
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
    border-left: 4px solid #28a745;
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

interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string;
  markdownFile?: string;
}

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p: Project) => p.id === id);
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!project) {
      setIsLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/projects/${project.markdownFile}`);
        if (!response.ok) {
          throw new Error(`Failed to load: ${response.statusText}`);
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project');
        console.error('Could not load markdown file:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [project]);

  if (!project) {
    return (
      <Container>
        <Breadcrumb>
          <Link to="/">← Back to home</Link>
        </Breadcrumb>
        <ErrorMessage>
          Project not found. The project you're looking for doesn't exist or has been removed.
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
        <LoadingSpinner>Loading project...</LoadingSpinner>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb>
        <Link to="/">← Back to home</Link>
        <span>/</span>
        <Link to="/all-research">Research & Notes</Link>
      </Breadcrumb>

      <Header>
        <TypeBadge>Project</TypeBadge>
        <Title>{project.title}</Title>
        <MetaInfo>
          {project.year && <span>{project.year}</span>}
        </MetaInfo>
        <Tags>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Header>

      {error && (
        <ErrorMessage>
          Could not load project content: {error}
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
    </Container>
  );
}

export default ProjectDetail;
