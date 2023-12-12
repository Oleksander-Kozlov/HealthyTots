import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {
  Advantages_items,
  Advantages_item_Img,
  Item,
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
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>

          <Item>
            <Advantages_item_Img src={IndividualApproach} alt="IndividualApproach" />
            <h4>Індивідуальний підхід</h4>
            <p>
              Ми віримо в унікальність кожної дитини. Наші лікарі враховують
              особливості розвитку та здоров&apos;я кожного пацієнта, пропонуючи
              індивідуалізовані плани лікування та рекомендації.
            </p>
          </Item>

          <Item>  
            <Advantages_item_Img src={FullTreatment} alt="FullTreatment" />
            <h4>Комплексне лікування</h4>
            <p>
              У нас ви можете за один візит отримати консультативний огляд, при
              необхідності одразу ж провести необхідні щеплення.
            </p>
          </Item>

          <Item>
            <Advantages_item_Img src={CozyEnvironment} alt="CozyEnvironment" />
            <h4>Досвідчені лікарі</h4>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>

          <Item>
            <Advantages_item_Img src={PreventionAndEducation} alt="PreventionAndEducation" />
            <h4>Досвідчені лікарі</h4>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>

          <Item>
            <Advantages_item_Img src={ModernEquipment} alt="ModernEquipment" />
            <h4>Досвідчені лікарі</h4>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>

        </Advantages_items>
      </Container_Wrapper>
    </section>
  );
};

export default AdvantagesSection;
