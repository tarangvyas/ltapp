import React, {Component} from 'react';
import {connect} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Router from 'next/router';
import DealerSideBar from './../Sidebar/DealerSidebar';
import {STORAGE_URL,TYRE_LENGTH,ROOT_URL}  from './../../actions/types';
import moment from 'moment'
import {Fetchcontent,Fetchoffercontent,EditOffer} from './../../actions/offer';
import Offerform from './Offerform';



class DealerDashboard extends Component {
  
  constructor(props) {
    super(props)
 
  }
  handleFormSubmit(formProps) {
  }
  componentWillMount() {
    this.props.viewDataHandler(this.props.token);
  }
  Unix_timestamp(t)
  {
      var dt = new Date(t*1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      if(dt.getDate() < 10) 
        var dt2="0" + dt.getDate();
      else
        var dt2= dt.getDate();

      if(dt.getMonth() < 10) 
        var mnth="0" + dt.getMonth();
      else
        var mnth= dt.getMonth();

      var dt1 = dt2+'-'+mnth+'-'+dt.getFullYear();
      return dt1;
      return dt1+' '+hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
  }
  makeoffer=(id)=>{
      this.props.viewCarDataHandler(id,this.props.token);
  }
  submitoffer=(postData)=> {
    this.props.makeOfferHandler(postData,this.props.token);
    //this.props.closeModal();
  }  
  closeModal=()=> {
    
    this.props.viewDataHandler(this.props.token);
    var element = document.getElementById("myModal");
    element.classList.remove("in");
    let bd=document.getElementsByClassName("modal-backdrop")[0];
    bd.className=bd.className.replace("in","");
    document.body.className=document.body.className.replace("modal-open","");
  }
  render() {
   let data='';
   
    if(this.props.offers != null)
    {
      data=this.props.offers.data.live_offers;
    }
    if(this.props.cardata.offer_popup == false)
    {
      this.closeModal();
    }
    let car_detail='';
    let img_src='';
    
    return (
        <div className="container">
        <div className="row">
          <DealerSideBar page="dealer-dashboard"/>
            <div className="col-md-8 col-sm-12 deshbord-offers-page">
                  <h3 className="font-l text-uppercase text-gray form-group Offers-tittle"><span className="font-b text-success-dark">DASHBOARD </span> OFFERS</h3>
                  <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">Live Offer</a></li>
                    <li><a data-toggle="tab" href="#menu1">Accepted Offers</a></li>
                    <li><a data-toggle="tab" href="#menu2">Purchase History</a></li>
                    <li><a data-toggle="tab" href="#menu3">Rejected Offers</a></li>
                    <li><a data-toggle="tab" href="#menu4">Re-listed Offers</a></li>
                    <li><a data-toggle="tab" href="#menu5">Watch  List</a></li>
                  </ul>

                  <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                    <h4 className="font-b text-gray form-group">Live Offer</h4>
                    <p>This is your current dashboard showing the cars you are currently bidding on. If your offer has been accepted then you will get a notification by email informing you of this and on the status bar under (Accepted Offers) will read Accepted and be available to view in the Accepted Tab. </p>
                    <div className="clearfix"></div>
                    <div className="deshbord-offers-table table-responsive">
                        <table className="table mar-b">
                          <tbody>
                          <tr>
                            <th className="font-m" width="10%">Images</th>
                            <th className="font-m" width="12%">Models </th>
                          {/*<th className="font-m" width="12%">Accepted Offers </th>*/}
                            <th className="font-m" width="10%">Your Offer</th>
                            <th className="font-m" width="10%">Date</th>
                            <th className="font-m" width="10%">Auction End Time</th>
                            <th className="font-m" width="10%">Action
                            </th>
                          </tr>
                         
                         {this.props.offers != null?this.props.offers.data.live_offers.map((item,i)=>{
                           {item.car.carimages.length > 0 ?
                              img_src=ROOT_URL+'/../../storage/app/'+item.car.carimages[0].file_name:img_src=ROOT_URL+'/../../storage/app/car/default.jpg'
                           }
                          return (<tr>
                            <td className="img-table">
                                <img src={img_src} />
                                
                            </td>
                            <td>
                              <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}> 
                              <a href="#" className="font-m text-yellow-dark">
                              <u>
                                {item.car.car_detail!=null?
                                  JSON.parse(item.car.car_detail).data.make_name+' '+
                                  JSON.parse(item.car.car_detail).data.model_name
                                  :''}
                              </u></a> 
                              </Link>
                            </td>
                            {/*<td>{item.accepted_offer}</td>*/}
                            <td>{item.offer_amount}</td>
                            <td>{item.offer_date != null?this.Unix_timestamp(item.offer_date):null}</td>
                            <td>{item.exp_date != null?this.Unix_timestamp(item.exp_date):null}</td>
                            <td className="text-center">
                              <a href="#" onClick={()=>this.makeoffer(item.offer_id)} className="btn btn-success font-m btn-md" data-toggle="modal" data-target="#myModal">Increase Bid</a>
                            </td>
                          </tr>);
                        }):<tr><td>No Record Found.</td></tr>}                

                        {this.props.offers != null?this.props.offers.data.live_offers.length > 0 ? '':<tr><td colspan="6">No Record Found.</td></tr>:''}

                          </tbody>
                        </table>
                        
                        <div id="myModal" className="modal fade pupup" role="dialog">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header form-group">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title modal-title text-success-dark font-b text-uppercase">Let's get the wheels in motion</h4>
                                  </div>
                                  <div className="modal-body">
                                      <Offerform submitHandler={this.submitoffer} closeModalHandler={this.closeModal}/>
                                  </div>
                              </div>
                            </div>        
                      </div>
                      </div>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                    <h4 className="font-b text-gray form-group">Accepted Offers</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                    <div className="clearfix"></div>
                    <div className="deshbord-offers-table table-responsive">
                        <table className="table mar-b">
                          <tbody>
                          <tr>
                            <th className="font-m" width="10%">Images</th>
                            <th className="font-m" width="12%">Models </th>
                            <th className="font-m" width="10%">Your Offer</th>
                            <th className="font-m" width="10%">Date</th>
                            <th className="font-m" width="10%">Auction End Time</th>
                          </tr>
                          {this.props.offers != null?this.props.offers.data.accepted_offers.map((item,i)=>{
                            {item.car.carimages.length > 0 ?
                                img_src=ROOT_URL+'/../../storage/app/'+item.car.carimages[0].file_name:img_src=ROOT_URL+'/../../storage/app/car/default.jpg'
                            }
                            return (<tr>
                              <td className="img-table">
                                  <img src={img_src} />
                              </td>
                              <td>
                                <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}> 
                                <a href="#" className="font-m text-yellow-dark">
                                <u>
                                  {item.car.car_detail!=null?
                                    JSON.parse(item.car.car_detail).data.make_name+' '+
                                    JSON.parse(item.car.car_detail).data.model_name
                                    :''}
                                </u></a> 
                                </Link>
                              </td>
                              <td>{item.offer_amount}</td>
                              <td>{item.offer_date != null?this.Unix_timestamp(item.offer_date):null}</td>
                              <td>{item.car != null?this.Unix_timestamp(item.car.exp_date):null}</td>
                            </tr>);
                          }):''} 

                          {this.props.offers != null?this.props.offers.data.accepted_offers.length == 0 ?<tr><td colspan="5">No Record Found.</td></tr>:'':''}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                    <h4 className="font-b text-gray form-group">Purchase History</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                    <div className="clearfix"></div>
                    <div className="deshbord-offers-table table-responsive">
                        <table className="table mar-b">
                          <tbody>
                          <tr>
                            <th className="font-m" width="10%">Images</th>
                            <th className="font-m" width="12%">Models </th>
                            <th className="font-m" width="10%">Your Offer</th>
                            <th className="font-m" width="10%">Date</th>
                            <th className="font-m" width="10%">Auction End Time</th>
                          </tr>
                          
                          {this.props.offers != null?this.props.offers.data.purchase_history.map((item,i)=>{
                            {item.carimages.length > 0 ?
                                img_src=ROOT_URL+'/../../storage/app/'+item.carimages[0].file_name:img_src=ROOT_URL+'/../../storage/app/car/default.jpg'
                            }
                            return (<tr>
                              <td className="img-table">
                                  <img src={img_src} />
                              </td>
                              <td>
                                <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}> 
                                <a href="#" className="font-m text-yellow-dark">
                                <u>
                                  {item.car_detail!=null?
                                    JSON.parse(item.car_detail).data.make_name+' '+
                                    JSON.parse(item.car_detail).data.model_name
                                    :''}
                                </u></a> 
                                </Link>
                              </td>
                              <td>{item.offer_amount}</td>
                              <td>{item.offer_date != null?this.Unix_timestamp(item.offer_date):null}</td>
                              <td>{item.car != null?this.Unix_timestamp(item.car.exp_date):null}</td>
                            </tr>);
                          }):''} 
                          {this.props.offers != null?this.props.offers.data.purchase_history.length == 0 ?<tr><td colspan="5">No Record Found.</td></tr>:'':''}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                    <h4 className="font-b text-gray form-group">Rejected Offers</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                    <div className="clearfix"></div>
                    <div className="deshbord-offers-table table-responsive">
                        <table className="table mar-b">
                          <tbody>
                          <tr>
                            <th className="font-m" width="10%">Images</th>
                            <th className="font-m" width="12%">Models </th>
                            <th className="font-m" width="10%">Your Offer</th>
                            <th className="font-m" width="10%">Date</th>
                            <th className="font-m" width="10%">Auction End Time</th>
                          </tr>
                          {this.props.offers != null?this.props.offers.data.rejected_offers.map((item,i)=>{
                            {item.car.carimages.length > 0 ?
                                img_src=ROOT_URL+'/../../storage/app/'+item.car.carimages[0].file_name:img_src=ROOT_URL+'/../../storage/app/car/default.jpg'
                            }
                            return (<tr>
                              <td className="img-table">
                                  <img src={img_src} />
                              </td>
                              <td>
                                <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}> 
                                <a href="#" className="font-m text-yellow-dark">
                                <u>
                                  {item.car.car_detail!=null?
                                    JSON.parse(item.car.car_detail).data.make_name+' '+
                                    JSON.parse(item.car.car_detail).data.model_name
                                    :''}
                                </u></a> 
                                </Link>
                              </td>
                              <td>{item.offer_amount}</td>
                              <td>{item.offer_date != null?this.Unix_timestamp(item.offer_date):null}</td>
                              <td>{item.car != null?this.Unix_timestamp(item.car.exp_date):null}</td>
                            </tr>);
                          }):''}
                          {this.props.offers != null?this.props.offers.data.rejected_offers.length == 0 ?<tr><td colspan="5">No Record Found.</td></tr>:'':''}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="menu4" className="tab-pane fade">
                        <h4 className="font-b text-gray form-group">Re-Listed Offers</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <div className="clearfix"></div>
                        <div className="deshbord-offers-table table-responsive">
                        </div>
                    </div>
                    <div id="menu5" className="tab-pane fade">
                    <h4 className="font-b text-gray form-group">Wathch list</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                    <div className="clearfix"></div>
                    <div className="deshbord-offers-table table-responsive">
                        <table className="table mar-b">
                          <tbody>
                          <tr>
                            <th className="font-m" width="10%">Image</th>
                            <th className="font-m" width="12%">Models </th>
                            <th className="font-m" width="10%">Asking Price</th>
                            <th className="font-m" width="10%">Year</th>
                            <th className="font-m" width="10%">Listing Expire</th>
                            
                          </tr>
                          {this.props.offers != null?this.props.offers.data.watch_list.map((item,i)=>{
                            {item.car.carimages.length > 0 ?
                                img_src=ROOT_URL+'/../../storage/app/'+item.car.carimages[0].file_name:img_src=ROOT_URL+'/../../storage/app/car/default.jpg'
                            }
                            let cd='';let car='';
                            if(item.car_detail !=null)
                            {
                              cd = JSON.parse(item.car_detail);
                              if(cd.data!=null)
                                car=cd.data.make_name+' '+cd.data.model_name;
                            }
                            return (<tr>
                              <td className="img-table">
                                  <img src={img_src} />
                              </td>
                              <td>
                                <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}> 
                                <a href="#" className="font-m text-yellow-dark"><u>{car}</u></a> 
                                </Link>
                              </td>
                              <td>{item.asking_price}</td>
                              <td>{item.car_year}</td>
                              <td>{item.exp_date != null?this.Unix_timestamp(item.exp_date):null}</td>
                            </tr>);
                          }):''}
                          {this.props.offers != null?this.props.offers.data.watch_list.length == 0 ?<tr><td colspan="5">No Record Found.</td></tr>:'':''}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>  
          </div>
          <style jsx>{`
              .Offers-tittle {border-bottom: 1px solid #d8d8d8; margin-bottom: 25px; padding-bottom: 15px;}
              .deshbord-offers-page .nav-tabs > li > a,
              .deshbord-offers-page .nav-tabs > li > a:hover {background: #f2f2f2; font-size: 12px; text-transform: uppercase; margin-right: 2px; border-radius: 0; border: none; color: #535353; font-family: "DINOT-Medium"; padding: 12px 14px;} 
              .deshbord-offers-page .nav-tabs > li.active > a {background: #fdd60f; border: none; color: #000;}
              .deshbord-offers-page .nav-tabs{border: 0; margin-bottom: 22px;}

              .table-responsive {margin: 15px auto;}
              .table-responsive table{border-bottom: 1px solid #c0c6c0; border-left: 1px solid #c0c6c0;border-top: 1px solid #c0c6c0; border-collapse: inherit;}
              .table-responsive th{font-weight: normal; background: #d3dcd4; color: #333; }
              .table-responsive th,
              .table-responsive td{font-size: 13px; border-right: 1px solid #c0c6c0; padding: 10px 10px !important;}
              .table-responsive tr:nth-child(even) {background: #f9f9f9;}
              .table-responsive tr:nth-child(odd) {background: #FFF;}
              .deshbord-offers-table .img-table img{max-width: 50px;}
              .deshbord-offers-page .tab-pane {
                border: medium none;
              }
              @media all and (max-width: 767px) {
              .deshbord-offers-page {margin-top: 42px;}
              }	

              @media all and (max-width: 639px) {
              .deshbord-offers-page .nav-tabs > li {margin-bottom: 1px; width: 100%;}
              .deshbord-offers-page .nav-tabs > li > a, .deshbord-offers-page .nav-tabs > li > a:hover {margin-right: 0;}
              }	
          `}</style>     
        </div>
      );
  }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  //console.log('component111',state.Offers);
  return {
    cardata:state.Offers,
    //live_offers:state.Offers.data,
   // accepted_offers:null,
    offers:state.Offers.data
    //live_offers:state.Offers.data.live_offers, 
    //accepted_offers:state.Offers.data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        viewDataHandler: (token) => dispatch(Fetchcontent(token)),
        viewCarDataHandler: (id,token) => dispatch(Fetchoffercontent(id,token)),
        makeOfferHandler: (params,token) => dispatch(EditOffer(params,token))
    }
}

DealerDashboard = connect(
    mapStateToProps,mapDispatchToProps
)(DealerDashboard);
export default withRedux(mapStateToProps)(DealerDashboard);