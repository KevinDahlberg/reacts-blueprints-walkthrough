import React, { Component } from 'react';
import { render } from 'react-dom'

export default class AppState extends Component {

  //sets initial state
  getInitialState() {
    return {
      greeting: "",
      message: ""
    }
  }

  //when component mounts, the state gets set to the greeting
  componentWillMount() {
    this.setState ({
      greeting: this.props.greeting
    });
  }

  //component mounts, focus goes to the input box
  componentDidMount() {
    this.refs.input.focus();
  }

  //handles the clear of the input box, sets message to nothing
  handleClear (event) {
    this.refs.input.value="";
    this.setState ({
      message: ""
    });
  }

  //renders the greeting and the input box
  render () {
    return (
      <div>
        <h1>Refs and data binding</h1>
        <h2>{this.state.greeting}</h2>
        type a message:
        <br/>
        <input type="test" ref="input"
          onChange={this.handleChange} />
        <br/>
        <input type="button"
          value="Clear"
          onClick={this.handleClear}
        />
      </div>
    );
  }

};
