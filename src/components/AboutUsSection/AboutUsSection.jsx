import logoHT from "../../assets/logoHT.png";
import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {
  About_us_foto_text,
  About_us_Image,
  About_us_text,
} from "./AboutUSSection.styled";
const AboutUsSection = () => {
  return (
    <section>
      <Container_Wrapper>
        <h2>Про нас</h2>
        <About_us_foto_text>
          <About_us_Image src={logoHT} alt="logoHT" />
          <About_us_text>
            Клініка &quot;Healthy Tots&quot; - це інноваційний медичний заклад,
            що спеціалізується на наданні високоякісної медичної допомоги. Наша
            місія полягає в створенні здорового початку для кожного малятка,
            забезпечуючи не лише ефективне лікування, але й акцентуючи на
            профілактиці та розвитку здорового способу життя. Затишне середовище
            клініки створює атмосферу, де діти відчувають себе комфортно, а
            батьки можуть бути впевнені в надійності та професіоналізмі нашої
            команди.
          </About_us_text>
        </About_us_foto_text>
      </Container_Wrapper>
    </section>
  );
};
export default AboutUsSection;
