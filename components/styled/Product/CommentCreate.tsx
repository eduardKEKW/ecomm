import styled from 'styled-components'

export const SCreate = styled.div`
    width: 100%;
    border-bottom: ${({ theme, border }) => border == "bottom" && `1px solid ${theme.colors.lowGrey}`};
    border-top: ${({ theme, border }) => border == "top" && `1px solid ${theme.colors.lowGrey}`};
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`