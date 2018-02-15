import React from 'react';
import ResultList from './result_list.jsx';
import Vader from '../images/vader-icon.svg';
import Loading from '../images/loading.png';
import PropTypes from 'prop-types';

class Results extends React.Component {
  render () {
    let character = createCharacterList(this.props.output)
    let vader = vaderToggle(this.props.output.length)
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

Results.propTypes = {
  output: PropTypes.array.isRequired
}

function createCharacterList(list) {
  let output = list.map(function(result) {
    return <ResultList
              key={result.name}
              name={result.name}
              gender={result.gender}
              hairColor={result.hair_color}
              eyeColor={result.eye_color} />
    });
  return output
}

function vaderToggle(length) {
  if (length === 0) {
    return 'vader-show'
  } else {
    return 'vader-hide'
  }
}

export default Results;
