import React, { Component } from 'react';
import './history.css';
import Ethereum from '../../Image/Ethereum.svg';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import TransactionDetail from './TransactionDetail/TransactionDetail'
import Sushil from '../SSChildone/SecondSChildone'
class History extends Component {
    state = {
        tokenDetail: [
            { id: "one1",triggerId:"#one1", message: "Sent Tokens", status: "CONFIRMED", amount: 2324, amountUSD: 655, amountDate:"1/22/2019" },
            { id: "two1",triggerId:"#two1", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
            { id: "two2",triggerId:"#two2", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
            { id: "two3",triggerId:"#two3", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
            { id: "two4",triggerId:"#two4", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
            { id: "two5",triggerId:"#two5", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
            { id: "two6",triggerId:"#two6", message: "Sent Tokens", status: "PENDING", amount: 234, amountUSD: 55, amountDate:"1/24/2019" },
        ]
    }
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div className="history">
                {this.state.tokenDetail.map(tokenDetail=>{
                    return (
                        <div className="parentHistory" key={tokenDetail.id}>
                    <div className="tokenBoxhistory" id={tokenDetail.id}>
                        <div className="logotoken" style={{display:"flex"}}>
                            <img src={Ethereum} style={{height:"46px",marginTop:"6px"}} alt="" />
                            <span className="valuePositioning">
                                <span style={{fontSize:"10px"}} className="text-muted">{tokenDetail.amountDate}</span>
                                <span style={{fontWeight:"900"}}>{tokenDetail.message}</span>
                                <span className="confirmedBox">{tokenDetail.status}</span>
                            </span>
                        </div>
                        <div className="tokenAmount valuePositioning">
                            <span style={{fontWeight:"900"}}>{tokenDetail.amount} ETH</span>
                            <span>{tokenDetail.amountUSD} USD</span>
                        </div>
                    </div>
                    <UncontrolledCollapse toggler={tokenDetail.triggerId}>
                        <Card>
                            <CardBody className="cstmbdycrd">
                            <div>
                            <p className="text-muted">Details</p>
                            <div className="FromTo" style={{ display: "flex" }}>
                                From : <div className="Fromone">475643896534896534</div> > To : <div className="totwo">475643896534896534</div>
                            </div>
                            <div className="transactionLabel">
                                <p className="text-muted">Transaction</p>
                            </div>
                            <div className="trnsactionItem">
                                <span>Amount</span>
                                <span style={{fontWeight:"bold"}}>0 ETH</span>
                            </div>
                            <div className="trnsactionItem">
                                <span>Gas Limit (Units)</span>
                                <span style={{fontWeight:"bold"}}>0.7563473 ETH</span>
                            </div>
                            <div className="trnsactionItem">
                                <span>Gas Used (Units)</span>
                                <span style={{fontWeight:"bold"}}>0 ETH</span>
                            </div>
                            <div className="trnsactionItem">
                                <span>Gas Price (GWEI)</span>
                                <span style={{fontWeight:"bold"}}>0 ETH</span>
                            </div>
                            <div className="trnsactionItem">
                                <span>Total</span>
                                <span style={{fontWeight:"bold"}}>0.00109 ETH</span>
                            </div>
                            <div className="trnsactionItem" style={{border:"none"}}>
                                <span></span>
                                <span style={{fontWeight:"bold"}}>$0.01 USD</span>
                            </div>
                            <div className="transactionLabel" style={{borderBottom:"1px solid #dcdcdc"}}>
                                <p className="text-muted">Activity Log</p>
                            </div>
                            <div className="stylingTimeline"><div><i className="fas fa-check-circle paddingleft"></i></div><div style={{marginLeft:"12px"}}>Transaction created with a value of 0 ETH at 23:28 on 1/22/2019 </div></div>
                            <div className="stylingTimeline"><div><i className="fas fa-arrow-circle-right paddingleft"></i></div><div style={{marginLeft:"12px"}}>Transaction created with a value of 0 ETH at 23:28 on 1/22/2019 </div></div>
                            <div className="stylingTimeline"><div><i className="fas fa-check-circle paddingleft"></i></div><div style={{marginLeft:"12px"}}>Transaction confirmed at 23:29 on 1/22/2019</div></div>
                        </div>    
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                    )
                })}
            </div>
        );
    }
}

export default History;

