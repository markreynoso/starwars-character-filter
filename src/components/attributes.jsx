import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Attributes extends React.Component {
  render () {
    return (
        <li>{this.props.attr}</li>
    )
  }
}

Attributes.propTypes = {
  attr: PropTypes.string.isRequired
}

export default Attributes;
