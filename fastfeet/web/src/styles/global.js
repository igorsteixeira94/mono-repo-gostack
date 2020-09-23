import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  /**Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  /**Paleta de cores */
  :root{

    --color-text-btn-bcg: #7D40E7;
    --color-border-form: #00000033;
    --color-bcg-form:#FFFFFF;
    --color-border-input:#DDDDDD;
    --color-placeholder:#999999;
    --color-text:#444444;
    --color-bck:#F5F5F5;
    --color-exit-alert:#DE3B3B;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--color-text);
  }

  html,body,#root{
    width:100vw;
    height:100vh;

  }
  table, th, td {
  border-collapse:separate; 
  border-spacing: 0 10px;
}
  button,input{
    outline: none;
  }

  body{
    -webkit-font-smoothing:antialiased;

  }

  button{
    cursor:pointer;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--color-text) !important;
}

`;
