import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>© 2023 </li>
        <li>
          <p>
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/polishchuk-olha/"
              target="_blank"
              className="name"
              rel="noopener noreferrer"
            >
              Olha Polishchuk
            </a>
          </p>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
