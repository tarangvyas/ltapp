import React from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import CommonBanner from './../components/Banner/Common';

import EditPreference from './../components/Dealer/EditPreference'
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";

class EditPreferences extends React.Component {
  constructor(props){
    super(props);
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
      console.log(this.props.url.query.regno);
      return (
        <div>
            <Head title="Edit Preferences" />
            <Header user={this.props.user}  token={this.props.token}/>
            <CommonBanner page='edit-preferences' />
            <EditPreference  token={this.props.token} />
            <Footer innerfooter='inner-footer-bg' />
        </div>)
  }
}
export default withRedux(initStore)(EditPreferences);  