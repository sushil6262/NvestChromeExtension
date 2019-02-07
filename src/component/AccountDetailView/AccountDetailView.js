import React, { Component } from 'react';
import ExtNavBar from '../ExtTopNavbar/ExtNavBar';
import SecondNavbar from '../SecondNavbar/SecondNavbar';
import DetailView from '../DetailView/DetailView';
import './AccountDetailView.css';

class AccountDetailView extends Component {
    render() {
        return (
            <div>
                <ExtNavBar/>
                <SecondNavbar/>
                <div className="AccountDetailView">
                    <DetailView/>
                    <span style={{paddingLeft:"12px",color:"#888888"}}>History</span>
                </div>
            </div>
        );
    }
}

export default AccountDetailView;