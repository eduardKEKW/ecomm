import styled from 'styled-components';
import { breakpoints, media } from '../Media';

export const SProductGrid = styled.main`
  width: max(60%,  ${breakpoints.lg});
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    " product product "
    " attributes  attributes       "
    " description description    "
    " review      review                   "
    " comments comments   "
    " recommended recommended    ";
`;

export const SProduct = styled.section`
  grid-area: ${({ gridArea }) => gridArea};   
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 15%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    " breadcrumbs breadcrumbs breadcrumbs breadcrumbs "
    " title       title       title       title       "
    " slider      info      info        actions     ";
`;

export const SInfo = styled.section`
  grid-area: ${({ gridArea }) => gridArea};   
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  flex-direction: column;
`;

export const SRating = styled.section`

`;

export const SActions = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  justify-content: flex-end;

  & > section {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    
    & > section {
      width: 100%;
      display: flex;
      flex-direction: column;

      & > span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 90%;
        text-align: center; 
        font-size: 1rem;
        
        i {
          flex: 1;
          padding-right: .5rem;
          font-size: 1.2rem;
        }

        p {
          flex: 5;
          text-align: start;
          text-transform: uppercase;
        }

      }
    }
  }
`;

export const SDescription = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  line-height: 1.5rem;
  font-size: 1rem;
  padding: 2.5rem 0rem;
  min-height: 5rem;

  div {
    & > h1 {
      background: transparent !important;
    }
  }
`

export const SAttributes = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  
  & > ul {
    padding: 2.5rem 0rem;

    & > li {
      display: flex;
      margin: .5rem 0rem;

      span {
        font-weight: 200;
        color: black;
        font-size: 1.2rem;
        margin-right: .5rem;
        text-decoration: underline;
      }

      p {
        margin: 0;
        display: flex;
        align-items: center;
      }
    }
  }
`

export const SReview = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
`