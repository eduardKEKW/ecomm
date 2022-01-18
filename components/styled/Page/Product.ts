import styled from 'styled-components';

export const SProductGrid = styled.main`
  /* width: 70%;
  min-width: 75rem;
  margin: 0 auto; */
  /* width: 100%; */
  min-height: 100vh;
  min-width: 100rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "product product product product product product"
    ". attributes  attributes  attributes  attributes   ."
    ". description description description description  ."
    ". review      review      review      review       ."
    "comments comments comments comments comments comments"
    ". recommended recommended recommended recommended  .";
`;

export const SProduct = styled.section`
  background: white;
  grid-area: ${({ gridArea }) => gridArea};   
  min-height: 100vh;
  padding-bottom: 15%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    ". breadcrumbs breadcrumbs breadcrumbs breadcrumbs ."
    ". title       title       title       title       ."
    ". slider      info      info        actions     .";
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

        i {
          flex: 1;
        }

        p {
          flex: 5;
          font-size: .9rem;
          text-align: start;
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
`

export const SAttributes = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  padding: 2.5rem 0rem;
  
  & > ul {

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