import { Caption, SupportingText } from "components/Form/Form.styled";

import { Button } from "components/Styled";
import { PushUpStyled, ButtonContainer } from "./PushUpNotification.styled";
import Modal from "components/Modal/Modal";
import { LoginForm } from "components/LoginForm/LoginForm";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { useState } from "react";

export const PushUpNotification = ({ setIsPushUpModalOpened }) => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isRegModalOpened, setIsRegModalOpened] = useState(false);

  const openRegisterModal = () => {
    setIsRegModalOpened(true);
    setIsPushUpModalOpened(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpened(true);
    setIsPushUpModalOpened(false);
  };

  return (
    <PushUpStyled>
      <Caption>Attention</Caption>
      <SupportingText>
        This functionality is available only to registered users.
      </SupportingText>
      <ButtonContainer>
        <Button
          className="orange regLogbutton"
          type="button"
          onClick={openRegisterModal}
        >
          Go to Registration
        </Button>
        <Button
          className="orange regLogbutton"
          type="button"
          onClick={openLoginModal}
        >
          Go to Log in
        </Button>
      </ButtonContainer>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
    </PushUpStyled>
  );
};
