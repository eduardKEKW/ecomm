import styled from 'styled-components';

export const SResource = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
`
export const SOptions = styled.div` 
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${props => props.theme.colors.lowGrey};

    & > span:first-child {
        flex: 2;
        display: flex;
        justify-content: space-between;
    }

    & > span:last-child {
        flex: 5;
        display: flex;
        justify-content: flex-end;
    }
`

export const SEmpty = styled.div`
`

export const SContent = styled.div`
    position: relative;
    width: 100%;
    min-height: ${props => `${props.minHeight}rem`};
    position: relative;

    &::before {
        display: ${props => props.empty ? 'block' : 'none'};
        content: 'No Comments Yet!';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
`

export const SPage = styled.ul`
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .7rem;
    border-bottom: solid 1px ${props => props.theme.colors.lowGrey};
    position: relative;
    
    &::before {
        content: '${props => `Total - ${props.total}`}';
        position: absolute;
        left: 0%;
        top: 50%;
        transform: translateY(-50%);
        font-size: .8rem;
        font-weight: 400;
    }
`

export const SPageItem = styled.li`
    a {
        padding: .5rem .7rem;
        background: white;
        font-size: .8rem;
        font-weight: 400;
        color: ${props => props.selected ? 'white' : 'black'};
        border: solid 1px ${props => props.theme.colors.grey};
        box-shadow: ${props => props.selected && props.theme.shadows.btn};
        opacity: ${props => props.squashed && 0.6};
        cursor: pointer;
        background: ${props => props.selected && props.theme.colors.main};
        pointer-events: ${props => (props.squashed || props.selected) && 'none'};
    }
`   