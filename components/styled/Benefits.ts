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
        box-shadow: ${({ theme }) => theme.shadows.main};
    }


    p {
        padding: .7rem;
        color: black;
        font-size: .9rem;
        pointer-events: none;
    }
`;
