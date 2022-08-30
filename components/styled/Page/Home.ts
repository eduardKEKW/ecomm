import styled from 'styled-components';
import { breakpoints, media } from '../Media';

export const Grid = styled.main`
    width: max(60%,  ${breakpoints.lg});
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "main-carousel main-carousel main-carousel main-carousel main-carousel"
      "benefits      benefits      benefits       benefits     benefits"
      "slider        slider        slider         slider       slider"
      "subscribe     subscribe     subscribe      subscribe    subscribe";
`

export const SActions = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
`;

export const SSliders = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;