import {
  Container,
  Nav,
  Content,
  AddTechs,
  Template,
  TemplateTwo,
  ContainerCards,
} from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import ModalEdit from "../../components/ModalEdit";
import { toast } from "react-toastify";
import Card from "../../components/Card";
import Logo from "../../img/logo.png";
import Modal from "../../components/Modal";

function Dashboard({ authenticated, setAuthenticated }) {
  const [techs, setTechs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalEdit, setModalEdit] = useState(null);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );
  const { id } = user;
  const { name, course_module } = user;

  const { register, handleSubmit, setValue } = useForm();

  function loadInfos() {
    api
      .get(`/users/${id}`)
      .then((response) => {
        console.log(response.data);

        const apiTechs = response.data.techs.map((tech) => ({
          ...tech,
        }));
        setTechs(apiTechs);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadInfos();
  }, []);

  const onSubmitTechs = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Baerer ${token}`,
          },
        }
      )
      .then((response) => {
        setTechs([...techs, response.data]);
        toast.success("Parabéns, tecnologia cadastrada!");
        setIsModalVisible(false);
        setValue("title", "");
        setValue("status", "Iniciante");
      })
      .catch((err) =>
        toast.error(
          "Tecnologia já cadastrada. Por favor, cadastrar uma diferente!"
        )
      );
  };

  const handleDeleted = (id) => {
    const newTechs = techs.filter((tech) => tech.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      })
      .then(() => {
        setTechs(newTechs);
        toast.success("Tecnologia deletada!");
        setValue("title", "");
        setValue("status", "Iniciante");
        setModalEdit(null);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitEdit = ({ id, status }) => {
    const techsEdit = techs.map((tech) => {
      if (tech.id === id) {
        tech.status = status;
      }
      return tech;
    });
    api
      .put(
        `/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Baerer ${token}`,
          },
        }
      )
      .then(() => {
        setTechs(techsEdit);
        toast.success("Tecnologia atualizada!");
        setValue("title", "");
        setValue("status", "Iniciante");
        setModalEdit(null);
      })
      .catch((err) => toast.error("Ops! Aconteceu algum erro."));
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.clear();
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  console.log(modalEdit);

  return (
    <>
      <Container>
        <Nav>
          <Template>
            <img src={Logo} alt="KenziHub" />
            <Button onClick={() => logout()}>Sair</Button>
          </Template>
        </Nav>
        <Content>
          <TemplateTwo>
            <h1>Olá, {name}</h1>
            <span>{course_module}</span>
          </TemplateTwo>
        </Content>

        <Template>
          <AddTechs>
            <h1>Tecnologias</h1>
            <Button
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              +
            </Button>
            {isModalVisible ? (
              <Modal
                onClose={() => {
                  setIsModalVisible(false);
                }}
                onSubmitTechs={onSubmitTechs}
                handleSubmit={handleSubmit}
                register={register}
              ></Modal>
            ) : null}

            {modalEdit ? (
              <ModalEdit
                onClose={() => {
                  setModalEdit(null);
                }}
                modalEdit={modalEdit}
                onSubmitEdit={onSubmitEdit}
                handleSubmit={handleSubmit}
                register={register}
                handleDeleted={handleDeleted}
              ></ModalEdit>
            ) : null}
          </AddTechs>
        </Template>
        <table>
          <ContainerCards>
            {techs.length === 0 ? (
              <h1 className="add">
                Adicione tecnologias para seu portfólio ficar incrível!
              </h1>
            ) : (
              techs.map((tech) => (
                <Card
                  id={tech.id}
                  key={tech.id}
                  title={tech.title}
                  status={tech.status}
                  onClick={() => {
                    setValue("title", tech.title);
                    setValue("status", tech.status);
                    setValue("id", tech.id);
                    setModalEdit(tech);
                  }}
                />
              ))
            )}
          </ContainerCards>
        </table>
      </Container>
    </>
  );
}

export default Dashboard;
