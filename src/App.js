import React, { Component } from 'react';
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Editor />
        </div>
        <div id="preview">
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
