import React from 'react';
import Link from 'next/link';

const sellerSideBar = (props) =>{
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <div className="dashboard-menu">
                <h3 className="font-b text-uppercase text-white form-group">Seller Dashboard</h3>
                <ul>
                    <li className="adverts-ico">
                        <Link href="/sell-my-car"><a className="list-group-item active"><span>Adverts</span></a></Link>
                    </li>
                    <li className="offers-ico"><a href="http://111.93.221.218/CUS/Lotus/HTML/Offers/offers.php" className="list-group-item"><span>Offers</span></a></li>
                    <li className="account-ico"><a href="http://111.93.221.218/CUS/Lotus/HTML/Account/account.php" className="list-group-item"><span>Account</span></a></li>
                    <li className="log-out-ico"><a href="http://111.93.221.218/CUS/Lotus/HTML/" className="list-group-item"><span>Log Out</span></a></li>
                </ul>
            </div>
            <style jsx>{`
                .dashboard-menu ul{margin: 0; padding: 0; list-style: none;}
                .dashboard-menu{background-color: #f9f9f9;}
                .dashboard-menu h3 {background: #38954f url("./../../static/images/dashboard-heading-icon.png") no-repeat 20px center; font-size: 20px; padding: 17px 10px 17px 80px;}
                .dashboard-menu li{position: relative;}
                .dashboard-menu li a span::before {background: url(./../../static/images/dashboard-menu-icon.png) no-repeat; content: ""; display: inline-block; height: 34px; margin-right: 12px; vertical-align: middle; width: 34px;}

                .dashboard-menu li.adverts-ico a span:before{background-position: -68px 2px;}
                .dashboard-menu li.adverts-ico:hover a span:before,
                .dashboard-menu li.adverts-ico a.active span:before{background-position: 1px 2px;}

                .dashboard-menu li.offers-ico a span:before{background-position: -68px -59px;}
                .dashboard-menu li.offers-ico:hover a span:before,
                .dashboard-menu li.offers-ico a.active span:before{background-position: 1px -59px;}

                .dashboard-menu li.account-ico a span:before{background-position: -68px -121px;}
                .dashboard-menu li.account-ico:hover a span:before,
                .dashboard-menu li.account-ico a.active span:before{background-position: 1px -121px;}

                .dashboard-menu li.find-new-ico a span:before{background-position: -68px -181px;}
                .dashboard-menu li.find-new-ico:hover a span:before,
                .dashboard-menu li.find-new-ico a.active span:before{background-position: 1px -181px;}

                .dashboard-menu li.log-out-ico a span:before{background-position: -68px -241px;}
                .dashboard-menu li.log-out-ico:hover a span:before,
                .dashboard-menu li.log-out-ico a.active span:before{background-position: 1px -241px;}

                .dashboard-menu li a.list-group-item {border-radius: 0; border: none; background-color: #f9f9f9; font-size: 20px; color: #1d1d1d; padding: 14px 14px 14px 20px;}
                .dashboard-menu li a.list-group-item:hover,
                .dashboard-menu li a.list-group-item.active, 
                .dashboard-menu li a.list-group-item.active:hover, 
                .dashboard-menu li a.list-group-item.active:focus {background-color: #fff; box-shadow: 4px 0 8px 0 #e4e4e4; color: #38954f; z-index: 2; border-right: 4px solid #38954f;}


                @media all and (max-width: 1199px) {
                .dashboard-menu li a.list-group-item {font-size: 16px; padding: 10px 10px 10px 20px;}
                .dashboard-menu h3{font-size: 18px;}
                }

                @media all and (max-width: 767px) {
                .dashboard-menu li a.list-group-item {padding: 10px 10px 10px 15px;}
                }	
            `}</style>
        </div>
    );
}

export default sellerSideBar;