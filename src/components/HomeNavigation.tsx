import { Gif, HomeNavigationDiv, StyledLink } from '../styles/HomeStyles';
import { TABS } from '../tabs';

export const HomeNavigation = () => (
  <HomeNavigationDiv>
    {TABS.slice(1).map(tab => (
      <StyledLink key={tab.title} to={tab.route}>
        {tab.title}
        <Gif src={tab.gifUrl} />
      </StyledLink>
    ))}
  </HomeNavigationDiv>
);
