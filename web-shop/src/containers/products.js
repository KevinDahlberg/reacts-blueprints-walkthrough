'use static'

import React, { Componenet } from 'react'
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

  
}
