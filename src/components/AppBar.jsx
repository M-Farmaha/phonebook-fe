import { useContext, useState } from 'react';
import { Context } from './Layout';
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
} from './StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { useLogoutUserMutation } from 'redux/authApi';
import { toast } from 'react-hot-toast';
import { setToken } from 'redux/slice';
import { ButtonAddLoader } from './Loaders';
import { useLocation } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

export const AppBar = () => {
  const { handleRedirect, isModalOpen, toggleModal } = useContext(Context);

  const [isLoading, setisLoading] = useState(false);

  const [logoutUser] = useLogoutUserMutation();

  const token = useSelector(getToken);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = (e, path) => {
    e.preventDefault();
    if (location.pathname !== path) {
      handleRedirect(path);
    }
  };

  const handleLogOutClick = async e => {
    e.preventDefault();
    if (isModalOpen) toggleModal();
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
        <ThemeSwitcher />
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
                  style={{ justifyContent: 'right' }}
                >
                  Sign Up
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  onClick={e => handleClick(e, '/login')}
                  to="/login"
                  style={{ justifyContent: 'right' }}
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
