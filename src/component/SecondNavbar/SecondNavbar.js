import React, { Component } from 'react';
import './SecondNavbar.css';
import SecondSidebar from '../secondSidebar/SecondSidebar'

class SecondNavbar extends Component {
    state={
        hideSecondsidebar:false
    }
    render() {
        return (
            <div style={{ height: "40px", backgroundColor: "#172444" }}>
                <div className="displaySecond">
                    <i className="fas fa-bars hmbrgmenu"></i>
                    <div style={{textAlign:"center",width:"100px"}}>
                    <h5 style={{color:"white",margin:"0",fontWeight:"900",marginTop:"4px"}}>Account 5</h5>
                    <p className="textellipses" style={{color:"white"}}>0xdhfjdhfjdjfjdgjsgkdgdkgkdgk86749684dj</p>
                    </div>
                    <span><i style={{color:"white",lineHeight:"40px",marginRight:"12px",cursor:"pointer"}} className="fas fa-ellipsis-h"></i></span>
                </div>
            </div>
        );
    }
}

export default SecondNavbar;