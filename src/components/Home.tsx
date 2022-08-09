import { HomeNavigation } from './HomeNavigation';
import {
  Gradient,
  H1,
  HomeDiv,
  Spotlights,
  TitleDiv,
  TitleNote,
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
      {Spotlights.map((Spotlight, index) => (
        <Spotlight key={index} />
      ))}
    </TitleDiv>
    <TitleNote>To each, only that which they deserve.</TitleNote>
    <HomeNavigation />
  </HomeDiv>
);
