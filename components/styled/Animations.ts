import styled, { keyframes } from 'styled-components';

export const fadeLeft = keyframes`
    0% {
        transform: translateX(-15%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
        pointer-events: all;
    }
`;

export const closeRight = keyframes`
    0% {
        opacity: 1;
        pointer-events: none;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
    }
`;

export const popUp = keyframes`
    0% {
        transform: translateX(-80%) translateY(-20%) scale(1.2);
    }
    50% {
        transform: translateX(-80%) translateY(-20%) scale(.8);
    }
    100% {
        transform: translateX(-80%) translateY(-20%) scale(1);
    }
`;