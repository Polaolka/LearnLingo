import styled from "@emotion/styled";
import { mediaSizes } from "constants";
import { colors } from "constants";
import { transition } from "helpers";

export const FooterStyled = styled.footer`
  padding-top: 45px;
  padding-bottom: 45px;
  position: relative;

  & ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    opacity: 0.8;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      flex-direction: row;
      gap: 10px;
    }
  }

  & li {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${colors.color7};

    &:not(:last-child) {
      @media screen and (min-width: ${mediaSizes.tablet}) {
        padding-right: 10px;
        border-right: 1px solid ${colors.colorLigthText};
      }
    }
  }

  & .name {
    color: ${colors.colorOrange};
    cursor: pointer;
    font-weight: 500;
    ${transition("color")}

    &:hover {
      color: ${colors.colorLigthText};
    }
  }
`;
