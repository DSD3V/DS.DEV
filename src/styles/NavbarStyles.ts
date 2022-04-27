import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, NAVBAR_TOGGLE_WIDTH } from '../constants';

export const NavbarDiv = styled.nav<{ $isMenuOpen: boolean }>`
  align-items: center;
  border-bottom: 1px solid rgba(${COLORS.BLUE_RGB}, 0.5);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const NavbarLinksDiv = styled.div<{
  $isMenuOpen: boolean;
  $numTabs: number;
}>`
  align-items: center;
  display: flex;
  overflow: hidden;

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    flex-direction: column;
    max-height: ${({ $isMenuOpen, $numTabs }) =>
      $isMenuOpen ? `${50 * $numTabs}px` : '0px'};
    transition: max-height 0.4s;
    width: 100%;
  }
`;

export const NavbarLink = styled(Link)<{
  $isCurrentTab: boolean;
}>`
  border-bottom: ${({ $isCurrentTab }) =>
    $isCurrentTab
      ? `1px solid rgba(${COLORS.LIGHT_BLUE_RGB}, 0.8)`
      : '1px solid black'};
  border-top: 1px solid black;
  color: ${({ $isCurrentTab }) =>
    $isCurrentTab ? COLORS.LIGHT_BLUE : COLORS.BLUE};
  font-size: 1.03rem;
  margin: 1rem 2rem;
  overflow: hidden;
  padding: 0px 2px 3px 2px;
  text-decoration: none;
  transition: 0.4s;

  :hover {
    color: ${COLORS.LIGHT_BLUE};
  }

  @media (max-width: 850px) {
    margin: 1rem 1.5rem;
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    margin: -0.1rem 0 1.1rem 0;
  }
`;

export const HomeNavbarLink = styled(NavbarLink)`
  font-size: 1.35rem;
  left: 0;
  margin: 1rem 1.7rem;
  position: fixed;
  top: 0;

  @media (max-width: 550px) {
    margin: 1rem 1.2rem;
  }
`;

export const Toggle = styled.div`
  cursor: pointer;
  display: none;
  margin: 1rem 1rem 1rem 90%;

  span {
    background-color: ${COLORS.BLUE};
    height: 2px;
    margin: 3px;
    transition: 0.4s;
    width: 24px;
  }

  :hover {
    span {
      background-color: ${COLORS.LIGHT_BLUE};
    }
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-left: 85%;
  }
`;
