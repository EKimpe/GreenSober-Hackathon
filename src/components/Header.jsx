import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar id='nav-tool' color='light' expand='md'>
        <NavbarBrand href='/' className='mt-2 navigation'>
          SoberGreen !
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-5' navbar>
            <NavItem>
              <NavLink className='mt-2 ml-5 navigation' href='/Quiz'>
                Quiz
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mt-2 ml-5 navigation' href='/Blog'>
                Le blog
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
