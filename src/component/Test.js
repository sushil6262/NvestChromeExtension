import React, { Component } from 'react';
import ExtNavBar from './ExtTopNavbar/ExtNavBar';
import { Link, goBack } from 'route-lite';

class Test extends Component {
    render() {
        return (
            <div>
                <ExtNavBar />
                <div onClick={() => goBack()}>hello</div>
            </div>
        );
    }
}

export default Test;