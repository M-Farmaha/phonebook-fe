import { createContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from './AppBar';
import { BlurOverlayIn, BlurOverlayOut } from '../components/BlurOverlay';

export const RedirectContext = createContext();

export const Layout = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = path => {
    setShouldRedirect(true);
    setTimeout(() => {
      navigate(path);
      setShouldRedirect(false);
    }, 300);
  };

  return (
    <>
      <RedirectContext.Provider
        value={{
          handleRedirect,
          shouldRedirect,
        }}
      >
        <AppBar />
        {shouldRedirect ? <BlurOverlayIn /> : <BlurOverlayOut />}
        <Toaster />
        <main>
          <Outlet />
        </main>
      </RedirectContext.Provider>
    </>
  );
};
