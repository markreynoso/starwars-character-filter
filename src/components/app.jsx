import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <NumResults />
        <Gender />
        <Results />
      </div>
    )
  }
}
