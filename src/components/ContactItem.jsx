import PropTypes from 'prop-types';
import {
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteButton,
  DeleteIcon,
} from './styled';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ButtonDeleteLoader } from './Loaders';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading, isSuccess, isError, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    isSuccess && toast.success('Successfully deleted!');
    isError && toast.error(`Wasn't deleted. Status: ${error.status}`);
  }, [error, isError, isSuccess]);

  return (
    <ContactItemWrap>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton
        disabled={isLoading}
        type="button"
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        {!isLoading ? <DeleteIcon /> : <ButtonDeleteLoader />}
      </DeleteButton>
    </ContactItemWrap>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
