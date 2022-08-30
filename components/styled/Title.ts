import styled from 'styled-components';

export const STitle = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;

    & > h3 , & > a > h3 {
        font-size: 1.7rem;
        margin: 0rem;
        padding: 0rem;
        color: black;
        margin-left: -.1rem;
        line-height: 2rem;
    }

    & > p {
        line-height: 2rem;
        font-size: .9rem;
        padding: 0rem;
        margin: 0rem;
        width: 100%;
        position: relative;
        display:flex;
        flex: 1;
        color:  ${({ theme }) => theme.colors.black};
        align-items: center;    
        text-transform: uppercase;
    }

    & > div {
        width: 100%;
        position: relative;
        display:flex;
        align-items: center;
        flex: 1;

        & > a > h2, & > h2 {
            color: ${({ theme }) => theme.colors.black};
            margin: 0;
            position: relative;
            color: white;
            padding: .3rem;
            text-decoration: underline;
            background: ${({ theme }) => theme.colors.black};
            z-index: 1;
        }

        & > a > h2{
            &:after {
                content: "";
                position: absolute;
                height: 100%;
                width: 0%;
                top: 0%;
                left: 0%;
                background: ${({ theme }) => theme.colors.yellow};
                z-index: -1;
                transition: width .2s ease-in-out;
            }

            &:hover {
                color: ${({ theme }) => theme.colors.black};

                &:after {
                    width: 100%;
                }
            }
        }

        & > a, & > h2 {
            z-index: 2;
        }
    }
`;

export const STitleReverse = styled(STitle)`
    & > div {
        & > a > h2, & > h2 {
            color: ${({ theme }) => theme.colors.black};
            background: transparent;
            text-decoration: none;
        }
    }
`