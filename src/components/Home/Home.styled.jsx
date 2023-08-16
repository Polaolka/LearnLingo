import styled from "@emotion/styled";
import { mediaSizes } from "constants";
import { colors } from "constants";
import { transition } from "helpers";
import avatar from "images/avatar@2x.png";
import { NavLink } from "react-router-dom";

export const HomeStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const MainStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${colors.colorLightBG};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 49px 32px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    align-items: flex-start;
    width: 720px;
    height: 530px;
    padding: 98px 64px;
  }
`;

export const ImgThumbStyled = styled.div`
  width: 100%;
  height: 530px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  background: ${colors.colorLightOrange};
  overflow: hidden;
  z-index: 1;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 49px 32px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    align-items: flex-start;
    max-width: 568px;
    padding: 98px 64px;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    height: 400px;
  }
`;

export const FaceImgStyled = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MacImgStyled = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0px;
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 250px;
  }

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  & h1 {
    color: ${colors.colorText};
    width: 100%;
    @media screen and (min-width: ${mediaSizes.desctop}) {
      max-width: 548px;
    }
  }

  & p {
    color: #121417;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.38;
    letter-spacing: -0.32px;
    width: 100%;
    @media screen and (min-width: ${mediaSizes.desctop}) {
      max-width: 471px;
    }
    
  }
  & span {
    color: ${colors.colorText};
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;

  border-radius: 16px;
  background-color: ${colors.colorLightOrange};
  }
`;

export const ListStyled = styled.ul`
  padding: 40px 120px;
  width: 100%;
  border-radius: 30px;
  border: 1.5px dashed ${colors.colorOrange};

  display: flex;
  justify-content: space-between;
  max-width: 100%;
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
  line-height: 1.14; /* 114.286% */
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

export const User = styled(NavLink)`
  width: 80px;
  height: 80px;
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 12px 12px 5px -5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: rotate(${({ id }) => Math.round(Math.random() * 10 - id) * 3}deg);
  ${transition("transform", "box-shadow")};

  &:hover {
    transform: scale(1.1);
    box-shadow: 16px 16px 8px -5px rgba(0, 0, 0, 0.1);
  }
`;
