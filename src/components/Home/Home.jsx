import { LinkButton } from "components/Styled/Button.styled";
import {
  FaceImgStyled,
  HomeStyled,
  ImgThumbStyled,
  MacImgStyled,
  MainStyled,
  Text,
} from "./Home.styled";
import imageFace from "images/avatar_curly.png";
import imageMac from "images/Yellow_mac.svg";
import BottomInfo from "components/BottomInfo/BottomInfo";
import Container from "components/Container/Container";

function Home() {
  return (
    <Container>
      <HomeStyled>
        <MainStyled>
          <Text>
            <h1>
              Unlock your potential with the best <span>language</span> tutors
            </h1>
            <p>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors..
            </p>
          </Text>
          <LinkButton to="teachers">Get started</LinkButton>
        </MainStyled>
        <ImgThumbStyled>
          <FaceImgStyled src={`${imageFace}`} />
          <MacImgStyled src={`${imageMac}`} />
        </ImgThumbStyled>
      </HomeStyled>
      <BottomInfo />
    </Container>
  );
}

export default Home;
