import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Header from './../components/Header/Header';
import Banner from './../components/Banner/Banner';
import Featured from './../components/Featured/Featured';
import Whyus from './../components/Whyus/Whyus';
import Howitwork from './../components/Howitwork/Howitwork';
import Aboutus from './../components/Aboutus/Aboutus';
import Notify from './../components/Notify/Notify';
import Footer from './../components/Footer/Footer';


import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";

class Index extends React.Component {
  constructor(props){
      super(props);
      this.state={
        regno:null
      }
  }
  static async getInitialProps(ctx) {
        let user = getCookie('user',ctx.req);
        if(user != undefined){
          user = JSON.parse(decodeURIComponent(user));
        }else{
          user=false;
        }
        return { user }
  }
  registerNumberHandler = (e,id) =>{
    let input=document.getElementById(id);
    let regno=input.value;
    let inputClasses = input.classList;
    inputClasses.remove("alert-danger");
    if(regno==""){
      inputClasses.add("alert-danger");
    }else{
      Router.push({
        pathname: '/register',
        query: { regno: regno }
      })
    }
  }
  registerNumberSellHandler = (e,id) =>{
    let input=document.getElementById(id);
    let regno=input.value;
    let inputClasses = input.classList;
    inputClasses.remove("alert-danger");
    if(regno==""){
      inputClasses.add("alert-danger");
    }else{
      alert('redirect to sell page'+regno);
    }
  }
  render() {
    return (<div>
    <Head title="Home" />
    <Header user={this.props.user} />
    <Banner regHandler={this.registerNumberHandler} />
    <Featured />
    <Whyus />
    <Howitwork />
    <Aboutus />
    <Notify regSellHandler={this.registerNumberSellHandler} />
    <Footer innerfooter='' />
  </div>)
  }
}
export default withRedux(initStore)(Index);
