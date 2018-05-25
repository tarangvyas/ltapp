import React, {Component} from 'react'
import { connect } from 'react-redux';
import Link from 'next/link'
import {FUEL_TYPE,CAR_TYPE,ROOT_URL
} from './../../actions/types';

class Cardetails extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    render() {
        let data='';
        let car_detail='';let mapimage='';let specification_list='';let panel_src='';
        
        if(this.props.cardata != null)
        {
            data=this.props.cardata;
            car_detail=JSON.parse(data.car_detail);
            //console.log(data.offers,'here');
            if(car_detail != null)
            {
                mapimage='https://maps.googleapis.com/maps/api/staticmap?center=';
                if(car_detail.seller.address != null)
                    mapimage += car_detail.seller.address;
                if(car_detail.seller.postcode != null)
                    mapimage += car_detail.seller.postcode;

                    mapimage += '&zoom=14&size=550x450';
                    if(car_detail.specification != null)
                    {
                        car_detail.specification.map((item,i)=>{
                            if(specification_list != '')
                                specification_list+=", "+item.specification_title;
                            else
                                specification_list=item.specification_title;    
                        });
                    }
            }        
            panel_src=ROOT_URL+'/../../storage/app/panel_grader/'+data.car_id+'.jpg'; 

        }
        return (
                <div>
                     <div className="row">
                        <div className="col-md-6 condition-features  text-gray">
                          <h3 className="font-l text-uppercase text-gray form-group"><span className="text-success-dark font-b">Condition</span> and features</h3>
                          <p>{data.description != ''? data.description :''}</p>
                        </div>
                        <div className="col-md-6 condition-features  text-gray">
                          <h3 className="font-l text-uppercase text-gray form-group"><span className="text-success-dark font-b">Seller</span> location</h3>
                          <div className="location">
                          
                          {car_detail != ''?
                                <img src={mapimage} />
                          :     <img src={mapimage} />
                          }
                          
                          </div>
                        </div>  
                     </div> 
                     <div className="row">   
                        <div className="col-md-12 condition-features  text-gray">
                          <h3 className="font-l text-uppercase text-gray form-group mar-top"><span className="text-success-dark font-b">Vehicle</span> Details</h3>
                        <div className="row vehicle-details">
                            <div className="col-sm-6">
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Registration Number </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data.reg_no != ''? data.reg_no :''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Manufacture </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{car_detail != ''?car_detail.data.make_name:''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Model </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{car_detail != ''?car_detail.data.model_name:''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Mileage </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.mileage:''} Miles</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Model Year </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.car_year:''}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Colour </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.color:''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Trim Colour </div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.trim_color:''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Pre Owner</div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.previous_owner:''}</div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6 col-xs-6 vehicle-details-tittle">Engine Size</div>
                                    <div className="col-sm-6 col-xs-6 font-m text-dark">{data!=''?data.engine_size:''}</div>
                                </div>
                            </div>
                        </div>
                         <h3 className="font-l text-uppercase text-gray form-group"><span className="text-success-dark font-b">{data!=''?data.service_type:''}</span> Specification</h3>
                         <div className="row">
                            <div className="col-md-8">
                                <p className="air-conditioning">
                                    {specification_list}
                                </p>
                                <h3 className="font-l text-uppercase text-gray form-group service-history-h"><span className="text-success-dark font-b">Service</span> History</h3>
                                <div className="full-specification-table table-responsive">
                                    <table border="0" width="100%" className="table">
                                        <thead>
                                            <tr>
                                                <th width="20%">Date</th>
                                                <th width="20%">Mileage</th>
                                                <th width="35%">Dealer</th>
                                                <th width="25%">Comments</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {car_detail.service!=null?car_detail.service.map((item,i)=>{
                                            
                                            return(
                                                <tr>
                                                    <td>{item.service_date}</td>
                                                    <td>{item.mileage}</td>
                                                    <td>{item.service_dealer}</td>
                                                    <td>{item.description}</td>
                                                </tr>
                                            );
                                        }):''}

                                        </tbody>
                                    </table>
                                    </div>
                                    <h3 className="font-l text-uppercase text-gray form-group tyre-tread-depths service-history-h"><span className="text-success-dark font-b">Tyre</span> Tread Depths</h3>
                                <div className="full-specification-table table-responsive">
                                    <table border="0" width="100%" className="table">
                                        <thead>
                                            <tr>
                                                <th width="25%">Front Left</th>
                                                <th width="25%">Front Right</th>
                                                <th width="25%">Front Left</th>
                                                <th width="25%">Front Right</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{data!=''?data.tyre_depth_fl:''}mm</td>
                                                <td>{data!=''?data.tyre_depth_fr:''}mm</td>
                                                <td>{data!=''?data.tyre_depth_rl:''}mm</td>
                                                <td>{data!=''?data.tyre_depth_rr:''}mm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            

                            </div>
                            <div className="col-md-4 full-specification-right">
                                <img className="img-responsive" alt="" src={panel_src} />
                            </div>
                        </div>

                        </div>
                    </div>    
                <style jsx>{`
                            .condition-features {margin-top: 38px;}
                            .condition-features h3{ border-bottom: 1px solid #d8d8d8; padding-bottom: 10px;}
                            .condition-features p {font-size: 16px; line-height: 1.5; text-align: justify;}
                            .condition-features h4 {margin: 22px auto;}
                                
                            @media all and (max-width: 1199px) {
                            .condition-features h3{font-size: 20px;}
                            .condition-features p {font-size: 14px;}
                            }   
                            .location {border: 3px solid #d1d1d1; margin-top: 28px;}
                            .vehicle-details {font-size: 16px; margin-bottom: 35px; margin-top: 22px;}
                            .vehicle-details .row.form-group{margin-bottom: 6px;}
                            .vehicle-details .vehicle-details-tittle{text-align: right;}
                            .full-specification-table table{border-left: 1px solid #c0c6c0; border-top: 1px solid #c0c6c0;}
                            .full-specification-table th{background-color: #d3dcd4;}
                            .full-specification-table tr:nth-child(even) {background: #f1f1f1}
                            .full-specification-table tr:nth-child(odd) {background: #FFF}
                            .full-specification-table th, .full-specification-table td {padding: 8px 10px; border-right: 1px solid #c0c6c0; border-bottom: 1px solid #c0c6c0;}
                            .condition-features .service-history-h{padding-bottom: 0; border-bottom: none;}
                            .air-conditioning {margin-bottom: 38px; margin-top: 4px;}
                            .tyre-tread-depths{margin-top: 28px;}
                            .full-specification-right{margin-top: 15px;}
                            .mar-top{margin-top: 0;}
                            select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../../static/images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                            .wheels-car .panel-default{border-radius: 0;  margin-left: auto; margin-right: auto; max-width: 372px;}
                            .wheels-car .price{font-size: 18px;}
                            select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../../static/images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                            .offer-detells-popup .pad-offer {display: block; padding: 10px 0;}
                            .make-offer-btn .btn {margin-left: 10px; min-width: 130px; margin-top: 10px;}
                            .offer-detells-popup h4{margin-bottom: 25px;}
                            .make-offer-btn {margin-top: 25px;}

                            @media all and (max-width: 767px) {
                            .vehicle-details .vehicle-details-tittle {text-align: left;}
                            }
   
                `}</style> 
                </div>
                
        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  //console.log('component2',state.Cardetail.car_data);
  return {
    cardata:state.Cardetail.car_data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cardetails);