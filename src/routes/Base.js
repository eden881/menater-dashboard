import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Base() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>מנת"ר</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>מבט על</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/natars">
                <Nav.Link>נת"רים</Nav.Link>
              </LinkContainer>
              <NavDropdown title="פעולות">
                <LinkContainer to="/1">
                  <NavDropdown.Item>פעולה</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/2">
                  <NavDropdown.Item>עוד פעולה</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/3">
                  <NavDropdown.Item>משהו</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/4">
                  <NavDropdown.Item>לינק מופרד</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Base;
