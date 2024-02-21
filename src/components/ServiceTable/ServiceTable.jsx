import { useParams } from "react-router-dom";
import { LinkContainer } from "../../pages/BlogDetailsPage/BlogDetailsPage.styled";
import {
  ServicesContainer,
  Table,
  TableCell,
  TableColumn,
  TableHeader,
  TableTitle,
} from "./ServiceTable.styled";

import data from "../../assets/JSONs/services.json";
import AppointmentSection from "../Appointment/AppointmentSection";
import {
  CotactTitle,
  NavLinks,
} from "../../pages/ContactsPage/ContactsPage.styled";

const Service = () => {
  const { id } = useParams();
  console.log("useParams", id);

  const item = data.filter((item) => item.id.includes(id))[0];
  console.log("BlogDetailsPageid", `../../${item.image}`);

  return (
    <ServicesContainer>
      <LinkContainer style={{ marginBottom: "0px" }}>
        <NavLinks to="/">
          {" "}
          <p style={{ color: "#94B0B7" }}> Головна /</p>
        </NavLinks>
        <NavLinks to="/services">
          {" "}
          <p style={{ color: "#94B0B7" }}>&nbsp;Послуги&nbsp; </p>
        </NavLinks>
        <p>/&nbsp;{item.title}</p>
      </LinkContainer>
      <CotactTitle style={{ margin: "0px", justifyContent: "start" }}>
        {item.title}
      </CotactTitle>
      {item.table.map((tab) => {
        return (
          <Table key={tab.id}>
            <TableHeader>
              <TableTitle>
                {/* <h3
                  style={{
                    margin: "0px",
                    textAlign: "start",
                    // paddingLeft: "16px",
                  }}
                > */}
                {tab.header.fieldOne}
                {/* </h3> */}
              </TableTitle>
              <TableTitle>
                <h3
                  style={{
                    margin: "0px",
                    textAlign: "start",
                    // paddingLeft: "16px",
                  }}
                >
                  {tab.header.fieldTwo}
                </h3>
              </TableTitle>

              {tab.header.fieldThre ? (
                <TableTitle>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "start",
                      // paddingLeft: "16px",
                    }}
                  >
                    {tab.header.fieldThre}
                  </h3>
                </TableTitle>
              ) : (
                <></>
              )}
            </TableHeader>

            {tab.body.map((val, key) => {
              return (
                <TableCell key={key}>
                  <TableColumn
                    style={{
                      weight: "130px",
                    }}
                  >
                    {val.name}
                  </TableColumn>
                  {val.country ? (
                    <TableColumn>{val.country}</TableColumn>
                  ) : (
                    <></>
                  )}
                  <TableColumn>{val.value}</TableColumn>
                </TableCell>
              );
            })}
          </Table>
        );
      })}
      <AppointmentSection />
    </ServicesContainer>
  );
};

export default Service;
