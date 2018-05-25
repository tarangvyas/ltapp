import React from 'react';

const banner= (props) =>{
    return (
        <div id="Banner" className="banner-home">
            <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

       
        <div className="carousel-inner">
            <div className="item active">
                <img src="./../../static/images/banner01.jpg" alt="" />
                <div className="carousel-caption">
					<div className="home-dcs">	
						<h2>Sell your car to the Lotus Dealer and
						Specialist network</h2>
						<p>Sell your car for FREE to trusted and accredited main dealers and approved Lotus specialists throughout the UK</p>
					</div>
					<div className="get-started">
						<div className="input-group custom-search-form">
						  <input type="text" placeholder="Enter Your Reg" className="form-control" id="reg1" />
						  <span className="input-group-btn">
							  <button type="button" className="btn btn-yellow font-b" onClick={(e)=>props.regHandler(e,'reg1')}>
							  Get started
							 </button>
						 </span>
						</div>
					</div>
                </div>
            </div>
            <div className="item">
                <img src="./../../static/images/banner01.jpg" alt="" />
                <div className="carousel-caption">
					<div className="home-dcs">	
						<h2>Sell your car to the Lotus Dealer and
						Specialist network</h2>
						<p>Sell your car for FREE to trusted and accredited main dealers and approved Lotus specialists throughout the UK</p>
					</div>
					<div className="get-started">
						<div className="input-group custom-search-form">
						  <input type="text" placeholder="Enter Your Reg" className="form-control" id="reg2" />
						  <span className="input-group-btn">
							  <button className="btn btn-yellow font-b" type="button" onClick={(e)=>props.regHandler(e,'reg2')}>
							  Get started
							 </button>
						 </span>
						</div>
					</div>
                </div>
            </div>
            <div className="item">
                <img src="./../../static/images/banner01.jpg" alt="" />
                <div className="carousel-caption">
					<div className="home-dcs">	
						<h2>Sell your car to the Lotus Dealer and
						Specialist network</h2>
						<p>Sell your car for FREE to trusted and accredited main dealers and approved Lotus specialists throughout the UK</p>
					</div>
					<div className="get-started">
						<div className="input-group custom-search-form">
						  <input type="text" placeholder="Enter Your Reg" className="form-control" id="reg3" />
						  <span className="input-group-btn">
							  <button className="btn btn-yellow font-b" type="button" onClick={(e)=>props.regHandler(e,'reg3')}>
							  Get started
							 </button>
						 </span>
						</div>
					</div>
                </div>
            </div>
        </div>

        
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="icon-prev"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="icon-next"></span>
        </a>
    </div>	
    <style jsx>{`
        .banner-home img{width: 100%;}
        .carousel-control.left {background-image: inherit;}
        .carousel-control.right {background-image: inherit;}
        .carousel-control {bottom: 0; left: 0;  opacity: 1; position: absolute; text-shadow: inherit; top: 0; width: 55px;}

        .banner-home .carousel-control .icon-prev, 
        .banner-home .carousel-control .icon-next {font-size: 0px; height: 60px; margin-top: -30px; margin-left: 0; margin-right: 0; width: 55px; background: url("./../../static/images/home-arrow.png") no-repeat; background-color: rgba(0, 0, 0, 0.55);}
        .banner-home .carousel-control .icon-prev {background-position: 14px 17px !important; left: 0;}
        .banner-home .carousel-control .icon-next {background-position: -30px 17px !important; right: 0;}

        .banner-home .carousel-caption {bottom: auto; left: 50%; margin-left: -570px; max-width: 835px;  padding-bottom: 30px; right: auto; top: 20%; text-align: left; text-shadow: none;}
        .banner-home .home-dcs{background-color:rgba(255,255,255,0.7); padding: 27px 30px; border-left:18px solid; border-color:rgba(17,62,16, 0.8);}
        .home-dcs h2 {color: #353535; font-family: "DINOT-Light"; font-size: 40px; line-height: 1; margin-bottom: 30px; margin-top: 0;}
        .home-dcs p{color: #222222; font-size: 17px; margin-bottom: 0;}
        .banner-home .get-started{background-color:rgba(0,53,13,0.8); padding: 30px; margin-left: 18px; max-width: 478px;}
        .banner-home .get-started .form-control {border: none; height: 42px; padding-left: 18px; text-transform: uppercase;}
        .banner-home .get-started .btn {border: none; height: 42px; padding: 0px 22px; text-transform: uppercase;}
        .carousel-indicators li {background-color: inherit; margin: 0; background-image: url("./../../static/images/banner-bullet.png"); background-position: -23px 0; border: none; border-radius: 0; height: 18px; width: 18px;}
        .carousel-indicators li.active{height: 18px; width: 18px; background-color: inherit; background-position: 0 0;}  

        @media all and (max-width: 1199px) {
        .banner-home .carousel-caption {margin-left: -469px; max-width: 700px;}
        .home-dcs h2 {font-size: 27px; margin-bottom: 12px;}
        .banner-home .home-dcs {padding: 12px 20px 14px;}
        .home-dcs p {font-size: 14px;}
        }

        @media all and (max-width: 991px) {
        .banner-home .carousel-control .icon-prev, .banner-home .carousel-control .icon-next {height: 46px; margin-top: -23px; width: 36px; background-size: 50px auto;}
        .banner-home .carousel-control .icon-prev {background-position: 8px 13px !important;}
        .banner-home .carousel-control .icon-next {background-position: -22px 13px !important;}
        .home-dcs h2 {font-size: 25px; margin-bottom: 15px;}
        .banner-home .home-dcs {padding: 20px;}
        .banner-home .carousel-caption {left: 11%; margin-left: 0; max-width: 500px; padding-bottom: 0px;  top: 7%;}
        .banner-home .get-started {max-width: 350px; padding: 20px;}
        .home-dcs p {font-size: 15px;}
        .banner-home .carousel-indicators {bottom: 0;}
        }
        @media all and (max-width: 767px) {
        .home-dcs h2 {font-size: 20px; margin-bottom: 10px;}
        .banner-home .home-dcs {border-left: 8px solid rgba(17, 62, 16, 0.8); padding: 10px;}
        .home-dcs p {font-size: 14px;}
        .banner-home .get-started {padding: 10px; margin-left: 8px;}
        .banner-home .get-started .btn {font-size: 13px; height: 38px;}
        .banner-home .get-started .form-control {height: 38px;}
        }	

        @media all and (max-width: 639px) {
        .banner-home .carousel-caption {max-width: 400px; padding-top: 0; top: 10%;}
        }

        @media all and (max-width: 567px) {
        .banner-home .home-dcs {display: none;}
        .banner-home .carousel-caption {display: block; height: 100%; left: 0; margin: 0 auto; max-width: 100%; padding-top: 0; right: 0; top: 0;}
        .banner-home .get-started {margin: -29px auto 0; padding: 10px; position: relative; top: 50%;}
        .banner-home img {
        margin-left: -15%;
        max-width: 130% !important;
        width: 130%;
        }
        }

        @media all and (max-width: 479px) {
        .banner-home .carousel-caption {left: 42px; right: 42px;}
        .banner-home .get-started .btn {font-size: 11px; height: 38px; padding: 6px 9px;}
        .banner-home .get-started .form-control {font-size: 11px;}
        }	
    `}</style>
</div>
    );
}

export default banner;