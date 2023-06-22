import { useContext } from 'react';
import { LinkStyled, Section } from '../components/styled';
import { LoginForm } from 'components/LoginForm';
import { HandleRedirectContext } from 'components/Layout';

const LoginPage = () => {
  const handleRedirect = useContext(HandleRedirectContext);

  return (
    <>
      <Section>
        <LoginForm />
        <LinkStyled onClick={() => handleRedirect('/register')}>
          Don't have an account? Sign Up
        </LinkStyled>
      </Section>
    </>
  );
};

export default LoginPage;
