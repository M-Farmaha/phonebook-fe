import { useContext } from 'react';
import { LinkStyled, Section } from '../components/StyledComponents';
import { LoginForm } from 'components/LoginForm';
import { Context } from 'components/Layout';

const LoginPage = () => {
  const { handleRedirect } = useContext(Context);

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
