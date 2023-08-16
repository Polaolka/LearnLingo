import {
  TeacherAuthor,
  TeacherAuthorName,
  TeacherAva,
  TeacherAvaThumb,
  TeacherThumb,
  TeacherYourAuthor,
  FormFields,
  RadioGroup,
  RadioInput,
  RadioLabel,
  RadioTitle,
  RegisterFormStyled,
} from "./BookForm.styled";
import {
  Caption,
  ButtonContainer,
  SupportingText,
} from "components/Form/Form.styled";
import { InputWraper } from "components/Form/Input.styled";

import { Button } from "components/Styled";
import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Message from "components/Message/Message";
import { selectError } from "redux/auth/selectors";

export const BookForm = ({ setIsBookModalOpened, teacherDataForBook }) => {
  const { id, name, surname, avatar_url } = teacherDataForBook;

  const initialValues = {
    userFullName: "",
    userEmail: "",
    phoneNumber: "",
    mainReason: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const request = { ...values, teacherId: id };
    setIsBookModalOpened(false);
    resetForm();
    return request;
  };

  const schema = yup.object().shape({
    userFullName: yup.string().min(3).max(100).required(),
    userEmail: yup.string().min(3).max(100).required(),
    phoneNumber: yup.string().min(8).max(30).required(),
    mainReason: yup.string().min(8).max(100).required(),
  });

  const message = useSelector(selectError);

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Book trial lesson</Caption>
          <SupportingText>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </SupportingText>

          <TeacherThumb>
            <TeacherAvaThumb>
              <TeacherAva src={avatar_url} height="46px" width="46px" />
            </TeacherAvaThumb>
            <TeacherAuthor>
              <TeacherYourAuthor>Your teacher</TeacherYourAuthor>
              <TeacherAuthorName>{`${name} ${surname}`}</TeacherAuthorName>
            </TeacherAuthor>
          </TeacherThumb>

          <RadioTitle>
            What is your main reason for learning English?
          </RadioTitle>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="mainReason"
                value="Career and business"
              />
              Career and business
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="mainReason"
                value="Lesson for kids"
              />
              Lesson for kids
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="mainReason"
                value="Living abroad"
              />
              Living abroad
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="mainReason"
                value="Exams and coursework"
              />
              Exams and coursework
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="mainReason"
                value="Culture, travel or hobby"
              />
              Culture, travel or hobby
            </RadioLabel>
          </RadioGroup>
          <ErrorMessage className="error" component="div" name="mainReason" />

          <FormFields>
            <InputWraper>
              <Field type="text" name="userFullName" placeholder=" " />
              <label htmlFor="userFullName">Full Name</label>
              <ErrorMessage
                className="error"
                component="div"
                name="userFullName"
              />
            </InputWraper>

            <InputWraper>
              <Field type="text" name="userEmail" placeholder=" " />
              <label htmlFor="userEmail">Email</label>
              <ErrorMessage
                className="error"
                component="div"
                name="userEmail"
              />
            </InputWraper>

            <InputWraper>
              <Field type="text" name="phoneNumber" placeholder=" " />
              <label htmlFor="phoneNumber">Phone number</label>
              <ErrorMessage
                className="error"
                component="div"
                name="phoneNumber"
              />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Book
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
    </RegisterFormStyled>
  );
};
