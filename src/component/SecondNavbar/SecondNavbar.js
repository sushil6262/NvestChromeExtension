import React, { Component } from 'react';
import './SecondNavbar.css';
import SecondSidebarContent from '../secondSidebarContent/SecondSidebarContent.js'

class SecondNavbar extends Component {
    state={
        hideSecondsidebar:true
    }
    secondToggle=()=>{
        this.setState({
            hideSecondsidebar:!this.state.hideSecondsidebar
        })
    }
    render() {
        return (
            <div style={{ height: "40px", backgroundColor: "#172444" }}>
                <div className="displaySecond">
                    <i className="fas fa-bars hmbrgmenu" onClick={this.secondToggle}></i>
                    <div style={{textAlign:"center",width:"100px"}}>
                    <h5 style={{color:"white",margin:"0",fontWeight:"900",marginTop:"4px"}}>Account 5</h5>
                    <p className="textellipses" style={{color:"white"}}>0xdhfjdhfjdjfjdgjsgkdgdkgkdgk86749684dj</p>
                    </div>
                    <span><i style={{color:"white",lineHeight:"40px",marginRight:"12px",cursor:"pointer"}} className="fas fa-ellipsis-h"></i></span>
                </div>
                <div className={this.state.hideSecondsidebar?"secondNabrside":"secondNabrsidepull"}>
                <i className="fas fa-times hmbrgmenu" style={{color:"#172444"}} onClick={this.secondToggle}></i>
                <SecondSidebarContent secondToggle={this.secondToggle}/>
                </div>
            </div>
        );
    }
}

export default SecondNavbar;