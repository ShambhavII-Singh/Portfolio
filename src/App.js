import React from 'react';
import './App.css';
import LoadingScreen from './containers/loadingScreen';
import { AnimatePresence } from 'framer-motion';

class App extends React.Component {
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
          <AnimatePresence>
            <p>hahahah </p>
          </AnimatePresence>
          </header>
        </div>
      
    );
  }
}

export default LoadingScreen(App);
