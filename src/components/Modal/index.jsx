import { Container } from "./styles";
import Button from "../Button";
import { ContainerModal } from "./styles";
import { Form } from "../../pages/Dashboard/styles";

function Modal({ onClose, onSubmitTechs, handleSubmit, register }) {
  return (
    <ContainerModal>
      <Container>
        <div className="content">
          <div className="close">
            <h2>Cadastrar Tecnologia</h2>
            <Button onClick={onClose}>X</Button>
          </div>
          <Form onSubmit={handleSubmit(onSubmitTechs)}>
            <label className="name">Nome</label>
            <input
              type="text"
              name="title"
              placeholder="Nome da Tecnologia"
              {...register("title")}
            />
            <label className="status">Selecionar status</label>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <Button type="button" className="cadastrar">
              Cadastrar
            </Button>
          </Form>
        </div>
      </Container>
    </ContainerModal>
  );
}

export default Modal;
