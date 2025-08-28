import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export class AppNavbar extends React.Component {

    state = {
      isOpen: false
    };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // Smooth scroll function
  scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark" color="light" light expand="md">
          <NavbarBrand className="nav-head" href="/" onClick={(e) => {
            e.preventDefault();
            this.scrollToSection('home');
          }}>
            Afrida
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink 
                  href="#home" 
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    this.scrollToSection('home');
                  }}
                >
                  <i className="fa fa-home"></i> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="#about"
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    this.scrollToSection('about');
                  }}
                >
                  <i className="fa fa-user"></i> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="#experience"
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    this.scrollToSection('experience');
                  }}
                >
                  <i className="fa fa-briefcase"></i> Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="#skills"
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    this.scrollToSection('skills');
                  }}
                >
                  <i className="fa fa-code"></i> Skills
                </NavLink>
              </NavItem>
              
                <NavItem>
                  <NavLink 
                    href="#publications"
                    className="nav-link-custom"
                    onClick={(e) => {
                      e.preventDefault();
                      this.scrollToSection('publications');
                    }}
                  >
                    <i className="fa fa-file-text-o"></i> Publications
                  </NavLink>
                </NavItem>


              <NavItem>
                <NavLink 
                  href="#achievements"
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    this.scrollToSection('achievements');
                  }}
                >
                  <i className="fa fa-trophy"></i> Achievements
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;