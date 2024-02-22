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
 

  const item = data.filter((item) => item.id.includes(id))[0];
  

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
            <thead>
              <TableHeader>
                <TableTitle>{tab.header.fieldOne}</TableTitle>
                <TableTitle>{tab.header.fieldTwo}</TableTitle>
                {tab.header.fieldThre ? (
                  <TableTitle>{tab.header.fieldThre}</TableTitle>
                ) : (
                  <></>
                )}
              </TableHeader>
            </thead>
            <tbody>
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
            </tbody>
          </Table>
        );
      })}
      <AppointmentSection />
    </ServicesContainer>
  );
};

export default Service;
