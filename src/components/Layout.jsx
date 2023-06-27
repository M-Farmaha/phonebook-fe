import { createContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from './AppBar';
import {
  BlurOverlayIn,
  BlurOverlayOut,
  ModalBlurOverlayIn,
  ModalBlurOverlayOut,
} from '../components/BlurOverlay';
import { ContactModal } from './ContactModal';

export const Context = createContext();

export const Layout = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInModal, setUserInModal] = useState(null);

  const handleRedirect = path => {
    setShouldRedirect(true);
    setTimeout(() => {
      navigate(path);
      setShouldRedirect(false);
    }, 300);
  };

  const toggleModal = user => {
    setUserInModal(user);
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <Context.Provider
        value={{
          handleRedirect,
          shouldRedirect,
          isModalOpen,
          toggleModal,
        }}
      >
        <AppBar />
        {shouldRedirect ? <BlurOverlayIn /> : <BlurOverlayOut />}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              padding: '8px',
              color: 'rgb(87, 88, 134)',
            },
            iconTheme: {
              primary: 'rgb(255, 0, 128)',
              secondary: '#ffffff',
            },
          }}
        />
        <main>
          <Outlet />
          {isModalOpen && (
            <ContactModal toggleModal={toggleModal} userInModal={userInModal} />
          )}
          {isModalOpen ? <ModalBlurOverlayIn /> : <ModalBlurOverlayOut />}
        </main>
      </Context.Provider>
    </>
  );
};
