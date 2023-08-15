import styled from "@emotion/styled";
import { colors } from "constants";
import { transition } from "helpers";

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  padding: 32px 16px;

  @media screen and (min-width: 600px) {
    padding: 12px 36px;
  }
`;
export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const FilterPlaceholder = styled.div`
  color: ${colors.colorLigthText};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  padding-left: 12px;
`;

export const InputBoxStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  height: 40px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 14px;
  background: ${colors.colorWhite};

  color: ${colors.colorText};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  cursor: pointer;
`;

export const OpenSelectBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const DropdownListStyled = styled.ul`
  position: absolute;
  z-index: 50;
  top: 54px;
  left: 0;
  width: 100%;

  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px;
  border-radius: 12px;
  background: ${colors.colorWhite};

  color: ${colors.colorText};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  transition: opacity 450ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  ${transition("transform")};

  &.active {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }

  &.hidden {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
