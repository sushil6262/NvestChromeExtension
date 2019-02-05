import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import {Link} from 'route-lite';
import ReadSeedWords from '../ReadSeedWords/ReadSeedWords'
import './setting.css';

class Setting extends Component {

    render() {
        return (
            <div>
                <ExtNavBar />
                <div className="secondContainer">
                    <h1 style={{ fontWeight: "900", color: "#1b2443" }}>Setting</h1>
                    <div className="settingContainer">
                        <h5 style={{ fontWeight: "900", color: "#888888" }}>Primary Currency</h5>
                        <p style={{ textAlign: "justify" }}>
                            Select native to prioritize displaying values in the native
                            currency of the chain (e.g. ETH). Select Fiat to prioritize displaying values in your selected fiat currency.
                        </p>
                        <form>
                            <input type="radio" name="gender" value="ETH" /> <span className="radiostyle">ETH</span>
                            <input style={{ marginLeft: "40px" }} type="radio" name="gender" value="Fiat" /> <span className="radiostyle">Fiat</span>
                        </form>
                        <div style={{ marginTop: "24px" }}>
                            <h5 style={{ fontWeight: "900", color: "#888888" }}>Reveal Seed Words</h5>
                            <Link component={ReadSeedWords}>
                                <button className="btn btn-warning customRevealbtn">Reveal Seed Words</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;