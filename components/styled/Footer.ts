import styled from 'styled-components';

export const SFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background: ${({ theme }) => 
        `linear-gradient(90deg, ${theme.colors.background} 8px, transparent 1%) center, linear-gradient(${theme.colors.background} 8px, transparent 1%) center, black`
    };
    background-size: 10px 10px;

    a:hover {
        text-decoration: underline;
    }
`;

export const SNavigation = styled.section`
    width: 70%;
    height: 15rem;
    z-index: 1;
`;


export const SNavigationContent = styled.div`
    border: solid 5px ${({ theme }) => theme.colors.main};
    display: flex;
    flex-direction: row;
    background: white;
    position: relative;
    padding: 2rem;
    width: 100%;
    height: 100%;

    & > div {
        width: 12rem;
        height: 2.5rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: white;

        span {
            display: block;
            width: inherit;
            height: 50%;
            background: transparent;
            text-align: center;
            font-weight: 400;
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.black};
            text-decoration: underline;
        }
    }

    &:after {
        content: "";
        z-index: -1;
        display: block;
        position: absolute;
        width: inherit;
        height: inherit;
        top: 1.5rem;
        left: 1.5rem;
        background: ${({ theme }) => theme.colors.main};
        box-shadow: ${({ theme }) => theme.shadows.container};
    }
`;

export const SItem = styled.ul`
    /* padding-top: 2rem; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    /* background: white; */
    /* z-index: 2; */
    /* border-top: solid 6px ${({ theme }) => theme.colors.main}; */
    /* border: solid 1px blue; */

    & > li:first-child {
        text-decoration:underline;
        text-decoration-style: dotted;
        pointer-events: none;
        /* box-shadow: ${({ theme }) => theme.shadows.main}; */
        width: 100%;
        font-size: 1.3rem;
        font-weight: 600;
        /* padding: .5rem 0rem; */
        /* margin-bottom: 1rem; */
        /* background: ${({ theme }) => theme.colors.main}; */
        color: ${({ theme }) => theme.colors.black};
        border: none;
    }

    li {
        /* box-shadow: ${({ theme }) => theme.shadows.container}; */
        display: inline-block;
        text-align: center;
        /* background: white; */
        padding: .4rem 0rem;
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const SSocial = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;

    & > i {
        font-size: 2rem;
        margin-right: 1rem;
        background: white;
        padding: 0rem .5rem;
        color: ${({ theme }) => theme.colors.main};
        margin-top: 1rem;
    }
`;