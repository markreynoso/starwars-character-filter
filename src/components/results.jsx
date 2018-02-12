import React from 'react';
import ResultList from './result_list.jsx';
import Vader from '../images/vader-icon.svg';

class Results extends React.Component {
  render () {
    let character = this.props.output.map(function(result) {
      return <ResultList
                key={result.name}
                name={result.name}
                gender={result.gender}
                hairColor={result.hair_color}
                eyeColor={result.eye_color} />
      });
    let vader = ''
    if (this.props.output.length === 0) {
      vader = 'vader-show'
    } else {
      vader = 'vader-hide'
    }
    return (
      <div className='shadow layout-boxes results'>
        {character}
        <div className={vader} >
          <Vader />
          <p>Search by character name</p>
        </div>
      </div>
    )
  }
}

export default Results;
