import { BiLinkExternal } from 'react-icons/bi';
import {
  Link
} from '../styles/GlobalStyles';
import {
  WritingCardContainer,
  WritingCardTitle,
  WritingDiv,
  WrittenWorkLink,
  WrittenWorkPageCount
} from '../styles/WritingStyles';

type WrittenWork = {
    pageCount: number;
    title: string;
    url: string;
}

type WritingCardProps = {
  writing: {
    type: string;
    works: WrittenWork[];
  }
}

export const WritingCard = ({
  writing: {
    type,
    works
  }
}: WritingCardProps) => (
  <WritingCardContainer>
    <WritingCardTitle>{type}</WritingCardTitle>
        <WritingDiv>
          {works.map(writtenWork =>
            // <WrittenWorkLink href={writtenWork.url} key={writtenWork.title} rel="noopener noreferrer" target="_blank">
            //     {writtenWork.title}
            //     <WrittenWorkPageCount>
            //       ({writtenWork.pageCount} {writtenWork.pageCount > 1 ? 'pages' : 'page'})
            //     </WrittenWorkPageCount> <BiLinkExternal />
            // </WrittenWorkLink>
            <WrittenWorkLink href={writtenWork.url} rel="noopener noreferrer" target="_blank">
            {writtenWork.title} <WrittenWorkPageCount>({writtenWork.pageCount} {writtenWork.pageCount > 1 ? 'pages' : 'page'})</WrittenWorkPageCount> <BiLinkExternal />
          </WrittenWorkLink>
          )}
        </WritingDiv>
  </WritingCardContainer>
);