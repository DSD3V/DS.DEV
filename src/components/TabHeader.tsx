import { Gif, TabTitle, TabTitleDiv } from '../styles/GlobalStyles';
import { TabTitleToGifUrl } from '../tabs';

type TabHeaderProps = {
  title: string;
}

export const TabHeader = ({ title }: TabHeaderProps) => (
  <TabTitleDiv>
    <Gif src={TabTitleToGifUrl[title]} />
    <TabTitle>{title}</TabTitle>
    <Gif src={TabTitleToGifUrl[title]} />
  </TabTitleDiv>
);
