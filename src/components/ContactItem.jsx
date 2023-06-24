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
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

export const ContactItem = ({ contact }) => {
  const token = useSelector(getToken);

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
        onClick={() => deleteContact({ id: contact.id, token })}
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
