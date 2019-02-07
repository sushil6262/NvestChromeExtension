import React, { Component } from 'react';
import './SecondSChildthree.css'

class SecondSChildthree extends Component {
    render() {
        return (
            <div className="SecondSChildthree">
                <h5 style={{fontWeight:"900"}}>Don't see your tokens?</h5>
                <h6 style={{fontWeight:"900",width:"140px",textAlign:"center"}}>Click on Add Token to add them to your account</h6>
                <span className="AddTokenSSCThree">
                    Add Token
                </span>
            </div>
        );
    }
}

export default SecondSChildthree;