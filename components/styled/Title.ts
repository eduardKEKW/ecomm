import styled from 'styled-components';

export const STitle = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    margin-bottom: 2rem;
    text-transform: uppercase;
    position: relative;

    & > h3 , & > a > h3 {
        font-size: 1.7rem;
        margin: 0rem;
        padding: 0rem;
        color: black;
        margin-left: -.1rem;
        line-height: 2.3rem;
    }

    & > p {
        line-height: 2rem;
        font-size: .7rem;
        padding: 0rem;
        margin: 0rem;
    }

    &::after {
        content: "";
        display: ${({ showAfter }) => showAfter ? "block" : "none"};
        position: absolute;
        top: calc(100% + .5rem);
        left: 0%;
        width: 1.5rem;
        padding: .1rem;
        background-color: ${({ theme }) => theme.colors.main};
    }
`;