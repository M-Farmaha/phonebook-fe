import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  color: ${props => props.theme.primaryTextColor};
  background: ${props => props.theme.mainBGGradient};
}
`;
