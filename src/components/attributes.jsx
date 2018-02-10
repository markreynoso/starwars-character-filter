import React from 'react';
import ReactDOM from 'react-dom';

class Attributes extends React.Component {
  render () {
    return (
        <li>{this.props.attr}</li>
    )
  }
}

export default Attributes;
