import styled from 'styled-components';

import { CardContainer, CardTitle, Link, TabGrid } from '../styles/GlobalStyles';

export const WritingCardContainer = styled(CardContainer)`
    padding: 4%;
    justify-content: start;
`;

export const WritingCardTitle = styled(CardTitle)`
    font-size: 1.7rem;
    padding-bottom: 0px;
`;

export const WritingDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3%;
`;

export const WritingTabGrid = styled(TabGrid)`
    grid-auto-rows: minmax(400px, auto);
    grid-gap: 8em;
    grid-template-columns: repeat(2, 0.44fr);
    @media (max-width: 870px) {
        grid-template-columns: repeat(1, 0.8fr);
    }
`;

export const WrittenWorkLink = styled(Link)`
    display: inline;
    font-size: 1.1rem;
    padding: 12px;

    svg {
        transform: translateY(3px);
    }
`;

export const WrittenWorkPageCount = styled.span`
    color: rgb(7, 79, 198);
    font-size: 0.95rem;
    padding-left: 5px;
`;