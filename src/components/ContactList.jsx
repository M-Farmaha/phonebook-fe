import toast from 'react-hot-toast';

import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactItem } from './ContactItem';
import { ContactListWrap } from './styled';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { ContactsLoader } from './Loaders';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data, isLoading, error, isError } = useGetContactsQuery();

  useEffect(() => {
    isError && toast.error(`Wasn't loaded. Status: ${error.status}`);
  }, [error, isError]);

  const visibleContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return isLoading ? (
    <ContactsLoader />
  ) : (
    visibleContacts.length !== 0 && (
      <ContactListWrap>
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactListWrap>
    )
  );
};
