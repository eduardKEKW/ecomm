import styled from 'styled-components';
import { popUp } from '../Animations';

export const SProductCard = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: .5rem;
    padding: .5rem;
    box-shadow: ${({ theme }) => theme.shadows.container};
    margin-bottom: 1.5rem;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.main};
    }
`;

export const SProductCardHeader = styled.div`
    flex: 2;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;

    & > div {
        width: 100%;
        position: relative;
        max-width: 100%;

        & > div {
            min-height: 100%;
        }
    }

    img {
        border-radius: .5rem;
        max-height: 5rem;
    }

    & > #favorite {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background-color: white;
        border-radius: 50%;
        top: 0%;
        z-index: 999;
        left: 100%;
        animation-name: ${({ animate }) => animate ? popUp : ""};
        animation-fill-mode: both;
        animation-duration: .3s;
        cursor: pointer;
        transform: translateX(-80%) translateY(-20%);

        i {
            color: ${({ theme }) => theme.colors.darkBlue};
        }

        & > &:hover {
            color: ${({ theme }) => theme.colors.main};
        }
    }

    & > #header {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.background};
        top: -7%;
        padding: .3rem;
        left: 50%;
        width: 8rem;
        height: 1rem;
        transform: translateX(-50%);
        font-size: .5rem;
        z-index: 99;
        text-align: center;
        text-transform: uppercase;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        box-shadow: inset 0px -3px 5px 0px rgba(0,0,0,0.1);
    }

    & > #stoc {
        position: absolute;
        top: 0%;
        width: 4rem;
        font-size: .5rem;
        height: 1rem;
        z-index: 99;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        box-shadow: ${({ theme }) => theme.shadows.container};
        color: white;
        background: ${({ theme }) => theme.colors.main};
        padding: .2rem;
        border-radius: .5rem;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
    }
`;

export const SProductCardBody = styled.div`
    flex: 3;
    padding: 0rem 0rem;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    & > a {
        flex: 4;
    }

    & > a > #name {
        font-weight: bold;
        font-size: .9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }

    & > #category {
        font-size: .7rem;
        flex: 2;
        text-transform: uppercase;

        a:hover {
            text-decoration: underline;
        }
    }

    & > #rating {
        font-size: .75rem;
        flex: 2;
    }

    & > #colors {
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 5;

        & > span {
            text-transform: uppercase;
            font-size: .7rem;
            color: black;
            font-weight: 400;
            flex: 1;
        }

        & > div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 2 ;
            gap: .3rem;

            & > div {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .2rem;
                border-radius: 50%;
                cursor: pointer;
                width: 1.5rem;
                height: 1.5rem;

                & > div {
                    box-shadow: ${({ theme }) => theme.shadows.lower};
                    width: .8rem;
                    height: .8rem;
                    border-radius: 50%;
                }
            }
        }
    }

    & > #price {
        position: absolute;
        top: 64%;
        min-height: 50px;
        transform: translateX(-87%);
        left: 100%;
        width: 7rem;
        box-shadow: ${({ theme }) => theme.shadows.containerInner};
        background: ${({ theme }) => theme.colors.main};
        border-radius: .35rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > #add {
        flex: 2;
        /* border: solid 1px red; */
    }
`;