import styled from 'styled-components';
import { errorMss } from './Animations';

export const SInput = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid ${( { error, theme } ) => error ? theme.colors.red : "rgba(128, 128, 128, 0.37)"};
    box-shadow: ${( { theme } ) => theme.shadows.main};
    padding: .7rem;
    outline: 0;
    font-size: 1.2rem;
    font-weight: 200;
    position: relative;
    font-weight: 200;
    overflow: hidden;

    &::placeholder {
        color: rgba(128, 128, 128, 0.637);
        font-size: 1rem;
    }

    &:focus {
        box-shadow: ${( { theme } ) => theme.shadows.inputMain};
    }
`;


export const SError = styled.span`
    color: ${( { theme } ) => theme.colors.red};
    font-weight: 600;
    font-size: .7rem;
    text-transform: capitalize;
    width: 100%;
    position: absolute;
    top: 100%;
    animation-name: ${errorMss};
    animation-duration: .4s;
    inline-size: auto; 
`;

export const SInputContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    position: relative;
`;