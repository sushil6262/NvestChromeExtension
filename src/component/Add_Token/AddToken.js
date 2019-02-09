import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import {Link,goBack} from 'route-lite';
import ImportAddToken from './InsertAddToken/InserAddToken';

class AddToken extends Component {
    state={
        tokenAddress:"",
        tokenSymbol:"",
        decimalPrecision:""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }
    
    render() {
        let {tokenAddress,tokenSymbol,decimalPrecision }= this.state;
        const isEnabled = tokenAddress.length > 16 && tokenSymbol.length > 1 && decimalPrecision.length > 2;
        return (
            <div>
                <ExtNavBar />
                <div className="secondContainer">
                    <h1 style={{ fontWeight: "900", color: "#1b2443" }}>Add Token</h1>
                    <p style={{textAlign:"justify",color:"#888888"}}>
                        Add accounts will not be associated with your originally created MetaMask account seedphrase. Learn more about imported accounts here
                    </p>
                    <form>
                        <div className="centeringform NvestForm">
                            <div className="form-group cstFormGrp">
                                <label style={{ color: "#a5a3a3", float: "left" }}>Token Address:</label>
                                <input required className="passwordBox form-control" id="tokenAddress" type="text" pattern=".{15,}" autoComplete="off" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="centeringform NvestForm">
                            <div className="form-group cstFormGrp">
                                <label style={{ color: "#a5a3a3", float: "left" }}>Token Symbol:</label>
                                <input required className="passwordBox form-control" id="tokenSymbol" type="text" pattern=".{2,}" autoComplete="off" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="centeringform NvestForm">
                            <div className="form-group cstFormGrp">
                                <label style={{ color: "#a5a3a3", float: "left" }}>Decimals of Precision:</label>
                                <input required className="passwordBox form-control" id="decimalPrecision" type="number" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="btngrp">
                            <button type="button" className=" btn btn-danger cancelImpButton" onClick={() => goBack()}>Cancel</button>
                            <Link component={ImportAddToken}>
                                <button type="submit" disabled={!isEnabled} className=" btn btn-primary importButton">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddToken;