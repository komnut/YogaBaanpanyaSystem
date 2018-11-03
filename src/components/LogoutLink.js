import React, { Component } from "react";

class LogoutLink extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <p><a href="/" onClick={()=>this.props.onLogoutSuccess()} className='text-danger'>ออกจากระบบ</a>{" "}</p>
        )
    }
}

export default LogoutLink;