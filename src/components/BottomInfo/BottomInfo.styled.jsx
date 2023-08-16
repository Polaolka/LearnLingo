import styled from "@emotion/styled";
import { mediaSizes } from "constants";
import { colors } from "constants";

export const ListStyled = styled.ul`
  margin-top: 24px;
  padding: 40px 120px;
  width: 100%;
  border-radius: 30px;
  border: 1.5px dashed ${colors.colorOrange};
  
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  row-gap: 12px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${mediaSizes.desctop}) {
    padding: 40px;
  }
`;

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 100%;
`;

export const CountTextStyled = styled.p`
  color: ${colors.colorText};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14; 
  letter-spacing: -0.56px;
`;

export const TextStyled = styled.p`
  width: 90px;
  color: ${colors.colorText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
