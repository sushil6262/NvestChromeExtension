import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import SecondNavbar from '../SecondNavbar/SecondNavbar';
import './newAccountCard.css';
import NewDetailView from '../newDetailView/NewDetailView';
import NewHistory from '../NewHistory/NewHistory'

class NewAccountCard extends Component {
    render() {
        return (
            <div>
                <ExtNavBar/>
                <SecondNavbar/>
                <div className="AccountDetailView">
                    <NewDetailView/>
                    <span style={{paddingLeft:"12px",color:"#888888"}}>History</span>
                    <NewHistory/>
                </div>
            </div>
        );
    }
}

export default NewAccountCard;