import styled from "styled-components";
import { media } from "../utils/media";

const disableColor = "#b3b3b3";
const availableColor = "#2ea8e6";
const blackColor = "#000000";
const grayColor = "#666666";
const hoverColor = "#e52e7a";

export const Weight = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 80px;
  height: 80px;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.isAvailable ? availableColor : disableColor};
  font-size: 42px;
  line-height: 22px;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  padding-top: 10px;
  span {
    font-size: 21px;
    margin-top: 8px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${props =>
    props.isAvailable ? availableColor : disableColor};

  -webkit-clip-path: polygon(13% 0, 99% 0, 100% 100%, 50% 100%, 0 100%, 0 9%);
  clip-path: polygon(13% 0, 99% 0, 100% 100%, 50% 100%, 0 100%, 0 9%);
  height: 480px;
  border-radius: 10px;
  transition: all .5s ease;
  margin: 14px 2em;
  border: 4px solid ${props =>
    props.isAvailable ? availableColor : disableColor};
  &:after {
    content: ''
    display: block;

  }
  &:hover {
    background-color: ${hoverColor};
    border: 4px solid ${hoverColor};
    ${Weight} {
      background-color: ${hoverColor};
    }
  }
`;

export const ContainerBox = styled.div`
  -webkit-clip-path: polygon(13% 0, 99% 0, 100% 100%, 50% 100%, 0 100%, 0 9%);
  clip-path: polygon(13% 0, 99% 0, 100% 100%, 50% 100%, 0 100%, 0 9%);
  background: #f2f2f2;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 45px;
  cursor: pointer;
`;

export const OpacityBox = styled.div`
  opacity: ${props => (props.isAvailable ? "1" : "0.5")};
`;

export const Image = styled.img`
  position: absolute;
  top: 204px;
  left: -4px;
`;

export const CardHeader = styled.div`
  color: ${props => (props.isAvailable ? grayColor : disableColor)};
  font-size: 16px;
`;
export const CardHeaderFakeHOC = styled.div`
  color: ${hoverColor};
  font-size: 16px;
`;

export const CardTitle = styled.div`
  color: ${props => (props.isAvailable ? blackColor : disableColor)};
  font-size: 48px;
  font-weight: 700;
  margin-top: 6px;
`;
export const CardDishName = styled.div`
  color: ${props => (props.isAvailable ? blackColor : disableColor)};
  font-size: 24px;
  font-weight: 700;
`;
export const CardPortion = styled.div`
  color: ${props => (props.isAvailable ? grayColor : disableColor)};
  font-size: 14px;
  line-height: 16px;
  margin-top: 14px;
`;

export const CardPortionGift = styled.div`
  color: ${props => (props.isAvailable ? grayColor : disableColor)};
  font-size: 14px;
  line-height: 16px;
  max-width: 140px;
`;
