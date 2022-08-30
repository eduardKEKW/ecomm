import styled from 'styled-components';

export const SRating = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

export const STags = styled.div`
    position: relative;
    padding: 0em .5em;
    border-radius: .3em;
    font-size: 1em;
    font-weight: 100;
    display: inline-block;

    & > a {
        border-bottom: 1px dotted #000;
    }
`

export const STagItem = styled.div`
    display: inline-block;
    position: relative;
    top: -1px;
    margin-left: .3rem;
    background: ${({ color }) => color};
    box-shadow: ${({ theme }) => theme.shadows.red};
    color: white;
    font-size: .65rem;
    padding: .05rem .35rem;
`

export const SStars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`