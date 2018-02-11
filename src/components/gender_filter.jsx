import React from 'react';
import Results from './results.jsx';

class Filter extends React.Component {
  render () {
    let len = this.props.output
    let total = len.length
    let count
    if (total === 1) {
      count = `${total} RESULT`
    } else {
      count = `${total} RESULTS`
    }
    let female = 0
    let male = 0
    this.props.results.map(function(result){
      if (result.gender === 'female') {
        female++
      } else if (result.gender === 'male') {
        male++
      }
    });

    return (
      <div>
        <div>
          <p>{count}</p>
        </div>
        <label>GENDER</label>
        <select value={this.props.gender} onChange={this.props.handleSelection} >
          <option value='none' >Filter by gender</option>
          <option value='female' >Female({female})</option>
          <option value='male' >Male({male})</option>
        </select>
        <Results output={this.props.output} />
      </div>
    )
  }
}

export default Filter;
