import styled, { css } from 'styled-components';
import { fadeLeft } from './Animations';

const createClasses = () => {
    const classes = new Array(10).fill(null).map((_, index) => `
        #row-${index} {
            grid-row: span ${index} / auto;
        }
    `).join('');

    return css`${classes}`;
}

export const SCategories = styled.div`
    display: flex;
    position: absolute;
    color: ${({ theme }) => theme.colors.grey};
    top: 100%;
    left: 0;
    animation: ${fadeLeft} .3s both;
    min-height: 25rem;
    border-right: solid 1rem transparent;
    z-index: 9999;

    & > ul {
        position: relative;
        box-shadow: ${({ theme }) => theme.shadows.container};
        width: 13rem;
        padding: .35rem .7rem;
        font-size: .9rem;
        background: ${({ theme }) => theme.colors.white};
        
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: .7rem 0rem;
            transition: padding .3s ease;

            & > span:last-child {
                display: flex;
                justify-content: center;
                align-items: center;
                transition: transform .3s ease, opacity .3s ease;
                transform: translateX(1rem);
                opacity: 0;

                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    height: 1.2rem;
                    font-size: .65rem;
                    margin-left: .3rem;
                    width: 1.2rem;
                    background: ${({ theme }) => theme.colors.white};
                    color: ${({ theme }) => theme.colors.main};

                    box-shadow: ${({ theme }) => theme.shadows.main};
                }   
            }
        }
    }

    #selected {
        border-left: 2px solid ${({ theme }) => theme.colors.main};
        padding-left: .3rem;

        & > span:last-child {
            transform: translateX(0rem);
            opacity: 1;
        }
    }

`;

export const SMenu = styled.div`
    position: absolute;
    top: 0%;
    left: 14rem;
    min-width: 60rem;
    width: 57.8vw;
    height: 25rem;
    background: white;
    box-shadow: ${({ theme }) => theme.shadows.container};
    animation: ${fadeLeft} .3s both;
    z-index: 999999;

    & > ul {
        height: 25rem;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-auto-rows: 1.5rem;
        gap: .5rem;
        padding: 1rem;
        max-height: 25rem;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: none;

        & > li {

            span {
                color: black;
            }

            ul {
                margin-top: .5rem;
                font-size: .9rem;

                li {
                    padding: .2rem 0;
                }
            }

            a:hover {
                text-decoration: underline;
            }
        }
    }
    
    ${createClasses()}
`;