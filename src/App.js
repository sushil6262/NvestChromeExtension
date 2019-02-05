import React, { Component } from 'react';
import './App.css';
import ExtNavBar from './component/ExtTopNavbar/ExtNavBar';
import WelcomeAndLogin from './component/ContentWrapper/WelcomeAndLogin'


class App extends Component {
  render() {
    return (
      <div className="parentNvestExtension">
      <div>
        <ExtNavBar />
      </div>
        
        <div className="ExtContentWrapper">
          <WelcomeAndLogin />
        </div>
      </div>
    );
  }
}

export default App;
