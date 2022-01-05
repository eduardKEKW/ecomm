import styled from 'styled-components';

export const Grid = styled.main`
    // width: 100%;
    // max-width: 84rem;
    // position: relative;
    width: 70%;
    min-width: 85rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "main-carousel main-carousel main-carousel main-carousel main-carousel"
      "benefits      benefits      benefits       benefits     benefits"
      "slider-1      slider-1      slider-1       slider-1     slider-1"
      "slider-2      slider-2      slider-2       slider-2     slider-2"
      "slider-3      slider-3      slider-3       slider-3     slider-3"
      "slider-4      slider-4      slider-4       slider-4     slider-4"
      "slider-5      slider-5      slider-5       slider-5     slider-5"
      "subscribe     subscribe     subscribe      subscribe    subscribe";
`

export const SActions = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
`;