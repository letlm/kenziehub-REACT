import { ContainerButton } from "./styles";

const Button = ({ children, onClick, className }) => {
  return (
    <ContainerButton className={className} onClick={onClick}>
      {children}
    </ContainerButton>
  );
};

export default Button;
