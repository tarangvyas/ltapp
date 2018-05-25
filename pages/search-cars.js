import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '../utils/store';
import Head from '../components/head';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import CommonBanner from './../components/Banner/Common';
import LoginForm from './../components/Forms/Login/LoginForm';
import SearchcarList from './../components/Searchcars/SearchcarList';
import SearchcarForm from './../components/Searchcars/SearchcarForm';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";


class SearchCars extends React.Component {
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
      
     
      let maincontent=<LoginForm />;
      if(this.props.user){
       
       
        maincontent=<SearchcarList token={this.props.token} />;
      }

      return (
          <div>
            <Head title='Search Cars' />
            <Header user={this.props.user}  token={this.props.token}/>
            <CommonBanner page='seach-cars'/>
            <div class="container">
                <div class="row">
                    <SearchcarForm  token={this.props.token} />
                    <SearchcarList  token={this.props.token} />
                </div>    
            </div>    
            <Footer innerfooter='inner-footer-bg' />
        </div>
      );
  }
}
export default withRedux(initStore)(SearchCars);  