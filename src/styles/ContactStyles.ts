import styled from 'styled-components';

import { COLORS } from '../constants';
import { Link } from './GlobalStyles';

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmailDiv = styled.div`
  font-size: 1.2rem;
  margin-top: 25px;
`;

export const LinkedInLink = styled(Link)`
  align-self: center;
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.06rem;
  margin-top: 20px;

  svg {
    fill: ${COLORS.LIGHT_GREY};
  }

  :hover {
    color: ${COLORS.LIGHTER_GREY};

    svg {
      fill: ${COLORS.LIGHTER_GREY};
    }
  }
`;

export const LinkedInLogo = styled.img`
  height: 26px;
  margin: -2px 3px 0 0;
  width: 26px;
`;
