import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NavContent = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 295.86px;
  justify-content: space-between;

  .btnVoltar {
    background-color: var(--greyThree);
    margin-right: 0px;
    width: 79.54px;
    height: 25.58px;

    border: transparent;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
  }

  img {
    margin-left: 5px;
    width: 97.59px;
    height: 13.53px;
  }

  @media (min-width: 500px) {
    align-items: center;
    width: 370px;

    .btnVoltar {
      background-color: var(--greyThree);
      margin-right: 0px;
      width: 67.49px;
      height: 32px;

      border: transparent;
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
    }

    img {
      margin-left: 6px;
      width: 122.06px;
      height: 16.92px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  width: 295.86px;
  height: 600px;
  background: var(--greyThree);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;

  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 62px;
    margin: 0 auto;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.39px;
    line-height: 22.39px;
    color: var(--white);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59px;
    line-height: 17.59px;
    color: var(--greyOne);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    height: 556px;
    justify-content: space-between;

    align-items: flex-start;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    color: var(--white);
  }

  .error {
    color: var(--pink);
  }

  input {
    background: var(--greyTwo);
    border: 1.2182px solid var(--greyTwo);
    box-sizing: border-box;
    border-radius: 4px;
    height: 32px;
    width: 263.79px;
    padding: 16px;
    color: var(--greyOne);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.99px;
    line-height: 21.1px;
  }

  input:hover {
    border: 1.2182px solid var(--greyZero);
  }

  select {
    background: var(--greyTwo);
    border: 1.2182px solid var(--greyTwo);
    box-sizing: border-box;
    border-radius: 4px;
    height: 32px;
    width: 263.79px;
    padding: 0px;
    color: var(--greyOne);
    font-weight: 400;
    font-size: 12.99px;
    line-height: 21.1px;
  }

  select:hover {
    border: 1.2182px solid var(--greyZero);
  }

  .btnRegister {
    margin-top: 20px;
    height: 38px;
    width: 260.65px;
    border: transparent;
    border-radius: 4px;
    padding: 0px, 22px, 0px, 22px;
    background-color: var(--redWine);
    color: var(--white);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
  }

  .btnRegister:hover {
    background-color: var(--pink);
  }

  @media (min-width: 500px) {
    width: 370px;
    height: 737px;

    h1 {
      font-size: 18px;
      line-height: 28px;
    }

    span {
      font-size: 12px;
      line-height: 22px;
    }

    label {
      font-size: 12.182px;
    }

    input {
      height: 38px;
      width: 329.928px;

      font-size: 16.2426px;
      line-height: 26px;
    }

    select {
      height: 42px;
      width: 329.928px;
      padding: 10px;
      color: var(--greyOne);

      font-size: 16.2426px;
      line-height: 26px;
    }

    .btnRegister {
      margin-top: 20px;
      height: 48px;
      width: 326px;

      font-size: 16px;
      line-height: 26px;
    }

    .btnRegister:hover {
      background-color: var(--pink);
    }
  }
`;
