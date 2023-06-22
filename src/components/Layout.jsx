import { Suspense, createContext, useState } from 'react';
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
      setShoulRedirect(false);
      navigate(path);
    }, 300);
  };

  return (
    <>
      <HandleRedirectContext.Provider value={handleRedirect}>
        <AppBar handleRedirect={handleRedirect} />
        <main>
          {shoulRedirect && <BlurOverlayIn />}
          {!shoulRedirect && <BlurOverlayOut />}
          <Suspense fallback={<div></div>}>
            <Outlet handleRedirect={handleRedirect} />
          </Suspense>
        </main>
      </HandleRedirectContext.Provider>
    </>
  );
};
