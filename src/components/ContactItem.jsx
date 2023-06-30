import PropTypes from 'prop-types';
import {
  ContactButton,
  ContactInfoButton,
  ContactInfoButtonFilter,
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteIcon,
} from './StyledComponents';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ButtonDeleteLoader } from './Loaders';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { getRandomColor } from 'getRandomColor';
import { useContext } from 'react';
import { Context } from './Layout';

export const ContactItem = ({ contact }) => {
  const token = useSelector(getToken);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { setContactInfo, openModal } = useContext(Context);

  const handleDeleteContact = () => {
    toast.promise(deleteContact({ id: contact.id, token }), {
      loading: `Deleting...`,
      success: `Contact deleted!`,
      error: `Wasn't deleted`,
    });
  };

  return (
    <>
      <ContactItemWrap>
        <ContactInfoButton
          type="button"
          style={{ backgroundColor: getRandomColor(contact.name) }}
          onClick={() => {
            setContactInfo(contact);
            openModal();
          }}
        >
          <ContactInfoButtonFilter>
            {contact.name.slice(0, 1).toUpperCase()}
          </ContactInfoButtonFilter>
        </ContactInfoButton>
        <ContactName>{contact.name}: </ContactName>
        <ContactNumber>{contact.number}</ContactNumber>

        <ContactButton
          disabled={isLoading}
          type="button"
          id={contact.id}
          onClick={handleDeleteContact}
        >
          {!isLoading ? <DeleteIcon /> : <ButtonDeleteLoader />}
        </ContactButton>
      </ContactItemWrap>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
