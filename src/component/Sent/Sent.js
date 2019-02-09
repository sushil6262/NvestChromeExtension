import React, { Component } from 'react';
import ExtNavbar from '../ExtTopNavbar/ExtNavBar';
import avatar from '../../Image/profile.svg';
import { Link, goBack } from 'route-lite';
import './sent.css';
import sendETHConfirm from '../sendETHConfirm/sendETHConfirm'

class Sent extends Component {
    state = {
        selectTokenValue: [
            { id: 1, STvalue: "Account 1" },
            { id: 2, STvalue: "Account 2" },
            { id: 3, STvalue: "Account 3" },
            { id: 4, STvalue: "Account 4" },
            { id: 5, STvalue: "Account 5" },
        ],
        eTHValue: '',
        accountValue: '',
        radio1: '',
        radio2: '',
        radio3: '',
    }
    handleChangeETH = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {

        console.log(this.state.eTHValue);
        return (
            <div>
                <ExtNavbar />
                <div className="secondContainerToken">
                    <div>
                        <h1 style={{ fontWeight: "900", color: "#1b2443" }}>Send ETH</h1>
                        <p style={{ textAlign: "justify", color: "#888888" }}>
                            Only send ETH to an Ethereum address.
                        </p>
                    </div>
                    <label style={{ color: "#888888" }}>FROM:</label>
                    <div className="well" style={{ padding: "8px", borderRadius: "0" }}>
                        <div>
                            <img src={avatar} style={{ width: "24px", marginTop: "-6px", marginRight: "8px" }} alt="token" />
                            <p style={{ fontWeight: "900", marginTop: "2px", display: "inline-block", margin: "0" }}>SUSHIL</p>
                        </div>
                        <div style={{ marginLeft: "32px" }}>
                            <span style={{ display: "block" }}>0 ETH</span>
                            <span style={{ display: "block" }}>0 TIME</span>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label style={{ color: "#a5a3a3", float: "left" }}>TO:</label>
                            <select className="form-control customSelectForm" id="accountValue" placeholder="To :" onChange={this.handleChangeETH}>
                                {this.state.selectTokenValue.map(optionValue => {
                                    return (
                                        <option disabled selected key={optionValue.id} value={optionValue.STvalue}>{optionValue.STvalue}</option>
                                    )
                                })}
                            </select>
                            <div className="well" style={{ padding: "4px", borderRadius: "0", marginTop: "12px", marginBottom: "-8px" }}>
                                <div style={{ display: "flex" }}>
                                    <input type="text" className="form-control customformInput" id="eTHValue" autoComplete="off" placeholder="0 ETH" onChange={this.handleChangeETH} /><p style={{ marginTop: "8px" }}>ETH</p>
                                </div>
                                <div style={{ marginLeft: "12px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ width: "250px", overflow: "hidden" }}>12345</p>
                                    <p style={{ marginLeft: "16px" }}>TIME</p>
                                </div>
                            </div>
                        </div>
                        <div className="wellee" style={{ borderRadius: "0", marginTop: "4px", display: "flex" }}>
                            <input type='radio' value='0.000105' name='radio' id='radio1' />
                            <label className="btn widthSeparation" for='radio1'>
                                <p style={{ fontWeight: "900", margin: "0" }}>Fastest</p>
                                <p className="custmparag">0.000076666010</p><p className="custmparage">ETH</p>
                                <p style={{ fontSize: "10px", margin: "0" }}>0.011</p>
                            </label>
                            <input type='radio' value='0.0000105' name='radio' id='radio2' />
                            <label className="btn widthSeparation" for='radio2'>
                                <p style={{ fontWeight: "900", margin: "0" }}>Fast</p>
                                <p className="custmparag">0.000076666010</p><p className="custmparage">ETH</p>
                                <p style={{ fontSize: "10px", margin: "0" }}>0.011</p>
                            </label>
                            <input type='radio' value='0.0000105' name='radio' id='radio3' />
                            <label className="btn widthSeparation" for='radio3'>
                                <p style={{ fontWeight: "900", margin: "0" }}>Slow</p>
                                <p className="custmparag">0.000076666010</p><p className="custmparage">ETH</p>
                                <p style={{ fontSize: "10px", margin: "0" }}>0.011</p>
                            </label>
                        </div>
                        <div className="btngrp">
                            <button type="button" className=" btn btn-danger cancelImpButton" style={{ marginLeft: "0" }} onClick={() => goBack()}>Cancel</button>
                            <Link component={sendETHConfirm}>
                                <button type="submit" className=" btn btn-primary importButton" style={{ marginRight: "0" }}>Next</button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Sent;