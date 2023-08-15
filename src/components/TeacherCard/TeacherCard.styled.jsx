import styled from "@emotion/styled";
import { colors } from "constants";
import { container } from "helpers";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiStar } from "react-icons/hi";


import { mediaSizes } from "constants";

export const TeacherCardStyled = styled.div`
  ${container};
  display: flex;
  width: 100%;
  padding: 24px;
  align-items: flex-start;
  gap: 48px;
  background-color: ${colors.colorWhite};
  border-radius: 24px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 18px;
    gap: 36px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1184px;
    padding: 24px;
    gap: 48px;
  }
`;

export const TeacherImgThumb = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
  padding: 8px;
  overflow: hidden;
`;

export const TeacherImg = styled.img`
  display: block;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const InfoTeacherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: calc(100%-168px); */
`;

export const InfoTeacherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    color: ${colors.colorLigthText};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    flex-basis: 80px;
  }
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 32px;
    & :not(:last-child) {
      &:after {
        content: "";
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {
      color: ${colors.colorGreen};
      margin-left: 4px;
    }
  }
`;

export const InfoTeacherList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LevelsItem = styled.ul`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  color: var(--main-black);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
    background-color: ${colors.colorOrange};
  }
`;

export const HeartLineStyled = styled(HiOutlineHeart)`
  width: 26px;
  height: 26px;
  margin-left: 64px;
`;

export const HeartFillStyled = styled(HiHeart)`
  width: 26px;
  height: 26px;
  margin-left: 64px;
  fill: ${colors.colorOrange};
`;

export const BookIconStyled = styled(HiOutlineBookOpen)`
  margin-right: 8px;
`;

export const StarStyled = styled(HiStar)`
  margin-right: 8px;
  fill: ${colors.colorOrange};
`;

export const TeachersName = styled.p`
  margin-top: 8px;
  color: ${colors.colorText};
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
export const SpeaksStyled = styled.p`
  margin-top: 32px;
  color: ${colors.colorLigthText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
    color: ${colors.colorText};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`;

export const ConditionsStyled = styled.p`
  margin-top: 8px;
  color: ${colors.colorLigthText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: ${colors.colorText};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`;
export const ReadMoreBtn = styled.button`
  margin-top: 16px;
  padding: 0;
  color: ${colors.colorText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-right: auto;
  margin-bottom: 32px;
`;

export const TeacherDescr = styled.p`
  margin-bottom: 32px;
  margin-top: 16px;
  color: ${colors.colorText};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const FBList = styled.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`;
export const FBItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const FBThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const FBAvaThumb = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FBAva = styled.p`
  display: block;
  border-radius: 100px;
  color: ${colors.colorWhite};
  font-size: 24px;
  font-weight: 700;
`;
export const FBAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const FBAuthorName = styled.span`
  color: ${colors.colorLigthText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FBRew = styled.p`
  color: ${colors.colorText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
