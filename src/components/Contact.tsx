import contactData from '../data/contact.json';
import { TabContainer } from '../styles/GlobalStyles';
import { ContactDiv, EmailDiv, EmailNote } from '../styles/ContactStyles';
import { TabHeader } from './TabHeader';

export const Contact = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <ContactDiv>
      <EmailDiv>Email: {contactData.email}*</EmailDiv>
      <EmailNote>
        *Please do not contact me unless you have a good reason to.
      </EmailNote>
    </ContactDiv>
  </TabContainer>
);
