import { BiLinkExternal } from 'react-icons/bi';

import writingData from '../../data/writing.json';
import { TabContainer } from '../styles/GlobalStyles';
import { EssayLink, WritingDiv } from '../styles/WritingStyles'
import { TabHeader } from './TabHeader';

type WritingProps = {
    title: string
}

  export const Writing = ({ title }: WritingProps) => (
    <TabContainer>
      <TabHeader title={title} />
      <WritingDiv>
        {writingData.map(essay =>
            <EssayLink href={essay.url} rel="noopener noreferrer" target="_blank">
                {essay.title} ({essay.pageCount} pages) <BiLinkExternal />
            </EssayLink>)}
      </WritingDiv>
    </TabContainer>
  );
  