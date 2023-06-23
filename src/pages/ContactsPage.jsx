import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';

import { Section } from '../components/styled';
import { PrivateRoute } from 'components/PrivateRoute';

const ContactPage = () => {
  return (
    <>
      <PrivateRoute>
        <Section>
          <ContactForm />
          <Filter />
          <ContactList />
        </Section>
      </PrivateRoute>
    </>
  );
};

export default ContactPage;
