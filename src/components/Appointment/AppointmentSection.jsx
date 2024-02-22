import PropTypes from "prop-types";
// import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";

// import emailjs from '@emailjs/browser';
import {
  AppointmentImg,
  Appointment_section,
  Block,
  ErrorMessage,
  FieldCheckbox,
  FormContainer,
  FormContainer2,
  H2_Appointment,
  Input,
  P_Appointment,
  SubmitButton,
  TermsAndCondition,
  TextAreaBox,
  TextAreaInput,
} from "./Appointment.styled";
import AppointmentJpgMob_1x from "../../assets/img/AppoinmentImg/AppointmentJpgMob@1x.png";
import AppointmentJpgMob_2x from "../../assets/img/appoinmentImg/AppointmentJpgMob@2x.png";
import AppointmentJpgTab_1x from "../../assets/img/appoinmentImg/AppointmentJpgTab@1x.png";
import AppointmentJpgTab_2x from "../../assets/img/appoinmentImg/AppointmentJpgTab@2x.png";
import AppointmentJpgDesk_1x from "../../assets/img/appoinmentImg/AppointmentJpgDesk@1x.png";
import AppointmentJpgDesk_2x from "../../assets/img/appoinmentImg/AppointmentJpgDesk@2x.png";

import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useState } from "react";
// import { PopupContainer, PopupInnerContainer } from "./AppointmentPopup/AppointmentPopup";
import AppointmentPopup from "./AppointmentPopup/AppointmentPopup";
import { useEffect } from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().trim().required("Введіть ваше імʼя"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

function AppointmentSection({ forwardedRef }) {
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

  return (
    <Appointment_section>
      <Block>
        <AppointmentImg
          src={AppointmentJpgTab_1x}
          alt="Appointment foto"
          srcSet={`${AppointmentJpgMob_1x} 304w,
        ${AppointmentJpgMob_2x} 604w,
        ${AppointmentJpgTab_1x} 257w,
        ${AppointmentJpgTab_2x} 514w,
        ${AppointmentJpgDesk_1x} 426w,
        ${AppointmentJpgDesk_2x} 852w,
        `}
          sizes="(max-width: 767px) 304px, (max-width: 1440px) 257px, 426px"
        />

        <FormContainer>
          <H2_Appointment ref={forwardedRef}>
            Записатися на прийом
          </H2_Appointment>
          <P_Appointment>
            Ми вам перетелефонуємо для підтвердження запису у робочі години
          </P_Appointment>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
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
                  {errors.phone && touched.phone ? (
                    <ErrorMessage>{errors.phone}</ErrorMessage>
                  ) : null}
                  <TextAreaBox>
                    <Field
                      as={TextAreaInput}
                      type="text"
                      name="massage"
                      value={values.massage}
                      placeholder="Повідомлення"
                    ></Field>{" "}
                  </TextAreaBox>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <Field
                      as={FieldCheckbox}
                      type="checkbox"
                      name="termsAndConditions"
                    />
                    <TermsAndCondition
                      htmlFor="termsAndConditions"
                      style={{
                        textAlign: "left",
                        marginLeft: "10px",
                        fontSize: "10px",
                      }}
                    >
                      Я погоджуюсь з політикою конфіденційності та публічним
                      договором
                    </TermsAndCondition>
                  </div>
                  {errors.termsAndConditions && touched.termsAndConditions ? (
                    <ErrorMessage>{errors.termsAndConditions}</ErrorMessage>
                  ) : null}
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
    </Appointment_section>
  );
}

AppointmentSection.propTypes = {
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
export default AppointmentSection;
