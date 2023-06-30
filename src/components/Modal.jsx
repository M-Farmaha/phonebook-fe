import { useEffect } from 'react';
import {
  CloseIcon,
  ContactButton,
  ModalOverlay,
  ModalWrap,
} from './StyledComponents';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handlePressESC);
    document.body.classList.add('modal-open');

    return () => {
      window.removeEventListener('keydown', handlePressESC);
      document.body.classList.remove('modal-open');
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <>
      <ModalOverlay onMouseDownCapture={handleOverlayClick}>
        <ModalWrap style={{ position: 'relative' }}>
          <ContactButton
            type="button"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={closeModal}
          >
            <CloseIcon />
          </ContactButton>
          {children}
        </ModalWrap>
      </ModalOverlay>
    </>
  );
};
