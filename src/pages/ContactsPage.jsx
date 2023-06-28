import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';

import { Section } from '../components/StyledComponents';
import { UserInfo } from 'components/UserInfo';

const ContactPage = () => {
  return (
    <>
      <Section>
        <UserInfo />
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactPage;
