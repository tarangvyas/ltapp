import React from 'react';
import Link from 'next/link';

const dealerSideBar = (props) =>{
    console.log(props,'prps');
    return (
        
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
        
            <div className="dashboard-menu">
                <h3 className="font-b text-uppercase text-white form-group">Dealer Dashboard</h3>
                <ul>
                    <li className="offers-history-ico">
                        <Link href="/dealer-dashboard"><a className={props.page == 'dealer-dashboard'?'active list-group-item':'list-group-item'}><span>Offers & History</span></a></Link>
                    </li>
                    <li className="search-cars-ico">
                        <Link href="/search-cars"><a className='list-group-item'><span>Search Cars</span></a></Link>
                    </li>                        
                    <li className="edit-car-preferences-ico">
                        <Link href="/edit-preferences"><a className={props.page == 'edit-preference'?'active list-group-item':'list-group-item'}><span>Edit Car Preferences</span></a></Link>
                    </li>
                    <li className="change-password-ico">
                        <Link href="/change-password"><a className={props.page == 'change-password'?'active list-group-item':'list-group-item'}><span>Change Password</span></a></Link>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                .dashboard-menu ul{margin: 0; padding: 0; list-style: none;}
                .dashboard-menu{background-color: #f9f9f9;}
                .dashboard-menu h3 {background: #38954f url("./../../static/images/dashboard-heading-icon.png") no-repeat 20px center; font-size: 20px; padding: 17px 10px 17px 80px;}
                .dashboard-menu li{position: relative;}
                .dashboard-menu li a span::before {background: url(./../../static/images/dealer-dashboard-ico.png) no-repeat; content: ""; display: inline-block; height: 34px; margin-right: 12px; vertical-align: middle; width: 34px;}
                
                .dashboard-menu li.offers-history-ico a span:before{background-position: -68px 2px;}
                .dashboard-menu li.offers-history-ico:hover a span:before,
                .dashboard-menu li.offers-history-ico a.active span:before{background-position: 1px 2px;}
                
                .dashboard-menu li.search-cars-ico a span:before{background-position: -68px -59px;}
                .dashboard-menu li.search-cars-ico:hover a span:before,
                .dashboard-menu li.search-cars-ico a.active span:before{background-position: 1px -59px;}
                
                .dashboard-menu li.edit-car-preferences-ico a span:before{background-position: -68px -121px;}
                .dashboard-menu li.edit-car-preferences-ico:hover a span:before,
                .dashboard-menu li.edit-car-preferences-ico a.active span:before{background-position: 1px -121px;}
                
                .dashboard-menu li.change-password-ico a span:before{background-position: -68px -181px;}
                .dashboard-menu li.change-password-ico:hover a span:before,
                .dashboard-menu li.change-password-ico a.active span:before{background-position: 1px -181px;}
                
                .dashboard-menu li.sign-out-ico a span:before{background-position: -68px -241px;}
                .dashboard-menu li.sign-out-ico:hover a span:before,
                .dashboard-menu li.sign-out-ico a.active span:before{background-position: 1px -241px;}
                
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

export default dealerSideBar;