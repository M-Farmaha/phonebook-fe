import { useContext } from 'react';
import { HandleRedirectContext } from './Layout';
import {
  NavList,
  Header,
  NavLinkStyled,
  PhonebookTitle,
  NavWrap,
} from '../components/styled';

export const AppBar = () => {
  const handleRedirect = useContext(HandleRedirectContext);

  const handleClick = (e, path) => {
    e.preventDefault();
    handleRedirect(path);
  };

  return (
    <Header>
      <NavWrap>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <NavList>
          <li>
            <NavLinkStyled onClick={e => handleClick(e, '/')} to="/">
              Contacts
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled
              onClick={e => handleClick(e, '/register')}
              to="/register"
            >
              Sign Up
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled onClick={e => handleClick(e, '/login')} to="/login">
              Sign In
            </NavLinkStyled>
          </li>
        </NavList>
      </NavWrap>
    </Header>
  );
};
