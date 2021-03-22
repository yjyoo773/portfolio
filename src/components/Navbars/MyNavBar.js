// Personal Navbar

import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class MyNavBar extends React.Component {
  render() {
    return (
      <>
        {/* Navbar success */}
        <Navbar className="navbar-dark bg-success p-1 fixed-top" expand="lg">
          <Container>
            <button className="navbar-toggler" id="navbar-success">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-success">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler float-left"
                      id="navbar-success"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" href="/">
                    <span className="nav-link-inner--text">Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/profile-page"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/projects" tag={Link}>
                    <span className="nav-link-inner--text">Projects</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default MyNavBar;
