import React, { Component } from 'react';
import './secondsidebarcontent.css';
import SecondSChildone from '../SSChildone/SecondSChildone';
import SecondSChildtwo from '../SecondSChildtwo/SecondSChildtwo'


class SecondSidebarContent extends Component {
    render() {
        return (
            <div className="SecondSidebarContent">
                <SecondSChildone/>
                <SecondSChildtwo/>
            </div>
        );
    }
}

export default SecondSidebarContent;