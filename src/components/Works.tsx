import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import ResearchCard, { NoteData, ProjectData } from "./ResearchCard";
import projectsData from "../content/projects/index.json";
import notesData from "../data/notes.json";

const WorksWrapper = styled.section`
  margin-bottom: 48px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid ${props => props.$active ? '#007BFF' : '#e0e0e0'};
  background: ${props => props.$active ? '#007BFF' : 'white'};
  color: ${props => props.$active ? 'white' : '#333'};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #007BFF;
    color: ${props => props.$active ? 'white' : '#007BFF'};
  }
`;

const WorkItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;

const AllWorksLink = styled.p`
  margin-top: 24px;
  text-align: left;

  a {
    color: #333333;
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

type FilterType = 'all' | 'projects' | 'notes';

function Works () {
  const [filter, setFilter] = React.useState<FilterType>('all');

  // Combine and sort by date (projects by year, notes by dateRead)
  const topProjects = projectsData.slice(0, 2) as ProjectData[];
  const topNotes = notesData.slice(0, 2) as NoteData[];

  // Interleave projects and notes for "all" view
  const allItems: Array<{ type: 'project' | 'note'; data: ProjectData | NoteData }> = [
    ...topProjects.map(p => ({ type: 'project' as const, data: p })),
    ...topNotes.map(n => ({ type: 'note' as const, data: n }))
  ];

  const filteredItems = allItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'projects') return item.type === 'project';
    if (filter === 'notes') return item.type === 'note';
    return true;
  });

  return (
    <WorksWrapper id="research">
      <SectionHeader>
        <SectionTitle>Research & Projects</SectionTitle>
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
      </SectionHeader>
      <WorkItemsContainer>
        {filteredItems.map((item) => (
          <ResearchCard
            key={item.data.id}
            type={item.type}
            data={item.data}
          />
        ))}
      </WorkItemsContainer>
      <AllWorksLink><Link to='/all-research'>View all research & notes →</Link></AllWorksLink>
    </WorksWrapper>
  )
}

export default Works;