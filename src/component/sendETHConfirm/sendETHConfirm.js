import React, { Component } from 'react';
import './sendETHConfirm.css';
import avatar from '../../Image/profile.svg';
import Ethereum from '../../Image/Ethereum.svg';
import {goBack} from 'route-lite';

class sendETHConfirm extends Component {
    render() {
        return (
            <div>
                <div className="secondContainer">
                    <div className="confirmone">
                        <p className="onePara" style={{cursor:"pointer"}} onClick={() => goBack()}> <i class="fas fa-arrow-alt-circle-left"></i> Edit</p>
                        <p className="onePara" style={{ fontWeight: "900" }}>Main Ethereum Network</p>
                    </div>
                    <div className="confirmone" style={{ padding: "4px" }}>
                        <img src={avatar} alt="logo" /> <p className="contoken">GxToken Wal</p><i style={{marginTop:"10px"}} className="fas fa-arrow-right"></i>
                        <img src={avatar} alt="logo" /> <p className="contoken">GxToken Wal</p>
                    </div>
                    <div className="confirmtwo">
                        <label style={{ color: "#888888" }}>Confirm</label>
                        <br />
                        <br />
                        <img style={{ width: "30px", marginTop: "-8px" }} src={Ethereum} alt="Eth" /><p className="tokenValueConf">0.001 ETH</p>
                        <p style={{ marginLeft: "32px" }}>$ 0.12</p>
                    </div>
                    <div className="confirmThree">
                        <div>
                            <span style={{ fontWeight: "900" }}>Gas</span>
                        </div>
                        <div>
                            <img style={{ width: "20px", marginTop: "-8px" }} src={Ethereum} alt="Eth" /><p className="tokenValueConf">0.001 ETH</p>
                            <br />
                            <p style={{ marginLeft: "24px", float: "right" }}>$ 0.12</p>
                        </div>
                    </div>
                    <div className="confirmThree">
                        <div>
                            <span style={{ fontWeight: "900" }}>Total</span>
                        </div>
                        <div>
                            <p className="fee">Amount + Gas fee</p><br />
                            <img style={{ width: "20px", marginTop: "-8px" }} src={Ethereum} alt="Eth" /><p className="tokenValueConf" style={{ color: "#4db7ff" }}>0.0571 ETH</p><br />
                            <p style={{ marginLeft: "24px", float: "right" }}>$ 0.12</p>
                        </div>
                    </div>
                    <div className="btngrp">
                        <button type="button" className=" btn btn-danger cancelImpButton" onClick={() => goBack()}>Cancel</button>
                        <button type="submit" onClick={() => goBack()} className=" btn btn-primary importButton">Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default sendETHConfirm;