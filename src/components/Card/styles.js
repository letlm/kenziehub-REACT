import styled from "styled-components";

export const Container = styled.tr`
  width: 279px;
  height: 48.73px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 19px;
  background-color: var(--greyFour);
  border-radius: 4.06px;
  margin-bottom: 20px;
  justify-content: space-between;

  :hover {
    background-color: var(--greyTwo);
    cursor: pointer;

    span {
      color: var(--greyZero);
    }
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--greyZero);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    text-align: right;
    color: var(--greyOne);
  }

  @media (min-width: 768px) {
    width: 642px;
  }

  @media (min-width: 840px) {
    width: 742px;
    height: 48.73px;
  }
`;
