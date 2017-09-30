import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router'
import PropTypes from 'prop-types'
//import actions eventually

export default class Products extends Component {

  static propTypes = {
    products: PropTyes.object
  }

  static defaultProps = {
      products: {
        main_offerings: [],
        sale_offerings: []
    }
  }

  render () {
    return(
      <Grid>
        <Offerings
          productData = {this.props.products.main_offering}
          type={"main"}
          maxProducts={1}
        />
        <Offerings productData={this.props.products.sale_offerings}
          type={"ribbon"}
          maxProducts={3}
        />
      </Grid>
    )
  }
}

class Offerings extends Component {
  static propTypes = {
    type: PropTypes.oneOf(["main","ribbon"]),
    maxProducts: PropTypes.number
  }

  static defaultProps = {
    type: "main",
    maxProducts: 3
  }

  render() {
    let productData = this.props.productData
    .filter((data, idx) => {
      return idx < this.props.maxproducts
    })
    .map((data, idx) => {
      if(this.props.type==="main"){
        return
        <MainOffering
          {...this.props} key={"main"+idx}
          productData={data}/>
      }
      if(this.props.type === "ribbon"){
        return
        <RibbonOffering
          {...this.props} key={idx}
          productData={data}/>
      }
    })
    return <Row>{productData}</Row>
  }
}

class MainOffering extends Component {
  static propTypes = {
    productData: PropTypes.object
  }

  render() {
    const title = Object.keys(this.props.productData)
    if(this.props.productData){
      return (
        <Col xs={12}>
          <Col md={3} sm={4} xs={12}>
            <p>
              <img src={this.props.productData[title].image.replace("{size}","200x150")}/>
            </p>
          </Col>
          <Col md={9} sm={8} xs={12}>
            <NavLink to={"/item"+this.props.productData[title].SKU}
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
              <Button bsSize="large"
                onClick={
                  //action to add to cart
                }>
                Add to Cart
              </Button>
            </p>
          </Col>
        </Col>
      )
    } else {
      return null
    }
  }
}

class RibbonOffering extends Component {
  static propTypes = {
    productData: PropTypes.object
  }

  render() {
    const title = Object.keys(this.props.productData)
    return this.props.productData[title] ?
      (
        <Col md={4} sm={4} xs={12}>
          <Col xs={12}
            <p>
              <img src={this.props.productData[title].image.replace("{size}","170x80")}/>
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
            <Button bsSize="small"
              onClick={CartActions.AddToCart.bind(null, this.props.productData)}>
              Add to cart
            </Button>
          </p>
        </Col>
      </Col>
    ) : null
  }
}
