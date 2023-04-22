import { HomeNavigation } from './HomeNavigation';
import {
  Gradient,
  H1,
  HomeDiv,
  Spotlights,
  SubtitleDiv,
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
    <SubtitleDiv>Freelance Web Development Services</SubtitleDiv>
    <HomeNavigation />
  </HomeDiv>
);
