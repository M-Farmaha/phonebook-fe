import PropTypes from 'prop-types';
import {
  ContactButton,
  ContactInfoButton,
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteIcon,
  EditIcon,
} from './styled';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ButtonDeleteLoader } from './Loaders';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

export const ContactItem = ({ contact }) => {
  const token = useSelector(getToken);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    toast.promise(deleteContact({ id: contact.id, token }), {
      loading: `Deleting...`,
      success: `Contact deleted!`,
      error: `Wasn't deleted`,
    });
  };

  return (
    <ContactItemWrap>
      <ContactInfoButton type="button">
        {contact.name.slice(0, 1).toUpperCase()}
      </ContactInfoButton>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <ContactButton type="button" id={contact.id}>
        <EditIcon />
      </ContactButton>
      <ContactButton
        disabled={isLoading}
        type="button"
        id={contact.id}
        onClick={handleDeleteContact}
      >
        {!isLoading ? <DeleteIcon /> : <ButtonDeleteLoader />}
      </ContactButton>
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
