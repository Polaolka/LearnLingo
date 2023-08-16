import {
  CountTextStyled,
  ListItemStyled,
  ListStyled,
  TextStyled,
} from "./BottomInfo.styled";

function BottomInfo() {
  return (
    <ListStyled>
      <ListItemStyled>
        <CountTextStyled>32,000 +</CountTextStyled>
        <TextStyled>Experienced tutors</TextStyled>
      </ListItemStyled>
      <ListItemStyled>
        <CountTextStyled>300,000 +</CountTextStyled>
        <TextStyled>5-star tutor reviews</TextStyled>
      </ListItemStyled>
      <ListItemStyled>
        <CountTextStyled>120 +</CountTextStyled>
        <TextStyled>Subjects taught</TextStyled>
      </ListItemStyled>
      <ListItemStyled>
        <CountTextStyled>200 +</CountTextStyled>
        <TextStyled>Tutor nationalities</TextStyled>
      </ListItemStyled>
    </ListStyled>
  );
}

export default BottomInfo;
