import React from 'react';
import Link from 'next/link'

const register= (props) =>{
    return (
        <div className="banner-inner">
            <img src="./../../static/images/banner-car-list.jpg" alt="" />
            <div className="inner-tittle">
                <div>
                    <div>
                        <h1 className="font-b text-uppercase text-white text-center"><span className="text-yellow">register</span></h1>
                        <ol className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className="active font-m">Register</li>
                        </ol>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .banner-inner{position: relative; margin-bottom: 40px; overflow: hidden;}
            .inner-tittle {height: 100%; left: 0; position: absolute; right: 0; top: 0; text-align: center; display: block;}
            .inner-tittle > div {display: table; height: 100%; margin: 0 auto; vertical-align: middle; width: 100%;}
            .inner-tittle > div > div{display: table-cell; vertical-align: middle;}
            .inner-tittle h1 {margin-top: 0;}
            .inner-tittle .breadcrumb {background-color: inherit; border-radius: 0; margin-bottom: 0; padding: 0;}
            .breadcrumb > li + li::before {background: url("./../../static/images/breadcum-arrow.png") no-repeat 8px 8px; content: ""; padding: 0 15px;}
            .breadcrumb > li,
            .breadcrumb > li a{font-size: 20px; text-decoration: none;}
            .breadcrumb > li a {color: #fff;}
            .breadcrumb > .active {color: #fdd60f;}

            @media all and (max-width: 991px) {
            .inner-tittle h1 {font-size: 28px; margin-bottom: 5px;}
            .breadcrumb > li, .breadcrumb > li a {font-size: 15px;}
            .breadcrumb > li + li::before {background-size: 10px auto; content: ""; padding: 0 12px; background-position: 8px 6px;}
            }
            @media all and (max-width:567px) {
            .banner-inner img {margin-left: -20%; max-width: 140%; width: 140%;}
            .inner-tittle h1 {font-size: 22px;}
            .breadcrumb > li, .breadcrumb > li a {font-size: 13px;}
            }
            `}</style>
        </div>
    );
}

export default register;