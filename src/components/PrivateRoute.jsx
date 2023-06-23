import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { HandleRedirectContext } from './Layout';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const handleRedirect = useContext(HandleRedirectContext);

  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) {
      handleRedirect('/login');
    }
  }, [handleRedirect, token]);

  return token && children;
};
