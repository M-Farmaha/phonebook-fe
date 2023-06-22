import { useState } from 'react';
import { BlurDiv } from './styled';

export const BlurOverlayOut = () => {
  const [isLoaded, setisLoaded] = useState(false);

  setTimeout(() => {
    setisLoaded(true);
  }, 300);

  return !isLoaded && <BlurDiv />;
};

export const BlurOverlayIn = () => {
  return <BlurDiv style={{ animationDirection: 'reverse' }} />;
};
