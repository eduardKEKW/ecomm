import styled from 'styled-components';
import { closeRight, fadeLeft } from './Animations';

export const SNotification = styled.div`
    position: fixed;
    top: 13vh;
    z-index: 999999;
    left: 100%;
    overflow: hidden;
    transform: translateX(-100%);
    padding: .5rem 1.5rem;
    display: flex;
    flex-direction: column;
    max-height: 50vw;
    gap: 1rem;
`;

export const SItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 4rem;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.main};
    box-shadow: ${({ theme }) => theme.shadows.container};
    background: white;
    color: ${({ theme }) => theme.colors.grey};;
    gap: 1rem;
    animation-name: ${({ close }) => close ? closeRight : fadeLeft};
    animation-fill-mode: both;
    animation-duration: .4s;
    border-left: solid .5rem ${({ status, theme }) => status ? theme.colors.main : theme.colors.red};

    & > i {
        color: ${({ theme }) => theme.colors.main};
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
`

export const SItemBody = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    
    & > p:nth-child(1) {
        flex: 1;
        margin: 0;
        letter-spacing: .12rem;
    }

    & > p:nth-child(2) {
        margin: 0;
        flex: 4;
        font-size: .8rem;   
        font-weight: 400;
    }
`

export const SItemClose = styled.aside`
    position: absolute;
    top: 0%;
    left: 100%;
    padding: .2rem;
    transform: translateX(-140%);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.main};
`