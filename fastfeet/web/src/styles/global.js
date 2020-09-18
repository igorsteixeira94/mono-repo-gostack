import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /**Fonts */
  /**Paleta de cores */
  :root{
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    --color-text-btn-bcg: #7D40E7;
    --color-border-form: #00000033;
    --color-bcg-form:#FFFFFF;
    --color-border-input:#DDDDDD;
    --color-placeholder:#999999;
    --color-text:#444444;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,body,#root{
    width:100vw;
    height:100vh;

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



`;
