import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import { Link } from 'route-lite';
import './seedPhrasereveal.css'

class SeedPhraseReveal extends Component {
    render() {
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
                        <p style={{ color: "#a5a3a3",marginTop:"24px" }}>Your private seed phrase</p>
                        <div className="well">
                            <p>town bitter together toddler endorse cabin among expand orient toddler group cradle lady</p> 
                        <div className="btn-group">
                            <button type="button" class="btn btn-success cstmStylebtn" >Copy Phrase</button>
                            <button type="button" class="btn btn-primary cstmStylebtn" >Export as CSV</button>
                        </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default SeedPhraseReveal;