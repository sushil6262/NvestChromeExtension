import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import { Link } from 'route-lite';
import './readSeedWord.css'
import SeedPhraseReveal from '../SeedPhraseRevel/SeedPhraseReveal';

class ReadSeedWords extends Component {
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
        const isEnabled = extPassword === "sushil";
        return (
            <div>
                <ExtNavBar />
                <div className="secondContainer">
                    <h1 style={{ fontWeight: "900", color: "#1b2443" }}>Seed Phrase</h1>
                    <div className="settingContainer">
                        <p style={{ textAlign: "justify" }}>
                            If you ever change browsers or move computers, you will need this seed phrase to access your accounts. Save them somewhere safe and secret.
                        </p>
                        <hr style={{ height: "1px", backgroundColor: "#b7b7b7" }} />
                        <p style={{ textAlign: "justify", fontWeight: "900" }}>
                            <i style={{ color: "red", fontSize: "24px" }} className="fas fa-exclamation-triangle"></i> DO NOT share this phrase with anyone!
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            These words can be used to steal all your accounts.</p>
                        <br />
                        <form>
                            <div className="centeringform">
                                <div className="form-group cstFormGrp">
                                    <label style={{ color: "#a5a3a3", float: "left" }}>Enter password to continue</label>
                                    <input required className="passwordBox form-control" id="extPassword" type="password" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="btngrp">
                                <button type="button" className=" btn btn-danger cancelImpButton">Cancel</button>
                                <Link component={SeedPhraseReveal}>
                                    <button type="submit" disabled={!isEnabled} className=" btn btn-primary importButton">Next</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadSeedWords;