import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import Router from 'next/router'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './../renderField'
import {LoginRequest} from './../../../actions/login'
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../../../lib/session";


class LoginForm extends Component {
  constructor(props) {
    super(props)
  }
  handleFormSubmit(formProps) {
        //alert('here');
        //console.log("=====formProps",formProps);
        this.props.LoginRequest(formProps);
  }
  render() {
    //console.log("message",this.props.message);
    let error_message=null;
    if(this.props.isLogin){
        setCookie('jwt',this.props.token);
        setCookie('user',this.props.user);
        alert(this.props.user.user_type);
        if(this.props.user.user_type === 1)
            Router.push('/sell-my-car');
        else    
            Router.push('/dealer-dashboard');        
    }else{
        if(this.props.message!=""){
            
            let errors="Something Went Wrong";
            if(this.props.message.errors!=null) {
                errors=Object.keys(this.props.message.errors).map((item,i)=>{
                    return <div>{this.props.message.errors[item][0]}</div>;
                });
            }
            error_message=<div className="alert alert-danger"><strong>Error!</strong> {errors}</div>
        }
    }  
    const { handleSubmit } = this.props
    return (
  <div>
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
   <div className="container">
     <div id="error_message">{error_message}</div>
   <div className="row">
      <div className="col-sm-10 col-md-8 col-lg-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 login-page">
         <h3 className="font-l text-uppercase text-gray text-center form-group mar-top"><span className="font-b text-success-dark">Sign-in</span> to Lotus Trader</h3>
         <div className="well mar-b">
            <div className="form-group">
               <h5 className="font-m text-gray mar-t">Email</h5>
               <Field name="email" classes="form-control" type="email" component={renderField}/>
            </div>
            <div className="form-group">
               <h5 className="font-m text-gray">Password</h5>
               <Field placeholder="Password" name="password" classes="form-control" type="password" component={renderField}/>
            </div>
            <div className="form-group">
               <Link href="#"><a className="text-success-dark font-m forgotten-link"><u>I've forgotten my password</u></a></Link>
            </div>
            
            <div className="clearfix login-login-btn form-inline">
               <button type="submit" className="btn font-m btn-success btn-lg text-uppercase form-group">Login</button>
               <div className="form-group font-m account-then">Or - if you don't have an account then <Link href="/register"><a className="text-yellow-dark"><u>Sign-up</u></a></Link>.</div>
            </div>
         </div>
      </div>
   </div>
   </div>
  <div className="clearfix"></div>
  </form>
  <style jsx>{`
        .login-page .well{border-radius: 0; box-shadow: 0 0 17px #ededed; padding: 30px; overflow: hidden;}
        .login-page h3 {margin-bottom: 40px;}
        .login-page .login-login-btn .btn{min-width: 110px; margin-right: 20px;}
        .login-page .login-login-btn {margin-top: 30px;}

        @media all and (max-width: 767px) {
        .login-login-btn .btn,
        .account-then{display: inline-block;}
        .login-page .login-login-btn .btn {margin-right: 10px;}
        .login-page .well {padding: 20px;}
        }	
        @media all and (max-width: 567px) {
        .account-then {font-size: 13px; margin-bottom: 0; margin-top: 14px; width: 100%;}
        }
  `}</style>
  </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

function mapStateToProps(state) {
   return {
        isLogin : state.Login.isLogin,
        token   : state.Login.token,
        user: state.Login.user,
        message:state.Login.message,
    }
}

LoginForm = connect(
    mapStateToProps,
    {LoginRequest}
)(LoginForm);
//export default LoginForm

export default reduxForm({
  form: 'login',              
  validate
})(LoginForm)