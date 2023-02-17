import writingData from '../../data/writing.json';
import { TabContainer } from '../styles/GlobalStyles';
import { WritingTabGrid } from '../styles/WritingStyles';
import { TabHeader } from './TabHeader';
import { WritingCard } from './WritingCard';

type WritingProps = {
    title: string;
}

  export const Writing = ({ title }: WritingProps) => (
    <TabContainer>
      <TabHeader title={title} />
      <WritingTabGrid>
        {writingData.map(writing =>
          <WritingCard writing={writing} />
        )}
      </WritingTabGrid>
    </TabContainer>
  );
  