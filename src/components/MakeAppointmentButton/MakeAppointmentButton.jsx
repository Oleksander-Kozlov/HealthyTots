import styled from "styled-components";
import PropTypes from "prop-types";
const Button = styled.button`
  width: 325px;
  padding: 16px 32px;
  border-radius: 20px;
  background: #0d3f7c;
  color: #fff;

  font-family: Balsamiq Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MakeAppointmentButton = ({children, onClick}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

MakeAppointmentButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default MakeAppointmentButton;
