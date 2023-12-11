import styled from 'styled-components';

import { CardDiv, CardText, CardTitle, TabGrid } from './GlobalStyles';

export const EducationCardSubtitle = styled(CardTitle)`
  font-size: 1.45rem;
  margin: -2% 0 2% 0;
`;

export const EducationCardText = styled(CardText)`
  font-size: 1.08rem;
  padding-bottom: 2%;
  width: 100%;
`;

export const EducationCardDiv = styled(CardDiv)`
  width: 100%;
  margin-bottom: 6%;
`;

export const EducationTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(350px, auto);
  grid-template-columns: repeat(2, 0.47fr);

  @media (max-width: 1168px) {
    grid-template-columns: repeat(1, 0.94fr);
  }
`;
