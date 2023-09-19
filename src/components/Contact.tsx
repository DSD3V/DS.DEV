import { BiLinkExternal } from 'react-icons/bi';

import contactData from '../../data/contact.json';
import { TabContainer } from '../styles/GlobalStyles';
import { ContactDiv, EmailDiv, ContactLink } from '../styles/ContactStyles';
import { TabHeader } from './TabHeader';

type ContactProps = {
  title: string;
}

export const Contact = ({ title }: ContactProps) => (
  <TabContainer>
    <TabHeader title={title} />
    <ContactDiv>
      <EmailDiv>Email: {contactData.email}</EmailDiv>
      <ContactLink href={contactData.linkedIn} rel="noopener noreferrer" target="_blank">
          LinkedIn <BiLinkExternal />
      </ContactLink>
      <ContactLink href={contactData.x} rel="noopener noreferrer" target="_blank">
          X <BiLinkExternal />
      </ContactLink>
    </ContactDiv>
  </TabContainer>
);