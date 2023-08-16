import Logo from "components/Logo/Logo";
import React, { useCallback, useEffect, useState } from "react";
import {
  HeaderLinksBox,
  HeaderStyled,
  HeaderWrapper,
  LinkStyled,
  LogInIcon,
  LogInBtn,
  RegistrationBtn,
  HelloStyled,
  LogOutIcon,
  MenuButton,
  Icon,
} from "./Header.styled";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { LoginForm } from "components/LoginForm/LoginForm";
import Modal from "components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "redux/auth/selectors";
import { logOut } from "redux/auth/authOperations";
import { useLocation } from "react-router-dom";
import Container from "components/Container/Container";
import { mediaSizes } from "constants";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import MobileMenu from "components/MobileMenu/MobileMenu";

function Header() {
  const dispatch = useDispatch();
  const login = useSelector(selectUserName);

  const [showBurgerIcon, setShowBurgerIcon] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isRegModalOpened, setIsRegModalOpened] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const location = useLocation();
  const [value, setValue] = useState(getInitialValue(location.pathname));
  function getInitialValue(pathname) {
    switch (pathname) {
      case "/teachers":
        return 1;
      case "/favorites":
        return 2;
      case "/":
        return 0;
      default:
        return null;
    }
  }

  const clickHandler = useCallback(() => {
    setIsMobileMenuOpen((state) => !state);
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/teachers" ||
      location.pathname.startsWith("/teachers")
    ) {
      setValue(1);
    }
    if (
      location.pathname === "/favorites" ||
      location.pathname.startsWith("/favorites")
    ) {
      setValue(2);
    }
  }, [location.pathname]);

  const openRegisterModal = () => {
    setIsRegModalOpened(true);
  };

  const openLoginModal = () => {
    setIsLoginModalOpened(true);
  };

  const logOuthandle = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(mediaSizes.tablet)) {
        setShowBurgerIcon(true);
      } else {
        setShowBurgerIcon(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderWrapper>
            <Logo setValue={setValue} />
            {!showBurgerIcon && (
              <>
                <HeaderLinksBox>
                  <LinkStyled
                    to="/"
                    className={value === 0 ? "activeLink" : ""}
                    onClick={() => setValue(0)}
                  >
                    Home
                  </LinkStyled>
                  <LinkStyled
                    to="/teachers"
                    className={value === 1 ? "activeLink" : ""}
                    onClick={() => setValue(1)}
                  >
                    Teachers
                  </LinkStyled>
                  {isAuth && (
                    <LinkStyled
                      to="/favorites"
                      className={value === 2 ? "activeLink" : ""}
                      onClick={() => setValue(2)}
                    >
                      Favorites
                    </LinkStyled>
                  )}
                </HeaderLinksBox>
                <HeaderLinksBox>
                  {!isAuth ? (
                    <>
                      <LogInBtn type="button" onClick={openLoginModal}>
                        <LogInIcon />
                        Log in
                      </LogInBtn>
                      <RegistrationBtn
                        type="button"
                        onClick={openRegisterModal}
                      >
                        Registration
                      </RegistrationBtn>
                    </>
                  ) : (
                    <>
                      <HelloStyled>Hello, {login}!</HelloStyled>
                      <LogInBtn type="button" onClick={logOuthandle}>
                        <LogOutIcon />
                        Log out
                      </LogInBtn>
                    </>
                  )}
                </HeaderLinksBox>
              </>
            )}

            {showBurgerIcon && (
              <MenuButton onClick={clickHandler}>
                {isMobileMenuOpen ? (
                  <Icon>
                    <RiCloseLine />
                  </Icon>
                ) : (
                  <RiMenuFill width="18" height="12" />
                )}
              </MenuButton>
            )}
          </HeaderWrapper>
        </Container>
      </HeaderStyled>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
      {isMobileMenuOpen && showBurgerIcon && (
        <MobileMenu
          handleClick={clickHandler}
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
          login={login}
        />
      )}
    </>
  );
}

export default Header;
