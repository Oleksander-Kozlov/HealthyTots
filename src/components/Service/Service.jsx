import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "../BlogDetailsPage/BlogDetailsPage.styled";
import {
  ServicesContainer,
  Table,
  TableColumn,
  TableHeader,
} from "./Service.styled";

import data from "../../../services.json";

const Service = () => {
  const { id } = useParams();

  const item = data.filter((item) => item.id.includes(id))[0];
  // console.log("BlogDetailsPageid", `../../${item.image}`)

  return (
    <ServicesContainer>
      <LinkContainer style={{ marginBottom: "0px" }}>
        <Link to="/">
          {" "}
          <p style={{ color: "#94B0B7" }}> Головна /</p>
        </Link>
        <Link to="/services">
          {" "}
          <p style={{ color: "#94B0B7" }}>&nbsp;Послуги&nbsp; </p>
        </Link>
        <p style={{ fontSize: "14px" }}>/&nbsp;{item.title}</p>
      </LinkContainer>
      <h2 style={{ margin: "0px", justifyContent: "start", fontSize: "24px" }}>
        {item.title}
      </h2>
      {item.table.map((tab) => {
        return (
          <Table key={tab.id}>
            <TableHeader>
              <th>
                <h3
                  style={{
                    margin: "0px",
                    textAlign: "start",
                    paddingLeft: "16px",
                  }}>
                  {tab.header.fieldOne}
                </h3>
              </th>
              <th>
                <h3
                  style={{
                    margin: "0px",
                    textAlign: "start",
                    paddingLeft: "16px",
                  }}>
                  {tab.header.fieldTwo}
                </h3>
              </th>

              {tab.header.fieldThre ? (
                <th>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "start",
                      paddingLeft: "16px",
                    }}>
                    {tab.header.fieldThre}
                  </h3>
                </th>
              ) : (
                <></>
              )}
            </TableHeader>
            {tab.body.map((val, key) => {
              return (
                <tr key={key}>
                  <TableColumn style={{
                    weight: "130px"
                  }}>{val.name}</TableColumn>
                  {val.country ? <TableColumn>{val.country}</TableColumn> : <></>}
                  <TableColumn>{val.value}</TableColumn>
                </tr>
              );
            })}
          </Table>
        );
      })}
    </ServicesContainer>
  );
};

export default Service;
