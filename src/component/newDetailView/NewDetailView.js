import React, { Component } from 'react';
import { Link } from "route-lite";
import Ethereum from '../../Image/Ethereum.svg'
import Send from '../Sent/Sent';

class NewDetailView extends Component {
    render() {
        return (
            <div className="DetailView">
                <img src={Ethereum} alt="eth" />
                <h4 className="textStyle">0 ETH</h4>
                <p className="textStyle">0 TIME</p>
                <div className="btn-group">
                    <Link component={Send}>
                        <button className="btn btn-success cstmdepoandsndstyle"> Send</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NewDetailView;