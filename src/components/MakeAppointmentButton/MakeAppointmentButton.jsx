import styled from "styled-components";
import PropTypes from "prop-types";
const Button = styled.button`
  display: flex;
  justify-content: center;
  width: fit-content;
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

const MakeAppointmentButton = ({ children , handleClick})=> {
  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  );
};

MakeAppointmentButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default MakeAppointmentButton;
