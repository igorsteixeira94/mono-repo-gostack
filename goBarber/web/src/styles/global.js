import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
  }



  body{
    -webkit-font-smoothing:antialiased;

  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;

  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none
  }

  button{
    cursor:pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
}


`;
