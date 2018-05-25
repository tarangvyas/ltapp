import React, {Component} from 'react'
import {Fetchcontent} from './../../actions/cardetail';
import { connect } from 'react-redux';
import Link from 'next/link'

class Dealerinfo extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let id=this.props.id;
        this.props.viewDataHandler(id,this.props.token);
        
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="whyus-Lotus clear">
                        <h3 className="whyus-tittle font-l text-uppercase text-gray text-center"><span className="font-b">UNDERNEATH</span> WHY BUY WITH LOTUS TRADER?</h3>
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <div className="whyus-box">
                                    <div className="whyus-img">
                                        <img src="./../../static/images/source-stock-public-ico.png" alt="" />
                                    </div>
                                    <div className="whyus-contant">
                                        <h5 className="text-uppercase font-m text-gray">SOURCE STOCK DIRECTLY FROM THE GENERAL PUBLIC</h5>
                                        <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group">
                                <div className="whyus-box">
                                    <div className="whyus-img">
                                        <img src="./../../static/images/detailed-info-car-ico.png" alt=""/>
                                    </div>
                                    <div className="whyus-contant">
                                        <h5 className="text-uppercase font-m text-gray">DETAILED LISTINGS ON EACH CAR </h5>
                                        <p className="text-muted">It is a long established fact that a reader will be distracted by the readable. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <div className="whyus-box">
                                    <div className="whyus-img">
                                        <img src="./../../static/images/easy-online-ico.png" alt=""/>
                                    </div>
                                    <div className="whyus-contant">
                                        <h5 className="text-uppercase font-m text-gray">EASY ONLINE MANAGEMENT </h5>
                                        <p className="text-muted">It is a long established fact that a reader will be distracted. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group">
                                <div className="whyus-box">
                                    <div className="whyus-img">
                                        <img src="./../../static/images/no-subscription-ico.png" alt=""/>
                                    </div>
                                    <div className="whyus-contant">
                                        <h5 className="text-uppercase font-m text-gray">NO SUBSCRIPTION FEES </h5>
                                        <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                    
                </div>
                <div className="Other-benefit bg-light">
                    <div className="container">
                        <h3 className="whyus-tittle font-l text-uppercase text-gray text-center mar-t"><span className="font-b">Other</span>  Benefits</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul>
                                <li>List your over age stock directly to buyers  lotus dealer network  </li>
                                <li>List your part exchanges directly to the lotus dealer and lotus specialist network</li>
                                <li>Maximise exposure maximise opportunity maximise revenue.</li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-responsive img-thumbnail" src="./../../static/images/other-benefits-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="how-work-registration">
                    <div className="container-fluid">
                        <h3 className="whyus-tittle font-l text-uppercase text-gray text-center mar-t"><span className="font-b">How</span>  it works</h3>
                        <h4 className="text-center font-l">Start buying cars in 4 easy steps.... </h4>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12 how-work-left-bg">
                                    <div className="how-work-left">
                                    <div className="row form-group">
                                        <div className="col-sm-6 col-xs-6 form-group text-center">
                                            <div className="how-work-box">
                                                <div className="how-work-img">
                                                    <img src="./../../static/images/get-alerts-car-ico.png" alt="" />
                                                </div>
                                                <div className="how-work-contant">
                                                    <h5 className="text-uppercase font-b text-dark">Get alerts</h5>
                                                    <p className="text-dark">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-6 form-group text-center">
                                            <div className="how-work-box">
                                                <div className="how-work-img">
                                                    <img src="./../../static/images/car-profile-ico.png" alt="" />
                                                </div>
                                                <div className="how-work-contant">
                                                    <h5 className="text-uppercase font-b text-dark">View car profile</h5>
                                                    <p className="text-dark">It is a long established fact that a reader will be distracted by the readable. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-6 form-group text-center">
                                            <div className="how-work-box">
                                                <div className="how-work-img">
                                                    <img src="./../../static/images/make-offer-ico.png" alt="" />
                                                </div>
                                                <div className="how-work-contant">
                                                    <h5 className="text-uppercase font-b text-dark">Make an offer</h5>
                                                    <p className="text-dark">It is a long established fact that a reader will be distracted. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-6 form-group text-center">
                                            <div className="how-work-box">
                                                <div className="how-work-img">
                                                    <img src="./../../static/images/close-deal-ico.png" alt="" />
                                                </div>
                                                <div className="how-work-contant">
                                                    <h5 className="text-uppercase font-b text-dark">Close deal</h5>
                                                    <p className="text-dark">It is a long established fact that a reader will be distracted by the readable content of a page. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 how-work-right-bg"></div>
                            </div>
                        </div>
                    </div> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-sm-12 seller-faqs col-md-offset-1 col-sm-offset-0">
                                <h3 className="whyus-tittle font-l text-uppercase text-gray text-center mar-t"><span className="font-b">Dealer</span>  FAQs</h3>
                                        <div className="panel-group accordion-4" id="accordion">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle actives" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Why should I sell my car through Lotus Trader?</a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse in">
                                <div className="panel-body">
                                <p>The concept is very simple yet very effective, by offering your car to more buyers not only are you likely to get more for it but it ensures you get the true trade value for your car.</p>
                                <p>Rather than negotiating with one dealer we turn the traditional process of trading your car upside down by putting your Lotus in front of dealers and specialists through the UK. The best bit? you can do it all from the comfort of your home! Lotus Trader helps re-balance the relationship between car owners and professional car buyers, making sure you get the best possible price.</p>
                                <p>Unlike a private sale or an online auction, you're dealing with seasoned and respected industry professionals who have been checked out by us. They have the money and a constant need for new vehicles, meaning that you can sell your car quickly to someone you trust.</p>
                                <p>We only disclose your contact details to someone who has made a firm offer to buy your car - so you'll only get a call from a serious buyer. What's more, it's completely free, with no admin charges in the small print.</p>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse2">So where do I start?</a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                                <div className="panel-body">
                                <p>We have designed Lotus Trader to be as quick, easy and efficient as possible. Simply enter your car details using the form above, upload a few photos, let us know about its service history and any damage... and that's it</p>
                                <p>Your car will then be advertised to interested buyers across the UK. They'll compete with each other on price and service, making sure you get the best possible deal.</p>
                                </div>
                            </div>
                            </div>

                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Are there any Age or Mileage restrictions on Lotus Trader?</a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                                <div className="panel-body">
                                <p>We can provide you with an immediate offer for your Lotus irrespective of any age and with any mileage. Because we are partnered with not only main dealers but reputable specialists we accept any car which bears a Lotus badge, this includes accident damaged, previously accident repaired, high mileage, race cars and classics we have buyer for everything.</p>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse4">Does Lotus Trader Charge any fees?</a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse">
                                <div className="panel-body">
                                <p>No, Lotus Trader is always free for sellers: we don't charge for valuations or any other part of the sales process. That's just one of the reasons our sellers get up to £3000 more when they sell a car with us.</p>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse5">How much will I get for my car?</a>
                                </h4>
                            </div>
                            <div id="collapse5" className="panel-collapse collapse">
                                <div className="panel-body">
                                <p>By advertising your car to the Lotus network across the UK, Lotus Trader makes dealers compete for your car. It maximises the price you can get when compared with a trade-in or sale to a traditional dealer or car buying service.</p>

                                <p>As a general guide, you should expect to get more than online car buying services and a competitive price when compared to part-exchange values.</p>

                                <p>As a general rule, it is likely to be less than you would achieve from a private sale, but you will benefit from all the convenience and reassurance of dealing with vetted, trustworthy buyers.</p>

                                <p>Remember that the price of the same model will usually be higher on the forecourt, because the dealer will need to cover their own costs and profit margin when they sell.</p>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse6">AHow will I hand over my car?</a>
                                </h4>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse">
                                <div className="panel-body">
                                <p>More than 80% of the cars bought on Lotus Trader are collected direct from the seller's driveway. Every offer you receive will make it clear how the car is to be handed over, letting you choose the perfect offer for you based on price and convenience.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="read-more-btn text-center">
                            <Link href={{ pathname: 'cms', query: { page: 'faq',page_title:'FAQs' }}}>
                                <a href="#" className="btn btn-yellow font-m btn-lg uppercase-text"><span>Read more</span></a>
                            </Link>    
                        </div>
                     </div>
                    </div>
                </div>   
                 <style jsx>{`
                            .whyus-Lotus {padding-bottom: 45px; padding-top: 45px;}
                            .whyus-Lotus h2{margin-bottom: 50px;}
                            .whyus-Lotus .whyus-box{padding: 30px;min-height: 150px; font-size: 15px; box-shadow: 0 0px 10px 0px rgba(170, 170, 170, 0.1); border: 1px solid #eeeeee; background: #fff;}
                            
                            .whyus-box .whyus-img {display: table-cell; vertical-align: middle;}
                            .whyus-box .whyus-contant {display: table-cell; padding-left: 22px; vertical-align: middle; width: 100%;}
                            .whyus-box .whyus-img img {max-width: 60px;}
                            .whyus-Lotus .row > .form-group{margin-bottom: 28px;}
                            .how-work-registration {margin-bottom: 55px;}
                            .how-work-right-bg{background-image: url("./../../static/images/how-it-work-registration.jpg"); background-position: center center; background-repeat: no-repeat; background-size: cover; overflow: hidden; min-height: 470px; position: relative; margin-top: 30px;}
                            .how-work-left {float: right;max-width: 555px;}
                            .how-work-left-bg{background: #ffc21e; font-size: 15px; min-height: 470px; padding-top: 40px; padding-bottom: 20px; margin-top: 30px;}
                            .how-work-registration h2 {margin-bottom: 22px;}
                            
                            .how-work-box .how-work-img img{max-width: 80px; margin-bottom: 5px;}
                            .how-work-box h5{margin-bottom: 15px;}
                            
                            
                            .seller-faqs .panel {border-radius: 0; box-shadow: none;}
                            .seller-faqs .panel-default > .panel-heading .panel-title {color: #717171; font-family: "DINOT-Medium"; font-size: 18px; font-weight: normal;}
                            .seller-faqs #accordion > .panel-default .panel-title a.actives{color: #00350d;background: url("./../../static/images/faq-minus.png") no-repeat 0 center;}
                            .seller-faqs .panel-default > .panel-heading .panel-title a{background: url("./../../static/images/faq-plus.png") no-repeat 0 center ; padding: 5px 3px 5px 42px;}
                            .seller-faqs .panel-default > .panel-heading .panel-title a{text-decoration: none; display: block;}
                            .seller-faqs .panel-default > .panel-heading{background-color: #fff;}
                            .seller-faqs .panel .panel-body{color: #717171; font-size: 15px; line-height: 1.4; border-top: none !important;}
                            .seller-faqs .panel .panel-body p {margin-bottom: 24px;}
                            
                            .whyus-tittle{ font-size: 30px; margin-bottom: 35px; padding-bottom: 20px; position: relative;}
                            .whyus-tittle::before {background: #ffc21e; bottom: 0; content: ""; height: 2px; left: 0; margin: 0 auto; position: absolute; right: 0; width: 60px;}
                            
                            .read-more-btn {margin-top: 36px;}
                            .read-more-btn span {background:url("./../../static/images/read-more-ico.png") no-repeat right center; display: inline-block; font-size: 16px; padding: 3px 30px 3px 2px;}
                            
                            .Other-benefit {margin-bottom: 60px; padding: 55px 0 60px;}
                            .Other-benefit p {font-size: 15px; color: #727272; line-height: 1.6; text-align: justify;}
                            .Other-benefit ul{margin: 25px 0 0; padding: 0; list-style: none;}
                            .Other-benefit li {background: url(./../../static/images/bullet-benefit.png) no-repeat 0 7px; color: #636363; font-family: "DINOT-Medium"; font-size: 14px; margin-bottom: 6px; padding: 4px 4px 4px 26px;}
                            .Other-benefit img {border-radius: 0; width: 100%;}
                             @media all and (max-width: 1199px) {
                                .whyus-Lotus .whyus-box {min-height: 190px; font-size: 14px;}
                                }
                                
                            @media all and (max-width: 991px) {
                                .whyus-Lotus .whyus-box {min-height: 210px;}
                                .how-work-right-bg {margin-top: 0;}
                                .how-work-left {max-width: 100%; clear: both; width: 100%;}
                                .how-work-left-bg {min-height: auto; clear: both;}
                                .Other-benefit {padding: 46px 0 50px; margin-bottom: 44px;}
                            }
                            
                            @media all and (max-width: 767px) {
                                .whyus-tittle {font-size: 24px;}
                                .whyus-box .whyus-img {display: block; text-align: center; margin-bottom: 22px;}
                                .whyus-box .whyus-contant {display: block; padding-left: 0; text-align: center;}
                                .whyus-Lotus {padding-bottom: 25px; padding-top: 25px;}
                                .Other-benefit ul {margin: 0;}
                                .Other-benefit img {margin-top: 20px;}
                                .how-work-right-bg {display: none;}
                                .seller-faqs .panel-default > .panel-heading .panel-title {font-size: 16px;}
                                .how-work-registration {margin-bottom: 46px;}
                            }
                            
                            @media all and (max-width: 567px) {
                                .how-work-left > .row .col-xs-6{width: 100%;}
                            }	
                    }
                `}</style> 
            </div>
        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  //console.log('component111',state.Cardetail);
  return {
    cardata:state.Cardetail,
    car_detail:state.Cardetail.car_data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        viewDataHandler: (id,token) => dispatch(Fetchcontent(id,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dealerinfo);