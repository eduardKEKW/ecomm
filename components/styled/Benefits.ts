import styled from 'styled-components';
import { outline } from './Helpers';

export const STitledSection = styled.section`
    grid-area: ${({ gridArea }) => gridArea};
    border: solid 2px ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.background};
    margin: 3rem 0rem;
    position: relative;
    width: 100%;

    &:after {
        ${outline({
            top: "10%",
            left: "1%"
        })}
    }

    &:before {
        content: "${({ name }) => name}";
        line-height: 0rem;
        width: 10rem;
        height: 2rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: ${({ theme }) => theme.colors.background};
        text-align: center;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.black};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 1.5rem;
    }
`;

export const SBenefits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 7rem;

    ul {
        width: 100%;
        height: 100%;
        display: flex;

        li {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    }

    & > div {
        width: 10rem;
        height: 2rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: ${({ theme }) => theme.colors.background};

        span {
            display: block;
            width: inherit;
            height: 50%;
            text-align: center;
            font-weight: 400;
            font-size: 1.5rem;
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.black};
        }
    }
`;

export const SBenefitsItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-direction: row;
    z-index: 1;

    i {
        background: ${({ theme }) => theme.colors.main};
        color: white;
        font-size: 1.5rem;
        height: 2.5rem; 
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border: solid 2px ${({ theme }) => theme.colors.black};
        border-right: none;
    }


    p {
        color: black;
        pointer-events: none;
        font-size: 1.2rem;
        background: white;
        border: solid 2px ${({ theme }) => theme.colors.black};
        border-left: none;
        padding: .3rem;
        margin: 0px;
    }

    &:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: .3rem;
        left: .6rem;
        background: ${({ theme }) => theme.colors.black};
        z-index: -1;
        transform: scale(.95);
    }
`;