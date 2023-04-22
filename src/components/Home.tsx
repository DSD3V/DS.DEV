<<<<<<< HEAD
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
=======
export const Home = () => (
    <h1>DS</h1>
>>>>>>> 5051ed26926f4c8d4648e60caa482d01a2d4c7ab
);
