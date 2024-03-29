import workExperienceData from '../../data/workExperience.json';
import { TabContainer } from '../styles/GlobalStyles';
import { WorkExperienceTabGrid } from '../styles/WorkExperienceStyles';
import { TabHeader } from './TabHeader';
import { WorkExperienceCard } from './WorkExperienceCard';

type WorkExperienceProps = {
  title: string;
}

export const WorkExperience = ({ title }: WorkExperienceProps) => (
  <TabContainer>
    <TabHeader title={title} />
    <WorkExperienceTabGrid>
      {workExperienceData.map((workExperience) => (
        <WorkExperienceCard workExperience={workExperience} key={workExperience.summary} />
      ))}
    </WorkExperienceTabGrid>
  </TabContainer>
);
