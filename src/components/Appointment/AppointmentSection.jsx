
import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {
  AppointmentImg,
  Block,
  ErrorMessage,
  FormContainer,
  FormContainer2,
  Input,
  SubmitButton,
} from "./Appointment.styled";
import AppointmentJpg from "../../img/Appointment.jpg";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().trim().required("Введіть ваше імʼя"),
  //   phone: yup
  //     .string()
  //     .matches(phoneRegExp, "Phone number is not valid")
  //     .required("Required"),
});

const Appointment_Section = () => {
  //початкові значення форміка

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    resetForm();
  };

  const initialValues = {
    name: "",
    phone: "",
    massage: "",
    termsAndConditions: false,
  };
  return (
    <section>
      <Container_Wrapper id="form">
        <Block>
          <AppointmentImg src={AppointmentJpg} alt="Appointment foto" />

          <FormContainer>
            <h2>Записатися на прийом</h2>
            <p style={{ textAlign: "left" }}>
              Ми вам перетелефонуємо для підтвердження запису у робочі години
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleSubmit}>
              {({ errors, touched }) => (
                <Form>
                  <FormContainer2>
                    <Field
                      as={Input}
                      name="name"
                      type="text"
                      placeholder="Ім’я та прізвище*"

                      // value={values.name}
                      // onChange={handleChange}
                      //   onFocus={handleFocus}
                    />
                    {errors.name && touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}
                    <Field
                      as={Input}
                      type="phone"
                      name="number"
                      placeholder="Номер телефону*"
                      //     value={values.name}
                      // onChange={handleChange}
                    />
                    <Field
                      as={Input}
                      type="text"
                      name="massage"
                      placeholder="Повідомлення"
                      //     value={values.name}
                      // onChange={handleChange}
                    />{" "}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <Field type="checkbox" name="termsAndConditions" />
                      <span
                        htmlFor="termsAndConditions"
                        style={{
                          textAlign: "start",
                          marginLeft: "12px",
                          marginBottom: "20px",
                        }}>
                        Я погоджуюсь з політикою конфіденційності та публічним
                        договором
                      </span>
                    </div>
                  </FormContainer2>

                  <SubmitButton type="submit">Записатися</SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </Block>
      </Container_Wrapper>
    </section>
  );
};
export default Appointment_Section;
