import { Link } from "react-router-dom";
import { LinkContainer } from "../BlogDetailsPage/BlogDetailsPage.styled";
import {
  CardContainer,
  CardsWraper,
  IMG_Wrapper,
  ServicesContainer,
} from "./ServicesPage.styled";

import consultation_mob_112 from "../../assets/Services/consultation@1x_mob_112.png";
import consultation_mob_224 from "../../assets/Services/consultation@2x_mob_224.png";
import consultation_tab_284 from "../../assets/Services/consultation@1x_tab_284.png";
import consultation_tab_568 from "../../assets/Services/consultation@2x_tab_568.png";
import consultation_desktop_332 from "../../assets/Services/consultation@1x_desktop_332.png";
import consultation_desktop_664 from "../../assets/Services/consultation@2x_desktop_664.png";

import vactination_mob_112 from "../../assets/Services/vactination@1x_mob_112.png";
import vactination_mob_224 from "../../assets/Services/vactination@2x_mob_224.png";
import vactination_tab_284 from "../../assets/Services/vactination@x1_tab_284.png";
import vactination_tab_568 from "../../assets/Services/vactination@2x_tab_568.png";
import vactination_desktop_332 from "../../assets/Services/vactination@x1_desktop_332.png";
import vactination_desktop_664 from "../../assets/Services/vactination@x2_desktop_664.png";

import checkUp_mob_99 from "../../assets/Services/checkUp@1x_mob_112.png";
import checkUp_mob_198 from "../../assets/Services/checkUp@2x_mob_224.png";
import checkUp_desktop_tab_248 from "../../assets/Services/checkUp@1x_desktop_tab_248.png";
import checkUp_desktop_tab_456 from "../../assets/Services/checkUp@2x_desktop_tab_456.png";

import certificate_mob_112 from "../../assets/Services/certificate@1x_mob_112.png";
import certificate_mob_224 from "../../assets/Services/certificate@2x_mob_224.png";
import certificate_tab_284 from "../../assets/Services/certificate@1x_tab_284.png";
import certificate_tab_568 from "../../assets/Services/certificate@2x_tab_568.png";
import certificate_desktop_332 from "../../assets/Services/certificate@1x_desktop_332.png";
import certificate_desktop_664 from "../../assets/Services/certificate@2x_desktop_664.png";

const ServicesPage = () => {
  return (
    <section
      style={{ marginBottom: "48px", paddingBottom: "0px", paddingTop: "4px" }}>
      <ServicesContainer>
        <LinkContainer style={{ marginBottom: "0px" }}>
          <Link to="/">
            <p style={{ color: "#94B0B7" }}> Головна /</p>
          </Link>
          <p style={{ fontSize: "14px" }}>&nbsp;Послуги</p>
        </LinkContainer>
        <h2
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
            paddingTop: "4px",
            justifyContent: "start",
          }}>
          Послуги
        </h2>
        <CardsWraper>
          <Link to={`1`}>
            <CardContainer>
              <IMG_Wrapper>
                <img
                  srcSet={`${consultation_mob_112} 112w,    ${consultation_mob_224} 224w,   ${consultation_tab_284} 284w,   ${consultation_tab_568} 568w, ${consultation_desktop_332} 332w, ${consultation_desktop_664} 664w, `}
                  sizes="(max-width: 1439.98px) 112px, 284px, 332px "
                  src={consultation_mob_112}
                  alt="consultation"
                />
              </IMG_Wrapper>
              <h3 style={{ margin: "0px" }}>Консультації</h3>
            </CardContainer>
          </Link>

          <Link to={`2`}>
            <CardContainer>
              <IMG_Wrapper>
                <img
                  srcSet={`${vactination_mob_112} 112w,    ${vactination_mob_224} 224w,   ${vactination_tab_284} 284w,   ${vactination_tab_568} 568w, ${vactination_desktop_332} 332w, ${vactination_desktop_664} 664w `}
                  sizes="(max-width: 1439.98px) 112px, 284px, 332px "
                  src={vactination_mob_112}
                  alt="vactination"
                />
              </IMG_Wrapper>
              <h3 style={{ margin: "0px" }}>Вакцинація</h3>
            </CardContainer>
          </Link>

          <Link to={`3`}>
            <CardContainer>
              <IMG_Wrapper>
                <img
                  srcSet={`${checkUp_mob_99} 99w,    ${checkUp_mob_198} 198w, ${checkUp_desktop_tab_248} 284w, ${checkUp_desktop_tab_456} 456w, `}
                  sizes="(max-width: 1439.98px) 99px, 456px"
                  src={checkUp_mob_99}
                  alt="checkUp"
                />
              </IMG_Wrapper>
              <h3 style={{ margin: "0px" }}>Обстеження</h3>
            </CardContainer>
          </Link>

          <Link to={`4`}>
            <CardContainer>
              <IMG_Wrapper>
                <img
                  srcSet={`${certificate_mob_112} 112w,    ${certificate_mob_224} 224w, ${certificate_tab_284} 284w, ${certificate_tab_568} 568w, ${certificate_desktop_332} 332w, ${certificate_desktop_664} 664w`}
                  sizes="(max-width: 1439.98px) 112px, 284px, 332px "
                  src={certificate_mob_112}
                  alt="certificate"
                />
              </IMG_Wrapper>
              <h3 style={{ margin: "0px" }}>Оформлення довідок</h3>
            </CardContainer>
          </Link>
        </CardsWraper>
      </ServicesContainer>
    </section>
  );
};

export default ServicesPage;
