import { BiLinkExternal } from 'react-icons/bi';

import {
  CardContainer,
  CardDiv,
  CardImage,
  CardLabel,
  CardText,
  CardTitle,
  OverlayContainer,
  OverlayContent,
  OverlayDiv,
  OverlayLink,
} from '../styles/GlobalStyles';
import { WorkExperienceCardTopDiv } from '../styles/WorkExperienceStyles';

type WorkExperienceCardProps = {
  workExperience: {
    companyName: string;
    dates: string;
    imageUrl: string;
    role: string;
    summary: string;
    technologiesUsed: string;
    websiteUrl: string;
  }
}

export const WorkExperienceCard = ({
  workExperience: {
    companyName,
    dates,
    imageUrl,
    role,
    summary,
    technologiesUsed,
    websiteUrl
  }
}: WorkExperienceCardProps) => (
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
  </CardContainer>
);
