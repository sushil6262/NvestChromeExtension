import React, { Component } from 'react';
import './login.css';
import WelcomeImgMsg from '../welcomeImgMsg/WelcomeImgMsg';
import { Link} from 'route-lite';
import Test from '../Test';

class LoginEXT extends Component {
    state = {
        extPassword: ''
    }
    handleChange = (e) => {
        this.setState({
            extPassword: e.target.value
        })
    }
    render() {
        let extPassword = this.state.extPassword;
        const isEnabled = extPassword.length > 4;
        return (
            <div>
                <div className="loginParent">
                    <div>
                        <WelcomeImgMsg LgwelMessage="Welcome Back !" LgwelTitle="The decentralized web awaits" />

                        <div className="NvestForm">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="Password" style={{ color: "#a5a3a3", float: "left" }}>Password</label>
                                    <input required className="passwordBox form-control" id="extPassword" type="password" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                                </div>
                            </form>
                            <br/>
                            <button className="btn btn-primary customPassBtn" disabled={!isEnabled}>Log In</button>
                        </div>

                        <div className="restoreAndPharse">
                            <span className="messageext3">Restore account ?</span>
                        </div>
                    </div>
                    <Link component={Test}>
                        <span className="messageext4">Import Using account seed phrase</span>
                    </Link>
                    
                </div>
            </div>
        );
    }
}


export default LoginEXT;