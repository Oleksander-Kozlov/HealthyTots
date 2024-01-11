
import {
 
  Advantages_Container_Wrapper,
  Advantages_items,
  Advantages_section,
  
  Item,
  TextContainer,
} from "./AdvantagesSection.styled";
// import ExperiencedDoctors1 from '../../assets/AdvantagesSectionSvg/ExperiencedDoctors.svg'
// import IndividualApproach1 from "../../assets/AdvantagesSectionSvg/IndividualApproach.svg"
// import FullTreatment1 from '../../assets/AdvantagesSectionSvg/FullTreatment.svg'
// import CozyEnvironment1 from '../../assets/AdvantagesSectionSvg/CozyEnvironment.svg'
// import PreventionAndEducation1 from '../../assets/AdvantagesSectionSvg/PreventionAndEducation.svg'
// import ModernEquipment1 from '../../assets/AdvantagesSectionSvg/ModernEquipment.svg'
import { CozyEnvironment, CozyEnvironmentSmall, ExperiencedDoctors, ExperiencedDoctorsSmall, FullTreatment, FullTreatmentSmall, IndividualApproach, IndividualApproachSmall, ModernEquipment, ModernEquipmentSmall, PreventionAndEducation, PreventionAndEducationSmall } from "../SvgIcons";
import { H2_About_Us } from "../AboutUsSection/AboutUsSection.styled";

const AdvantagesSection = () => {
  return (
    <Advantages_section>
      <Advantages_Container_Wrapper style={{ backgroundColor: "#EBF5FA" }}>
        <H2_About_Us>Наші переваги</H2_About_Us>

        <Advantages_items>
          <Item>
            {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> */}
            <ExperiencedDoctors />
            <ExperiencedDoctorsSmall />
            {/* </div> */}

            <h3>Досвідчені лікарі</h3>
            <TextContainer>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </TextContainer>
          </Item>

          <Item>
            <IndividualApproach />
            <IndividualApproachSmall />
            <h3>Індивідуальний підхід</h3>
            <TextContainer>
              Ми віримо в унікальність кожної дитини. Наші лікарі враховують
              особливості розвитку та здоров&apos;я кожного пацієнта, пропонуючи
              індивідуалізовані плани лікування та рекомендації.
            </TextContainer>
          </Item>

          <Item>
            <FullTreatment />
            <FullTreatmentSmall />
            <h3>Комплексне лікування</h3>
            <TextContainer>
              У нас ви можете за один візит отримати консультативний огляд, при
              необхідності одразу ж провести необхідні щеплення.
            </TextContainer>
          </Item>

          <Item>
            <CozyEnvironment />
            <CozyEnvironmentSmall />
            <h3>Затишне середовище</h3>
            <TextContainer>
              У нас тепла та приємна атмосфера для вас та вашого малюка. Mи
              надзвичайно любимо свою роботу та втілюємо все найкраще: від
              іграшок до знань
            </TextContainer>
          </Item>

          <Item>
            <PreventionAndEducation />
            <PreventionAndEducationSmall />
            <h3>Профілактика та освіта</h3>
            <TextContainer>
              Ми покладаємо великий наголос на профілактичні заходи та освіту
              батьків щодо дитячого здоров&apos;я. Віримо, що проактивний підхід
              сприяє здоровому розвитку дітей.
            </TextContainer>
          </Item>

          <Item>
            <ModernEquipment />
            <ModernEquipmentSmall />
            <h3>Сучасне oбладнання</h3>
            <TextContainer>
              Використовуючи сучасні технології та методи лікування, ми
              забезпечуємо найкращі стандарти медичної допомоги для дітей.
            </TextContainer>
          </Item>
        </Advantages_items>
      </Advantages_Container_Wrapper>
    </Advantages_section>
  );
};

export default AdvantagesSection;
