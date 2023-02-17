import styled from 'styled-components';

import { CardContainer, CardTitle, Link, TabGrid } from '../styles/GlobalStyles';

export const WritingCardContainer = styled(CardContainer)`
    justify-content: start;
    padding-bottom: 10%;
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

export const WritingTabGrid = styled(TabGrid)`
    grid-auto-rows: minmax(450px, auto);
    grid-gap: 50px;
    grid-template-columns: repeat(2, 0.48fr);

    @media (max-width: 870px) {
        grid-template-columns: repeat(1, 0.8fr);
    }
`;

export const WrittenWorkLink = styled(Link)`
    font-size: 1.1rem;
    padding: 12px;
`;

export const WrittenWorkPageCount = styled.span`
    color: rgb(7, 79, 198);
    font-size: 0.95rem;
    padding-left: 5px;
`;