import React from 'react';
import Attributes from './attributes.jsx';
import PropTypes from 'prop-types';

class ResultList extends React.Component {
  render () {
    let attributeFull = defineAttributes(this.props)
    let attribute = attributeFull.map(function(attr, index) {
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

ResultList.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired
}

function defineAttributes(props) {
  let attributeList = []
  if (props.gender === 'female' || props.gender === 'male') {
   let capitalGender = props.gender.charAt(0).toUpperCase() + props.gender.slice(1)
   attributeList.push(capitalGender)
 }
 if (props.hairColor !== 'none') {
   if (props.hairColor !== 'n/a') {
     let hairList = props.hairColor.split(' ')
     let capitalHair = ''
     for (let i = 0; i < hairList.length; i++) {
       let capitalize = hairList[i].charAt(0).toUpperCase() + hairList[i].slice(1).replace(/,/g, '')
       if (i === 0) {
         capitalHair = capitalize + ' hair'
       } else {
         capitalHair += (', ' + capitalize + ' hair')
       }
     }
     attributeList.push(capitalHair)
   }
 }
 if (props.eyeColor !== 'none') {
   if (props.eyeColor !== 'n/a') {
     let eyeList = props.eyeColor.split(' ')
     let capitalEye = ''
     for (let i = 0; i < eyeList.length; i++) {
       let capitalize = eyeList[i].charAt(0).toUpperCase() + eyeList[i].slice(1).replace(/,/g, '')
       if (i === 0) {
         capitalEye = capitalize + ' eyes'
       } else {
         let removeLast = capitalEye.slice(0, -1)
         capitalEye = (removeLast + ', ' + capitalize + ' eye')
         console.log(capitalEye);
       }
     }
     attributeList.push(capitalEye)
   }
 }
 return attributeList
}

export default ResultList;
