import styled from 'styled-components'
import { card } from '../Animations'

export const SComments = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  background: white;
  padding: 1rem;
  min-height: 10rem;
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "container container";

  & > div {
    grid-area: container;
  }
`

export const SComment = styled.div`
  display: flex;
  height: 7rem;
  align-items: center;
  padding: 1rem 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lowGrey};
  animation-name: ${card};
  animation-fill-mode: both;
  animation-duration: .2s;
  animation-delay: ${props => `${props.animationDelay * 100}ms`};
`

export const SAbout = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const SAvatar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
  position: relative;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 50%;
    border: solid 2px ${({ color }) => color};
    box-shadow: ${({ theme }) => theme.shadows.main};
    position: relative;
    width: 4rem;
    height: 4rem;
  }

  & > div:last-child {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: ${({ theme }) => theme.shadows.main};
    color: white;
    background: ${({ color }) => color};
    width: 1.5rem;
    height: 1.5rem;
    padding: .2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: .6rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
`

export const SInfo = styled.span`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: .3rem;
`

export const SName = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 400;
`

export const SDate = styled.span`
  font-weight: 100;
  font-size: .7rem;
`

export const SBody = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  gap: .3rem;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

export const STitle = styled.div`
  font-weight: 400;
  margin-right: 5rem;
  font-size: .9rem;
  color: ${({ theme }) => theme.colors.black};
`

export const SRating = styled.div`
  i {
    font-size: .8rem;
  }
`

export const SText = styled.div`
  flex: 3;
  color: black;
`

export const SLike = styled.div`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;  

  & > div { 
    padding: .5rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-size: 1rem;
    gap: .5rem;
    cursor: ${({ isGuest }) => isGuest ? "auto" : "pointer"};

    &:hover {
      border: solid 1px ${({ theme }) => theme.colors.lowGrey}; 
      box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
    }
  }
`

export const SIncrement = styled.div`
    overflow: hidden;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        font-weight: 300;
        transition: transform .4s ease-out;
        transform: ${({ translate }) => `translateY(${translate}rem)`};

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1rem;
            height: 1rem;
        }
    }
`;