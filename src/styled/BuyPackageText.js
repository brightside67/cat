import styled from "styled-components";

export const ActionTextBlock = styled.div`
  text-align: center;
  color: ${props => (props.isAvailable ? "#ffffff" : "#ffff66")};
  font-size: 13px;
  margin-top: 14px;
  margin-bottom: 14px;
  button {
    border: none;
    border-bottom: ${props =>
      props.isAvailable ? "1px dashed #22a7e9" : "1px dashed #ffff66"};
    color: ${props => (props.isAvailable ? "#22a7e9" : "#ffff66")};
    appearance: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    background: none;
    font-family: "Trebuchet MS";
    font-size: 13px;
  }
`;
