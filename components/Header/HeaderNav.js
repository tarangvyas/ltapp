import React from 'react';
import Link from 'next/link'

const headerNav= (props) =>{
    return(
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
					                        <a href="http://111.93.221.218/CUS/Lotus/HTML/">Home</a>
					                    </li>
					                    <li className="dropdown">
					                        <a href="About-page/about-page.php" className="dropdown-toggle" data-toggle="dropdown">Why Us ? <b className="caret"></b></a>
					                        <ul className="dropdown-menu">
					                            <li>
					                                <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">1 CMS Page</a>
					                            </li>
					                            <li>
					                                <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">2 CMS Page</a>
					                            </li>
					                            <li>
					                                <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">3 CMS Page</a>
					                            </li>
					                            <li>
					                                <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">4 CMS Page</a>
					                            </li>
					                            <li>
					                                <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">CMS Page</a>
					                            </li>
					                        </ul>
					                    </li>
					                    <li>
					                        <a href="http://111.93.221.218/CUS/Lotus/HTML/About-page/about-page.php">How it works</a>
					                    </li>
					                    <li>
					                        <a href="#">FAQs</a>
					                    </li>
					                    <li>
					                        <a href="#">Contact us</a>
					                    </li>
					                </ul>
					            </div>
                                <style jsx>{`
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
                                    .navbar-nav > li > .dropdown-menu {background-color: #fdd60f; padding: 0; border: none; box-shadow: 0 15px 10px rgba(0, 0, 0, 0.176); min-width: 190px;}
                                    .dropdown-menu > li:first-child {border-top: none;}
                                    .dropdown-menu > li {border-top: 1px solid #ffe61f;}
                                    .dropdown-menu > li > a {color: #000000; padding: 10px 15px;}

                                    .login-btn{height: 44px; line-height: 30px; min-width: 114px;}
                                    .dealers-btn .btn-default {border: none; height: 44px; margin-right: 14px; min-width: 127px;}
                                    .header-menu-btn {padding: 10px;}
                                    .login-btn span{background: url("../../static/images/login-ico.png") no-repeat 0 center; padding-left: 25px;}
                                    .header-menu-btn .dropdown .dropdown-menu {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}

                                    .nav .dealers-top-menu,
                                    .nav .login-top-menu{display: none;}
                                    .login-btn span{background: url("../../static/images/login-ico.png") no-repeat 0 center; padding-left: 25px;}
                                    .menu-login {margin-right: 15px; margin-top: 9px;}
                                    .menu-login .form-group {margin-left: 8px;}

                                    .menu-login .bell .avaleble {background: #ff0000; border-radius: 100%; display: inline-block; height: 8px; left: -4px; position: relative; top: -4px; width: 8px;}
                                    .menu-login .user-img img {border-radius: 100%; height: 46px; max-width: 46px;}
                                    .header-menu-btn .dropdown .dropdown-menu {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}


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
                                    .menu-login .form-group {display: inline-block; margin-left: 5px;}
                                    .menu-login {margin-right: 0; margin-top: 0; position: absolute; right: 13px; top: 8px; font-size: 12px;}
                                    .menu-login .user-img img {height: 36px; max-width: 36px;}
                                    .navbar-nav .open .dropdown-menu {background-color: #fdd60f; border-radius: 0; border-top: 1px solid #ffe61f;}
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
					    </nav>
    );
}

export default headerNav;