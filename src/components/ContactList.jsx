import toast from 'react-hot-toast';

import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactItem } from './ContactItem';
import { ContactListWrap } from './StyledComponents';

import { useSelector } from 'react-redux';
import { getFilter, getToken } from 'redux/selectors';
import { useEffect } from 'react';
import { ContactsLoader } from './Loaders';

export const ContactList = () => {
  const token = useSelector(getToken);

  const filter = useSelector(getFilter);
  const { data, isLoading, isError } = useGetContactsQuery(token);

  useEffect(() => {
    isError && toast.error(`Something went wrong`);
  }, [isError]);

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
