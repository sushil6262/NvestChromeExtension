import React, { Component } from 'react';
import './detailView.css';
import Ethereum from '../../Image/Ethereum.svg'

class DetailView extends Component {
    render() {
        return (
            <div className="DetailView">
                <img src={Ethereum} alt="eth"/>
                <h4 className="textStyle">0 ETH</h4>
                <p className="textStyle">0 TIME</p>
                <div className="btn-group">
                    <button className="btn btn-primary cstmdepoandsndstyle">Deposit</button>
                    <button className="btn btn-success cstmdepoandsndstyle">  Send</button>
                </div>
            </div>
        );
    }
}

export default DetailView;
