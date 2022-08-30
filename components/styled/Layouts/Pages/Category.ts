import { outline } from 'components/styled/Helpers';
import { breakpoints } from 'components/styled/Media';
import styled from 'styled-components';

export const Layout = styled.main`
    width: max(60%,  ${breakpoints.lg});
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 15% 85%;
    padding: 1rem 0rem;
    height: 100%;
    grid-template-areas:
      "title    title"
      "side     main"
      "side     main"
      ".        main";
`

export const SSide = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    position: relative;
    height: 100%;
`;

export const SSideContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 0;
`

export const SSideItem = styled.div`
    background: white;
    position: relative;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    border: solid 1px ${({ theme }) => theme.colors.black};

    &:after {
        ${outline({
            top: '.5rem',
            left: '.5rem'
        })}
    }

    & > div:first-child {
        flex: 1;
        padding-bottom: .5rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
        font-size: 1.2rem;
        min-height: 30%;
        text-decoration: underline;
    }

    & > ul {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        height: 70%;
        max-height: 15rem;
        height: 100%;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: .3rem;
            background: ${({ theme }) => theme.colors.darkBlue};
        }

        li {
            display: flex;

            input {
                flex: 1;
                margin: 0;
            }

            span, div {
                flex: 5;
                padding-left: .3rem;
            }
        }
    }
`

export const SCheckbox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 100%;
`

export const SMain = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 0rem 2rem 0rem .5rem;
`;