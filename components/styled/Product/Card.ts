import styled from 'styled-components';
import { popUp } from '../Animations';
import { outline, ribbone } from '../Helpers';

export const SProductCard = styled.div`
    background: ${({ theme }) => theme.colors.yellow};
    box-shadow: ${({ theme }) => theme.shadows.container};
`;

export const SProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: .5rem;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .2s ease-in-out;

    &:hover {
        transform: translateX(.5rem) translateY(-.5rem);
    }
`

export const SProductCardHeader = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
    z-index: 1;

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

    & > .favorite {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0%;
        left: 100%;
        transform: translateX(-100%);
        z-index: 999;
        width: 2rem;
        height: 2rem;
        background: white;
        border-radius: 50%;
        cursor: pointer;

        i {
            color: ${({ theme }) => theme.colors.black};
            animation-name: ${({ animate }) => animate ? popUp : ""};
            animation-fill-mode: both;
            animation-duration: .3s;
        }

        & > &:hover {
            color: ${({ theme }) => theme.colors.main};
        }
    }
`;

export const STags = styled.div`
    display: flex;
    position: absolute;
    top: 5%;
    left: -5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
    color: white;
    z-index: 9;
`
const STag = styled.div`
    width: 4rem;
    font-size: .7rem;
    padding: .2rem;
    text-align: center;
    background: ${({ color }) => color};
    color: white;
    font-size: .75rem;
`

export const STagRibboneAndOutline = styled(STag)`
    position: relative;

    &:after {
        ${outline()}
    }

    &:before {
        ${ribbone()}
    }
`;

export const SProductCardBody = styled.div`
    flex: 3;
    padding: 0rem 0rem;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 1;

    & > a {
        flex: 3;
        display: flex;
        align-items: center;
        
        & > .name {
            font-weight: bold;
            font-size: .9rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.black};
        }
    }

    & > .category {
        font-size: .7rem;
        flex: 2;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        a:hover {
            text-decoration: underline;
        }
    }

    & > .rating {
        font-size: .75rem;
        flex: 2;
    }

    & > .info {
        flex: 4;   

        & > .info_container {
            cursor: pointer;
            width: 80%;
            pointer-events: ${({ disable }) => disable ? 'none' : 'all'};
            position: absolute;
            left: 27%;
            display: flex;

            &:after {
                ${outline()}
            }
            
            & > .add_to_cart {
                position: relative;
                min-height: 50px;
                flex: 1;
                box-shadow: ${({ theme }) => theme.shadows.main};
                background: ${({ theme }) => theme.colors.secondary};
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-right: 1rem;
                font-size: 1rem;
            }

            & > .product_price {
                position: relative;
                margin-left: -1rem;
                min-height: 50px;
                flex: 2;
                box-shadow: ${({ theme }) => theme.shadows.containerInner};
                background: ${({ theme }) => theme.colors.main};
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;