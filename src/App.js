import React from 'react';
import './App.css';
import LoadingScreen from '././components/loading';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>hahahah </p>
        </header>
      </div>
    );
  }
}

export default LoadingScreen(App);
