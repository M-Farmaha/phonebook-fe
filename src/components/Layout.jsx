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
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';
import { darkTheme, lightTheme } from 'themes';
import { GlobalStyles } from 'components/GlobalStyles';

export const Context = createContext();

export const Layout = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInModal, setUserInModal] = useState(null);

  const theme = useSelector(getTheme);

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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
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
                color:
                  theme === 'light' ? 'rgb(37, 67, 89)' : 'rgb(255, 255, 255)',
                background:
                  theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(37, 67, 89)',
              },
              iconTheme: {
                primary: theme === 'light' ? 'rgb(37, 67, 89)' : '#ffffff',
                secondary:
                  theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(37, 67, 89)',
              },
            }}
          />
          <main>
            <Outlet />
            {isModalOpen && (
              <ContactModal
                toggleModal={toggleModal}
                userInModal={userInModal}
              />
            )}
            {isModalOpen ? <ModalBlurOverlayIn /> : <ModalBlurOverlayOut />}
          </main>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
};
