import React from 'react';

const notify= (props) =>{
    return (
        <div className="Notificaton clear">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4"><h2 className="font-l text-uppercase text-white text-right">Completely <span className="font-b">free</span></h2></div>
                    <div className="col-md-8 col-sm-8"><div className="get-started">
                        <div className="input-group custom-search-form">
                        <input placeholder="Enter your Reg" className="form-control text-uppercase" type="text" id='regNotify' />
                        <span className="input-group-btn">
                            <button className="btn btn-yellow font-b" type="button"  onClick={(e)=>props.regSellHandler(e,'regNotify')}>
                                SELL MY LOTUS
                            </button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .Notificaton{background: url("./../../static/images/how-it-work-bg.jpg") no-repeat center top; background-size: cover; padding: 93px 0;}
                .Notificaton .form-control {border: none; font-size: 16px; height: 55px; padding-left: 20px;}
                .Notificaton .btn {font-size: 15px; height: 55px; letter-spacing: 0; min-width: 177px;}
                .Notificaton .get-started {margin-right: 17%;margin-left: 15px;}
                .Notificaton .get-started .custom-search-form {max-width: 632px; width: 100%;}
                .Notificaton h2{margin: 9px 0 0;}

                @media all and (max-width: 1199px) {
                .Notificaton .get-started {margin-right: 10%;}
                .Notificaton h2 {font-size: 22px; margin: 16px 0 0;}
                .Notificaton .get-started {margin-right: 4%;}
                .Notificaton {padding: 65px 0;}
                }

                @media all and (max-width: 767px) {
                .Notificaton h2 {margin: 0 0 28px; text-align: center;}
                .Notificaton .get-started {margin-right: 0; margin-left: 0;}
                .Notificaton .get-started .custom-search-form {max-width: 100%;}
                .Notificaton .btn {font-size: 14px; min-width: 142px;}
                .Notificaton .form-control {font-size: 14px; padding-left: 15px;}
                }

                @media all and (max-width: 567px) {
                .Notificaton .btn {font-size: 13px; min-width: 125px;}
                .social-icon li {margin-right: 6px;}
                }
            `}</style>
        </div>
    );
}

export default notify;