import {
  HeaderLinksBox,
  HelloStyled,
  LogInBtn,
  LogInIcon,
  LogOutIcon,
  RegistrationBtn,
} from "components/Header/Header.styled.jsx";
import { Menu, Link, List } from "./MobileMenu.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations.js";

const MobileMenu = ({
  handleClick,
  openRegisterModal,
  openLoginModal,
  login,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const logOuthandle = () => {
    dispatch(logOut());
  };
  return (
    <Menu>
      <List>
        <HeaderLinksBox className="mobile">
          {!isAuth ? (
            <>
              <LogInBtn
                type="button"
                onClick={openLoginModal}
                className="mobile"
              >
                <LogInIcon className="mobile" />
                Log in
              </LogInBtn>
              <RegistrationBtn type="button" onClick={openRegisterModal}>
                Registration
              </RegistrationBtn>
            </>
          ) : (
            <>
              <HelloStyled className="mobile">Hello, {login}!</HelloStyled>
              <LogInBtn type="button" onClick={logOuthandle} className="mobile">
                <LogOutIcon className="mobile" />
                Log out
              </LogInBtn>
            </>
          )}
        </HeaderLinksBox>
        <Link to="/" onClick={handleClick}>
          home
        </Link>
        <Link to="/teachers" onClick={handleClick}>
          teachers
        </Link>
        {isAuth && <Link to="/favorites" onClick={handleClick}>favorites</Link>}
      </List>
    </Menu>
  );
};

export default MobileMenu;
