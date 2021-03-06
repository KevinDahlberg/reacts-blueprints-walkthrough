import React, { Component } from 'react';
import { Router, State } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default class Item extends Component {
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

class ProductInfo extends Component {
  static PropTypes = {
    productData: PropTypes.object
  }

  render() {
    const title = Object.keys(this.props.productData);
    if(this.props.productData[title]){
      (
        <Col xs={12}>
          <Col md={3} sm={4} xs={12}>
            <p>
              <img src={this.props.productData[title].image.replace("{size}","200x150")}/>
            </p>
          </Col>
          <Col md={9} sm={8} xs={12}>
            <h4>{title}</h4>
            <p>
              {this.props.productData[title].description}
            </p>

            <p>
              {this.props.productData[title].price}
              {" "}
              ({this.props.productData[title].savings})
            </p>

            <p>
              <Button bsSize="large">
                Add to cart
              </Button>
            </p>
          </Col>
        </Col>
      )
    } else {
      return null;
    }
  }
}
