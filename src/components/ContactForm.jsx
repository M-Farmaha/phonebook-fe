import { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from './styled';
import { useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-hot-toast';
import { ButtonAddLoader } from './Loaders';
import { getToken } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactForm = () => {
  const token = useSelector(getToken);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);

  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('contactName')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('contactNumber')) ?? ''
  );

  const [addContact, { isLoading, isSuccess, isError }] =
    useAddContactMutation();

  useEffect(() => {
    window.localStorage.setItem('contactName', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('contactNumber', JSON.stringify(number));
  }, [number]);

  useEffect(() => {
    isSuccess && toast.success('Contact added!');
    isError && toast.error(`Wasn't added!`);
  }, [isError, isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ body: { name, number }, token });
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
        htmlFor={'name'}
        style={{ color: isNameFocused && 'rgb(87, 88, 134)' }}
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
        style={{ color: isNumberFocused && 'rgb(87, 88, 134)' }}
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
        title="Only figures and spaces, min 6, max 20 symbols"
        pattern="[0-9\s]{6,20}"
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
