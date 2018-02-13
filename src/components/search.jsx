import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  render () {
    return (
      <div className='shadow layout-boxes input-box'>
        <input
          className='input-text'
          type='text'
          placeholder='Search by character name'
          value={this.props.searchName}
          onKeyPress={this.props.handleKeyPress}
          onChange={this.props.handleChange} />
        <button className='button' onClick={this.props.handleClick} >Search</button>
      </div>
    )
  }
}

export default Search;
