import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
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
} from "./Header.styled";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { LoginForm } from "components/LoginForm/LoginForm";
import Modal from "components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "redux/auth/selectors";
import { logOut } from "redux/auth/authOperations";
import { useLocation } from "react-router-dom";
import Container from "components/Container/Container";

function Header() {
  const dispatch = useDispatch();
  const login = useSelector(selectUserName);
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isRegModalOpened, setIsRegModalOpened] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const location = useLocation();
  const [value, setValue] = useState(getInitialValue(location.pathname));
  function getInitialValue(pathname) {
    switch (pathname) {
      case "/teachers":
        return 1;
      case "/faworites":
        return 2;
      case "/":
        return 0;
      default:
        return null;
    }
  }

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  useEffect(() => {
    if (
      location.pathname === "/teachers" ||
      location.pathname.startsWith("/teachers")
    ) {
      setValue(1);
    }
    if (
      location.pathname === "/faworites" ||
      location.pathname.startsWith("/faworites")
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

  return (
    <>
      <HeaderStyled>
        <Container>
        <HeaderWrapper>
          <Logo setValue={setValue}/>
          <HeaderLinksBox>
            <LinkStyled to="/" className={value === 0 ? "activeLink" : ""} onClick={()=>setValue(0)}>
              Home
            </LinkStyled>
            <LinkStyled
              to="/teachers"
              className={value === 1 ? "activeLink" : ""}
              onClick={()=>setValue(1)}
            >
              Teachers
            </LinkStyled>
            {isAuth && (
              <LinkStyled
                to="/faworites"
                className={value === 2 ? "activeLink" : ""}
                onClick={()=>setValue(2)}
              >
                Faworites
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
                <RegistrationBtn type="button" onClick={openRegisterModal}>
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
        </HeaderWrapper>
        </Container>
      </HeaderStyled>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
    </>
  );
}

export default Header;
