import educationData from '../data/education.json';
import { EducationCard } from './EducationCard';
import { EducationTabGrid } from '../styles/EducationStyles';
import { TabContainer } from '../styles/GlobalStyles';
import { TabHeader } from './TabHeader';

export const Education = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <EducationTabGrid>
      {educationData.map((educationInfo) => (
        <EducationCard
          educationInfo={educationInfo}
          key={educationInfo.degree}
        />
      ))}
    </EducationTabGrid>
  </TabContainer>
);
