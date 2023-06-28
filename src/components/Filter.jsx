import { Form, Input, Label } from './StyledComponents';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';
import { getFilter, getTheme } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from 'themes';

export const Filter = () => {
  const [isFilterFocused, setIsFilterFocused] = useState(false);
  const theme = useSelector(getTheme);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(filter);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(setFilter(inputValue));
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [dispatch, inputValue]);

  return (
    <Form style={{ marginBottom: '20px' }}>
      <Label
        htmlFor={'filterInput'}
        style={{
          fontSize: 16,
          fontWeight: 400,
          color: isFilterFocused
            ? theme === 'light'
              ? lightTheme.hoverTextColor
              : darkTheme.hoverTextColor
            : theme === 'dark'
            ? darkTheme.primaryTextColor
            : lightTheme.primaryTextColor,
        }}
      >
        Find contacts by name
      </Label>
      <Input
        autoComplete="off"
        type="text"
        id={'filterInput'}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setIsFilterFocused(true)}
        onBlur={() => setIsFilterFocused(false)}
      />
    </Form>
  );
};
