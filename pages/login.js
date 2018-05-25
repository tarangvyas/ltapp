import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import Head from '../components/head'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer'
import CommonBanner from './../components/Banner/Common'
import LoginForm from './../components/Forms/Login/LoginForm'


class Login extends React.Component {
  constructor(props){
      super(props);
      this.state={
        regno:null
      }
  }
  render(){
      return (
          <div>
            <Head title="Login" />
            <Header />
            <CommonBanner page="login" />
            <LoginForm />
            <Footer innerfooter='inner-footer-bg' />
        </div>
      );
  }
}

export default withRedux(initStore)(Login);  