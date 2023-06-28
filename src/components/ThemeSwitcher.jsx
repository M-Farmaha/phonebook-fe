import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';
import { toggleTheme } from 'redux/slice';

export const ThemeSwitcher = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};
