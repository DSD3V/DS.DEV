import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  HomeNavbarLink,
  NavbarDiv,
  NavbarLink,
  NavbarLinksDiv,
  Toggle,
} from '../styles/NavbarStyles';
import { TabRouteToIndex, TABS, TabTitleToIndex } from '../tabs';

export const Navbar = () => {
  const currentRoute = useLocation().pathname;
  const [currentTabIndex, setCurrentTabIndex] = useState(
    TabRouteToIndex[currentRoute]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentTabIndex(TabRouteToIndex[currentRoute]);
  }, [currentRoute]);

  const tabClicked = useCallback(({ target: { title } }) => {
    setCurrentTabIndex(TabTitleToIndex[title]);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  return (
    <NavbarDiv $isMenuOpen={isMenuOpen}>
      <HomeNavbarLink
        $isCurrentTab={currentTabIndex === 0}
        key={TABS[0].title}
        onClick={tabClicked}
        to={TABS[0].route}
      >
        {TABS[0].title}
      </HomeNavbarLink>
      <Toggle onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Toggle>
      <NavbarLinksDiv $isMenuOpen={isMenuOpen} $numTabs={TABS.length - 1}>
        {TABS.slice(1).map(({ route, title }, index) => (
          <NavbarLink
            $isCurrentTab={++index === currentTabIndex}
            key={title}
            onClick={tabClicked}
            to={route}
          >
            {title}
          </NavbarLink>
        ))}
      </NavbarLinksDiv>
    </NavbarDiv>
  );
};
