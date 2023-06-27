import { useState } from 'react';
import { BlurDiv, ModalBlurDiv } from './styled';

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

export const ModalBlurOverlayOut = () => {
  const [isLoaded, setisLoaded] = useState(false);

  setTimeout(() => {
    setisLoaded(true);
  }, 350);

  return !isLoaded && <ModalBlurDiv />;
};

export const ModalBlurOverlayIn = () => {
  return (
    <ModalBlurDiv
      style={{ animationFillMode: 'forwards', animationDirection: 'reverse' }}
    />
  );
};
