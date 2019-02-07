import React, { Component } from 'react';
import './history.css';
import Ethereum from '../../Image/Ethereum.svg';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
class History extends Component {
    state = {
        tokenDetail: [
            { id: 1, message: "Sent Tokens", status: "CONFIRMED", amount: 2324, amountUSD: 655 }
        ]
    }
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {

        return (
            <div className="history">
                <div className="parentHistory">
                    <div className="userAccount customAmountList" id="toggler">
                        <img style={{ width: "30px", marginLeft: "10px" }} src={Ethereum} alt="" />
                        <div className="userName" style={{ marginTop: "12px", marginLeft: "12px" }}>
                            <span style={{ display: "block", fontWeight: "bold" }}>sushil</span>
                            <span> ETH</span>
                        </div>
                        <div className="userName" style={{ marginTop: "12px", marginLeft: "40px" }}>
                            <span className="numverOverflow" style={{display:"block"}}>-0.37875 ETH</span>
                            <span className="numverOverflow"> 34656 USD</span>
                        </div>
                    </div>
                    <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody className="cstmbdycrd">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                dignissimos esse fuga! Minus, alias.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
            </div>
        );
    }
}

export default History;

