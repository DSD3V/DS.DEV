import { BiLinkExternal } from 'react-icons/bi';

import writingData from '../data/writing.json';
import { TabContainer } from '../styles/GlobalStyles';
import {
  EssayDiv,
  EssayLink,
  WritingContainer,
  WritingDiv,
  WritingNote,
} from '../styles/WritingStyles';
import { TabHeader } from './TabHeader';

export const Writing = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <WritingContainer>
      <WritingNote>
        Below are some essays I wrote during undergrad. I am keeping them
        unedited so I may see how my thinking evolves over time.
      </WritingNote>
      <WritingDiv>
        {writingData.map(({ essayTitle, essayUrl }) => (
          <EssayDiv key={essayTitle}>
            {essayTitle}{' '}
            <EssayLink
              href={essayUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLinkExternal />
            </EssayLink>
          </EssayDiv>
        ))}
      </WritingDiv>
    </WritingContainer>
  </TabContainer>
);
