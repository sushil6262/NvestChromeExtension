import React, { Component } from 'react';
import QRcode from '../../Image/qrcode.svg';
import Avatar from '../../Image/profile.svg';
import './Qr.css';
import ExtNavbar from '../ExtTopNavbar/ExtNavBar';
import {goBack} from 'route-lite'

class Qrcode extends Component {
    render() {
        return (
            <div>
            <ExtNavbar/>
                <div className="secondContainer">
                <div className="Qrcenter">
                    <img src={Avatar} alt=""/>
                    <h3>TEST 1</h3>
                    <img src={QRcode} alt=""/>
                    <div className="tokenValueone">0X265732345732548756348568934653468569348</div>
                    <br/>
                    <button type="button" className=" btn btn-danger cancelImpButton" style={{marginLeft:"0"}} onClick={() => goBack()}>Cancel</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Qrcode;