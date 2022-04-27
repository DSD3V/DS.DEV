import styled from 'styled-components';

import { COLORS } from '../constants';
import { CardDiv, TabGrid } from './GlobalStyles';

export const CourseLi = styled.li`
  break-inside: avoid;
  color: ${COLORS.GREY};
  overflow-x: visible;
  text-align: left;
  word-break: break-word;
`;

export const CoursesUl = styled.ul<{
  $numColumns: number;
}>`
  columns: ${({ $numColumns }) => $numColumns};
  list-style-position: outside;
  list-style-type: '- ';
  margin-top: 2%;
  width: 88%;

  @media (max-width: 628px) {
    columns: 1;
    display: flex;
    flex-flow: column wrap;
  }
`;

export const CourseworkDiv = styled(CardDiv)`
  margin-top: -1%;
`;

export const EducationCardTopDiv = styled(CardDiv)`
  width: 100%;
  margin-bottom: 6%;
`;

export const EducationTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(650px, auto);
  grid-template-columns: repeat(2, 0.49fr);

  @media (max-width: 1168px) {
    grid-template-columns: repeat(1, 0.95fr);
  }
`;
