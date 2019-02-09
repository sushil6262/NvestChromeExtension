import React, { Component } from 'react';
import './IaAccounTabs.css';
import {goBack} from 'route-lite'

class IaAccounTabs extends Component {
    render() {
        return (
            <div className="CAform">
            <form>
            <div className="form-group">
                <label htmlFor="Password" style={{ color: "#a5a3a3", float: "left" }}>Account Name</label>
                <input required className="passwordBox form-control" id="extPassword" type="password" pattern=".{4,}" autoComplete="off" onChange={this.handleChange} />
                <button className="btn btn-primary CreateButton" >Create</button>
            </div>
            </form>
                <br />

            <button className=" btn btn-danger cancelButton" onClick={() => goBack()}>Cancel</button>
            
            </div>
        );
    }
}



export default IaAccounTabs;