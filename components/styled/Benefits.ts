import styled from 'styled-components';

export const SBenefits = styled.section`
    background: white;
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;

        li {
            position: relative;
        }
    }
`;

export const SBenefitsItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 10rem;
    z-index: 1;
    i {
        background: ${({ theme }) => theme.gradient.main};
        border-radius: 50%;
        color: white;
        font-size: 2rem;
        height: 4rem;
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            border-radius: 50%;
            height: 4rem;
            width: 4rem;
            top: 5%;
            left: 5%;
            background: black;
            z-index: -1;
            transform: scale(.95);
        }
    }


    p {
        padding: .7rem;
        color: black;
        pointer-events: none;
    }
`;
