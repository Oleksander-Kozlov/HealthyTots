import { IconOkey, PopupContainer, PopupInnerContainer } from "./AppointmentPopup.styled";
// import okGreen from "../../../assets/okGreen.svg"
import { GiCheckMark } from "react-icons/gi";
const AppointmentPopup = () => {
  return (
    <PopupContainer>
      <PopupInnerContainer>
        {/* <svg ={okGreen} alt="okGreenIcon"  size={80}/> */}
        <IconOkey>
          
          <GiCheckMark color="white" size={60} />
        </IconOkey>

        <h3>Дякуємо за вашу довіру!</h3>
        <p style={{ fontSize: "18px" }}>
          Ми вам перетелефонуємо у найближчий час протягом робочих годин для
          підтвердження запису.
        </p>
      </PopupInnerContainer>
    </PopupContainer>
  );
};

export default AppointmentPopup;
