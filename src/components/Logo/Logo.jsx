import { LogoStyled, Name } from "./Logo.styled";
import logo from "images/ukraine_logo.svg";

function Logo({ size, setValue}) {
  return (
    <LogoStyled size={size} className="logo" to="/" onClick={()=>setValue(0)}>
      <img src={logo} alt="Logo" />
      <Name size={size}>
      LearnLingo
      </Name>
    </LogoStyled>
  );
}

export default Logo;
