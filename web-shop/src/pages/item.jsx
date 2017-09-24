'use strict';
import React, { Component } from 'react';
import Reflux from 'reflux';
import { Router, State } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import CartActions from "../actions/cart";


export default class Item extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.props.products) return null;

    let products = this.props.products.main_offering.concat(this.props.products.sale_offerings);
    let data = products.filter((item) => {
      return item[Object.keys(item)].SKU === this.props.routeParams.id;
    });

    if(!data.length) {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Product missing</h1>
              <p>
                I'm sorry, but the product could not be found.
              </p>
            </Col>
          </Row>
        </Grid>
      )} else {
        return (
          <Grid>
            <Row>
              <Col xs={12}>
                <ProductInfo productData={data[0]}/>
              </Col>
            </Row>
          </Grid>
        )
      };
    }
  }
