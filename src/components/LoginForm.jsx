import { useState } from 'react';
import { Form, Label, Input, Button } from './styled';

export const LoginForm = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form
      style={{ marginTop: '60px' }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Label
        htmlFor={'email'}
        style={{ color: isEmailFocused && 'rgb(87, 88, 134)' }}
      >
        E-mail Address
      </Label>
      <Input
        style={{ marginBottom: '20px' }}
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
        id={'email'}
        required
      />
      <Label
        htmlFor={'password'}
        style={{ color: isPasswordFocused && 'rgb(87, 88, 134)' }}
      >
        Password
      </Label>
      <Input
        style={{ marginBottom: '20px' }}
        type="tel"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
        id={'password'}
        title="Min 6, max 20 latin letters and figures"
        pattern="^[a-zA-Z0-9]{6,20}$"
        required
      />
      <Button
        style={{ marginBottom: '20px' }}
        type="submit"
        disabled={!email || !password}
      >
        Sing In
      </Button>
    </Form>
  );
};
