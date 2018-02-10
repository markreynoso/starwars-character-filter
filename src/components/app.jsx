import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';
import Filter from './gender_filter.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      gender: 'none',
      results: [],
      output: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setOutput = this.setOutput.bind(this);
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
        this.setOutput()
      }
    });
  }

  handleSelection(event) {
    console.log(event);
    this.setState({
      gender: event.target.value
    });
    this.setOutput();
  }

  setOutput() {
    if (this.state.output != []) {
      if (this.state.gender === 'none') {
        this.setState({
          output: this.state.results
        });
      } else if (this.state.gender === 'male') {
        let males = []
        this.state.results.map(function(character) {
          if (character.gender === 'male') {
            males.push(character)
          }
        })
        this.setState({
          output: males
        })
      } else if (this.state.gender === 'female') {
        let females = []
        this.state.results.map(function(character) {
          if (character.gender === 'male') {
            females.push(character)
          }
        })
        this.setState({
          output: females
        })
      }
    }
  }

  render() {
    return (
      <div>
        <Search
          searchName={this.state.searchName}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <Filter handleSelection={this.handleSelection} gender={this.state.gender}/>
        <Results output={this.state.output} results={this.state.results} />
      </div>
    )
  }
}

export default App;
