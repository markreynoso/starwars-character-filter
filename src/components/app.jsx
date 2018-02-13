import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';
import Filter from './gender_filter.jsx';

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
    this.nextPage = this.nextPage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchName: event.target.value
    });
  }

  handleClick() {
    $('.loading').show()
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: `https://swapi.co/api/people/?search=${this.state.searchName}`,
      success: data => {
        if (data.next === null) {
          this.setState({
            results: data.results
          });
          $('.loading').hide()
          this.setOutput()
        } else {
          this.nextPage(data.next, data.results)
        }
      }
    });
  }

  nextPage(url, results) {
    let compiled =[]
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url,
      success: data => {
        if (data.next === null) {
          compiled = results.concat(data.results)
          this.setState({
            results: compiled
          });
          $('.loading').hide()
          this.setOutput()
        } else {
          compiled = results.concat(data.results)
          this.nextPage(data.next, compiled)
        }
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gender !== this.state.gender) {
      this.setOutput()
    }
  }

  handleSelection(gender) {
    this.setState({
      gender: gender.value
    });
    this.setOutput();
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.handleClick()
    }
  }

  setOutput() {
    if (this.state.results != []) {
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
          if (character.gender === 'female') {
            females.push(character)
          }
        })
        this.setState({
          output: females
        })
      } else if (this.state.gender === 'n/a') {
        let na = []
        this.state.results.map(function(character) {
          if (character.gender === 'n/a' || character.gender === 'none') {
            na.push(character)
          }
        })
        this.setState({
          output: na
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
          handleClick={this.handleClick}
          handleKeyPress={this.handleKeyPress} />
        <Filter
          handleSelection={this.handleSelection}
          gender={this.state.gender}
          output={this.state.output}
          results={this.state.results} />
      </div>
    )
  }
}

export default App;
