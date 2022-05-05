import { Container } from "./styles";
import Button from "../Button";
import { ContainerModal } from "./styles";
import { Form } from "../../pages/Dashboard/styles";
function ModalEdit({
  onClose,
  modalEdit,
  onSubmitEdit,
  handleSubmit,
  register,
  handleDeleted,
}) {
  return (
    <ContainerModal>
      <Container>
        <div className="content">
          <div className="close">
            <h2>Tecnologia Detalhes</h2>
            <Button onClick={onClose} className="exit">
              X
            </Button>
          </div>
          <Form onSubmit={handleSubmit(onSubmitEdit)}>
            <label className="nameEdit">Nome do projeto</label>

            <input type="hidden" name="id" {...register("id")} />

            <input
              disabled={true}
              type="text"
              name="title"
              placeholder="Nome da Tecnologia"
              {...register("title")}
            />
            <label className="statusEdit">Status</label>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <div className="btnsEdit">
              <Button type="button" className="saveEdit">
                Salvar alterações
              </Button>
              <Button
                type="button"
                className="delete"
                onClick={(event) => {
                  event.preventDefault();
                  handleDeleted(modalEdit.id);
                }}
              >
                Excluir
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </ContainerModal>
  );
}

export default ModalEdit;
