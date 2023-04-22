import styled from 'styled-components';

import { CardDiv, TabGrid } from './GlobalStyles';

export const WorkExperienceCardTopDiv = styled(CardDiv)`
  width: 100%;
`;

export const WorkExperienceTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(420px, auto);
  grid-template-columns: repeat(2, 0.35fr);

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 0.8fr);
  }
`;
