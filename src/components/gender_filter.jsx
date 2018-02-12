import React from 'react';
import Results from './results.jsx';
import Select from 'react-select';
import Chev from '../images/chevron-down.svg';

class Filter extends React.Component {
  render () {
    let len = this.props.output.length
    let count
    if (len === 1) {
      count = `${len} RESULT`
    } else {
      count = `${len} RESULTS`
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
    const opts = [
      {value: 'none', label: 'Filter by gender'},
      {value: 'female', label: `Female(${female})`},
      {value: 'male', label: `Male(${male})`}
    ]

    return (
      <div className='layout-boxes filters' >
        <div>
          <p className='float-left'>{count}</p>
        </div>
        <Select
          className='shadow float-right select-menu'
          value={this.props.gender}
          onChange={this.props.handleSelection}
          options={opts}
          arrowRenderer={() => {
            return <Chev />
          }}
        />
        <label class='float-right'>GENDER</label>
        <Results output={this.props.output} />
      </div>
    )
  }
}

export default Filter;

// <select value={this.props.gender} onChange={this.props.handleSelection} >
// <option value='none' >Filter by gender</option>
// <option value='female' >Female({female})</option>
// <option value='male' >Male({male})</option>
// </select>
