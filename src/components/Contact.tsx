import { BiLinkExternal } from 'react-icons/bi';

import contactData from '../data/contact.json';
import { TabContainer } from '../styles/GlobalStyles';
import {
  ContactDiv,
  EmailDiv,
  LinkedInLink,
  LinkedInLogo,
} from '../styles/ContactStyles';
import { TabHeader } from './TabHeader';

export const Contact = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <ContactDiv>
      <EmailDiv>Email: {contactData.email}</EmailDiv>
      <LinkedInLink
        href={contactData.linkedInUrl}
        rel='noopener noreferrer'
        target='_blank'
      >
        <LinkedInLogo src={contactData.linkedInLogo} />
        LinkedIn <BiLinkExternal />
      </LinkedInLink>
    </ContactDiv>
  </TabContainer>
);
