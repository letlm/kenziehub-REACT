import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 20px;
  }

  .btnRegister {
    margin-top: -55px;
    width: 259.9px;
    height: 38.5px;
    border: transparent;
    border-radius: 4px;
    padding: 0px, 22px, 0px, 22px;
    background-color: var(--greyOne);
    color: var(--white);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
  }

  .btnRegister:hover {
    background-color: var(--greyTwo);
  }

  @media (min-width: 500px) {
    .btnRegister {
      margin-top: -68px;
      height: 48px;
      width: 324px;

      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  height: 402.69px;
  background: var(--greyThree);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;

  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -13px;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--white);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--greyOne);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    height: 152px;

    justify-content: space-between;
    margin-top: -2px;
  }

  .error {
    margin-top: -10px;
    color: var(--pink);
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    line-height: 0px;
    color: var(--white);
  }

  input {
    background: var(--greyTwo);
    border: 1.2182px solid var(--greyTwo);
    box-sizing: border-box;
    border-radius: 4px;
    height: 38.5px;
    width: 264.66px;
    padding: 16px;
    font-size: 12.99px;
  }

  input:hover {
    border: 1.2182px solid var(--greyZero);
  }

  .btnLogin {
    margin-top: -15px;
    width: 259.9px;
    height: 38.5px;
    border: transparent;
    border-radius: 4px;
    padding: 0px, 22px, 0px, 22px;
    background-color: var(--pink);
    color: var(--white);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
  }

  .btnLogin:hover {
    background-color: var(--redPink);
  }

  .noCount {
    margin-top: -12px;
    margin-bottom: 41px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--greyOne);
  }

  select:hover {
    border: 1.2182px solid var(--greyZero);
  }

  @media (min-width: 500px) {
    padding: 42px 22px;
    width: 369px;
    height: 502px;

    .description {
      margin-top: -28px;
    }

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
    }

    label {
      font-weight: 400;
      font-size: 12.182px;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      height: 202px;

      justify-content: space-between;
      margin-top: 6px;
    }

    .error {
      margin-top: -12px;
    }
    input {
      height: 48px;
      width: 329.928px;
      padding: 16px;
      font-size: 16.24px;
    }

    .btnLogin {
      margin-top: 10px;
      width: 324px;
      height: 48px;
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 26px;
    }

    .noCount {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
