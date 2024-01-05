import logoHT from "../../assets/rectangle/hero_img_center_158px@1x.png";

import {
  About_Us_Container_Wrapper,
  About_us_foto_text,
  About_us_Image,
  About_Us_Section,
  About_us_text,
  H2_About_Us,
} from "../AboutUsSection/AboutUsSection.styled";
const AboutUsSection = () => {
  return (
    <About_Us_Section>
      <About_Us_Container_Wrapper>
        <H2_About_Us>Про нас</H2_About_Us>
        <About_us_foto_text>
          <About_us_Image>
            < img src={logoHT} alt="logoHT" />
          </About_us_Image>
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
      </About_Us_Container_Wrapper>
    </About_Us_Section>
  );
};
export default AboutUsSection;
