import styled, { keyframes } from 'styled-components';

export const fadeLeft = keyframes`
    0% {
        transform: translateX(-15%);
        opacity: 0;
        z-index: 1;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
        pointer-events: all;
        z-index: 1;
    }
`;

export const fadeDown = keyframes`
    0% {
        transform: translateY(-15%);
        opacity: 0;
        z-index: 1;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
        pointer-events: all;
        z-index: 1;
    }
`;

export const fadeRight = keyframes`
    0% {
        transform: translateX(15%);
        opacity: 0;
        z-index: 1;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
        z-index: 1;
        pointer-events: all;
    }
`;

export const closeRight = keyframes`
    0% {
        opacity: 1;
        pointer-events: none;
    }
    50% {
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
    }
    100% {
        transform: translateX(100%);
        max-height: 0;
        margin-top: 0;
        opacity: 0;
    }
`;

export const popUp = keyframes`
    0% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(.8);
    }
    100% {
        transform: scale(1);
    }
`;

export const errorMss = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const card = keyframes`
    0% {
        transform: scaleX(0.5);
        opacity: 0;
    }
    100% {
        transform: scaleX(1);
        opacity: 1;
    }
`