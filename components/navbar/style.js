import styled from "styled-components";

export const Header = styled.header`
    height: 70px;
    background-color: var(--primary-color);
    padding: 5px 0px;
`;

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 40px;
    overflow: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px; 
`

export const NavbarButton = styled.button`
    border-radius: 5px;
    padding: 5px 14px;
    background-color: var(--light-color);
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 300ms linear;
    letter-spacing: 1px;

    &:hover {
      opacity: 0.8;
    }
`;