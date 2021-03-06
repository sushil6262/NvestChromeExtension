import React, { Component } from 'react';
import './profiledropDown.css'
import Logout from '../../../Image/logout1.svg';
import AccountList from '../../AccountList/AccountList';
import CreateAccountdrop from './CreateandimportForm/CreateAccountdrop'
import InfoandSetting from './infoAndSetting/InfoandSetting'

class ProfileDropDown extends Component {
    render() {
        return (
            <div>
                <div className="dropDown">
                    <div className="dropdownMyaccount">
                        <span style={{color:"white"}}>My Account</span>
                        <span>
                            <span style={{color:"white", cursor:"pointer"}}> <img style={{width:"20px"}} src={Logout} alt="logOut"/>  Log Out</span>
                        </span>
                    </div>
                    <div className="acountGroup" style={{overflowY:"auto"}}>
                        <div style={{padding:"12px",paddingBottom:"0"}}>
                            <AccountList/>
                        </div>
                    </div>
                    <div className="createAccountForm" style={{borderTop:"1px solid #dcdcdc",marginTop:"12px",marginBottom:"12px"}}>
                            <CreateAccountdrop toggle={this.props.toggle}/>
                    </div>
                    <div className="createAccountForm" style={{borderTop:"1px solid #dcdcdc",marginTop:"12px",marginBottom:"12px"}}>
                            <InfoandSetting toggle={this.props.toggle}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileDropDown;