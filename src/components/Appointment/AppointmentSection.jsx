import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {  AppointmentImg, Block, FormContainer } from "./Appointment.styled";
import AppointmentJpg from "../../img/Appointment.jpg"
import { Formik, Field } from "formik";

const Appointment_Section = () => {

    //початкові значення форміка
const initialValues = {
    name: '',
    phone: '',
    massage: '',
  };
    return (
        <section>
            <Container_Wrapper>
                <Block>
                    <AppointmentImg src={AppointmentJpg} alt="Appointment foto" />
                    
                    <FormContainer>
                        <h2>Записатися на прийом</h2>
                        <p>Ми вам перетелефонуємо для підтвердження запису у робочі години</p>
                        <Formik
                            initialValues={initialValues
                                }
                        >
<Field
              name="name"
              type="text"
              placeholder="Ім’я та прізвище*"
              
            //   value={values.name}
            //   onChange={handleChange}
            //   onFocus={handleFocus}
            ></Field>
                        

                        </Formik>
                    </FormContainer>
                    
                        
                        
                    
                    </Block>
            </Container_Wrapper>

        </section>
    )
}
    export default Appointment_Section;