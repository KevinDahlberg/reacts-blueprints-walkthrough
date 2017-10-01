import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
//import actions eventually

export default class Products extends Component {

  static propTypes = {
    products: PropTypes.object
  }

  state = {
      products: {
        main_offerings: [
          {
            "World's best novel": {
              "SKU": "NOV",
              "price": "$21.90",
              "savings": "24% off",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "image": "http://placehold.it/{size}&text=The Novel"
            }
          }
        ],
        sale_offerings: []
    }
  }

  render () {
    return(
      <Grid>
        <Offerings
          productData = {this.state.products.main_offerings}
          type={"main"}
          maxProducts={1}
        />
        <Offerings productData={this.state.products.sale_offerings}
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
    const { type, maxProduct, productData } = this.props

    const _productData = this.props.productData.filter((data, idx) => {
      return idx < this.props.maxProducts
    })
    .map((data, idx) => {
      if(this.props.type==="main"){
        return
        <MainOffering
          key={"main"+idx}
          productData={data}/>
      }
      if(this.props.type === "ribbon"){
        return
        <RibbonOffering
          key={idx}
          productData={data}/>
      }
    })
    return <Row>{_productData}</Row>
  }
}

class MainOffering extends Component {
  static propTypes = {
    productData: PropTypes.object
  }

  render() {
    const { productData } = this.props
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
            <NavLink to={"/item"+this.props.productData[title].SKU}>
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
                >
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
    const { productData } = this.props
    const title = Object.keys(this.props.productData)
    return this.props.productData[title] ?
      (
        <Col md={4} sm={4} xs={12}>
          <Col xs={12}>
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
            <Button bsSize="small">
              Add to cart
            </Button>
          </p>
        </Col>
      </Col>
    ) : null
  }
}
