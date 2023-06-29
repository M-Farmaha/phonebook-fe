import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/slice';

import './ThemeSwitcherStyles.css';
import { getTheme } from 'redux/selectors';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="toggleWrapper">
        <input
          type="checkbox"
          className="dn"
          id="dn"
          checked={theme === 'dark'}
          onChange={handleThemeToggle}
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </>
  );
};
