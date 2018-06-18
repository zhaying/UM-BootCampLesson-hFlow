import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">hFlow </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/products">Products</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/customers">Customers</Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/use-cases">Use Cases</Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/support">Support</Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/contact-us">Contact Sales</Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/login">Login</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
