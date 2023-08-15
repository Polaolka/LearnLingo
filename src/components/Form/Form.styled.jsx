import styled from "@emotion/styled";
import { colors } from "constants";
import { mediaSizes } from "constants/media";

export const FormContainer = styled.form``;

export const Caption = styled.p`
  margin: 0;
  /* margin-top: 40px; */
  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
  color: ${colors.colorText};
  /* text-align: center; */
  /* 
  @media screen and (min-width: ${mediaSizes.tablet}) {

    text-align: left;
  } */
`;

export const SupportingText = styled.p`
  margin: 0;
  margin-bottom: 22px;
  margin-right: auto;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const Label = styled.span`
  position: relative;
  margin: 0;
  margin-right: auto;
  color: #121417;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;
