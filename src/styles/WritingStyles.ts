import styled from 'styled-components';

import { COLORS } from '../constants';
import { Link } from './GlobalStyles';

export const EssayDiv = styled.div`
  align-items: center;
  color: ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: center;
  margin: 3%;
  width: 100%;
`;

export const EssayLink = styled(Link)`
  font-size: 1.1rem;
  margin-bottom: 2px;
  padding-left: 2px;
`;

export const WritingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const WritingDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const WritingNote = styled.div`
  color: ${COLORS.GREY};
  font-size: 1.1rem;
  line-height: 1.2;
  margin 3% auto 2% auto;
  width: 60%;
`;
