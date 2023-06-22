import { RotatingLines } from 'react-loader-spinner';

export const ButtonDeleteLoader = () => {
  return (
    <RotatingLines
      strokeColor="rgb(87, 88, 134)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const ButtonAddLoader = () => {
  return (
    <RotatingLines
      strokeColor="rgb(87, 88, 134)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const ContactsLoader = () => {
  return (
    <RotatingLines
      strokeColor="rgb(87, 88, 134)"
      strokeWidth="5"
      animationDuration="0.75"
      width="66"
      visible={true}
    />
  );
};
