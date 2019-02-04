import React, { Component } from 'react';
import '../CreateandimportForm/CreateAccountdrop.css'

class InfoandSetting extends Component {
    render() {
        return (
            <div style={{color:"white"}}>
                    <ul className="listCreation">
                        <li><i className="fas fa-info-circle"></i><span style={{marginLeft:"12px"}}>info and Help</span></li>
                        <li><i className="fas fa-cog"></i><span style={{marginLeft:"12px"}}>Setting</span></li>
                    </ul>
            </div>
        );
    }
}

export default InfoandSetting;