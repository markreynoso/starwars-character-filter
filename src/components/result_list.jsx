import React from 'react';
import Attributes from './attributes.jsx';

class ResultList extends React.Component {
  render () {
    let attributeList = []
     if (this.props.gender === 'female' || this.props.gender === 'male') {
      let capitalGender = this.props.gender.charAt(0).toUpperCase() + this.props.gender.slice(1)
      attributeList.push(capitalGender)
    }
    if (this.props.hairColor !== 'none') {
      if (this.props.hairColor !== 'n/a') {
        let hairList = this.props.hairColor.split(' ')
        let capitalHair = ''
        for (let i = 0; i < hairList.length; i++) {
          let capitalize = hairList[i].charAt(0).toUpperCase() + hairList[i].slice(1)
          if (i === 0) {
            capitalHair = capitalize
          } else {
            capitalHair += (' ' + capitalize)
          }
        }
        attributeList.push(capitalHair)
      }
    }
    if (this.props.eyeColor !== 'none') {
      if (this.props.eyeColor !== 'n/a') {
        let eyeList = this.props.eyeColor.split(' ')
        let capitalEye = ''
        for (let i = 0; i < eyeList.length; i++) {
          let capitalize = eyeList[i].charAt(0).toUpperCase() + eyeList[i].slice(1)
          if (i === 0) {
            capitalEye = capitalize
          } else {
            capitalEye += (' ' + capitalize)
          }
        }
        attributeList.push(capitalEye)
      }
    }

    let attribute = attributeList.map(function(attr, index) {
      return <Attributes key={index} attr={attr} />

    })
    return (
      <div className='single-char'>
        <p>{this.props.name}</p>
        <ul className='character-item' >
        {attribute}
        </ul>
      </div>
    )
  }
}

export default ResultList;
