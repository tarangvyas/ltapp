import React from 'react';
import Link from 'next/link'

const commonbanner= (props) =>{
            let img="./../../static/images/create-account-banner.jpg";
            let title="Create <span className='text-yellow'>Account</span>";
            if(props.page=='create-account'){
                img="./../../static/images/create-account-banner.jpg";
                title="Create <span className='text-yellow'>Account</span>";
            }else if(props.page=='recover-password.php'){
                img="./../../static/images/create-account-banner.jpg";
                title="Recover <span className='text-yellow'>Password</span>";
            }else if(props.page=='login'){
                img="./../../static/images/banner-car-list.jpg";
                title="Login";
            }else if(props.page=='offers'){
                img="../../../static/images/banner-car-list.jpg";
                title="Offers";
            }else if(props.page=='offers-details'){
                img="./../../static/images/offers-details-banner.jpg";
                title="Offers <span className='text-yellow'>Details</span>";
            }else if(props.page=='account'){
                img="./../../static/images/register-banner.jpg";
                title="Account";
            }else if(props.page=='edit-preferences'){
                img="./../../static/images/edit-preferences-banner.jpg";
                title=<span>Edit<span className='text-yellow'> Preferences</span> </span>;
            }
            else if(props.page=='sell-my-car'){
                img="./../../static/images/sell-my-car-banner.jpg";
                title=<span><span className='text-yellow'>Sell </span> My Car</span>;
            }
            else if(props.page=='cms'){
                img="./../../static/images/about-us-banner.jpg";
                title=<span className='text-yellow'>{props.pagetitle}</span>;
            }
            else if(props.page=='seach-cars'){
                img="./../../static/images/car-list-banner.jpg";
                title=<span>Car<span className='text-yellow'> List</span> </span>;
            }
            else if(props.page=='car-detail'){
                img="./../../static/images/car-details-banner.jpg";
                title=<span>Car<span className='text-yellow'> Details</span> </span>;
            }
            else if(props.page=='dealer-register'){
                //img="./../../static/images/car-details-banner.jpg";
                title=<span>Create<span className='text-yellow'> Account</span> </span>;
            }
            else if(props.page=='dealer-dashboard'){
                img="./../../static/images/dashboard-banner.jpg";
                title=<span>DASHBOARD<span className='text-yellow'> OFFERS</span> </span>;
            }
            else if(props.page=='edit-preferences'){
                img="./../../static/images/edit-preferences-banner.jpg";
                title=<span>Edit<span className='text-yellow'> Preferences</span> </span>;
            }
            else if(props.page=='change-password'){
                title=<span>Change<span className='text-yellow'> Password</span> </span>;
            }
            
        
    return (
        <div className="banner-inner">
         <img src={img} alt="" />
        <div className="inner-tittle">
            <div>
                <div>
                    <h1 className="font-b text-uppercase text-white text-center">{title}</h1>
                    <ol className="breadcrumb">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li className="active font-m">{title}</li>
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

export default commonbanner;