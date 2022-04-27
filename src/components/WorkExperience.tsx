import workExperienceData from '../data/workExperience.json';
import { TabContainer } from '../styles/GlobalStyles';
import { WorkExperienceTabGrid } from '../styles/WorkExperienceStyles';
import { TabHeader } from './TabHeader';
import { WorkExperienceCard } from './WorkExperienceCard';

export const WorkExperience = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <WorkExperienceTabGrid>
      {workExperienceData.map(experience => (
        <WorkExperienceCard
          experience={experience}
          key={experience.companyName}
        />
      ))}
    </WorkExperienceTabGrid>
  </TabContainer>
);
