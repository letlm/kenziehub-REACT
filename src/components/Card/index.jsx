import React from "react";
import { Container } from "./styles";

function Card({ title, status, onClick }) {
  return (
    <Container onClick={onClick}>
      <td>
        <h2>{title}</h2>
      </td>
      <td>
        <span>{status}</span>
      </td>
    </Container>
  );
}

export default Card;
