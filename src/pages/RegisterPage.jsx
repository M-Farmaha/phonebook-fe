import { useContext } from 'react';
import { LinkStyled, Section } from '../components/styled';
import { RegisterForm } from 'components/RegisterForm';
import { RedirectContext } from 'components/Layout';
import { PublicRoute } from 'components/PublicRoute';

const RegisterPage = () => {
  const { handleRedirect, shouldRedirect } = useContext(RedirectContext);

  return (
    <>
      <Section>
        <RegisterForm />
        <LinkStyled onClick={() => handleRedirect('/login')}>
          Already have an account? Sign in
        </LinkStyled>
      </Section>
    </>
  );
};

export default RegisterPage;
