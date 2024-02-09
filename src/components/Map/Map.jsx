import styled from "styled-components";
const MapGoogle = styled.iframe`
  width: 320px;
  height: 315px;

  /* Медиа-запрос для экранов с шириной до 768px */
  @media screen and (min-width: 768px) {
    width: 297px;
    height: auto;
  }

  /* Медиа-запрос для экранов с шириной больше 1440px */
  @media screen and (min-width: 1440px) {
    width: 588px;
    
  }
`;

const Map = () => {
  return (
    <MapGoogle
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1316.9794807749117!2d29.241460956693786!3d48.68714926351284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d48.6874185!2d29.2421072!4m5!1s0x40cd710012bc9c05%3A0xf643471667f2104a!2zIkhlYWx0eSBUb3RzIiBwZWRpYXRyaWNzLCDQstGD0LvQuNGG0Y8g0J3QsNC60L7QvdC10YfQvdC-0LPQviwgMTMx0IQsINCb0LDQtNC40LbQuNC9LCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDI0MzIw!3m2!1d48.6865917!2d29.242666699999997!5e0!3m2!1suk!2sua!4v1703075511185!5m2!1suk!2sua"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></MapGoogle>
  );
};
export default Map;
