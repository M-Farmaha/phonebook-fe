import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
