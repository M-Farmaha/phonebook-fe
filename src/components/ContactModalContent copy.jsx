import { ContactEditForm } from './ContactEditForm';
import {
  ContactInfoButtonFilter,
  ContactInfoButtonInModal,
} from './StyledComponents';

import { getRandomColor } from 'getRandomColor';

export const ContactModalContent = ({ contactInfo }) => {
  return (
    <>
      <ContactInfoButtonInModal
        type="button"
        disabled
        style={{
          backgroundColor: getRandomColor(contactInfo.name),
        }}
      >
        <ContactInfoButtonFilter>
          {contactInfo.name.slice(0, 1).toUpperCase()}
        </ContactInfoButtonFilter>
      </ContactInfoButtonInModal>
      <ContactEditForm contactInfo={contactInfo} />
    </>
  );
};
