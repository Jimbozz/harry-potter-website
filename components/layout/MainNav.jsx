import Link from "next/link";
import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

/**
 * Creates the nav component
 */

export default function MainNav() {
  const [auth, setAuth] = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push("/");
  }
  return (
    <Navbar
      expanded={expanded}
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top">
      <Container>
        <Link href="/" passHref>
          <Nav.Link className="nav-link">
            <Navbar.Brand className="logo">WIZARDPEDIA</Navbar.Brand>
          </Nav.Link>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link
                className={router.pathname == "/" ? "active" : ""}
                onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link
                className={router.pathname == "/contact" ? "active" : ""}
                onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Link>
            <Link href="/favorites" passHref>
              <Nav.Link
                className={router.pathname == "/favorites" ? "active" : ""}
                onClick={() => setExpanded(false)}>
                Favorites
              </Nav.Link>
            </Link>
            {auth ? (
              <>
                <Button
                  onClick={logout}
                  className={router.pathname == "/Logout" ? "active" : ""}>
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" passHref>
                <Nav.Link
                  className={router.pathname == "/login" ? "active" : ""}
                  onClick={() => setExpanded(false)}>
                  Login
                </Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
