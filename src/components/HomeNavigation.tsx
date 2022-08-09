import { Gif, HomeNavigationDiv, StyledLink } from '../styles/HomeStyles';
import { TABS } from '../tabs';

export const HomeNavigation = () => (
  <HomeNavigationDiv>
    {TABS.slice(1).map(({ gifUrl, route, title }) => (
      <StyledLink key={title} to={route}>
        {title}
        <Gif src={gifUrl} />
      </StyledLink>
    ))}
  </HomeNavigationDiv>
);
