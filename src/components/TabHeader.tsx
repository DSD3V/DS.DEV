import { Gif, TabTitle, TabTitleDiv } from '../styles/GlobalStyles';
import { TabTitleToGifUrl } from '../tabs';

export const TabHeader = ({ title }: { title: string }) => (
  <TabTitleDiv>
    <Gif src={TabTitleToGifUrl[title]} />
    <TabTitle>{title}</TabTitle>
    <Gif src={TabTitleToGifUrl[title]} />
  </TabTitleDiv>
);
