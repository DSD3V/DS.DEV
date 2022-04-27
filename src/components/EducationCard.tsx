import { BiLinkExternal } from 'react-icons/bi';

import {
  CourseLi,
  CoursesUl,
  CourseworkDiv,
  EducationCardTopDiv,
} from '../styles/EducationStyles';
import {
  CardContainer,
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

export const EducationCard = ({
  educationInfo: {
    collegeName,
    dates,
    degree,
    gpa,
    imageUrl,
    relevantCoursework,
    websiteUrl,
  },
}: {
  educationInfo: {
    collegeName: string;
    dates: string;
    degree: string;
    gpa: number | string;
    imageUrl: string;
    relevantCoursework: string[];
    websiteUrl: string;
  };
}) => (
  <CardContainer>
    <EducationCardTopDiv>
      <OverlayContainer>
        <CardImage src={imageUrl} />
        <OverlayDiv>
          <OverlayContent>
            <OverlayLink
              href={websiteUrl}
              rel='noopener noreferrer'
              target='_blank'
            >
              View Program
              <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
            </OverlayLink>
          </OverlayContent>
        </OverlayDiv>
      </OverlayContainer>
      <CardTitle>{collegeName}</CardTitle>
      <CardTitle>{degree}</CardTitle>
      <CardLabel>{dates}</CardLabel>
      <CardText>GPA: {gpa}</CardText>
      <CourseworkDiv>
        <CardLabel>Relevant Coursework:</CardLabel>
        <CoursesUl $numColumns={relevantCoursework.length > 10 ? 2 : 1}>
          {relevantCoursework.map(course => (
            <CourseLi key={course}>{course}</CourseLi>
          ))}
        </CoursesUl>
      </CourseworkDiv>
    </EducationCardTopDiv>
    <Link href={websiteUrl} rel='noopener noreferrer' target='_blank'>
      View Program <BiLinkExternal />
    </Link>
  </CardContainer>
);
