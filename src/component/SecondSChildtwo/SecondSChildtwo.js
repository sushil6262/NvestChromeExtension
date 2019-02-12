import React, { Component } from 'react';
import './SecondSChildtwo.css';
import Profile from '../../Image/profile.svg';
import NewAccountCard from '../newAccountCard/NewAccountCard';
import { Link } from 'route-lite'

class SecondSChildtwo extends Component {
    state = {
        tokenValue: [
            { id: 1, tokenName: "ETH", tokenAmount: 7235, tokenTime: 56, tokenAvatar: Profile },
            { id: 2, tokenName: "STH", tokenAmount: 75, tokenTime: 16, tokenAvatar: Profile },
            { id: 3, tokenName: "STH", tokenAmount: 75, tokenTime: 16, tokenAvatar: Profile },
            { id: 4, tokenName: "STH", tokenAmount: 75, tokenTime: 16, tokenAvatar: Profile },
            { id: 5, tokenName: "STH", tokenAmount: 75, tokenTime: 16, tokenAvatar: Profile },
        ]
    }
    render() {
        return (
            <div className="SecondSChildtwo">
                {this.state.tokenValue.map(token => {
                    return (
                        <Link component={NewAccountCard}>
                            <div className="tokenSSCParent" onClick={this.props.secondToggle} key={token.id}>
                                <img src={token.tokenAvatar} alt="tokenImage" />
                                <div className="tokenValue">
                                    <h4>{token.tokenAmount} {token.tokenName}</h4>
                                    <h6>{token.tokenTime} TIME</h6>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        );
    }
}

export default SecondSChildtwo;