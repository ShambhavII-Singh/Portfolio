import React from 'react';
import './App.css';
import LoadingScreen from './containers/loadingScreen';

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
