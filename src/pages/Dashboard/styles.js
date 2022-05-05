import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Template = styled.div`
  width: 279px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 679.73px;
  }

  @media (min-width: 840px) {
    width: 779.73px;
  }
`;

export const TemplateTwo = styled.div`
  width: 279px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 679.73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 840px) {
    width: 779.73px;
  }
`;

export const Nav = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    height: 32px;
    width: 55.485294342041016px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;
    background-color: var(--greyThree);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: var(--greyZero);
    border: transparent;
  }

  button:hover {
    background-color: var(--greyTwo);
  }
`;

export const Content = styled.div`
  height: 131px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid var(--greyThree);
  border-bottom: 2px solid var(--greyThree);
  margin-top: 0px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--greyZero);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--greyOne);
  }

  @media (min-width: 768px) {
    height: 118px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const AddTechs = styled.div`
  width: 296px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 0px;
  align-items: center;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--greyZero);
  }

  button {
    height: 32px;
    width: 32.485294342041016px;
    border-radius: 4px;
    background-color: var(--greyThree);
    border: transparent;
    color: var(--white);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    margin-right: -10px;
  }

  button:hover {
    background-color: var(--greyTwo);
  }

  @media (min-width: 768px) {
    width: 679.73px;
    height: 80px;

    button {
      margin-right: 0px;
    }
  }

  @media (min-width: 840px) {
    width: 779.73px;
    height: 80px;

    button {
      margin-right: 0px;
    }
  }
`;

export const ContainerCards = styled.tbody`
  height: 416.37px;
  width: 296px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 19px;
  background-color: var(--greyThree);
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: flex-start;

  ::-webkit-scrollbar-track {
    background-color: var(--greyThree);
  }

  ::-webkit-scrollbar {
    width: 2px;
    background: var(--greyOne);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--greyOne);
  }

  @media (min-width: 768px) {
    height: 565.37px;
    width: 679.73px;
  }

  @media (min-width: 840px) {
    height: 565.37px;
    width: 779.73px;
  }

  h1 {
    margin-top: 150px;
    font-size: 15px;
    text-align: center;
    color: var(--greyOne);
  }

  @media (min-width: 768px) {
    h1 {
      margin-top: 240px;
      font-size: 18px;
    }
  }
`;

export const Form = styled.form`
  width: 296px;
  height: 234.34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--greyZero);
  }

  .name {
    margin-left: -221px;
  }

  .status {
    margin-left: -155px;
  }

  .nameEdit {
    margin-left: -160px;
  }

  .statusEdit {
    margin-left: -224px;
  }

  input,
  select {
    height: 38.5px;
    width: 264.66px;
    border-radius: 4px;
    padding: 16px;
    background-color: var(--greyTwo);
    color: var(--greyZero);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    border: transparent;
  }

  input:hover {
    border: 1.2182px solid var(--greyZero);
  }

  select {
    padding: 10px;
  }

  select:hover {
    border: 1.2182px solid var(--greyZero);
  }

  button {
    margin-left: -10px;
    width: 259.9px;
    height: 38.5px;
    background-color: var(--pink);
    border: 1.2182px solid var(--pink);
    box-sizing: border-box;
    border-radius: 4.06066px;
  }

  button:hover {
    background-color: var(--redPink);
    border: 1.2182px solid var(--redPink);
  }

  .btnsEdit {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 231.66px;
  }

  .saveEdit {
    height: 38.37398147583008px;
    width: 163.0894317626953px;
    border-radius: 4px;
    padding: 0px, 22px, 0px, 22px;
    background: var(--redWine);
    border: 1.2182px solid var(--redWine);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7913px;
    line-height: 21px;
  }

  .delete {
    width: 78.35px;
    height: 38.37px;
    background: var(--greyOne);
    border: 1.2182px solid var(--greyOne);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7913px;
    line-height: 21px;
  }

  @media (min-width: 768px) {
    width: 369px;
    height: 292px;

    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
    }

    .name {
      margin-left: -285px;
    }

    .status {
      margin-left: -222px;
    }

    .nameEdit {
      margin-left: -224px;
    }

    .statusEdit {
      margin-left: -285px;
    }

    input,
    select {
      height: 48px;
      width: 329.92877197265625px;

      padding: 16px;

      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
    }

    select {
      padding: 10px;
    }

    button {
      width: 324px;
      height: 48px;
      margin-left: 0px;
    }

    .btnsEdit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 325px;
    }

    .saveEdit {
      width: 204px;
      height: 48px;
      border-radius: 4px;
      padding: 0px, 22px, 0px, 22px;
      background: var(--redWine);
      border: 1.2182px solid var(--redWine);
      box-sizing: border-box;
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }

    .delete {
      width: 98px;
      height: 48px;
      background: var(--greyOne);
      border: 1.2182px solid var(--greyOne);
      box-sizing: border-box;
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
