import { createContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { AppBar } from './AppBar';
import { BlurOverlayIn, BlurOverlayOut } from '../components/BlurOverlay';

export const HandleRedirectContext = createContext();

export const Layout = () => {
  const navigate = useNavigate();
  const [shoulRedirect, setShoulRedirect] = useState(false);

  const handleRedirect = path => {
    setShoulRedirect(true);
    setTimeout(() => {
      navigate(path);
      setShoulRedirect(false);
    }, 300);
  };

  return (
    <>
      <HandleRedirectContext.Provider value={handleRedirect}>
        <AppBar />
        {shoulRedirect ? <BlurOverlayIn /> : <BlurOverlayOut />}
        <main>
          <Outlet />
        </main>
      </HandleRedirectContext.Provider>
    </>
  );
};
