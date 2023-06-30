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

import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';
import { darkTheme, lightTheme } from 'themes';
import { GlobalStyles } from 'components/GlobalStyles';
import { UserModalContent } from './UserModalContent';
import { Modal } from './Modal';
import { ContactModalContent } from './ContactModalContent copy';

export const Context = createContext();

export const Layout = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const theme = useSelector(getTheme);

  const handleRedirect = path => {
    setShouldRedirect(true);
    setTimeout(() => {
      navigate(path);
      setShouldRedirect(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContactInfo(null);
    setUserInfo(null);
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Context.Provider
          value={{
            handleRedirect,
            shouldRedirect,
            openModal,
            closeModal,
            setContactInfo,
            setUserInfo,
          }}
        >
          <AppBar />
          {shouldRedirect ? <BlurOverlayIn /> : <BlurOverlayOut />}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                padding: '8px',
                color:
                  theme === 'light'
                    ? 'rgb(102, 105, 150)'
                    : 'rgb(255, 255, 255)',
                background:
                  theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(37, 67, 89)',
              },
              iconTheme: {
                primary:
                  theme === 'light'
                    ? 'rgb(102, 105, 150)'
                    : 'rgb(255, 255, 255)',
                secondary:
                  theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(37, 67, 89)',
              },
            }}
          />
          <>
            <Outlet />
            {isModalOpen && (
              <Modal closeModal={closeModal}>
                {contactInfo && (
                  <ContactModalContent contactInfo={contactInfo} />
                )}
                {userInfo && <UserModalContent userInfo={userInfo} />}
              </Modal>
            )}
            {isModalOpen ? <ModalBlurOverlayIn /> : <ModalBlurOverlayOut />}
          </>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
};
