import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { Form, Container } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import Logo from "../../img/logo.png";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Sua senha deve ter no mínimo 6 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) =>
        toast.error("Ops! Email ou senha inválidos!", {
          className: "toastError",
        })
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  const returnRegister = () => {
    history.push("/register");
  };

  return (
    <Container>
      <img src={Logo} alt="KenzieHub" />
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="description">
          <h1>Login</h1>
        </div>
        <div className="inputs">
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
        </div>

        <Button className="btnLogin" type="submit">
          Entrar
        </Button>
        <span className="noCount">Ainda não possui uma conta?</span>
      </Form>
      <Button className="btnRegister" onClick={returnRegister}>
        Cadastre-se
      </Button>
    </Container>
  );
}

export default Login;
