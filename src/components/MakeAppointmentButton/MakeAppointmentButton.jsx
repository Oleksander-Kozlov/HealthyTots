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
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background: #318fb5;
    /* hover */
    box-shadow: 0px 4px 12px 4px rgba(13, 63, 124, 0.25);
  }
  &:active {
    background: rgba(0, 18, 68, 1);
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
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
