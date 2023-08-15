import { ContainerCenteredStyled } from "./ContainerCentered.styled";

const ContainerCentered = ({ children, flexDirection = "column" }) => {
  return (
    <ContainerCenteredStyled style={{ flexDirection }}>
      {children}
    </ContainerCenteredStyled>
  );
};

export default ContainerCentered;
