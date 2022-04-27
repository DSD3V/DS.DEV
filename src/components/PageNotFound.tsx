import { TabContainer } from '../styles/GlobalStyles';
import { InvalidURLDiv, PageNotFoundDiv } from '../styles/PageNotFoundStyles';

export const PageNotFound = () => (
  <TabContainer>
    <PageNotFoundDiv>Page not found.</PageNotFoundDiv>
    <InvalidURLDiv>Invalid URL entered.</InvalidURLDiv>
  </TabContainer>
);
