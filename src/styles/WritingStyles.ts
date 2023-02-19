import styled from 'styled-components';

import { COLORS } from '../constants';
import { CardContainer, CardTitle, Link, TabGrid } from '../styles/GlobalStyles';

export const WritingCardContainer = styled(CardContainer)`
    justify-content: start;
    padding-bottom: 7%;
`;

export const WritingCardTitle = styled(CardTitle)`
    font-size: 1.5rem;
`;

export const WritingDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3%;
`;

export const WritingInspirationDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WritingInspirationLabel = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.3rem;
  margin-top: 50px;
  padding: 15px;
`;

export const WritingInspirationLi = styled.li`
  break-inside: avoid;
  color: ${COLORS.GREY};
  padding: 5px;
  word-break: break-word;
`;

export const WritingInspirationOthersSpan = styled.span`
    color: ${COLORS.LIGHT_GREY};
    font-size: 1.02rem;
    margin-top: 15px;
`;

export const WritingInspirationUl = styled.ul`
  font-size: 1.1rem;
  line-height: 22px;
`;

export const WritingTabGrid = styled(TabGrid)`
    grid-auto-rows: minmax(400px, auto);
    grid-gap: 50px;
    grid-template-columns: repeat(2, 0.44fr);

    @media (max-width: 870px) {
        grid-template-columns: repeat(1, 0.8fr);
    }
`;

export const WrittenWorkLink = styled(Link)`
    display: inline;
    font-size: 1.1rem;
    padding: 12px;
`;

export const WrittenWorkPageCount = styled.span`
    color: rgb(7, 79, 198);
    font-size: 0.95rem;
    padding-left: 5px;
`;