import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const github = {popular_languages: [
      {name: "Python", project:1231},
      {name: "Java", project:1112},
      {name: "Javascript", project:1113},
      {name: "C++", project:1114},
      {name: "C#", project:1115},
    ]};

    const rows = github.popular_languages.map(lang => {
      return (
        <tr>
          <td>{lang.name}</td>
          <td>{lang.project}</td>
        </tr>
      )
    })
    return (
      <div className="App">
        <h1>Most popular programming languages on github</h1>
        <table border="1">
          <tr>
            <th>Language</th>
            <th>Proejects on Github[k]</th>
          </tr>
          {rows}
        </table>
      </div>
    );
  }
}

export default App;
