import { useContext } from 'react';
import { LinkStyled, Section } from '../components/styled';
import { LoginForm } from 'components/LoginForm';
import { RedirectContext } from 'components/Layout';
import { PublicRoute } from 'components/PublicRoute';

const LoginPage = () => {
  const { handleRedirect, shouldRedirect } = useContext(RedirectContext);

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
