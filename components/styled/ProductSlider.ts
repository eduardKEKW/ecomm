import styled from 'styled-components';

export const SProductSlider = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    margin-top: 3rem;
    
    & > div {
        & > div {
            padding: .5rem 0rem;
        }
    }
`;
