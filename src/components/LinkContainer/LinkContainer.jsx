import {
  LinkContainerContactPage,
  NavLinks,
} from "../../pages/ContactsPage/ContactsPage.styled";
import navBar from "../../assets/JSONs/navBar.json";

const LinkContainer = ({ title }) => {
  const item = navBar.find((item) => item.link === title);

  return (
    <LinkContainerContactPage>
      <NavLinks to="/">
        <p style={{ color: "#94b0b7" }}> Головна /</p>
      </NavLinks>
      <p>&nbsp;{item.name}</p>
    </LinkContainerContactPage>
  );
};

export default LinkContainer;
