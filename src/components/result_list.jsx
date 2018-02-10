import React from 'react';
import Attributes from './attributes.jsx';

class ResultList extends React.Component {
  render () {
    let attributeList = []
    if (this.props.gender != 'none') {
      attributeList.push(this.props.gender)
    }
    if (this.props.hairColor != 'none') {
      attributeList.push(this.props.hairColor)
    }
    if (this.props.eyeColor != 'none') {
      attributeList.push(this.props.eyeColor)
    }
    let attribute = attributeList.map(function(attr) {
      <Attributes attr={attr} />
    })
    return (
      <div>
        <p>{this.props.name}</p>
        <ul>
          {attribute}
        </ul>
      </div>
    )
  }
}

export default ResultList;
