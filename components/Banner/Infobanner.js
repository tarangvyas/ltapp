import React from 'react';
import Link from 'next/link'


const infobanner= (props) =>{
    return (
        <div>
                <div className="registration-banner-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 banner-mad">
                                <h1 className="font-b text-uppercase text-white text-center form-group mar-t">BUY CARS DIRECTLY FROM PRIVATE OWNERS LOOKING TO TRADE THEIR CARS LOCATED THROUGH OUT THE UK</h1>
                                <h4 className="font-l text-uppercase text-white text-center form-group mar-t">SIGN UP BELOW TO GAIN ACCESS TO UK LOTUS STOCK LIST</h4>
                                <div className="field-col banner-btn text-center">
                                    <Link href="/dealerregister"><button type="submit" className="btn btn-default font-m text-uppercase btn-lg" onclick="location.href='http://111.93.221.218/CUS/Lotus/HTML/Create-account/create-account.php';">JOIN LOTUS TRADER</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <style jsx>{`
                    .registration-banner-bg{background-image: url("./../../static/images/registration-banner01.jpg"); background-position: center center; background-repeat: no-repeat; background-size: cover; overflow: hidden; position: relative;}
                    .registration-banner-bg::before {background-color: rgba(0, 0, 0, 0.6); content: ""; display: block; height: 100%; left: 0; position: absolute; right: 0; top: 0; width: 100%; z-index: 0;}
                    .registration-banner-bg h1 {font-size: 25px; line-height: 1.2; margin-bottom: 26px;}
                    .registration-banner-bg .banner-btn{margin-top: 40px;}
                    .registration-banner-bg .banner-btn .btn {border: none; border-radius: 30px; min-width: 200px; font-size: 14px; padding: 12px 10px; text-align: center;}
                    .registration-banner-bg .banner-mad {padding-bottom: 10em; padding-top: 10em;}
                    
                    @media all and (max-width: 991px) {
                    .registration-banner-bg .banner-mad {padding-bottom: 8em; padding-top: 8em;}
                    .registration-banner-bg h1 {font-size: 22px;}
                    }	
                    @media all and (max-width: 567px) {
                    .registration-banner-bg .banner-mad {padding-bottom: 6em; padding-top: 6em;}
                    }	
                `}</style>
        </div>
    );
}

export default infobanner;