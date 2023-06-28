import { useContext } from 'react';
import { LinkStyled, Section } from '../components/StyledComponents';
import { RegisterForm } from 'components/RegisterForm';
import { Context } from 'components/Layout';

const RegisterPage = () => {
  const { handleRedirect } = useContext(Context);

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
