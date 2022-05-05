import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --greyFour: #121214;
        --greyThree: #212529;
        --greyTwo: #343B41;
        --greyOne: #868E96;
        --greyZero: #F8F9FA;
        --green: #3FE864;
        --redPink: #E83F5B;
        --pink: #ff577f;
        --redWine: #59323F;
        --white: #FFFFFF;
    }

    body{
        background-color: var(--greyFour);
        color: var(--greyZero)
    }

    body, input, button{
        font-family: 'Inter';
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    .Toastify__toast-theme--light {
    background-color: var(--greyTwo);
    color: var(--white);
    font-weight: bold;
    border-radius: 4px;
    opacity: 1;
    }
    .Toastify__close-button--light {
    color: #fff;
    opacity: 0.9;
  }

`;
