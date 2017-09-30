import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import { NavLink, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


export default class Menu extends Component {

  render() {
    return (
        <Navbar inverse>
          <Navbar.Header>
            <LinkContainer to="/">
            <Navbar.Brand>
                Webshop
            </Navbar.Brand>
            </LinkContainer>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/products">
                <NavItem eventKey={1} href="/products">Products</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    );
  }
};
