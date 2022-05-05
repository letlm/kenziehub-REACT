import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { Form, Container, NavContent } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import Logo from "../../img/logo.png";

function Register({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Sua senha deve ter no mínimo 6 caracteres!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senha está diferente!"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitForm = ({
    name,
    email,
    password,
    course_module,
    bio,
    contact,
  }) => {
    const user = { name, email, password, course_module, bio, contact };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/sessions");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  const returnLogin = () => {
    history.push("/sessions");
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <NavContent>
        <img src={Logo} alt="KenzieHub" />
        <Button className="btnVoltar" onClick={returnLogin}>
          Voltar
        </Button>
      </NavContent>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="description">
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
        </div>
        <div className="inputs">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
          <label>Contato</label>
          <input
            type="text"
            placeholder="Digite aqui seu contato"
            {...register("contact")}
          />
          {errors.contact && (
            <span className="error">{errors.contact.message}</span>
          )}
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            {...register("bio")}
          />
          {errors.bio && <span className="error">{errors.bio.message}</span>}
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <label>Senha</label>

          <input
            {...register("password")}
            type="password"
            placeholder="Digite aqui sua senha"
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <label>Confirmar Senha</label>

          <input
            {...register("confirmPassword")}
            type="text"
            placeholder="Digite aqui sua senha"
          />

          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}
          <label>Selecionar módulo</label>
          <select name="" id="" {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">
              Primeiro Módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo (Frontend Avançado)">
              Segundo Módulo (Frontend Avançado)
            </option>
            <option value="Terceiro Módulo (Introdução ao Backend)">
              Terceiro Módulo (Introdução ao Backend)
            </option>
            <option value="Quarto Módulo (Backend Avançado)">
              Quarto Módulo (Backend Avançado)
            </option>
          </select>
        </div>
        <Button className="btnRegister">Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default Register;
