import React, { Component } from 'react';
import './accountList.css';
import Profile from '../../Image/profile.svg'

class AccountList extends Component {
    state = {
        userAccountDetail: [
            { id: "1", name: "shorupan", amount: "100", avatar:Profile },
            { id: "2", name: "sushil", amount: "0", avatar:Profile },
            // { id: "3", name: "Kishore", amount: "0", avatar:Profile },
            // { id: "4", name: "chiranjeevi", amount: "0", avatar:Profile },
            // { id: "5", name: "shudanshu", amount: "0", avatar:Profile },
        ]
    }
    render() {
        return (
            <div className="AccountList">

                {
                    this.state.userAccountDetail.map(user => {
                        return (
                            <div className="userAccount" style={{ color: "white" }} key={user.id}>
                                <img style={{ width: "30px", marginLeft: "10px" }} src={user.avatar} alt="" />
                                <div className="userName">
                                    <span style={{ display: "block", fontWeight: "bold" }}>{user.name}</span>
                                    <span>{user.amount} ETH</span>
                                </div>
                            </div>
                    )
                    })
                }
            </div>
        );
    }
}

export default AccountList;
