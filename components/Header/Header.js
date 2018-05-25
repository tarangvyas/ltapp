import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Router from 'next/router';
import HeaderTopFixed from './HeaderTopFixed';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../../lib/session";
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/login';

class Header extends Component {
	logout=()=>{
		//alert(this.props.user);
	   this.props.logoutUserHandler(this.props.token);
	   removeCookie('user',this.props.user);
	   removeCookie('jwt',this.props.token);
	   Router.push('/login');
	}
    render(){
    
	let headerLeft=<div className="col-lg-4 col-md-4 col-sm-4 ">
					<div className="pull-right header-menu-btn">
                        <div className="dropdown pull-left dealers-btn">
                            <button className="btn btn-default dropdown-toggle font-b uppercase-text" type="button" data-toggle="dropdown">Dealers
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><Link href="/dealerlogin"><a>Login</a></Link></li>
                                <li><Link href="/dealerinfo"><a>Signup</a></Link></li>
                            </ul>
                        </div> 					
                        <Link href="/login"><a className="btn btn-yellow uppercase-text login-btn pull-left font-b"><span>Login</span></a></Link>
				    </div>
					<style jsx>{`
					.navbar-nav > li > .dropdown-menu {background-color: #fdd60f; border-radius: 0; padding: 0; border: none; box-shadow: 0 15px 10px rgba(0, 0, 0, 0.176); min-width: 190px;}
					.nav .dropdown-menu > li:first-child {border-top: none;}
					.nav .dropdown-menu > li {border-top: 1px solid #ffe61f;}
					.nav .dropdown-menu > li > a {color: #000000; padding: 10px 15px;}
					.login-btn{height: 44px; line-height: 30px; min-width: 114px;}
					.dealers-btn .btn-default {border: none; height: 44px; margin-right: 14px; min-width: 127px;}
					.header-menu-btn {padding: 10px;}
					.login-btn span{background: url("./../../static/images/login-ico.png") no-repeat 0 center; padding-left: 25px;}
					.header-menu-btn .dropdown .dropdown-menu {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}
					.dealers-btn .dropdown-menu > li > a{padding: 8px 20px;}
					.nav .dropdown-menu > li > a {color: #000000; padding: 10px 15px;}
					`}</style>
				</div>;

    if(this.props.user){
        headerLeft=<div className="col-lg-4 col-md-4 col-sm-4 ">
					<div className="form-inline menu-login text-right">
						<div className="form-group user-img dropdown">
							<a href="#" className="dropdown-toggle form-inline" data-toggle="dropdown">
								<img src="./../../static/images/user-img.png" alt="" />
								<div className="form-group font-m text-white">Hello, <span className="text-yellow">{this.props.user.first_name}</span> </div>
								<div className="form-group bell"><span className="glyphicon glyphicon-bell text-white" aria-hidden="true"></span><span className="avaleble"></span></div>
							</a>	
							<ul id="login-dp" className="dropdown-menu dropdown-menu-right login-menu">
								<li>
				                  <div className="form-group">
								  <Link href="/dealer-dashboard"><a href="#" className="btn font-m btn-yellow btn-md btn-block"><span className="glyphicon glyphicon-user"></span>Profile</a>
								  </Link>
								   </div>
				                  <div className="form-group"> <a href="#" onClick={(e)=>this.logout(e)} className="btn font-m btn-success btn-md mar-b btn-block"><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>Logout</a> </div>
								</li>
							</ul>								
						</div>
					</div>
					<style jsx>{`.menu-login {margin-right: 15px; margin-top: 8px;}
								.menu-login .form-group {margin-left: 8px;}

								.menu-login .bell .avaleble {background: #ff0000; border-radius: 100%; display: inline-block; height: 8px; left: -4px; position: relative; top: -4px; width: 8px;}
								.menu-login .user-img img {border-radius: 100%; height: 46px; max-width: 46px;}
								.menu-login .dropdown-menu {border: medium none; border-radius: 0; margin: 10px 0 0; min-width: 180px; padding: 10px; text-align: center;}
								.menu-login .login-menu .form-group{margin: 0; display: block;}
								.menu-login .login-menu .form-group a {margin-bottom: 10px; min-width: 130px; padding: 10px; text-align: center;}
								.menu-login .login-menu .form-group a .glyphicon{margin-right: 10px;}

								`}</style>
				</div>;
    }

    return(
        <header>
            
            
            <div className="container">
                <HeaderTopFixed />
			

			<div className="menu_bg">
			<div className="row">	
				<div className="col-lg-8 col-md-8 col-sm-8">
					    <nav className="navbar navbar-inverse pull-left top-menu" role="navigation">
					            <div className="navbar-header">
					                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					                    <span className="icon-bar"></span>
					                    <span className="icon-bar"></span>
					                    <span className="icon-bar"></span>
					                </button>
					            </div>
					            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					                <ul className="nav navbar-nav navbar-left">
					                    <li className="active">
					                       <Link href="/"><a>Home</a></Link>
					                    </li>
					                    <li className="dropdown">
					                        <Link href="#"><a className="dropdown-toggle" data-toggle="dropdown">Why Us ? <b className="caret"></b></a></Link>
					                        <ul className="dropdown-menu">
					                            <li>
					                                <Link href="#"><a>1 CMS Page</a></Link>
					                            </li>
					                            <li>
					                                <Link href="#"><a>2 CMS Page</a></Link>
					                            </li>
					                            <li>
					                                <Link href="#"><a>3 CMS Page</a></Link>
					                            </li>
					                            <li>
					                                <Link href="#"><a>4 CMS Page</a></Link>
					                            </li>
					                            <li>
					                                <Link href="#"><a>CMS Page</a></Link>
					                            </li>
					                        </ul>
					                    </li>
					                    <li>
					                        <Link href={{ pathname: 'cms', query: { page: 'about_us',page_title:'About Us'}}}><a>How it works</a></Link>
					                    </li>
					                    <li>
					                    	<Link href={{ pathname: 'cms', query: { page: 'faq',page_title:'FAQs' }}}><a>FAQs</a></Link>
					                    </li>
					                    <li>
					                        <Link href="#"><a>Contact us</a></Link>
					                    </li>
					                </ul>
					            </div>
					    </nav>
				</div>
				{headerLeft}
			</div>
			</div>
		</div>
        <style jsx>{`
            header {padding: 18px 0 0; border-bottom: 5px solid #00350d;}
.header-right {text-align: right;}
.header-right .customer-support, .header-right .working-hours {display: inline-block; text-align: left; margin-left: 42px; padding-left: 46px; position: relative; margin-top: 14px;}
.customer-support{border-right: 1px solid #d0d0d0; padding-right: 48px;}
.customer-support{background: url("./../../static/images/customer-header-ico.png") no-repeat 0 4px;}
.working-hours{background: url("./../../static/images/working-hours-ico.png") no-repeat 0 4px;}
.header-right p{font-size: 16px;}

.menu_bg {background: #00350d; float: left; margin-top: 18px; width: 100%; margin-bottom: -32px; position: relative; z-index: 1;}
.menu_bg::before {border-bottom: 24px solid transparent; border-left: 24px solid #00350d; border-top: 24px solid transparent; content: ""; height: 0; left: -19px; position: absolute; top: 1px; -ms-transform: rotate(45deg); -webkit-transform: rotate(45deg); transform: rotate(45deg); width: 0;}
.menu_bg::after {border-bottom: 24px solid transparent; border-left: 24px solid #00350d; border-top: 24px solid transparent; content: ""; height: 0; position: absolute; right: -20px; top: 1px; -ms-transform: rotate(135deg); -webkit-transform: rotate(135deg); transform: rotate(135deg); width: 0;}
.menu_bg .navbar {margin-bottom: 0;}
.top-menu {background-color: inherit; border: none;}
.top-menu .collapse{padding-left: 0;}
.navbar-nav > li {border-right: 1px solid #395e42; float: left;}
.navbar-nav > li > a {padding: 22px 27px;}
.navbar-inverse .navbar-nav > li > a {color: #fff; font-size: 15px;}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > .active > a, 
.navbar-inverse .navbar-nav > .active > a:focus, 
.navbar-inverse .navbar-nav > .active > a:hover {background-color: #fdd60f; color: #000;}
.navbar-inverse .navbar-nav > .open > a, 
.navbar-inverse .navbar-nav > .open > a:hover, 
.navbar-inverse .navbar-nav > .open > a:focus {background-color: #fdd60f; color: #000;}
.navbar-nav > li:last-child {border: none;}
.navbar-nav > li > .dropdown-menu {background-color: #fdd60f; border-radius: 0; padding: 0; border: none; box-shadow: 0 15px 10px rgba(0, 0, 0, 0.176); min-width: 190px;}
.nav .dropdown-menu > li:first-child {border-top: none;}
.nav .dropdown-menu > li {border-top: 1px solid #ffe61f;}
.nav .dropdown-menu > li > a {color: #000000; padding: 10px 15px;}

.login-btn{height: 44px; line-height: 30px; min-width: 114px;}
.dealers-btn .btn-default {border: none; height: 44px; margin-right: 14px; min-width: 127px;}
.header-menu-btn {padding: 10px;}
.login-btn span{background: url("./../../static/images/login-ico.png") no-repeat 0 center; padding-left: 25px;}
.header-menu-btn .dropdown .dropdown-menu {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}

.nav .dealers-top-menu,
.nav .login-top-menu{display: none;}
.login-btn span{background: url("./../../static/images/login-ico.png") no-repeat 0 center; padding-left: 25px;}
.menu-login {margin-right: 15px; margin-top: 8px;}
.menu-login .form-group {margin-left: 8px;}

.menu-login .dropdown-menu {border: medium none; border-radius: 0; margin: 10px 0 0; min-width: 180px; padding: 10px; text-align: center;}
.menu-login .login-menu .form-group{margin: 0; display: block;}
.menu-login .login-menu .form-group a {margin-bottom: 10px; min-width: 130px; padding: 10px; text-align: center;}
.menu-login .login-menu .form-group a .glyphicon{margin-right: 10px;}

.menu-login .bell .avaleble {background: #ff0000; border-radius: 100%; display: inline-block; height: 8px; left: -4px; position: relative; top: -4px; width: 8px;}
.menu-login .user-img img {border-radius: 100%; height: 46px; max-width: 46px;}
.header-menu-btn .dropdown .dropdown-menu {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}
.header-right strong{font-weight: normal; font-family: "DINOT-Bold";}

.dealers-btn .dropdown-menu > li > a{padding: 8px 20px;}



@media all and (max-width: 991px) {
.working-hours {background-size: 22px auto;}
.customer-support {background-size: 22px auto; padding-right: 25px;}
.header-right .customer-support, .header-right .working-hours {font-size: 12px; margin-left: 18px; margin-top: 0px; padding-left: 34px;}
.header-right p {font-size: 13px;}
.navbar-nav > li > a {padding: 16px 12px;}
.dealers-btn .btn-default {border: none; font-size: 13px; height: 40px; margin-right: 6px; min-width: 106px;}
.login-btn {font-size: 13px; height: 40px; line-height: 26px; min-width: 92px;}
.header-menu-btn {padding: 5px;}
.menu_bg {margin-bottom: -28px; margin-top: 15px;}
.menu_bg::before {border-bottom: 18px solid transparent; border-left: 18px solid #00350d; border-top: 18px solid transparent; left: -14px; top: 1px;}
.menu_bg::after {border-bottom: 18px solid transparent; border-left: 18px solid #00350d; border-top: 18px solid transparent; right: -14px;}
header {padding: 15px 0 0;}
.menu-login .user-img img {height: 36px; max-width: 36px;}
}	

@media all and (max-width: 767px) {
.header-right {text-align: center;}
.logo {text-align: center; margin-bottom: 10px;}
header {padding: 12px 0 0; border-bottom: none;}
.menu_bg::after,
.menu_bg::before {display: none;}
.menu_bg {margin-bottom: 0px; margin-top: 15px;}
.menu_bg .navbar {margin-bottom: 0; width: 100%;}
.top-menu .collapse {padding-left: 15px; width: 100%;}
.navbar-nav > li {border-right: 0 none; float: none; margin-bottom: 1px;}
.menu_bg .navbar-nav {margin: 0px 0;}
.header-menu-btn {position: absolute; right: 10px; top: 1px;}
.navbar-inverse .navbar-toggle,
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {border-color: #fff; border-radius: 0; float: left; margin-left: 15px; background-color: transparent;}
.navbar-nav > li > a {padding: 10px 12px;}
.menu_bg {float: none; margin: 18px -15px -32px; width: auto;}
.menu_bg .navbar-collapse {border-top: 0 none; box-shadow: none; padding-right: 0; padding-left: 0;}
.menu_bg .row{margin-right: 0; margin-left: 0;}
.menu_bg .col-lg-8{padding-right: 0; padding-left: 0;}
.dealers-btn .btn-default {height: 36px; min-width: 96px; font-size: 12px;}
.login-btn {font-size: 12px; height: 36px; line-height: 20px; min-width: 86px;}
.login-btn span {padding-left: 20px;}
.menu-login .form-group {display: inline-block; margin-left: 5px; margin-bottom: 0;}
.menu-login {font-size: 12px; margin-right: 0; margin-top: 0; position: absolute; right: 13px; top: 6px;}
.menu-login .user-img img {height: 36px; max-width: 36px;}
.navbar-nav .open .dropdown-menu {background-color: #edc600; border-radius: 0; border-top: 1px solid #ffe61f;}
.navbar-inverse .navbar-nav .open .dropdown-menu > li > a {color: #000000; padding: 10px 15px;}
.navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, 
.navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {background-color: #f5f5f5; color: #000000; text-decoration: none;}
}


@media all and (max-width: 567px) {
.header-right .customer-support, .header-right .working-hours {margin-left: 10px; padding-left: 32px;}
.customer-support {padding-right: 14px;}
}

@media all and (max-width: 479px) {
.header-right .customer-support, .header-right .working-hours {margin-left: 1%; margin-top: 5px; vertical-align: top; width: 48%; font-size: 10px; padding-left: 20px;}
.customer-support {background-size: 14px auto; padding-right: 8px;}
.working-hours {background-size: 14px auto;}
.header-right p {font-size: 11px;}
.logo {margin-bottom: 6px;}
.logo img {max-width: 180px;}
}
            `}</style>
        </header>
    )
}

}

function mapStateToProps(state) {
	/*State.REDUDER.vars*/
	//console.log('component111',state.Cardetail);
	return {
	  cardata:state.Cardetail,
	}
  
  }
  function mapDispatchToProps (dispatch) {
	  return {
		logoutUserHandler: (token) => dispatch(logoutUser(token))
	  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Header);
 //export default Header;