import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import WelcomeImgMsg from '../welcomeImgMsg/WelcomeImgMsg';

class InfoandHelp extends Component {
    render() {
        return (
            <div>
                <ExtNavBar />
                <div className="secondContainer">
                    <div className="infoandhelp" style={{marginTop:"40px"}}>
                        <WelcomeImgMsg LgwelMessage="Nvest Bank" LgwelTitle="The decentralized web awaits" />
                        <div className="contentInfo" style={{ textAlign: "center" }}>
                            <p>Version 1.0</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoandHelp;