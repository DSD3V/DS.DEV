import styled from 'styled-components';

import { COLORS } from '../constants';

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmailDiv = styled.div`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.4rem;
  margin-top: 25px;
`;

export const EmailNote = styled.div`
  color: ${COLORS.GREY};
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 25px;
`;
