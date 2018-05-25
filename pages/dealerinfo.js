import React from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import Infobanner from './../components/Banner/Infobanner'
import Dealerinfo from './../components/Dealer/Dealerinfo'
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';

class DealerInfo extends React.Component {
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
            <Head title="Dealer Information" />
            <Header />
            <Infobanner page='dealer-info'/>
            <Dealerinfo/>
            <Footer innerfooter='inner-footer-bg' />
        </div>)
  }
}
export default withRedux(initStore)(DealerInfo);  
