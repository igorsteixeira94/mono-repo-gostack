import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  
  html,body{
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    background:#7159c1;
    --webkit-font-smoothing: antialiased !important;
  }


`;
