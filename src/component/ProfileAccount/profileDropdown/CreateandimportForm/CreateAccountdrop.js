import React, { Component } from 'react';
import './CreateAccountdrop.css'

class CreateAccountdrop extends Component {
    render() {
        return (
            <div style={{color:"white"}}>
                    <ul className="listCreation">
                        <li><i class="fas fa-plus"></i><span style={{marginLeft:"12px"}}>Create Account</span></li>
                        <li><i class="fas fa-upload"></i><span style={{marginLeft:"12px"}}>Import Account</span></li>
                    </ul>
            </div>
        );
    }
}

export default CreateAccountdrop;