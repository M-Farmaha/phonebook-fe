import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';
import { darkTheme, lightTheme } from 'themes';

export const ButtonDeleteLoader = () => {
  const theme = useSelector(getTheme);
  return (
    <RotatingLines
      strokeColor={
        theme === 'light'
          ? lightTheme.primaryTextColor
          : darkTheme.primaryTextColor
      }
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const ButtonAddLoader = () => {
  const theme = useSelector(getTheme);
  return (
    <RotatingLines
      strokeColor={
        theme === 'light'
          ? lightTheme.primaryTextColor
          : darkTheme.primaryTextColor
      }
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const ContactsLoader = () => {
  const theme = useSelector(getTheme);
  return (
    <RotatingLines
      strokeColor={
        theme === 'light'
          ? lightTheme.primaryTextColor
          : darkTheme.primaryTextColor
      }
      strokeWidth="5"
      animationDuration="0.75"
      width="66"
      visible={true}
    />
  );
};
