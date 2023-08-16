import styled from "@emotion/styled";
import { transition } from "helpers";
import { colors } from "constants";
import { NavLink } from "react-router-dom";

export const LinkButton = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${colors.colorOrange};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25);
  color: ${colors.colorText};
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
  ${transition("opacity")};

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 39px;
  border-radius: 10.31px;
  background: ${colors.colorOrange};
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  color: ${colors.colorText};
  border: none;
  line-height: normal;
  cursor: pointer;
  ${transition("opacity", "background-color")};

  &:hover {
    opacity: 0.8;
  }
  &.loadMore {
    display: block;
    margin: 12px auto 0 auto;
    width: 183px;
    padding: 16px 48px;
  }
  &.orderBtn {
    margin-top: 32px;
    margin-right: auto;
    width: 233px;
    padding: 16px 48px;
  }
`;

export const MoreButton = styled.button`
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  border-radius: 5px;
  background: ${colors.colorOrange};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 600;
  color: ${colors.colorText};
  border: none;
  line-height: normal;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
  ${transition("opacity", "background-color")};

  &:hover {
    opacity: 0.8;
  }
`;
