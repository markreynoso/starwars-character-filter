import React from 'react';

class Filter extends React.Component {
  render () {
    console.log(this.props.gender);
    return (
      <div>
        <div>
          <p>num results</p>
        </div>
        <select onChange={this.handleSelection} value={this.props.gender} >
          <option value='none' >Filter by gender</option>
          <option value='female' >Female</option>
          <option value='male' >Male</option>
        </select>
      </div>
    )
  }
}

export default Filter;
