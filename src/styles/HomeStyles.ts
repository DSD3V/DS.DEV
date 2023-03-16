import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '../constants';

export const Gif = styled.img`
  margin-top: -1px;
  width: 50%;
`;

export const Gradient = styled.div`
  background: ${COLORS.GREY};
  bottom: 0;
  left: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

export const H1 = styled.h1`
  color: transparent;
  filter: brightness(240%) contrast(110%);
  font-size: 32vmax;
  -webkit-text-stroke: 4px rgba(${COLORS.WHITE_RGB}, 0.2);
  word-break: break-word;

  ::before,
  ::after {
    color: black;
    left: 0;
    mix-blend-mode: difference;
    pointer-events: none;
    top: 0;
  }
`;

export const HomeDiv = styled.div`
  margin: 12vh auto 3vh auto;
  width: 100%;
`;

export const HomeNavigationDiv = styled.div`
  display: grid;
  grid-row-gap: 1.8em;
  grid-template-columns: repeat(5, 0.1fr);
  justify-content: center;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 0.2fr);
    width: 70%;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 0.1fr);
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 88%;
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const rotateTime = 20;
const translateTime = 10;

const spotlightStyles = [
  {
    positionPercentage: -100,
    time: translateTime,
    transform: 'translate3d(50%, 50%, 0)',
  },
  {
    positionPercentage: 0,
    time: translateTime,
    transform: 'translate3d(-50%, 50%, 0)',
  },
  {
    positionPercentage: -100,
    time: translateTime,
    transform: 'translate3d(-50%, -50%, 0)',
  },
  {
    positionPercentage: 0,
    time: translateTime,
    transform: 'translate3d(50%, -50%, 0)',
  },
  {
    positionPercentage: -90,
    time: translateTime,
    transform: 'translate3d(50%, 50%, 0)',
  },
  {
    positionPercentage: 10,
    time: translateTime,
    transform: 'translate3d(-50%, 50%, 0)',
  },
  {
    positionPercentage: -90,
    time: translateTime,
    transform: 'translate3d(-50%, -50%, 0)',
  },
  {
    positionPercentage: 10,
    time: translateTime,
    transform: 'translate3d(50%, -50%, 0)',
  },
  {
    positionPercentage: -100,
    time: rotateTime,
    transform: 'rotate(180deg)',
  },
  {
    positionPercentage: 0,
    time: rotateTime,
    transform: 'rotate(180deg)',
  },
  {
    positionPercentage: -100,
    time: rotateTime,
    transform: 'rotate(-180deg)',
  },
  {
    positionPercentage: 0,
    time: rotateTime,
    transform: 'rotate(-180deg)',
  },
];

export const Spotlights = spotlightStyles.reduce(
  (
    spotlights: React.FunctionComponent[],
    {
      positionPercentage,
      time,
      transform,
    }: {
      positionPercentage: number;
      time: number;
      transform: string;
    }
  ): React.FunctionComponent[] => {
    const animation = keyframes`
      100% {
        transform: ${transform} scale(1.5);
      }
    `;

    const Spotlight = styled.div`
      animation: ${animation} ${time}s infinite linear alternate both;
      background: radial-gradient(circle, ${COLORS.WHITE}, transparent 25%) 0 0 /
          25% 25%,
        radial-gradient(circle, ${COLORS.WHITE}, black 25%) 5% 5% / 12.5% 12.5%;
      bottom: ${-1 * positionPercentage - 100}%;
      left: ${positionPercentage}%;
      mix-blend-mode: color-dodge;
      pointer-events: none;
      position: absolute;
      right: ${-1 * positionPercentage - 100}%;
      top: ${positionPercentage}%;
    `;

    return [...spotlights, Spotlight];
  },
  []
);

export const StyledLink = styled(Link)`
  align-items: center;
  color: ${COLORS.GREY};
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.4s;
  width: 250px;

  :hover {
    color: ${COLORS.LIGHT_GREY};
  }
`;

export const TitleDiv = styled.div`
  overflow: hidden;
  position: relative;
`;