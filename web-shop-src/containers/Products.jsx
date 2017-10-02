import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
//import actions eventually

export default class Products extends Component {

  static propTypes = {
    products: PropTypes.array
  }

  static defaultProps = {
      products: ['Toaster','Lamp','Apple']
  }

  render () {
    const products = this.props.products
    return(
      <Grid>
        <Col xs={12}>
          <h1>Products</h1>
          <ul>
          {products.map((data, idx) =>
              <li key={idx}>{data}</li>
            )
          }
          </ul>
        </Col>
      </Grid>
    )
  }
}
