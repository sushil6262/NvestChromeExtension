import React, { Component } from 'react';
import './importAccounttab.css';
import {goBack} from 'route-lite'

class ImportAccountTabs extends Component {
    render() {
        return (
            <div className="CAform">
                <span className="description">
                    Imported accounts will not be associated with your originally created MetaMask account seedphrase. Learn more about imported accounts here
                </span>
                <form>
                    <div className="centeringform">
                        <div className="form-group cstFormGrp">
                            <label style={{ color: "#a5a3a3", float: "left" }}>Select Type</label>
                            <select className="form-control customSelectForm">
                                <option value="Primary Key">Primary Key</option>
                                <option value="JSON File">JSON File</option>
                            </select>
                        </div>
                        <div className="form-group cstFormGrp">
                            <label style={{ color: "#a5a3a3", float: "left" }}>Paste your private key string here:</label>
                            <input required className="passwordBox form-control" id="pharse" type="text" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="btngrp">
                        <button type="button" className=" btn btn-danger cancelImpButton" onClick={() => goBack()}>Cancel</button>
                        <button type="submit" className=" btn btn-primary importButton">Import</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ImportAccountTabs;

