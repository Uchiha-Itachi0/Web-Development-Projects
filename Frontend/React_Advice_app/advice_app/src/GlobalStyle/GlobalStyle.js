import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}

body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${(props) => `linear-gradient(45deg, ${props.lowerBackgroundColor} 50%, ${props.HigherBackgroundColor} 50%)`};
    background-repeat: no-repeat;
    overflow: hidden;
    height:100vh ;
}
`;

export default GlobalStyle;