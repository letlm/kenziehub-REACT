import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(18, 18, 20, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 274.34px;
  width: 296px;
  border-radius: 4px;
  padding: 68px, 22px, 32px, 22px;
  background-color: var(--greyThree);

  .close {
    height: 40.11px;
    width: 296px;
    border-radius: 4px 4px 0px 0px;
    padding: 12px, 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--greyTwo);
    align-items: center;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 11.2304px;
      line-height: 19px;
      color: var(--greyZero);
      margin-left: 27px;
    }

    .exit {
      margin-right: 12px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 12.8347px;
      line-height: 21px;
      color: var(--greyOne);
      background-color: transparent;
    }

    .exit:hover {
      color: var(--greyThree);
    }

    .nameEdit {
      margin-left: -160px;
    }

    .statusEdit {
      margin-left: -224px;
    }
  }

  @media (min-width: 768px) {
    height: 342px;
    width: 369px;

    .close {
      height: 50px;
      width: 369px;

      h2 {
        font-size: 14px;
        line-height: 24px;

        margin-left: 27px;
      }

      .exit {
        font-size: 16px;
        line-height: 26px;
      }
    }

    .nameEdit {
      margin-left: -225px;
    }

    .statusEdit {
      margin-left: -285px;
    }
  }
`;
