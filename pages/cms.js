import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import Head from '../components/head'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import CommonBanner from './../components/Banner/Common'
import Cms from './../components/Cms/Cms';

class CmsPage extends React.Component {
  constructor(props){
      super(props);
      this.state={
        regno:null
      }
  }
  render(){
  	  return (
          <div>
            <Head title={this.props.url.query.page_title} />
            <Header />
            <CommonBanner page="cms" pagetitle={this.props.url.query.page_title} />
            <Cms page={this.props.url.query.page} />
            <Footer innerfooter='inner-footer-bg' />
        </div>
      );
  }
}

export default withRedux(initStore)(CmsPage);  