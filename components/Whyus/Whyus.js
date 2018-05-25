import React from 'react';

const whyus= (props) =>{
    return (
        <div id="Whyus" className="whyus-section clear">
            <div className="container">
            <h2 className="whyus-tittle font-l text-uppercase text-gray text-center">
                    <span className="font-b">Why choose</span> us to sell your car ?
            </h2>
            <ul className="row">
                <li className="col-sm-6 col-md-3 col-xs-6 text-center form-group">
                    <img src="./../../static/images/fair-price-ico.png" alt="" />
                    <h4 className="text-uppercase font-b text-dark">Fair Price</h4>
                    <p className="text-muted">Let dealers compete for your car, ensuring you get the best trade price for your Lotus</p>
                </li>
                <li className="col-sm-6 col-md-3 col-xs-6 text-center form-group">
                    <img src="./../../static/images/easy-ico.png" alt="" />
                    <h4 className="text-uppercase font-b text-dark">Easy</h4>
                    <p className="text-muted">List your car in as little as 10 minutes with our easy to use listing tools</p>
                </li>
                <li className="col-sm-6 col-md-3 col-xs-6 text-center form-group">
                    <img src="./../../static/images/free-ico.png" alt="" />
                    <h4 className="text-uppercase font-b text-dark">Free</h4>
                    <p className="text-muted">This service is completely FREE to use and the buyer collects the car !</p>
                </li>
                <li className="col-sm-6 col-md-3 col-xs-6 text-center form-group">
                    <img src="./../../static/images/safe-secure-ico.png" alt="" />
                    <h4 className="text-uppercase font-b text-dark">Safe & Secure</h4>
                    <p className="text-muted">We only use trusted dealers and specialists to give you complete piece of mind when selling your Lotus</p>
                </li>
            </ul>
            <div className="read-more-btn text-center"><a href="#" className="btn btn-yellow font-b uppercase-text"><span>Read more</span></a></div>
            </div>
            <style jsx>{`
                .whyus-section {padding: 51px 0 78px;}
                .whyus-tittle {font-size: 35px; margin-bottom: 60px; position: relative; padding-bottom: 36px;}
                .whyus-tittle::before {background: #ffc21e; bottom: 0; content: ""; height: 2px; left: 0; margin: 0 auto; position: absolute; right: 0; width: 60px;}
                .whyus-section ul{padding: 0; list-style: none;}
                .whyus-section h4{margin: 30px auto 18px; position: relative; padding-bottom: 20px;}
                .whyus-section h4::before {background: #ffc21e; bottom: 0; content: ""; height: 1px; left: 0; margin: 0 auto; position: absolute; right: 0; width: 34px;}
                .whyus-section p{font-size: 16px; line-height: 1.5;}
                .read-more-btn .btn {padding: 12px 24px;}
                .read-more-btn span {background: url(./../../static/images/read-more-ico.png) no-repeat right center; padding: 2px 30px 2px 2px;}
                @media all and (max-width: 991px) {
                .whyus-section {padding: 25px 0 51px;}
                .whyus-section li:nth-child(2n+1){clear: left;}
                .whyus-section li img {max-width: 70px;}
                .whyus-section h4 {margin: 18px auto;}
                }
                @media all and (max-width: 639px) {
                .whyus-section li{width: 100%; margin-bottom: 25px;}
                }
            `}</style>
        </div>
    );
}

export default whyus;