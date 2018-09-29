import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Changestate: 'This text Will change once the Button is clicked'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      Changestate: 'Yay.'
    });
  }

  render() {
    return (
      <div classname="App">
        <h1>{this.state.Changestate}</h1>
        <div onClick={this.onClick}>Click Here!</div>
      </div>
    );
  }
}

export default App