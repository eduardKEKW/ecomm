import styled from 'styled-components';

export const SSubscribe = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 3rem;

    & > form {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center ;

        & > div:first-child {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            & > div:nth-child(1) {
                flex: 3;
            }

            & > div:nth-child(2) {
                flex: 1;
            }

            input {
                border-radius: 0rem;
                height: 3rem;
                border: 1px solid ${({ theme }) => theme.colors.black};
                border-right: none;
            }

            #subscribe {
                width: 100%;
                height: 3rem;
                border-left: none;
            }
        }

        & > div:last-child {
            margin-top: .5rem;
            display: ${({ subscribed }) => subscribed ? 'none' : 'flex'};
            align-items: center;
            flex: 1;

            & > div > span {
                margin-left: .4rem;
            }

            input {
                height: 1rem;
                width: 1rem;
                outline: 1px solid ${({ theme }) => theme.colors.black};
                border: none;
            }
        }
        
    }

    & > div {
        flex: 1;
        display: flex;
        margin: 0;
        height: 100%;
    }
`;
