import styled from 'styled-components';

export const SSuggestionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: ${({ show }) => show ? "100%" : "0%"};
    overflow: ${({ show }) => show ? "visible" : "hidden"};
    position: absolute;
    top: 100%;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.main};
    border: solid 2px ${({ theme, show }) => show ? theme.colors.black : "none"};
    border-top: none;

    &:after {
        content: "";
        position: absolute;
        top: .4rem;
        left: .4rem;
        width: 100%;
        height: calc(100% + 2.5rem);
        transform: translateY(-2.5rem);
        background: ${({ theme }) => theme.colors.white};
        border: solid 2px ${({ theme }) => theme.colors.black};
        z-index: -1;
    }

    &:before {
        content: "";
        position: absolute;
        top: .7rem;
        left: .7rem;
        width: 100%;
        height: calc(100% + 2.5rem);
        transform: translateY(-2.5rem);
        background: ${({ theme }) => theme.colors.white};
        border: solid 2px ${({ theme }) => theme.colors.black};
        z-index: -1;
    }
`