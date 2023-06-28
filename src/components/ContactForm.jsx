import { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from './StyledComponents';
import { useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-hot-toast';
import { ButtonAddLoader } from './Loaders';
import { getTheme, getToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from 'themes';

export const ContactForm = () => {
  const token = useSelector(getToken);
  const theme = useSelector(getTheme);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);

  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('contactName')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('contactNumber')) ?? ''
  );

  const [addContact, { isLoading }] = useAddContactMutation();

  useEffect(() => {
    window.localStorage.setItem('contactName', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('contactNumber', JSON.stringify(number));
  }, [number]);

  const handleSubmit = e => {
    e.preventDefault();
    toast.promise(addContact({ body: { name, number }, token }), {
      loading: `Adding...`,
      success: `Contact added!`,
      error: `Wasn't added`,
    });
    setName('');
    setNumber('');
  };

  return (
    <Form
      style={{ marginTop: '30px' }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Label
        htmlFor="name"
        style={{
          color: isNameFocused
            ? theme === 'light'
              ? lightTheme.hoverTextColor
              : darkTheme.hoverTextColor
            : theme === 'dark'
            ? darkTheme.primaryTextColor
            : lightTheme.primaryTextColor,
        }}
      >
        Name
      </Label>
      <Input
        style={{ marginBottom: '20px' }}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        onFocus={() => setIsNameFocused(true)}
        onBlur={() => setIsNameFocused(false)}
        id={'name'}
        title="min 3, max 40 symbols"
        pattern="^.{3,40}$"
        required
      />
      <Label
        htmlFor={'number'}
        style={{
          color: isNumberFocused
            ? theme === 'light'
              ? lightTheme.hoverTextColor
              : darkTheme.hoverTextColor
            : theme === 'dark'
            ? darkTheme.primaryTextColor
            : lightTheme.primaryTextColor,
        }}
      >
        Number
      </Label>
      <Input
        style={{ marginBottom: '20px' }}
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        onFocus={() => setIsNumberFocused(true)}
        onBlur={() => setIsNumberFocused(false)}
        id={'number'}
        title="Min 6, max 30 figures, spaces, '-' and '_'"
        pattern="^[0-9\s_\-]{6,30}$"
        required
      />
      <Button
        style={{ marginBottom: '40px' }}
        type="submit"
        disabled={isLoading || !name || !number}
      >
        {!isLoading ? 'Add contact' : <ButtonAddLoader />}
      </Button>
    </Form>
  );
};
