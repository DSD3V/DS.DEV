import { HomeNavigation } from './HomeNavigation';
import {
  Gradient,
  H1,
  HomeDiv,
  Spotlights,
  TitleDiv,
} from '../styles/HomeStyles';

export const Home = () => (
  <HomeDiv>
    <TitleDiv>
      <H1>
        DS
      </H1>
      <Gradient />
      {Spotlights.map((Spotlight, index) => (
        <Spotlight key={index} />
      ))}
    </TitleDiv>
    <HomeNavigation />
  </HomeDiv>
);
