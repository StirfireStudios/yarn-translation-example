import React, { Component } from 'react';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
