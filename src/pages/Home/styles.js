import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  flex-direction: column;
`;

export const Start = styled.div`
  max-width: 300px;
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 206px;
    height: 30px;
  }

  span {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-size: 20px;
  }

  .btnStart {
    width: 224px;
    height: 38px;
    background-color: var(--redPink);
    border: 1.2182px solid var(--redPink);
    box-sizing: border-box;
    border-radius: 4.06066px;
  }

  .btnStart:hover {
    background-color: var(--redWine);
    border: var(--redWine);
  }

  @media (min-width: 500px) {
    max-width: 400px;

    span {
      font-size: 25px;
    }

    .btnStart {
      width: 324px;
      height: 48px;
    }
  }
`;
