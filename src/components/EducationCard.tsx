import { BiLinkExternal } from 'react-icons/bi';

import {
  EducationCardDiv,
  EducationCardSubtitle,
  EducationCardText,
} from '../styles/EducationStyles';
import {
  CardContainer,
  CardImage,
  CardTitle,
  OverlayContainer,
  OverlayContent,
  OverlayDiv,
  OverlayLink,
} from '../styles/GlobalStyles';

type EducationCardProps = {
  educationInfo: {
    collegeName: string;
    dates: string;
    degree: string;
    gpa: string;
    imageUrl: string;
    programUrl: string;
  }
}

export const EducationCard = ({
  educationInfo: {
    collegeName,
    dates,
    degree,
    gpa,
    imageUrl,
    programUrl,
  }
}: EducationCardProps) => (
  <CardContainer>
    <EducationCardDiv>
      <OverlayContainer>
        <CardImage src={imageUrl} />
        <OverlayDiv>
          <OverlayContent>
            <OverlayLink
              href={programUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Program
              <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
            </OverlayLink>
          </OverlayContent>
        </OverlayDiv>
      </OverlayContainer>
      <CardTitle>{degree}</CardTitle>
      <EducationCardSubtitle>{collegeName}</EducationCardSubtitle>
      <EducationCardText>{dates}</EducationCardText>
      <EducationCardText>GPA: {gpa}</EducationCardText>
    </EducationCardDiv>
  </CardContainer>
);
