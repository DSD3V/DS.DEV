import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';

import artData from '../../data/art.json'
import { TabContainer } from '../styles/GlobalStyles';
import { TabHeader } from './TabHeader';
  
const LIGHT_LINK_BLUE = '#0963F6';
const LINK_BLUE ='#074FC6';

type ArtProps = {
    title: string;
}

export const Art = ({ title }: ArtProps) => {
    const ArtContainer = styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(auto-fill, 275px);
        justify-content: center;
        margin: 0 auto;
        padding: 20px 0;
    `;

    const Description = styled.span`
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
    `

    const DescriptionDiv = styled.div`
        display: flex;
        padding: 10px; 
    `

    const Div = styled.div`
        align-items: center;
        border: 1px solid rgba(250, 250, 250, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 275px;
    `

    const Img = styled.img`
        height: 300px;
        padding: 5px;
        width: 250px;
    `

    const Link = styled.a`
        align-items: center;
        color: ${LINK_BLUE};
        cursor: pointer;
        display: inline-flex;
        font-size: 1rem;
        margin-top: -3px;
        padding-left: 2px;
        text-decoration: none;
        transition: 0.3s;
    
        svg {
            fill: ${LINK_BLUE};
            padding-left: 3px;
            transition: 0.3s;
        }
    
        :hover {
            color: ${LIGHT_LINK_BLUE};
    
            svg {
                fill: ${LIGHT_LINK_BLUE};
            }
        }
  `;

    return (
        <TabContainer>
            <TabHeader title={title} />
            <ArtContainer>
            {artData.map(({ description, image, link }) =>
                <Div key={description}>
                    <Img src={ require("../../data/images/" + image).default } />
                    <DescriptionDiv>
                        <Description>{description}</Description>
                        {link !== '' &&
                            <Link href={link} rel="noopener noreferrer" target="_blank">
                                <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
                            </Link>}
                    </DescriptionDiv>
                </Div>
            )}
            </ArtContainer>
        </TabContainer>
    )
}