import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='Search by character name'
          value={this.props.searchName}
          onChange={this.props.handleChange } />
        <button onClick={this.props.handleClick} >Search</button>
      </div>
    )
  }
}

export default Search;
