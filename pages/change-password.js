import React from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import CommonBanner from './../components/Banner/Common';
import Changepassword from './../components/Changepassword/Changepassword';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";

class Register extends React.Component {
  constructor(props){
      super(props);
      this.state={
        regno:null
      }
  }
  static async getInitialProps(ctx) {
    let user  = getCookie('user',ctx.req);
    let token = getCookie('jwt',ctx.req);
    
    if(user != undefined){
      user = JSON.parse(decodeURIComponent(user));
    }else{
      user=false;
    }
    return { user,token }
  }
  render() {
      return (
        <div>
            <Head title="Change Password" />
            <Header user={this.props.user}  token={this.props.token}/>
            <CommonBanner page='change-password' />
            <Changepassword token={this.props.token} page='change-password'/>
            <Footer innerfooter='inner-footer-bg' />
        </div>)
  }
}
export default withRedux(initStore)(Register);  
