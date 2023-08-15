import styled from "@emotion/styled";
import { colors } from "constants";

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 20px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  padding: 16px;
  outline: none;
  background-color: #fff;
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    color: ${colors.colorText};
    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    background-color: #fff;

    padding: 16px;

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: #dddddd;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-34px);
      font-size: 10px;
      font-weight: 100;
      color: ${colors.colorLigthText};
    }
  }

  & label {
    position: absolute;
    bottom: 20px;
    left: 18px;
    width: 100%;
    pointer-events: none;
    font-size: 14px;
    color: ${colors.colorText};
    transition: all 0.3s ease;
  }

  & .error {
    position: absolute;
    top: 56px;
    left: 40px;
    font-size: 12px;
    color: ${colors.colorOrange};
  }
`;

export const ErrorBloodType = styled.div`
  position: absolute;
  top: 50px;
  font-size: 12px;
  color: ${colors.color1};
`;

export const LabelInfo = styled.span``;
