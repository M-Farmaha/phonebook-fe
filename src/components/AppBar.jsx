import { useContext, useEffect, useState } from 'react';
import { RedirectContext } from './Layout';
import {
  NavList,
  Header,
  NavLinkStyled,
  PhonebookTitle,
  NavWrap,
  NavItem,
  SubTitle,
  TitleWrap,
  TitleLink,
} from '../components/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { useGetCurrentUserQuery, useLogoutUserMutation } from 'redux/authApi';
import { toast } from 'react-hot-toast';
import { setToken } from 'redux/slice';
import { ButtonAddLoader } from './Loaders';

export const AppBar = () => {
  const { handleRedirect } = useContext(RedirectContext);

  const [isLoading, setisLoading] = useState(false);

  const [logoutUser] = useLogoutUserMutation();

  const token = useSelector(getToken);
  const currentUser = useGetCurrentUserQuery(token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.status === 'rejected') {
      dispatch(setToken(null));
    }
  }, [currentUser, dispatch]);

  const handleClick = (e, path) => {
    e.preventDefault();
    handleRedirect(path);
  };

  const handleLogOutClick = async e => {
    e.preventDefault();
    setisLoading(true);
    try {
      await logoutUser(token);
      handleRedirect('/login');
      setTimeout(() => {
        dispatch(setToken(null));
      }, 300);
      toast.success(`Logged out`);
    } catch (error) {
      toast.error(`Something went wrong`);
    }
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  };

  return (
    <Header>
      <NavWrap>
        <TitleWrap>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <SubTitle>
            developed by{' '}
            <TitleLink
              href="https://github.com/M-Farmaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              M-Farmaha
            </TitleLink>
          </SubTitle>
        </TitleWrap>

        <NavList>
          {token ? (
            <>
              <NavItem>
                <NavLinkStyled onClick={handleLogOutClick} to="/login">
                  {!isLoading ? 'Log Out' : <ButtonAddLoader />}
                </NavLinkStyled>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLinkStyled
                  onClick={e => handleClick(e, '/register')}
                  to="/register"
                >
                  Sign Up
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  onClick={e => handleClick(e, '/login')}
                  to="/login"
                >
                  Sign In
                </NavLinkStyled>
              </NavItem>
            </>
          )}
        </NavList>
      </NavWrap>
    </Header>
  );
};
