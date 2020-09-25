import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@airin-ai/prebuilt-ui/test/airin.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airinApiKey: 'test_api_key'
    };
  }

  render(){
    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <airin-element ref={elem => this.airin = elem}  airinApiKey={this.state.airinApiKey}></airin-element>
        </div>
    );
  }
}

export default App;