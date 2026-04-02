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
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.border.medium};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary : theme.colors.background};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.inverse : theme.colors.text.secondary};
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
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const AllWorksLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }
`;

type FilterType = 'all' | 'projects' | 'notes';

function Works() {
  const [filter, setFilter] = React.useState<FilterType>('all');

  const topProjects = projectsData.slice(0, 2) as ProjectData[];
  const topNotes = notesData.slice(0, 2) as NoteData[];

  const allItems: Array<{ type: 'project' | 'note'; data: ProjectData | NoteData }> = [
    ...topProjects.map(p => ({ type: 'project' as const, data: p })),
    ...topNotes.map(n => ({ type: 'note' as const, data: n }))
  ];

  const sortedItems = allItems.sort((a, b) => {
    // For notes, sort by dateRead (newest first)
    if (a.type === 'note' && b.type === 'note') {
      const dateA = new Date((a.data as NoteData).source.dateRead).getTime();
      const dateB = new Date((b.data as NoteData).source.dateRead).getTime();
      return dateB - dateA;
    }
    // For projects, sort by year (newest first)
    if (a.type === 'project' && b.type === 'project') {
      const yearA = parseInt((a.data as ProjectData).year || '0');
      const yearB = parseInt((b.data as ProjectData).year || '0');
      return yearB - yearA;
    }
    // Mixed types: notes come first
    return a.type === 'note' ? -1 : 1;
  });

  const filteredItems = sortedItems.filter(item => {
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
      <AllWorksLink><Link to='/all-research'>View all research & projects →</Link></AllWorksLink>
    </WorksWrapper>
  );
}

export default Works;
