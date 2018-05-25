import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import Head from '../components/head';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import CommonBanner from './../components/Banner/Common';
import Cardetail from './../components/Cardetail/Cardetail';
import SearchcarForm from './../components/Searchcars/SearchcarForm';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";

class CarDetail extends React.Component {   
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
      return (
          <div>
            <Head title="Car Detail" />
            <Header user={this.props.user}  token={this.props.token}/>
            <CommonBanner page='car-detail' />
            <Cardetail  token={this.props.token} id={this.props.url.query.id}  user={this.props.user}/>              
            <Footer innerfooter='inner-footer-bg' />
        </div>
      );
  }
}
export default withRedux(initStore)(CarDetail);  