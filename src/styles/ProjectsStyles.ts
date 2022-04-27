import styled from 'styled-components';

import { CardImage, TabGrid } from './GlobalStyles';

export const ProjectCardImage = styled(CardImage)`
  height: 195px;
`;

export const ProjectsTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(500px, auto);
  grid-template-columns: repeat(3, 0.33fr);

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 0.49fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 0.9fr);
  }
`;
