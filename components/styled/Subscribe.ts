import styled from 'styled-components';

export const SSubscribe = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: white;
    margin-top: 3rem;

    & > form {
        flex: 3;
        height: 100%;
        display: flex;
        flex-direction: column;

        & > div:first-child {
            margin-top: 1.5rem;
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;

            & > div:nth-child(1) {
                flex: 3;
            }

            & > div:nth-child(2) {
                flex: 1;
            }
        }

        & > div:last-child {
            flex: 1;
            display: flex;
            align-items: center;

            span:first-child {
                margin-left: .4rem;
            }
        }
        
    }

    & > h3 {
        flex: 3;
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 3rem;
    }
`;
