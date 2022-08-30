import styled from 'styled-components';

export const SMain = styled.div`
    position: relative;
    display: flex;
    box-shadow: ${({ theme }) => theme.shadows.main};
    font-size: .9rem;
    cursor: pointer;
    border: ${({ theme, reverse }) => reverse && `solid 1px ${theme.colors.main}`};
    border-left: ${({ border }) => border && `solid .5em ${border}`};
    background: ${({ reverse, theme }) => reverse ? 'white' : theme.colors.main};
    color: ${({ reverse, theme }) => reverse ? theme.colors.main : 'white'};
    pointer-events: ${({ disable }) => disable ? 'none' : 'inherit'};
    opacity: ${({ disable }) => disable ? .6 : 1};
    transition: .2s background ease, .2s color ease;
    border-radius: ${({ rounded }) => rounded && '.4rem'};
    padding: .2rem;
    box-shadow: ${({ theme }) => theme.shadows.btn};
    border: solid 1px ${({ theme }) => theme.colors.black};

    &:hover {
        background: ${({ reverse, theme }) => reverse ? theme.colors.main : theme.colors.white};
        color: ${({ reverse, theme }) => reverse ? theme.colors.white : theme.colors.main };
    }
`

export const SButton = styled.button`
    flex: 6;
    cursor: pointer;
    display: block;
    outline: none;
    border: none;
    width: 100%;
    min-height: 2em;
    font-size: 1.2em;
    text-align: center;
    transition: background .2s ease;
    margin-left:  ${({ icon }) => icon ? "-15%" : "0%"};;
    color: inherit;
    background: transparent;
    padding-right: ${({ disable }) => disable && "0rem"};

    &:disabled {
        pointer-events: none;
    }
`

export const SIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    flex: 2;
    /* z-index: 1;  */

    & > i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 1.4em;
        color: inherit;
    }
`