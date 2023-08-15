import styled from "@emotion/styled";
import { colors } from "constants";
import { mediaSizes } from "constants/media";
import { Field } from "formik";
import { transition } from "helpers";

export const RegisterFormStyled = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;

export const FormFields = styled.div`
  margin-bottom: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 100%;
  }
`;
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const RadioTitle = styled.div`
  color: ${colors.colorText};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 21px;
  margin-top: 32px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  color: ${colors.colorLigthText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
    color: ${colors.colorText};
  }
  &:focus-within {
    font-weight: 700;
    color: ${colors.colorText};
  }
`;
export const RadioInput = styled(Field)`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  align-items: center;
  appearance: none;
  background-color: #fff;
  color: ${colors.colorLigthText};
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  &:checked {
    border: 2px solid ${colors.colorOrange};
  }
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);

    ${transition("transform")};
    box-shadow: inset 10px 10px ${colors.colorOrange};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
    outline: 1px solid ${colors.colorOrange};
  }
`;

export const TeacherThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const TeacherAvaThumb = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  background-color: ${colors.colorOrange};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeacherAva = styled.img`
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
`;
export const TeacherAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const TeacherYourAuthor = styled.div`
  color: ${colors.colorLigthText};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
`;

export const TeacherAuthorName = styled.span`
  color: ${colors.colorText};
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5; /* 150% */
`;
