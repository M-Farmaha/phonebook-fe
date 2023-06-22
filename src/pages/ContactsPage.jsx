import { Toaster } from 'react-hot-toast';

import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';

import { Section } from '../components/styled';

const ContactPage = () => {
  return (
    <>
      <Section>
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
      <Toaster />
    </>
  );
};

export default ContactPage;
