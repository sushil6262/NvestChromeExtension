import React, { Component } from 'react';
import './SecondSChildone.css'
import Profile from '../../Image/profile.svg'

class SecondSChildone extends Component {
    render() {
        return (
            <div className="userAccountSSC">
                <img src={Profile} alt=""/>
                <h4 style={{fontWeight:"900",margin:"0"}}>Account 5</h4>
                <h6 style={{color:"#007cff",fontWeight:"900"}}>Detail</h6>
                <span className="tokenidSSC">
                0X745946894b3985395893hdjfhd
                </span>
            </div>
        );
    }
}

export default SecondSChildone;