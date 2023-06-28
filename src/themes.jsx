export const lightTheme = {
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDisabled: 'all 0ms cubic-bezier(0.4, 0, 0.2, 1)',

  primaryTextColor: 'rgb(102, 105, 150)',
  disabledTextColor: 'rgb(175, 175, 200)',
  hoverTextColor: 'rgb(49, 49, 98)',
  alternativeTextColor: 'rgb(255, 255, 255)',

  headerBG: 'rgba(255, 255, 255, 0.5)',
  headerShadow: 'rgba(255, 255, 255, 0.2) 0px 12px 15px 0px',

  mainBGGradient:
    'linear-gradient(to right, rgb(224, 231, 237), rgb(178, 192, 204))',

  inputBG: 'rgba(255, 255, 255, 0.1)',
  inputShadow:
    'rgba(255, 255, 255, 0.1) -4px -2px 6px 0px inset, rgba(70, 70, 70, 0.1) 4px 2px 4px 0px inset',
  inputBGFocus: 'rgba(255, 255, 255, 0.2)',
  inputShadowFocus:
    'rgba(255, 255, 255, 0.2) -4px -2px 6px 0px inset, rgba(70, 70, 70, 0.3) 4px 2px 4px 0px inset',

  buttonShadow:
    'rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,rgba(70, 70, 70, 0.1) 4px 2px 4px 0px',
  buttonShadowFocus:
    'rgba(255, 255, 255, 0.5) -4px -2px 6px 0px,rgba(70, 70, 70, 0.3) 4px 2px 4px 0px',

  contactsShadow:
    'rgba(255, 255, 255, 0.3) -4px -2px 10px 0px,rgba(70, 70, 70, 0.1) 4px 2px 10px 0px',
  contactButtonShadow:
    'rgba(255, 255, 255, 0.4) -2px -2px 6px 0px,rgba(70, 70, 70, 0.2) 4px 2px 4px 0px,rgba(255, 255, 255, 0.4) -2px -2px 6px 0px inset,rgba(70, 70, 70, 0.2) 4px 2px 4px 0px inset',
  contactButtonShadowFocus:
    'rgba(255, 255, 255, 0.5) -2px -2px 6px 0px,rgba(70, 70, 70, 0.3) 4px 2px 4px 0px, rgba(255, 255, 255, 0.5) -2px -2px 6px 0px inset,rgba(70, 70, 70, 0.3) 4px 2px 4px 0px inset',

  secureButtonShadow:
    'rgba(255, 255, 255, 0.2) -5px 0px 10px -5px, rgba(255, 255, 255, 0.2) -2px -2px 6px 0px inset,rgba(70, 70, 70, 0.1) 4px 2px 4px 0px inset',
  secureButtonShadowFocus:
    'rgba(255, 255, 255, 0.3) -5px 0px 10px -5px,rgba(255, 255, 255, 0.3) -2px -2px 6px 0px inset,rgba(70, 70, 70, 0.2) 4px 2px 4px 0px inset;',

  modalBorderColor: 'rgba(212, 236, 255, 0.8)',
};

export const darkTheme = {
  ...lightTheme,

  primaryTextColor: 'rgb(177, 193, 226)',
  disabledTextColor: 'rgb(75, 83, 95)',
  hoverTextColor: 'rgb(255, 255, 255)',
  alternativeTextColor: 'rgb(49, 49, 98)',

  headerBG: 'rgba(0, 0, 0, 0.5)',
  headerShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px',

  mainBGGradient: 'linear-gradient(to right, rgb(37, 67, 89), rgb(19, 28, 37))',

  inputBG: 'rgba(178, 178, 178, 0.1)',
  inputShadow:
    'rgba(0, 0, 0, 0.1) -4px -2px 6px 0px inset, rgba(0, 0, 0, 0.3) 4px 2px 4px 0px inset',
  inputBGFocus: 'rgba(178, 178, 178, 0.2)',
  inputShadowFocus:
    'rgba(0, 0, 0, 0.2) -4px -2px 6px 0px inset, rgba(0, 0, 0, 0.4) 4px 2px 4px 0px inset',

  buttonShadow:
    'rgba(57, 69, 107, 0.3) -4px -2px 6px 0px,rgba(0, 0, 0, 0.1) 4px 2px 4px 0px',
  buttonShadowFocus:
    'rgba(57, 69, 107, 0.5) -4px -2px 6px 0px,rgba(0, 0, 0, 0.3) 4px 2px 4px 0px',

  contactsShadow:
    'rgba(34, 44, 74, 0.3) -4px -2px 10px 0px,rgba(0, 0, 0, 0.1) 4px 2px 10px 0px',
  contactButtonShadow:
    'rgba(0, 0, 0, 0.4) -2px -2px 6px 0px,rgba(79, 96, 154, 0.2) 2px 1px 4px 0px,rgba(0, 0, 0, 0.4) -2px -2px 6px 0px inset,rgba(79, 96, 154, 0.2) 2px 1px 4px 0px inset',
  contactButtonShadowFocus:
    'rgba(0, 0, 0, 0.5) -2px -2px 6px 0px,rgba(79, 96, 154, 0.3) 2px 1px 4px 0px,rgba(0, 0, 0, 0.5) -2px -2px 6px 0px inset,rgba(79, 96, 154, 0.3) 2px 1px 4px 0px inset',

  secureButtonShadow:
    'rgba(0, 0, 0, 0.2) -5px 0px 10px -5px, rgba(0, 0, 0, 0.2) -2px -2px 6px 0px inset,rgba(79, 96, 154, 0.2) 2px 2px 4px 0px inset',
  secureButtonShadowFocus:
    'rgba(0, 0, 0, 0.3) -5px 0px 10px -5px,rgba(0, 0, 0, 0.3) -2px -2px 6px 0px inset,rgba(79, 96, 154, 0.3) 2px 2px 4px 0px inset;',

  modalBorderColor: 'rgba(86, 126, 169, 0.5)',
};
