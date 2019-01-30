import React, { Component } from 'react';
import './extNavBar.css';
import LogoEXT from '../../Image/blueNv.svg';

class ExtNavBar extends Component {
    render() {
        return (
            <div className="ExtNavBar">
                <div className="parentExtLogo">
                    <img className="ExtLogo" src={LogoEXT} alt="Nvest Logo" />
                </div>
            </div>
        );
    }
}

export default ExtNavBar;