import projectsData from '../data/projects.json';
import { ProjectCard } from './ProjectCard';
import { TabContainer } from '../styles/GlobalStyles';
import { ProjectsTabGrid } from '../styles/ProjectsStyles';
import { TabHeader } from './TabHeader';

export const Projects = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <ProjectsTabGrid>
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsTabGrid>
  </TabContainer>
);
