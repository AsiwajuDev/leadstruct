import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { siteTitle, logo } = this.props
    return (
      <div className="header">
        <Navbar color="dark" dark expand="md" className="navbar fixed-top">
          <Container className="flex">
            <Link to="/#hero" className="navbar-brand">
              <span className="flex text-center text-3xl my-auto">
                <img
                  src={logo}
                  alt={`${siteTitle} Logo`}
                  className="mr-2 h-10"
                />
                {siteTitle}
              </span>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/"
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="projects">
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/services"
                  >
                    Services
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/careers"
                  >
                    Careers
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/about"
                  >
                    About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
