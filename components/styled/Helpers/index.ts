import styled, { css } from 'styled-components';

export const ribbone = () => {
    return css`
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0px;
        border-left: 5px solid transparent;
        border-right: 5px solid ${({ theme }) => theme.colors.black};
        border-top: 5px solid ${({ theme }) => theme.colors.black};
        border-bottom: 5px solid transparent;
    `;
}

export const outline = (
    {
        top,
        left 
    } : { top?: string, left?: string } = {
        top: "12%",
        left: "4%"
    }) => {
    return css`
        content: "";
        position: absolute;
        top: ${top};
        left: ${left};
        background: ${({ theme }) => theme.colors.black};
        box-shadow: ${({ theme }) => theme.shadows.main};
        z-index: -1;
        width: 100%;
        height: 100%;
    `;
}