import styled from 'styled-components';

export const SSelect = styled.div`
    cursor: default;
    display: inline-block;
    padding: 0rem .0rem;
    position: relative;
    width: 8rem;
    background: white;
    height: 2rem;
    width: ${props => props.width};

    & > span {    
        text-decoration: none;
        border: none;
        color: inherit;
        background: transparent;
        z-index: 999;
        width: 100%;
        display: flex;
        align-items: center;
        padding: .2rem .5rem;
        position: relative;
        height: 2rem;
        font-weight : lighter;
        font: inherit;
        outline: inherit;

        &:after {
            content: '\\0203A';
            position: absolute;
            height: 100%;
            top: 0%;
            left: 100%;
            font-size: 1.2rem;
            transform: rotate(90deg) translateY(65%);
        }
    }

    & > ul {
        z-index: 99;
        width: 100%;
        background: white;
        border: solid 1px ${props => props.theme.colors.grey};
        height: auto;
        overflow: hidden;
        padding-top: 1.9rem;
        box-shadow: ${props => props.theme.shadows.btn};
        position: absolute;
        top: 0%;
        left: 0%;
    }
`

export const SSelectItem = styled.li`
    border-top: ${props => props.show && `1px solid ${props.theme.colors.lowGrey}`};
    height: ${props => props.show ? '2rem' : '0rem'};
    padding: 0rem .5rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: height .15s ease-out;
    background: ${props => props.selected && props.theme.colors.lowGrey};  

    &:hover {
        background: ${({ selected, theme: { colors: { lowGrey, veryLightGray } } }) =>  selected ? lowGrey : veryLightGray};
    }
`