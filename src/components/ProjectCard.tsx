import { BiLinkExternal } from 'react-icons/bi';

import {
  CardContainer,
  CardDiv,
  CardLabel,
  CardText,
  CardTitle,
  Link,
  OverlayContainer,
  OverlayContent,
  OverlayDiv,
  OverlayLink,
} from '../styles/GlobalStyles';
import { ProjectCardImage } from '../styles/ProjectsStyles';

export const ProjectCard = ({
  project: {
    description,
    features,
    githubUrl,
    imageUrl,
    name,
    projectUrl,
    technologiesUsed,
  },
}: {
  project: {
    description: string;
    features: string;
    githubUrl: string;
    imageUrl: string;
    name: string;
    projectUrl: string;
    technologiesUsed: string;
  };
}) => (
  <CardContainer>
    <OverlayContainer>
      <ProjectCardImage src={imageUrl} />
      <OverlayDiv>
        <OverlayContent>
          <OverlayLink
            href={projectUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            View Project
            <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
          </OverlayLink>
          <OverlayLink
            href={githubUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            View Code on GitHub
            <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
          </OverlayLink>
        </OverlayContent>
      </OverlayDiv>
    </OverlayContainer>
    <CardTitle>{name}</CardTitle>
    <CardText>{description}</CardText>
    <CardDiv>
      <CardLabel>Technologies Used:</CardLabel>
      <CardText>{technologiesUsed}</CardText>
    </CardDiv>
    <CardDiv>
      <CardLabel>Features:</CardLabel>
      <CardText>{features}</CardText>
    </CardDiv>
    <CardDiv>
      <Link href={projectUrl} rel='noopener noreferrer' target='_blank'>
        View Project <BiLinkExternal />
      </Link>
      <Link href={githubUrl} rel='noopener noreferrer' target='_blank'>
        View Code on GitHub <BiLinkExternal />
      </Link>
    </CardDiv>
  </CardContainer>
);
