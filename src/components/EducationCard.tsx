import { BiLinkExternal } from 'react-icons/bi';

import {
  CourseLi,
  CoursesUl,
  CourseworkDiv,
  EducationCardDiv,
  EducationCardSubtitle,
  EducationCardText,
} from '../styles/EducationStyles';
import {
  CardContainer,
  CardImage,
  CardLabel,
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
    relevantCoursework: string[];
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
    relevantCoursework,
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
      <CourseworkDiv>
        <CardLabel>Courses:</CardLabel>
        <CoursesUl>
          {relevantCoursework.map((course) => (
            <CourseLi key={course}>{course}</CourseLi>
          ))}
        </CoursesUl>
      </CourseworkDiv>
    </EducationCardDiv>
  </CardContainer>
);
