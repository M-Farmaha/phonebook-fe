import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;

  color: ${props => props.theme.primaryTextColor};
  background: ${props => props.theme.mainBGGradient};

  transition: ${props => props.theme.transition};
}
`;
