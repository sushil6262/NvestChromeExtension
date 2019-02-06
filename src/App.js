import React, { Component } from 'react';
import './App.css';
import ExtNavBar from './component/ExtTopNavbar/ExtNavBar';
import WelcomeAndLogin from './component/ContentWrapper/WelcomeAndLogin';
import SecondNavbar from './component/SecondNavbar/SecondNavbar'


class App extends Component {
  render() {
    return (
      <div className="parentNvestExtension">
      <div>
        <ExtNavBar />
        <SecondNavbar/>
      </div>
        
        <div className="ExtContentWrapper">
          <WelcomeAndLogin />
        </div>
      </div>
    );
  }
}

export default App;
