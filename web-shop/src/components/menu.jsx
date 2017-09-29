import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Menu extends Component {

  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/" exact>My webshop</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/company">
            <Button bsStyle="link">
              About
            </Button>
          </LinkContainer>

          <LinkContainer to="/products">
            <Button bsStyle="link">
              Products
            </Button>
          </LinkContainer>
        </Nav>

        <Nav pullRight>
          <LinkContainer to="/checkout">
            <Button bsStyle="link">
              Your cart: items
            </Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
};
