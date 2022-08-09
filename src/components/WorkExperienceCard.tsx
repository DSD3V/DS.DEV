import { BiLinkExternal } from 'react-icons/bi';

import {
  CardContainer,
  CardDiv,
  CardImage,
  CardLabel,
  CardText,
  CardTitle,
  Link,
  OverlayContainer,
  OverlayContent,
  OverlayDiv,
  OverlayLink,
} from '../styles/GlobalStyles';
import { WorkExperienceCardTopDiv } from '../styles/WorkExperienceStyles';

export const WorkExperienceCard = ({
  experience: {
    companyName,
    dates,
    imageUrl,
    role,
    summary,
    technologiesUsed,
    websiteUrl,
  },
}: {
  experience: {
    companyName: string;
    dates: string;
    imageUrl: string;
    role: string;
    summary: string;
    technologiesUsed: string;
    websiteUrl: string;
  };
}) => (
  <CardContainer>
    <WorkExperienceCardTopDiv>
      <OverlayContainer>
        <CardImage src={imageUrl} />
        <OverlayDiv>
          <OverlayContent>
            <OverlayLink
              href={websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Company Website
              <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
            </OverlayLink>
          </OverlayContent>
        </OverlayDiv>
      </OverlayContainer>
      <CardTitle>
        {role} at {companyName}
      </CardTitle>
      <CardLabel>{dates}</CardLabel>
    </WorkExperienceCardTopDiv>
    <CardText>{summary}</CardText>
    <CardDiv>
      <CardLabel>Technologies Used:</CardLabel>
      <CardText>{technologiesUsed}</CardText>
    </CardDiv>
    <Link href={websiteUrl} rel="noopener noreferrer" target="_blank">
      View Company Website <BiLinkExternal />
    </Link>
  </CardContainer>
);
