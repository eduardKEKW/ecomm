import styled from 'styled-components';
import { closeRight, fadeLeft, fadeRight } from './Animations';

export const SNotification = styled.div`
    position: fixed;
    top: 10vh;
    left: 100%;
    overflow: hidden;
    transform: translateX(-100%);
    padding: .5rem 1.5rem;
    display: flex;
    flex-direction: column;
    max-height: 20vw;
    z-index: 9;
`;

export const SSnackBar = styled.div`
    animation-name: ${({ close }) => close ? closeRight : fadeRight};
    animation-fill-mode: both;
    animation-duration: ${({ theme }) => theme.animationDuration.notification + 'ms'};
    width: 20rem;
    max-height: 4rem;
    height: 4rem;
    margin-top: 1rem;

    & > div {
        background: white;
        position: relative;
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.colors.grey};;
        gap: .5rem;

        &:after {
            content: "";
            position: absolute;
            border-radius: inherit;
            width: inherit;
            height: inherit;
            top: 3%;
            left: .5%;
            background: ${({ theme }) => theme.colors.black};
            z-index: -1;
        }

        & > i {
            flex: 3;
            height: 100%;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #2d3b3e;
            color: white;
        }
    }
`

export const SSnackBarBody = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: .5rem;

    & > p:nth-child(1) {
        margin: 0;
        font-size: .9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }

    & > p:nth-child(2) {
        margin: 0;
        font-size: .8rem;   
        font-weight: 400;
    }
`

export const SSnackBarClose = styled.aside`
    flex: 1;
    padding: .5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
`