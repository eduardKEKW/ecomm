import { css } from 'styled-components';

export const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1300px'
  };

export const media: any = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);