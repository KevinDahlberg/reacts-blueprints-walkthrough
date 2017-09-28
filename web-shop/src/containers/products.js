'use static'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//import components here

class Products extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleCHange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, products } = this.props
    dispatch(fetchProducts())
  }

  static defaultProps = {
    products: {
      main_offerings: [],
      sale_offerings: []
    }
  }

  static PropTypes =  {
    products: PropTypes.object
  }

  render() {
    return (
      <Grid>
        <Offerings productData={this.props.products.main_offerings}
        type={"main"} maxProducts={1}/>
        <Offerings productData=
        {this.props.products.sale_offerings}
        type={"ribbon"} maxProducts={3}/>
      </Grid>
    );
  }
};

class Offerings extends Component {
  static PropTypes = {
    type: PropTypes.oneOf(['main', 'ribbon']),
    maxProducts: PropTypes.number,
    productData: PropTypes.array
  }

  static defaultProps = {
    type: 'main',
    maxProducts: 3
  }

  render() {
    let productData = this.props.productData.filter((data, idx) => {
      {
        return idx < this.props.maxProducts;
      }
    });
    let data = productData.map((data, idx) => {
      if(this.props.type === 'main') {
        return
          <MainOffering
          {...this.props} key={idx}
          productData={data}/>
      } else if (this.props.type === 'ribbon') {
        return
          <RibbonOffering
          {...this.props} key={idx}
          productData={data}/>
      }
    });
    return <Row>{data}</Row>;
  }
}

class MainOffering extends Component {
  static PropTypes = {
    productData: PropTypes.object
  }

  render() {
    const title = Object.keys(this.props.productData);
    if(this.props.productData[title]){
      (<Col xs={12}>
        <Col md={3} sm={4} xs={12}>
          <p>
            <img src={this.props.productData[title].image.replace("{size}","200x150")}/>
          </p>
        </Col>
        <Col md={9} sm={8} xs={12}>
          <NavLink to={"/item/"+this.props.productData[title].SKU}>
            <h4>{title}</h4>
          </NavLink>

          <p>
            {this.props.productData[title].description}
          </p>

          <p>
            {this.props.productData[title].price}
            {" "}
            ({this.props.productData[title].savings})
          </p>

          <p>
            <Button bsSize="large">Add to cart</Button>
          </p>
        </Col>
      </Col>
    )} else {
      return null;
    }
  }
}

class RibbonOffering extends Component {
  static Proptypes = {
    productData: React.PropTypes.object
  }

  render() {
    const title = Object.keys(this.props.productData);
    if (this.props.productData) {
      return (
        <Col md={4} sm={4} xs={12}>
          <Col xs={12}>
            <p>
              <img src={this.props.productData[title].image.replace("{size}","200x80")}/>
            </p>
          </Col>
          <Col xs={12}>
            <NavLink to={"/item/"+this.props.productData[title].SKU}>
              <h4>{title}</h4>
            </NavLink>

            <p>
              {this.props.productData[title].description}
            </p>

            <p>
              {this.props.productData[title].price}
              {" "}
              ({this.props.productData[title].savings})
            </p>

            <p>
              <Button bsSize="large">Add to cart</Button>
            </p>
          </Col>
        </Col>
      )
    } else {
      return null;
    }
  }
}
