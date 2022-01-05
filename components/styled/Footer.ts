import styled from 'styled-components';

export const SFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    background: ${({ theme }) => theme.colors.main };
    color: white;
    margin-top: 5rem;

    a:hover {
        text-decoration: underline;
    }
`;

export const SNavigation = styled.section`
    width: 70%;
    margin: 0 auto;
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SItem = styled.ul`
    flex: 1;

    & > li:first-child {
        font-size: 1.3rem;
        font-weight: 600;
        padding: .5rem 0rem;
    }

    li {
        padding: .4rem 0rem;
    }
`;

export const SSocial = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;

    & > i {
        font-size: 2rem;
        margin-right: 1rem;
    }
`;