import styled from 'styled-components';

export const SReviews = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.lowGrey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lowGrey};
`;

export const STotal = styled.div`
    flex: 2;
    display: flex;
    align-items: flex-start;
    
    & > div {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > span:nth-child(1) {
            font-size: 4rem;
            font-weight: 400;
            position: relative;
            
            &::after {
                content: "/ 5.00";
                transform: translateY(-100%);
                width: 3rem;
                padding: .8rem 0rem;
                position: absolute;
                top: 100%;
                left: 100%;
                font-size: 1rem;
                font-weight: 200;
            }
        }

        & > span:nth-child(3) {
            padding: .3rem;
            font-size: .8rem;
        }
    }
`

export const SDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem;
    gap: .5rem;
    color: ${({ theme }) => theme.colors.main};
`

export const SDetailsItem = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    font-weight: 200;
    font-size: 0.9rem;

    & > span {
        flex: 1;
        text-align: center;
    }

    & > div {
        flex: 3;
    }
`

export const SRating = styled.div`
    display: flex;
`;

export const SProgress = styled.div`
    width: 100%;
    height: 1rem;
    position: relative;
    background: ${({ theme }) => '#e9ecef'};
    font-size: .65rem;
    font-weight: 200;

    &:after {
        content: "${({ count, progress }) => !! progress && `${count} R`}";
        width: ${({ progress }) => `${! progress ? 0 : Math.max(progress || 0, 5)}%`};
        box-shadow: ${({ theme }) => theme.shadows.btn};
        background: ${({ color }) => color};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: absolute;
        color: white;
    }

    &:before {
        content: "";
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        position: absolute;
        color: grey;
    }
`;