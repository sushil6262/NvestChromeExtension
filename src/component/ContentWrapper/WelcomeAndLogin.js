import React, { Component } from 'react';
import './welcomeandlogin.css';
import LoginEXT from '../Login/LoginEXT';
import RegisterEXT from '../register/RegisterEXT';

class WelcomeAndLogin extends Component {
    state={
        viewLrR:true
    }
    toggle=()=>{
        this.setState({
            viewLrR:!this.state.viewLrR
        })
    }
    render() {
        return (
            <div className="WelcomeAndLogin">
                {this.state.viewLrR? <LoginEXT />: <RegisterEXT/>}
                <div className="messageext5">{this.state.viewLrR?"Don't have an Account ?":"Already have an Account ? " } <span className="cAccount" onClick={this.toggle}>{this.state.viewLrR?"Create Account":"Log In"} </span></div>
            </div>
        );
    }
}

export default WelcomeAndLogin;