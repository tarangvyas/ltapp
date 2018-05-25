import React from 'react';

const howitwork= (props) =>{
    return (
        <div id="Howitworks" className="howitworks clear">
            <div className="container">
                <h2 className="whyus-tittle font-l text-uppercase text-white text-center">
                        <span className="font-b">How</span> it works
                </h2>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-xs-12 text-center form-group">
                        <img src="./../../static/images/enter-your-details-ico.png" alt="" />
                        <h4 className="text-uppercase font-b text-white">Enter your details</h4>
                        <p className="text-white">Simply enter your reg number and follow our user friendly listing tools to advertise your Lotus.</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-xs-12 text-center form-group">
                        <img src="./../../static/images/get-offers-ico.png" alt="" />
                        <h4 className="text-uppercase font-b text-white">Get Offers</h4>
                        <p className="text-white">When you list your car for sale we notify the dealer and specialist buying network who will then make offers on your car.</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-xs-12 text-center form-group">
                        <img src="./../../static/images/sell-your-car-ico.png" alt="" />
                        <h4 className="text-uppercase font-b text-white">Sell your car</h4>
                        <p className="text-white">If you're happy with your final offer then accept the deal! The buyer will be in contact to organise a final viewing, to pay for the car and to take it away, it really is that easy.</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #Howitworks{background: url("./../../static/images/how-it-work-bg.jpg") no-repeat center top; background-size: cover; padding: 50px 0 54px;}
                .howitworks .whyus-tittle:before{background: #ffff;}
                .howitworks h4 {margin: 30px auto 18px; padding-bottom: 20px; position: relative;}
                .howitworks h4::before {background: #ffc21e; bottom: 0; content: ""; height: 1px; left: 0; margin: 0 auto; position: absolute; right: 0; width: 34px;}
                .howitworks p {font-size: 16px; line-height: 1.5;}

                @media all and (max-width: 991px) {
                .whyus-tittle {font-size: 25px; margin-bottom: 40px; padding-bottom: 22px;}
                #Howitworks {padding: 24px 0 25px;}
                }                   
            `}</style>
        </div>
    );
};

export default howitwork;