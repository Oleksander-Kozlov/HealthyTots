import PropTypes from "prop-types";
import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";

// import emailjs from '@emailjs/browser';
import {
  AppointmentImg,
  Block,
  ErrorMessage,
  FormContainer,
  FormContainer2,
  Input,
  InputMessage,
  SubmitButton,
} from "./Appointment.styled";
import AppointmentJpg from "../../img/Appointment.jpg";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useState } from "react";
// import { PopupContainer, PopupInnerContainer } from "./AppointmentPopup/AppointmentPopup";
import AppointmentPopup from "./AppointmentPopup/AppointmentPopup";
import { useEffect } from "react";



// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().trim().required("Введіть ваше імʼя"),
  //   phone: yup
  //     .string()
  //     .matches(phoneRegExp, "Phone number is not valid")
  //     .required("Required"),
    termsAndConditions: yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
});

function AppointmentSection({forwardedRef} ) {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  //   const handleSubmit = (values, { resetForm }) => {
  //     alert(JSON.stringify(values));
  //     resetForm();
  //   };

  const initialValues = {
    name: "",
    phone: "",
    massage: "",
    termsAndConditions: false,
  };

  // function sendemail(object) {

  //   emailjs.send(service_46pydvw, 'template_etiy58a', object, 'BgVuFq4bE7bcGiPtg')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [showPopUp]);

  console.log(termsAndConditions);
  return (
    <section>
      <Container_Wrapper
        
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Block>
          <AppointmentImg src={AppointmentJpg} alt="Appointment foto" />

          <FormContainer>
            <h2 ref={forwardedRef}>Записатися на прийом</h2>
            <p
              style={{
                textAlign: "left",
                color: "var(--Text-color, #0C151C)",
                /* Text secondary */
                fontFamily: "Roboto",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "120%",
              }}
            >
              Ми вам перетелефонуємо для підтвердження запису у робочі години
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                //   sendemail(values)
                setShowPopUp(true);
                resetForm();
              }}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form>
                  <FormContainer2>
                    <Field
                      as={Input}
                      name="name"
                      type="text"
                      placeholder="Ім’я та прізвище*"
                      value={values.name}
                      // onChange={handleChange}
                      //   onFocus={handleFocus}
                    />
                    {errors.name && touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}
                    <Field
                      as={Input}
                      type="text"
                      name="phone"
                      placeholder="Номер телефону*"
                      value={values.phone}
                    />
                    <Field
                      as={InputMessage}
                      type="text"
                      name="massage"
                      placeholder="Повідомлення"
                      value={values.massage}
                    />{" "}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <Field
                        type="checkbox"
                        name="termsAndConditions"
                        value={setTermsAndConditions(false)}
                      />
                      <span
                        htmlFor="termsAndConditions"
                        style={{
                          textAlign: "start",
                          marginLeft: "12px",
                          marginBottom: "20px",
                        }}
                      >
                        Я погоджуюсь з політикою конфіденційності та публічним
                        договором
                      </span>
                      {errors.termsAndConditions &&
                      touched.termsAndConditions ? (
                        <ErrorMessage>{errors.termsAndConditions}</ErrorMessage>
                      ) : null}
                    </div>
                  </FormContainer2>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    Записатися
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
          {showPopUp ? <AppointmentPopup /> : <div />}
        </Block>
      </Container_Wrapper>
    </section>
  );
}

AppointmentSection.propTypes = {
  forwardedRef : PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
export default AppointmentSection;
