import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import ResearchCard, { NoteData, ProjectData } from "./ResearchCard";
import projectsData from "../content/projects/index.json";
import notesData from "../data/notes.json";
import { SectionTitle } from "../styles/shared";

const WorksWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
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

const WorkItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const AllWorksLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: left;

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary};
      text-decoration: underline;
    }
  }
`;

type FilterType = 'all' | 'projects' | 'notes';

function Works() {
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
  );
}

export default Works;
