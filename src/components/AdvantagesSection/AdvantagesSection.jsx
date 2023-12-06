import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import {
  Advantages_items,
  Advantages_item_Img,
  Item,
} from "./AdvantagesSection.styled";

const AdvantagesSection = () => {
  return (
    <section>
      <Container_Wrapper>
        <h2>Наші переваги</h2>

        <Advantages_items>
          <Item>
            <Advantages_item_Img src="" alt="" />
            <h3>Досвідчені лікарі</h3>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>
          <Item>
            
            <Advantages_item_Img src="" alt="" />
            <h4>Індивідуальний підхід</h4>
            <p>
              Ми віримо в унікальність кожної дитини. Наші лікарі враховують
              особливості розвитку та здоров&apos;я кожного пацієнта, пропонуючи
              індивідуалізовані плани лікування та рекомендації.
            </p>
          </Item>
          <Item>
            
            <Advantages_item_Img src="" alt="" />
            <h4>Комплексне лікування</h4>
            <p>
              У нас ви можете за один візит отримати консультативний огляд, при
              необхідності одразу ж провести необхідні щеплення.
            </p>
          </Item>
          <Item>
            
            <Advantages_item_Img src="" alt="" />
            <h4>Досвідчені лікарі</h4>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>
          <Item>
            
            <Advantages_item_Img src="" alt="" />
            <h4>Досвідчені лікарі</h4>
            <p>
              Наші лікарі мають багаторічний досвід у наданні медичної допомоги
              дітям. Вони розуміють унікальні потреби та чутливість маленьких
              пацієнтів.
            </p>
          </Item>
          <Item>
            
            <Advantages_item_Img src="" alt="" />
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
