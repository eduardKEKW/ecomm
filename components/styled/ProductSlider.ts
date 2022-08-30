import styled from 'styled-components';

export const SProductSlider = styled.div`
    width: 100%;
    margin-top: 3rem;
    grid-area: ${({ gridArea }) => gridArea};
    
    & > div {
        & > div {
            padding: .5rem 0rem;
        }
    }
`;
