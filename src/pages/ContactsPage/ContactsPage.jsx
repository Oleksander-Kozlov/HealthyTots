import Map from "../../components/Map/Map";

const ContactsPage = () => {
  
  return (
    <>
      <a>Головна</a>
      <a>/контакти</a>
      <h1>Контакти</h1>
      <div>
        <div>
          <h3>Адреса</h3>
          <p>м.Ладижин, Наконечного 131Є</p>
          <h3>Часи прийому:</h3>
          <p>Пн. - Пт.: 09:00 - 19:00</p>
          <p>Сб. - Нд.: 11:00 - 17:00</p>
          <h3>Teлефон:</h3>
          <p> + 38 (097) 5240670Є</p>
          <h3>Пошта:</h3>
          <p>Solomko_neo@ukr.net</p>
          <h3>Ми у соціальних мережах:</h3>
          <div></div>
        </div>
        <div>
          <Map/>
        </div>
      </div>
    </>
  );
  };
  
  export default ContactsPage;
  