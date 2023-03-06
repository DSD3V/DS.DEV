import contactData from '../../data/contact.json';
import { TabContainer } from '../styles/GlobalStyles';
import { ContactDiv, EmailDiv } from '../styles/ContactStyles';
import { TabHeader } from './TabHeader';

type ContactProps = {
  title: string;
}

export const Contact = ({ title }: ContactProps) => (
  <TabContainer>
    <TabHeader title={title} />
    <ContactDiv>
      <EmailDiv>Email: {contactData.email}</EmailDiv>
    </ContactDiv>
  </TabContainer>
);