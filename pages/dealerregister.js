import React from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import CommonBanner from './../components/Banner/Common';

import Dealerregister from './../components/Dealer/Dealerregister'
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';

class DealerRegister extends React.Component {
  constructor(props){
      super(props);
      this.state={
        regno:null
      }
  }
  componentWillReceiveProps(nextProps) {
    const { pathname, query } = nextProps.url
    if(query.regno==undefined){

    }
    if(query.regno!=undefined && query.regno==""){
        
    }
  }
  render() {
      console.log(this.props.url.query.regno);
      return (
        <div>
            <Head title="Dealer Registration" />
            <Header />
            <CommonBanner page='dealer-register' />
            <Dealerregister />
            <Footer innerfooter='inner-footer-bg' />
        </div>)
  }
}
export default withRedux(initStore)(DealerRegister);  
