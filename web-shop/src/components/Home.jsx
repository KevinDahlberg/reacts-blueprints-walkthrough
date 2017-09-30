import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink, Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>My webshop!</h1>

              <p>
                Welcome to my webshop.
                This is a simple information
                unit where you can showcase
                your best products or
                tell a little about your webshop
              </p>

              <p>
                <LinkContainer to="/products">
                  <Button bsStyle="primary"
                    to="/products">View Products</Button>
                </LinkContainer>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
};
