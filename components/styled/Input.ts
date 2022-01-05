import styled from 'styled-components';

export const SInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: .3rem;
    border: 1px solid ${( { error, theme } ) => error ? theme.colors.red : "rgba(128, 128, 128, 0.37)"};
    padding: .7rem;
    outline: 0;
    box-shadow: ${( { theme } ) => theme.shadows.inputDefault};
    font-size: 1.2rem;
    font-weight: 200;
    position: relative;
    font-weight: 200;
    border-radius: .5rem;
    overflow: hidden;

    &::placeholder {
        color: rgba(128, 128, 128, 0.637);
        font-size: 1rem;
    }

    &:focus {
        /* box-shadow: ${( { theme } ) => theme.shadows.inputMain}; */
    }
`;


export const SError = styled.span`
    color: ${( { theme } ) => theme.colors.red};
    font-weight: 600;
    font-size: .8rem;
    text-transform: capitalize;
    margin: .3rem 0rem;
    width: 100%;
`;

export const SInputContainer = styled.div`
    display: flex;
    flex-flow: wrap;
`;