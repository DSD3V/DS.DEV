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

type ProjectCardProps = {
  project: {
    description: string;
    features: string;
    githubUrl: string;
    imageUrl: string;
    name: string;
    projectUrl: string;
    technologiesUsed: string;
  }
}

export const ProjectCard = ({
  project: {
    description,
    features,
    githubUrl,
    imageUrl,
    name,
    projectUrl,
    technologiesUsed,
  }
}: ProjectCardProps) => (
  <CardContainer>
    <OverlayContainer>
      <ProjectCardImage src={imageUrl} />
      <OverlayDiv>
        <OverlayContent>
          <OverlayLink
            href={projectUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Project
            <BiLinkExternal style={{ backgroundColor: 'transparent' }} />
          </OverlayLink>
        </OverlayContent>
      </OverlayDiv>
    </OverlayContainer>
    <CardTitle>{name}</CardTitle>
    <CardText>{description}</CardText>
    <CardDiv>
      <CardLabel>Features:</CardLabel>
      <CardText>{features}</CardText>
    </CardDiv>
    <CardDiv>
      <CardLabel>Technologies Used:</CardLabel>
      <CardText>{technologiesUsed}</CardText>
    </CardDiv>
    <CardDiv>
      <Link href={githubUrl} rel="noopener noreferrer" target="_blank">
        View on GitHub <BiLinkExternal />
      </Link>
    </CardDiv>
  </CardContainer>
);
