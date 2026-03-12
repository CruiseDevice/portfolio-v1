import { useState } from 'react';
import projectsData from '../content/projects/index.json';
import notesData from '../data/notes.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ResearchCard, { NoteData, ProjectData } from './ResearchCard';

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.border.light};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.background};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.inverse : theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme, $active }) =>
    $active ? theme.colors.text.inverse : theme.colors.accent.primary};
  }
`;

const WorksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SectionDivider = styled.div`
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

type FilterType = 'all' | 'projects' | 'notes';

const AllResearch = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  // Combine all items
  const allProjects = projectsData.map(p => ({ type: 'project' as const, data: p as ProjectData }));
  const allNotes = notesData.map(n => ({ type: 'note' as const, data: n as NoteData }));

  // Sort by date/recent - notes by dateRead, projects by year (newest first)
  const sortedProjects = [...allProjects].sort((a, b) =>
    (b.data.year || '2024').localeCompare(a.data.year || '2024')
  );
  const sortedNotes = [...allNotes].sort((a, b) =>
    new Date(b.data.source.dateRead).getTime() - new Date(a.data.source.dateRead).getTime()
  );

  const filteredItems = (() => {
    if (filter === 'all') {
      // Interleave: most recent first regardless of type
      return [...sortedProjects, ...sortedNotes].sort((a, b) => {
        const dateA = a.type === 'note'
          ? new Date((a.data as NoteData).source.dateRead).getTime()
          : new Date((a.data as ProjectData).year || '2024').getTime();
        const dateB = b.type === 'note'
          ? new Date((b.data as NoteData).source.dateRead).getTime()
          : new Date((b.data as ProjectData).year || '2024').getTime();
        return dateB - dateA;
      });
    }
    if (filter === 'projects') return sortedProjects;
    if (filter === 'notes') return sortedNotes;
    return [];
  })();

  return (
    <Container>
      <Breadcrumb>
        <Link to="/">← Back to home</Link>
      </Breadcrumb>
      <Header>
        <Title>Research & Notes</Title>
        <FilterButtons>
          <FilterButton
            $active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton
            $active={filter === 'projects'}
            onClick={() => setFilter('projects')}
          >
            Projects
          </FilterButton>
          <FilterButton
            $active={filter === 'notes'}
            onClick={() => setFilter('notes')}
          >
            Notes
          </FilterButton>
        </FilterButtons>
      </Header>

      {filter === 'all' && (
        <>
          {sortedNotes.length > 0 && (
            <>
              <SectionDivider>Notes</SectionDivider>
              <WorksList>
                {sortedNotes.map((item) => (
                  <ResearchCard
                    key={item.data.id}
                    type={item.type}
                    data={item.data}
                  />
                ))}
              </WorksList>
            </>
          )}
          {sortedProjects.length > 0 && (
            <>
              <SectionDivider>Projects</SectionDivider>
              <WorksList>
                {sortedProjects.map((item) => (
                  <ResearchCard
                    key={item.data.id}
                    type={item.type}
                    data={item.data}
                  />
                ))}
              </WorksList>
            </>
          )}
        </>
      )}

      {filter !== 'all' && (
        <WorksList>
          {filteredItems.map((item) => (
            <ResearchCard
              key={item.data.id}
              type={item.type}
              data={item.data}
            />
          ))}
        </WorksList>
      )}
    </Container>
  );
};

export default AllResearch;
