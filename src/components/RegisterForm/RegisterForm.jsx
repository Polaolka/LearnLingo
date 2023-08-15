import { FormFields, RegisterFormStyled } from "./RegisterForm.styled";
import {
  Caption,
  ButtonContainer,
  SupportingText,
} from "components/Form/Form.styled";
import { InputWraper } from "components/Form/Input.styled";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Styled";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Message from "components/Message/Message";
import ShowPassword from "components/ShowPassword/ShowPassword";
import { selectError } from "redux/auth/selectors";
import { useState } from "react";

export const RegisterForm = ({ setIsRegModalOpened }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    setIsRegModalOpened(false);
    navigate("/teachers");
    resetForm();
  };

  const schema = yup.object().shape({
    username: yup.string().min(3).max(254).required(),
    email: yup.string().min(3).max(254).required(),
    password: yup.string().min(8).max(100).required(),
  });

  const message = useSelector(selectError);

  const redirection = () => {
    const path = "/login";
    navigate(path);
  };

  const onClickHandler = () => {
    setPasswordShown((state) => !state);
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Registration</Caption>
          <SupportingText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </SupportingText>
          <FormFields>
            <InputWraper>
              <Field type="text" name="username" placeholder=" " />
              <label htmlFor="username">Name *</label>
              <ErrorMessage className="error" component="div" name="username" />
            </InputWraper>

            <InputWraper>
              <Field type="text" name="email" placeholder=" " />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <Field
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password *</label>
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Sign Up
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
    </RegisterFormStyled>
  );
};
