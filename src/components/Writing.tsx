import writingData from '../../data/writing.json';
import { TabContainer } from '../styles/GlobalStyles';
import {
  WritingInspirationDiv,
  WritingInspirationLabel,
  WritingInspirationLi,
  WritingInspirationOthersSpan,
  WritingInspirationUl,
  WritingTabGrid
} from '../styles/WritingStyles';
import { TabHeader } from './TabHeader';
import { WritingCard } from './WritingCard';

type WritingProps = {
    title: string;
}

  export const Writing = ({ title }: WritingProps) => (
    <TabContainer>
      <TabHeader title={title} />
      <WritingTabGrid>
        {writingData.writing.map(writing =>
          <WritingCard writing={writing} />
        )}
      </WritingTabGrid>
      <WritingInspirationDiv>
        <WritingInspirationLabel>Sources of Inspiration for my Thinking:</WritingInspirationLabel>
        <WritingInspirationUl>
          {writingData.sourcesOfInspiration.map(sourceOfInspiration =>
            <WritingInspirationLi>{sourceOfInspiration}</WritingInspirationLi>
          )}
        </WritingInspirationUl>
        <WritingInspirationOthersSpan>... and many others.</WritingInspirationOthersSpan>
      </WritingInspirationDiv>
    </TabContainer>
  );
  