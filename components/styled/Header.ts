import styled, { css } from 'styled-components';
import { fadeDown, fadeLeft } from './Animations';
import { breakpoints, media } from './Media';

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
    animation: ${fadeDown} .2s both;
    min-height: 25rem;
    min-width: ${({ selectedCategory }) => selectedCategory ? '100%' : 'auto'};
    z-index: 9999;
    opacity: 0;
    font-weight: 400;

    & > ul {
        border: solid 1px ${({ theme }) => theme.colors.black};
        border-top: none;
        border-right: ${({ selectedCategory }) => selectedCategory ? 'none' : 'auto'};
        position: relative;
        min-width: 11rem; 
        width: 11rem;
        padding: .35rem .7rem;
        font-size: 1rem;
        background: ${({ theme }) => theme.colors.white};
        color: black;
        z-index: 1;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: .4rem 0rem;

            &:first-child {
                margin-top: .7rem;
            }

            & > span:first-child {
                flex: 1;
                padding-left: .4rem;
                display: flex;
                justify-content: flex-start;
                z-index: 1;

                i {
                    height: 1.5rem;
                    width: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: white;
                    border: solid 1px ${({ theme }) => theme.colors.black};
                    font-style: normal;

                    &:after {
                        content: "";
                        position: absolute;
                        height: inherit;
                        width: inherit;
                        top: .15rem;
                        left: .15rem;
                        background: ${({ theme }) => theme.colors.black};
                        z-index: -1;
                    }
                }            
            }

            & > span:last-child {
                flex: 3;
                padding: 0rem .3rem;
            }

            &:after {
                content: "";
                position: absolute;
                top: 0%;
                left: 0%;
                width: 0%;
                height: 100%;
                background: ${({ theme }) => theme.colors.yellow};
                transition: width .2s ease-in-out;
                z-index: -1;
            }
        }
    }

    #selected {
        &:after {
            width: 100%;
        }
    }

    &:after {
        content: "";
        position: absolute;
        top: .2rem;
        left: .2rem;
        height: 100%;
        width: 100%;
        background: white;
        border: solid 1px ${({ theme }) => theme.colors.black};
        z-index: -1;
    }

    &:before {
        content: "";
        position: absolute;
        top: .4rem;
        left: .4rem;
        height: 100%;
        width: 100%;
        background: white;
        border: solid 1px ${({ theme }) => theme.colors.black};
        box-shadow: ${({ theme }) => theme.shadows.container};
        z-index: -1;
    }

`;

export const SCategoryItem = styled.li`
    cursor: pointer;
`

export const SMenu = styled.div`
    min-width: calc(100% - 11rem);
    background: white;
    border: solid 1px ${({ theme }) => theme.colors.black};
    border-left: none;
    animation: ${fadeLeft} .2s both;
    z-index: 99;
    
    /* width: max(60%,  ${breakpoints.lg}); */

    
    ${media.lg`
        /* background: black; */
        min-width: calc(${breakpoints.lg} - 11rem);
    `}

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

            a:hover, a:focus {
                text-decoration: underline;
            }
        }
    }
    
    ${createClasses()}
`;