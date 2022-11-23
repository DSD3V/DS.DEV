import styled from 'styled-components';

import { COLORS } from '../constants';
import { CardDiv, CardText, CardTitle, TabGrid } from './GlobalStyles';

export const CourseLi = styled.li`
  break-inside: avoid;
  color: ${COLORS.GREY};
  overflow-x: visible;
  padding-right: 22px;
  text-align: left;
  word-break: break-word;
`;

export const CoursesUl = styled.ul`
  font-size: 1.02rem;
  line-height: 22px;
  list-style-position: outside;
  list-style-type: '- ';
  margin: 0.5% auto;
  width: 100%;

  @media (max-width: 628px) {
    columns: 1;
    display: flex;
    flex-flow: column wrap;
  }
`;

export const CourseworkDiv = styled(CardDiv)`
  margin: 1%;
  width: auto;
`;

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
  grid-auto-rows: minmax(650px, auto);
  grid-template-columns: repeat(2, 0.47fr);

  @media (max-width: 1168px) {
    grid-template-columns: repeat(1, 0.94fr);
  }
`;
