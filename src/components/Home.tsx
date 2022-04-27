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
        DS.
        <wbr />
        DEV
      </H1>
      <Gradient />
      {Spotlights.map((Spotlight, i) => (
        <Spotlight key={i} />
      ))}
    </TitleDiv>
    <HomeNavigation />
  </HomeDiv>
);
