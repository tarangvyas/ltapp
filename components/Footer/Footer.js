import React from 'react';
import Link from 'next/link'
const footer= (props) =>{
    return (
        <footer className={["clear",props.innerfooter].join(' ')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="footer-col-1">
                            <div className="form-group footer-logo"><a href="#"><img src="./../../static/images/logo.png" alt="" /></a></div>
                            <p className="footer-call form-group">0800 7723719</p>
                            <p className="footer-time form-group">Mon to Fri: 9am - 5pm</p>
                            <p className="footer-email form-group"><a href="mailto:Info@lotus-trader.co.uk">Info@lotus-trader.co.uk</a></p>
                            <h4 className="form-group text-gray footer-follow"><span className="font-b">Follow</span> Us</h4>
                            <ul className="social-icon">
                                <li className="icoFacebook"><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li className="icoTwitter"><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li className="icoLinkedin"><a href="#" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li className="icoGoogle"><a href="#" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                <li className="icoinstagram"><a href="#" title="Google +"><i className="fa fa-instagram"></i></a></li>
                                
                            </ul>	
                        </div>
                    </div>
                <div className="col-md-8 col-sm-12">	
                    <div className="row">
                    <div className="col-md-4 col-sm-3">
                        <h3 className="footer-tittle"><span className="font-b">Quick</span> links </h3>
                        <ul className="footer-menu">
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li>
                                <Link href={{ pathname: 'cms', query: { page: 'why_us',page_title:'Why Us'}}}><a>Why Us</a></Link>
                             </li>
                            <li>
                                <Link href={{ pathname: 'cms', query: { page: 'how_it_work',page_title:'How it works'}}}><a>How it works</a></Link>
                            </li>
                            <li>
                                <Link href={{ pathname: 'cms', query: { page: 'faq',page_title:'FAQs' }}}><a>FAQs</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Contact Us</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 col-sm-9">
                        <h3 className="footer-tittle"><span className="font-b">Need help</span> or have a question ?</h3>
                        <p className="feel-free">Feel free to contact our friendly team on the freephone number provided if you would like any advice on listing your car. Or alternatively send us a message using the form below.</p>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="text"  placeholder="Your name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  placeholder="Email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  placeholder="Phone" className="form-control" />
                                </div>
                                
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <textarea rows="5" cols="5" className="form-control" placeholder="Message" ></textarea>
                                </div>
                                <div className="form-group footer-btn">
                                    <button type="submit" className="btn btn-yellow font-b text-uppercase pull-right">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
                </div>
            </div>
        <div className="coppy-footer clear text-center text-white">Performance Trade Services - Trading as Lotus Trader - All Rights Reserved Copyright 2018</div>
        <style jsx>{`
            footer{background-color: #fff;}
            .inner-footer-bg{margin-top:70px;background-color:#f9f8f8;}
            .footer-col-1 {background: url("./../../static/images/footer-call-bg.jpg") repeat; padding: 62px 40px 40px;}
            footer .footer-logo {margin-bottom: 35px;}
            .footer-col-1 p, .footer-col-1 p a {color: #5f5f5f; font-size: 16px;}
            .footer-col-1 p{padding-left: 42px; position: relative;}
            .footer-col-1 .footer-call::before, .footer-col-1 .footer-time::before, .footer-col-1 .footer-email::before {background: url("./../../static/images/footer-call-icon.png") no-repeat; content: ""; display: block; height: 29px; left: 0; position: absolute; top: 0; width: 25px;}
            .footer-col-1 .footer-call::before{background-position: -4px 0;}
            .footer-col-1 .footer-time::before{background-position: -4px -41px;}
            .footer-col-1 .footer-email::before{background-position: -4px -82px; height: 26px;}
            footer .footer-follow {margin-top: 50px;}

            .social-icon {list-style: none; margin: 0; padding: 0; overflow: hidden;}
            .social-icon li {border: 1px solid #ffc600; float: left; font-size: 20px; height: 42px; line-height: 41px; margin-right: 10px; text-align: center; width: 42px;}
            .social-icon li a{color: #ffc600;}
            .social-icon li.icoFacebook:hover a{color: #3a5998;}
            .social-icon li.icoFacebook:hover{border-color: #3a5998;}

            .social-icon li.icoTwitter:hover a{color: #55acef;}
            .social-icon li.icoTwitter:hover{border-color: #55acef;}

            .social-icon li.icoLinkedin:hover a{color: #007bb6;}
            .social-icon li.icoLinkedin:hover{border-color: #007bb6;}

            .social-icon li.icoGoogle:hover a{color: #de4b39;}
            .social-icon li.icoGoogle:hover{border-color: #de4b39;}

            .social-icon li.icoinstagram:hover a{color: #11658a;}
            .social-icon li.icoinstagram:hover{border-color: #11658a;}

            footer h3::before {background: #ffc21e; bottom: 0; content: "";  height: 2px; left: 0; position: absolute; width: 56px;}
            footer h3 {font-size: 20px; margin-bottom: 25px; padding-bottom: 14px; position: relative; margin-top: 58px;}
            footer h3 .footer-tittle span{color: #00350d;}
            .footer-menu {list-style: none; margin: 0; padding: 0;}
            .footer-menu li {margin-bottom: 16px; padding-left: 25px; position: relative;}
            .footer-menu li::before {background: url("./../../static/images/footer-menu-bullet.png") no-repeat 0 -36px; content: ""; height: 11px; left: 0; position: absolute; top: 7px; width: 11px;}
            .footer-menu li:hover::before{background-position: 0 0px;}
            .footer-menu li a {color: #5f5f5f; font-size: 16px;}
            .footer-menu li:hover a{color: #00350d; text-decoration: none;}
            .feel-free {color: #404040; font-size: 12px; font-style: italic; line-height: 1.2; margin-bottom: 30px;}
            .form-control {border-radius: 0; box-shadow: none; height: 40px; padding-left: 14px;}
            footer textarea.form-control { height: 95px; resize: none;}
            footer .footer-btn .btn {font-size: 14px; height: 40px; min-width: 100px;}
            .coppy-footer {background: #4e4e4e;display: block; font-size: 12px; padding: 14px 0;}


            @media all and (max-width: 991px) {
            .footer-col-1 {padding: 25px; margin-top: 40px;}
            footer .footer-logo {margin-bottom: 20px;}
            footer .footer-follow {margin-top: 25px;}
            footer h3 {margin-bottom: 18px; margin-top: 32px;}
            .coppy-footer {margin-top: 25px;}

            }	
            @media all and (max-width: 767px) {
            .coppy-footer {
            margin-top: 35px;
            }
            }
        `}</style>
        </footer>
    );
}

export default footer;