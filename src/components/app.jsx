import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchName: event.target.value
    });
  }

  handleClick() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: `https://swapi.co/api/people/?search=${this.state.searchName}`,
      success: data => {
        this.setState({
          results: data.results
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Search
          searchName={this.state.searchName}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default App;
