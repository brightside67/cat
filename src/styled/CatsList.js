import styled from "styled-components";
import { media } from "../utils/media";

export const CatsListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  padding: 94px 2em;
  ${media.tablet`
    flex-wrap: wrap;
    justify-content: center;
  `};
`;
