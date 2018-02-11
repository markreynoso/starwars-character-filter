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
    return (
      <div>
        {character}
        <div>
          <img src={Vader} alt='Vader' />
          <p>Search by character name</p>
        </div>
      </div>
    )
  }
}

export default Results;
