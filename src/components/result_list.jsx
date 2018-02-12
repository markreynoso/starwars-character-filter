import React from 'react';
import Attributes from './attributes.jsx';

class ResultList extends React.Component {
  render () {
    let attributeList = []
    if (this.props.gender === 'female' || this.props.gender === 'male') {
      attributeList.push(this.props.gender)
    }
    if (this.props.hairColor != 'none') {
      attributeList.push(this.props.hairColor)
    }
    if (this.props.eyeColor != 'none') {
      attributeList.push(this.props.eyeColor)
    }
    let attribute = attributeList.map(function(attr, index) {
      return <Attributes key={index} attr={attr} />
    })
    return (
      <div>
        <p>{this.props.name}</p>
        <ul className='character-item' >
        {attribute}
        </ul>
      </div>
    )
  }
}

export default ResultList;
