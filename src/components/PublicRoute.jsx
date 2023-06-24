import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = useSelector(getToken);

  return !token ? children : <Navigate to="/" />;
};

export default PublicRoute;
