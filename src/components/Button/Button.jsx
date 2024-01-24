import { ButtonContainer } from "./Button-styles";

export const Button = ({ desc, border, path }) => {
  return (
    <ButtonContainer border={border} path={path}>
      <h3>{desc}</h3>
    </ButtonContainer>
  );
};
