// import axios from 'axios';
import React, { Component } from 'react';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "", isLogin: 0 };

    this.loginSuccess = this.loginSuccess.bind(this);
  }

  // componentDidMount() {
  //   // 1.) Fix Data
  //   // this.setState({
  //   //   products: [
  //   //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //   //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //   //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //   //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //   //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //   //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  //   //   ]
  //   // })

  //   // 2.) Rest API
  //   // fetch("http://localhost:3001/products", { method: "GET" })
  //   //   .then(res => res.json())
  //   //   .then(res => { this.setState({ products: res }) })

  //   // 3.) Axios
  //   axios.get("http://localhost:3001/products")
  //     .then(res => {
  //       this.setState({ products: res.data })
  //     });

  // }

  loginSuccess() {
    this.setState({isLogin: 1});
  }

  logoutSuccess() {
    this.setState({isLogin: 0});
  }

  render() {
    let contentTag = "";
    if (this.state.isLogin === 0) {
      contentTag = <Login onLoginSuccess={this.loginSuccess} />
    }
    else {
      contentTag = <Main />
    }
    return (
      <div>
        <Header isLogin = {this.state.isLogin} onLogoutSuccess={this.logoutSuccess} />
        {contentTag}
        <Footer company="Komnut Wantanasilp" email="komnut.wan@gmail.com" />
      </div>
    );
  }
}

export default App;
