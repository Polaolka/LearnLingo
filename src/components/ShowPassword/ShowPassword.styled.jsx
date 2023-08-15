import styled from "@emotion/styled";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";



import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 33px;
  right: 16px;

  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  //   pointer-events: none;
`;
export const ShowIcon = styled(FiEye)`
  width: 20px;
  height: 20px;
`;

export const HideIcon = styled(FiEyeOff)`
  width: 20px;
  height: 20px;

`;
