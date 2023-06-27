import { useEffect } from 'react';
import {
  CloseIcon,
  ContactButton,
  ContactInfoButtonFilter,
  ContactInfoButtonInModal,
  ModalOverlay,
  ModalWrap,
} from './styled';
import { ContactEditForm } from './ContactEditForm';
import { getRandomColor } from 'getRandomColor';

export const ContactModal = ({ toggleModal, userInModal }) => {
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') toggleModal();
    };

    window.addEventListener('keydown', handlePressESC);
    document.body.classList.add('modal-open');

    return () => {
      window.removeEventListener('keydown', handlePressESC);
      document.body.classList.remove('modal-open');
    };
  }, [toggleModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) toggleModal();
  };

  return (
    <>
      <ModalOverlay onMouseDownCapture={handleOverlayClick}>
        <ModalWrap style={{ position: 'relative' }}>
          <ContactButton
            type="button"
            id={userInModal.id}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={toggleModal}
          >
            <CloseIcon />
          </ContactButton>
          <ContactInfoButtonInModal
            type="button"
            style={{
              backgroundColor: getRandomColor(userInModal.name),
            }}
          >
            <ContactInfoButtonFilter>
              {userInModal.name.slice(0, 1).toUpperCase()}
            </ContactInfoButtonFilter>
          </ContactInfoButtonInModal>
          <ContactEditForm userInModal={userInModal} />
        </ModalWrap>
      </ModalOverlay>
    </>
  );
};
