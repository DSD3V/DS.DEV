import projectsData from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import { TabContainer } from '../styles/GlobalStyles';
import { ProjectsTabGrid } from '../styles/ProjectsStyles';
import { TabHeader } from './TabHeader';

type ProjectsProps = {
  title: string;
}

export const Projects = ({ title }: ProjectsProps) => (
  <TabContainer>
    <TabHeader title={title} />
    <ProjectsTabGrid>
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsTabGrid>
  </TabContainer>
);
