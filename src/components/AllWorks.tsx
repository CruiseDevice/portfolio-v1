import { useState } from 'react';
import projectsData from '../content/projects/index.json';
import notesData from '../data/notes.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ResearchCard, { NoteData, ProjectData } from './ResearchCard';

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid ${props => props.$active ? '#007BFF' : '#e0e0e0'};
  background: ${props => props.$active ? '#007BFF' : 'white'};
  color: ${props => props.$active ? 'white' : '#333'};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #007BFF;
    color: ${props => props.$active ? 'white' : '#007BFF'};
  }
`;

const WorksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionDivider = styled.div`
  margin: 32px 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #888;
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