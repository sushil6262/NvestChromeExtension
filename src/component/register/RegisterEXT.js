import React, { Component } from 'react';
import './registerext.css';
import WelcomeImgMsg from '../welcomeImgMsg/WelcomeImgMsg'

class RegisterEXT extends Component {
    state = {
        extRegPassword: '',
        extRegConfirmPassword: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        
    }
    render() {
        let {extRegPassword,extRegConfirmPassword }= this.state;
        const isEnabled = extRegPassword.length > 4 && extRegConfirmPassword.length > 4;
        return (
            <div className="registerParent">
                <WelcomeImgMsg LgwelMessage="Getting Started" LgwelTitle="The decentralized web awaits" />
                <div className="NvestForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Password" style={{ color: "#a5a3a3", float: "left" }}>Password</label>
                        <input required className="passwordBox form-control" id="extRegPassword" type="password" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                        <br/>
                        <label htmlFor="ConfirmPassword" style={{  color: "#a5a3a3", float: "left" }}>Confirm Password</label>
                        <input required className="passwordBox form-control" id="extRegConfirmPassword" type="password" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary customPassBtn" disabled={!isEnabled} >Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterEXT;