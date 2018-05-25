import React from 'react';

const headerTopFixed= (props) =>{
    return(
       <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-3"><div className="logo"><a href="#"><img src="./../../static/images/logo.png" alt="" /></a></div></div>
            <div className="col-lg-8 col-md-9 col-sm-9">
                <div className="header-right">
                    <div className="customer-support">
                        <strong className="text-dark uppercase-text">Customer Support & Sales</strong>
                        <p className="text-muted">0800 7723719</p>
                    </div>
                    <div className="working-hours">
                        <strong className="text-dark uppercase-text">Working hours</strong>
                        <p className="text-muted">Mon to Fri: 9:00 am - 5:00 pm </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .header-right {text-align: right;}
            .header-right .customer-support, .header-right .working-hours {display: inline-block; text-align: left; margin-left: 42px; padding-left: 46px; position: relative; margin-top: 14px;}
            .customer-support{border-right: 1px solid #d0d0d0; padding-right: 48px;}
            .customer-support{background: url("../../static/images/customer-header-ico.png") no-repeat 0 4px;}
            .working-hours{background: url("../../static/images/working-hours-ico.png") no-repeat 0 4px;}
            .header-right p{font-size: 16px;}
            `}</style>
       </div>     
	);
}

export default headerTopFixed;