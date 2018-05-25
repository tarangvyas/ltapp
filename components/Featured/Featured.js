import React from 'react';

const featured= (props) =>{
    return (
        <div id="Featured_logo">
            <div className="container">
                <div className="col-lg-2 col-md-2 col-sm-3"><h4 className="font-b uppercase-text">As featured on :</h4></div>
                <div className="col-lg-10 col-md-10 col-sm-9">
                    <ul className="Featured_logo">
                        <li className="pull-left"><img src="./../../static/images/featured-logo-01.png" alt="" /></li>
                        <li className="pull-left"><img src="./../../static/images/featured-logo-02.png" alt="" /></li>
                        <li className="pull-left"><img src="./../../static/images/featured-logo-03.png" alt="" /></li>
                        <li className="pull-left"><img src="./../../static/images/featured-logo-04.png" alt="" /></li>
                        <li className="pull-left"><img src="./../../static/images/featured-logo-05.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                #Featured_logo{background: #f4f4f4; padding: 15px 0; float: left; width: 100%;}
                #Featured_logo h4 {border-right: 1px solid #d3d3d3; font-size: 16px; margin: 2px auto; padding: 27px 0;}
                .Featured_logo{margin: 0; padding: 0; list-style: none; }
                .Featured_logo li {text-align: left; width: 20%;}

                @media all and (max-width: 1199px) {
                #Featured_logo h4 {font-size: 14px;}
                .Featured_logo li {text-align: center; padding: 0 6px;}
                }	
                @media all and (max-width: 767px) {
                #Featured_logo h4 {border-bottom: 1px solid #d3d3d3; border-right: 0 none; font-size: 14px; margin-bottom: 32px; padding: 10px 0; text-align: center;}
                }
          `}</style>
        </div>
    );
}

export default featured;