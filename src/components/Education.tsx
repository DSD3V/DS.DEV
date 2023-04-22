import educationData from '../../data/education.json';
import { EducationCard } from './EducationCard';
import { EducationTabGrid } from '../styles/EducationStyles';
import { TabContainer } from '../styles/GlobalStyles';
import { TabHeader } from './TabHeader';

type EducationProps = {
  title: string;
}

export const Education = ({ title }: EducationProps) => (
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
