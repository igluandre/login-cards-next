import { AuthContext } from "@/auth/context";
import { useContext } from "react";
import { Container, Header, Nav, NavbarButton } from "./style";

export const Navbar = () => {
  
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Header>
        <Container>
          <Nav className="flex">
            <p>Hello, {user.username}</p>
            <NavbarButton onClick={() => logout()}>Logout</NavbarButton>
          </Nav>
        </Container>
      </Header>
    </>
  );
};