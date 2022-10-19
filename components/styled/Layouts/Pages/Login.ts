import { errorMss } from "components/styled/Animations";
import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SFormError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: capitalize;
  width: 100%;
  animation-name: ${errorMss};
  animation-duration: 0.4s;
  inline-size: auto;
  display: ${({ show }) => (show ? "block" : "none")};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  min-width: 30rem;
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.black};

  & > div:first-child {
  }

  & > div:nth-child(2) {
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    input {
      margin: 0.2rem 0rem;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 100%;
    height: calc(100% - 0.5rem);
    transform: translateY(0.5rem);
    background: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.black};
    z-index: -1;
  }

  &:before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100%;
    height: calc(100% - 1rem);
    transform: translateY(1rem);
    background: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.shadows.main};
    z-index: -1;
  }
`;
