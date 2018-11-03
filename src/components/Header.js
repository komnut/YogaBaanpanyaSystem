import React, { Component } from "react";
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    const isLogin = this.props.isLogin;
    let loginTag = "";
    if(isLogin === 0){
      loginTag = <LoginLink />;
    }
    else{
      loginTag = <LogoutLink onLogoutSuccess={this.props.onLogoutSuccess} />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success mt-2">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />{" "}
              โยคะบ้านปัญญา{" "}
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-3">
              {this.state.date.toLocaleTimeString()}{" "}
            </h5>
            <h5 className="text-muted">
              {loginTag}
            </h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
