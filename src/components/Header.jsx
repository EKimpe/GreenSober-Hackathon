import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component {
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
        <Navbar
          id='nav-tool'
          className='pt-O mt-0 mb-0'
          color='light'
          light
          expand='md'
        >
          <NavbarBrand id='nav-item' className='pt-0 pb-0' href='/'>
            <img src='./img/Logo.png' alt='logo' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mx-auto' navbar>
              <NavItem>
                <NavLink id='nav-item' className='pr-5 mr-5' href='/quiz/'>
                  Quiz
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='nav-item' className='pl-5 ml-5 mr-5' href='/blog'>
                  Le Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='nav-item' className='pl-5 ml-5' href='/blog'>
                  Nous contacter
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
