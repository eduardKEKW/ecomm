import styled from 'styled-components';

export const SBreadcrumbs = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    align-items: center;
`

export const SItem = styled.div`
    & > a {
        text-transform: capitalize;
        font-size: .8rem;
        color: #0082e6;

        &:hover {
            text-decoration: underline
        }
    }

    &:after {
        content: "/";
        margin: 0rem 1rem;
        font-size: .75rem;
        color: grey;
        
        &::hover {
            text-decoration: none
        }
    }

    &:nth-last-child(2):after {
        content: "|";
        position: relative;
        top: -1px;
    }

    &:nth-last-child(1):after {
        content: "";
    }

    &:last-child {
        & > a {
            color: grey;
        }
    }
`