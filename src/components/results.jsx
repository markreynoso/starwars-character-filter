import React from 'react';
import ResultList from './result_list.jsx';
import Vader from '../images/vader-icon.svg';
import Loading from '../images/loading.png';

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
      <div className='results-box'>
        <div className='all-chars'>
          {character}
        </div>
        <div className='loading'>
          <img src={Loading} />
        </div>
        <div className={vader}>
            <Vader />
            <p>Search by character name</p>
        </div>
      </div>
    )
  }
}

export default Results;
