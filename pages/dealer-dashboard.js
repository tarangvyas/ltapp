import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import Head from '../components/head';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import CommonBanner from './../components/Banner/Common';
import LoginForm from './../components/Forms/Login/LoginForm';
import DealerDashboard from './../components/Dealer/DealerDashboard';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";


class SellMyCar extends React.Component {
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
  render(){
      let title="Login"
      let page='login';
      let maincontent=<LoginForm />;
      if(this.props.user){
        page="dealer-dashboard";
        title="Dealer Dashboard"
        maincontent=<DealerDashboard token={this.props.token} />;
      }

      return (
          <div>
            <Head title={title} />
            <Header user={this.props.user} token={this.props.token}/>
            <CommonBanner page={page} />
            {maincontent}
            <Footer innerfooter='inner-footer-bg' />
        </div>
      );
  }
}
export default withRedux(initStore)(SellMyCar);  