import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {
  Advantages_items,
  Advantages_item_Img,
  Item,
  TextContainer,
} from "./AdvantagesSection.styled";
import ExperiencedDoctors from '../../assets/AdvantagesSectionSvg/ExperiencedDoctors.svg'
import IndividualApproach from "../../assets/AdvantagesSectionSvg/IndividualApproach.svg"
import FullTreatment from '../../assets/AdvantagesSectionSvg/FullTreatment.svg'
import CozyEnvironment from '../../assets/AdvantagesSectionSvg/CozyEnvironment.svg'
import PreventionAndEducation from '../../assets/AdvantagesSectionSvg/PreventionAndEducation.svg'
import ModernEquipment from '../../assets/AdvantagesSectionSvg/ModernEquipment.svg'

const AdvantagesSection = () => {
  return (
    <section>
      <Container_Wrapper style={{backgroundColor:"#EBF5FA"}}>
        <h2>Наші переваги</h2>

        <Advantages_items >

          <Item>
            <Advantages_item_Img src={ExperiencedDoctors} alt="ExperiencedDoctors" />
            <h3>Досвідчені лікарі</h3>
            <TextContainer>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </TextContainer>
          </Item>

          <Item>
            <Advantages_item_Img src={IndividualApproach} alt="IndividualApproach" />
            <h3>Індивідуальний підхід</h3>
            <TextContainer>
              Ми віримо в унікальність кожної дитини. Наші лікарі враховують
              особливості розвитку та здоров&apos;я кожного пацієнта, пропонуючи
              індивідуалізовані плани лікування та рекомендації.
            </TextContainer>
          </Item>

          <Item>  
            <Advantages_item_Img src={FullTreatment} alt="FullTreatment" />
            <h3>Комплексне лікування</h3>
            <TextContainer>
              У нас ви можете за один візит отримати консультативний огляд, при
              необхідності одразу ж провести необхідні щеплення.
            </TextContainer>
          </Item>

          <Item>
            <Advantages_item_Img src={CozyEnvironment} alt="CozyEnvironment" />
            <h3>Затишне середовище</h3>
            <TextContainer >
            У нас тепла та приємна атмосфера для вас та вашого малюка. Mи надзвичайно любимо свою роботу та втілюємо все найкраще: від іграшок до знань
            </TextContainer>
          </Item>

          <Item>
            <Advantages_item_Img src={PreventionAndEducation} alt="PreventionAndEducation" />
            <h3>Профілактика та освіта</h3>
            <TextContainer>
            Ми покладаємо великий наголос на профілактичні заходи та освіту батьків щодо дитячого здоров&apos;я. Віримо, що проактивний підхід сприяє здоровому розвитку дітей.
            </TextContainer>
          </Item>

          <Item>
            <Advantages_item_Img src={ModernEquipment} alt="ModernEquipment" />
            <h3>Сучасне oбладнання</h3>
            <TextContainer>
            Використовуючи сучасні технології та методи лікування, ми забезпечуємо найкращі стандарти медичної допомоги для дітей.
            </TextContainer>
          </Item>

        </Advantages_items>
      </Container_Wrapper>
    </section>
  );
};

export default AdvantagesSection;
