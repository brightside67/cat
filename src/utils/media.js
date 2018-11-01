import { css } from "styled-components";

export const media = {
  tablet: (...args) => css`
    @media (max-width: 1220px) {
      ${css(...args)};
    }
  `
};
