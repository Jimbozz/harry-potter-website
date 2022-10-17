import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function MainNav() {
  const [expanded, setExpanded] = useState(false);

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }
  return (
    <Navbar expanded={expanded} bg="light" expand="lg" fixed="top">
      <Container>
        <NavLink to="/" className="nav-link" end>
          <Navbar.Brand className="logo">JS Frameworks MA3</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
            {auth ? (
              <>
                <NavLink
                  to="/admin"
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                  end>
                  Admin
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink className="nav-link" to="/login" end>
                Login
              </NavLink>
            )}
            {/* <NavLink className="nav-link" to="/login" end>
              Login
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
