import styled from 'styled-components';

export const SRating = styled.div`
    & > span {
        position: relative;
        padding: .22em .3em;
        border-radius: .3em;
        font-size: .8em;
        color: white;
        font-weight: 100;   

        i {
            font-size: .55em;
        }
    }

    #off {
        background: ${({ theme }) => theme.colors.red};
    }

    #new {
        background: ${({ theme }) => theme.colors.main};
    }

    #stoc {
        background-color: green;
    }

    & > div {
        position: relative;
        padding: 0em .5em;
        border-radius: .3em;
        font-size: 1em;
        font-weight: 100;
        display: inline-block;

        & > a {
            border-bottom: 1px dotted #000;
        }
    }
`