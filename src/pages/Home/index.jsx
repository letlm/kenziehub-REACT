import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Start } from "./styles";
import Logo from "../../img/logo.png";
import { Redirect } from "react-router-dom";

function Home({ authenticated }) {
  const history = useHistory();

  const handleInitial = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Start>
        <img src={Logo} alt="KenzieHub" />
        <span>Seu portfólio a um clique de distância</span>
        <Button
          className="btnStart"
          onClick={() => {
            handleInitial("/sessions");
          }}
        >
          Iniciar
        </Button>
      </Start>
    </Container>
  );
}

export default Home;
