import React, { Component } from 'react';
import './App.css';
import WelcomeAndLogin from './component/ContentWrapper/WelcomeAndLogin';



class App extends Component {
  render() {
    return (
      <div className="parentNvestExtension">
        <div className="ExtContentWrapper">
          <WelcomeAndLogin />
        </div>
      </div>
    );
  }
}

export default App;
