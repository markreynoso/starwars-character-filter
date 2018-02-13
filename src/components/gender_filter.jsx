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
    let na = 0
    this.props.results.map(function(result){
      if (result.gender === 'female') {
        female++
      } else if (result.gender === 'male') {
        male++
      } else if (result.gender === 'n/a' || result.gender === 'none') {
        na++
      }
    });
    const opts = [
      {value: 'none', label: 'Filter by gender'},
      {value: 'female', label: `Female(${female})`},
      {value: 'male', label: `Male(${male})`},
      {value: 'n/a', label: `n/a(${na})`}
    ]

    return (
      <div>
        <div className='layout-boxes filters'>
          <div className='num-results' >
            <p>{count}</p>
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
          <label className='float-right label'>GENDER</label>
        </div>
        <Results output={this.props.output} />
      </div>
    )
  }
}

export default Filter;
