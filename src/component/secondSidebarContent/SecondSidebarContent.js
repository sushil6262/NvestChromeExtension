import React, { Component } from 'react';
import './secondsidebarcontent.css';
import SecondSChildone from '../SSChildone/SecondSChildone';
import SecondSChildtwo from '../SecondSChildtwo/SecondSChildtwo'
import SecondSChildthree from '../SecondSChildthree/SecondSChildthree'


class SecondSidebarContent extends Component {
    render() {
        return (
            <div className="SecondSidebarContent">
                <SecondSChildone/>
                <SecondSChildtwo secondToggle={this.props.secondToggle}/>
                <SecondSChildthree/>
            </div>
        );
    }
}

export default SecondSidebarContent;