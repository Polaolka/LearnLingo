import { Menu, Link, List } from "./MobileMenu.styled.jsx";

const MobileMenu = ({ handleClick }) => {
  return (
    <Menu>
      <List>
        <Link to="/" onClick={handleClick}>
          home
        </Link>
        <Link to="/teachers" onClick={handleClick}>
          teachers
        </Link>
      </List>
    </Menu>
  );
};

export default MobileMenu;
