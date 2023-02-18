import styled from 'styled-components';

import { COLORS } from '../constants';

export const CardContainer = styled.div`
  align-items: center;
  border: 2px solid rgba(${COLORS.BLUE_RGB}, 0.4);
  color: ${COLORS.GREY};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  width: 100%;
`;

export const CardDiv = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  height: 145px;
  padding: 2px;
  width: 100%;
`;

export const CardLabel = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.14rem;
  overflow: hidden;
  padding: 3% 2%;
  width: 100%;
`;

export const CardText = styled.span`
  color: ${COLORS.GREY};
  font-size: 1.05rem;
  justify-self: flex-start;
  overflow: hidden;
  padding: 0 6% 4% 6%;
`;

export const CardTitle = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.7rem;
  overflow: hidden;
  padding: 3% 4.5% 2% 4.5%;
`;

export const Gif = styled.img`
  margin-top: -2px;
  width: 5.5rem;
`;

export const Link = styled.a`
  align-items: center;
  color: ${COLORS.LINK_BLUE};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  margin-bottom: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: 0.4s;

  svg {
    fill: ${COLORS.LINK_BLUE};
    padding-left: 3px;
    transition: 0.4s;
  }

  :hover {
    color: ${COLORS.LIGHT_LINK_BLUE};

    svg {
      fill: ${COLORS.LIGHT_LINK_BLUE};
    }
  }
`;

export const OverlayContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const OverlayContent = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2% 3%;
`;

export const OverlayDiv = styled.div`
  align-items: center;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 50%;
  opacity: 0;
  overflow: hidden;
  padding: 3%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: 0.4s;
  width: 100%;

  :hover {
    opacity: 1;
  }
`;

export const OverlayLink = styled(Link)`
  background: transparent;
  margin: 4% 0;
`;

export const TabContainer = styled.div`
  margin: 60px auto;
  overflow: visible;
  width: 85%;
`;

export const TabGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  justify-content: center;
  margin-top: 1.5%;
`;

export const TabTitle = styled.div`
  color: ${COLORS.LIGHT_GREY};
  font-size: 2rem;
  padding: 1%;
`;

export const TabTitleDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
