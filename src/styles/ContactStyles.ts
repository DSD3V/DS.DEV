
import styled from 'styled-components';

import { COLORS } from '../constants';
import { Link } from '../styles/GlobalStyles';

export const ContactDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  justify-content: center;
  margin-top: 28px;
`;

export const EmailDiv = styled.div`
  color: ${COLORS.LIGHT_GREY};
`;

export const LinkedInLink = styled(Link)`
  font-size: 1.4rem;
  padding-top: 22px;
`