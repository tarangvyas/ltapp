import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from '../Forms/renderField'
import { connect } from 'react-redux';
import {FUEL_TYPE,CAR_TYPE,ROOT_URL
} from './../../actions/types';

const renderSelectField = ({ input, classes, type, meta: { touched, error }, children }) => (
    <div>
      <select {...input} className={classes}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
)
class Offerform extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    updatelist() 
    {
     // alert('dfd');
      let total_amount=parseFloat(document.getElementById('offer_amount').value)+parseFloat(document.getElementById('lotus_fee').value);
      //alert(total_amount);
      document.getElementById('total_offer_amount').innerHTML=total_amount;
    }
    handleFormSubmit(formProps) {
          console.log(formProps,'formProps');
          this.props.submitHandler(formProps);
    }
    render() {

      let data='';
      let car_detail=null;
      let carimagelength=0;
      let max_offer_amount=0;
      let first_image=ROOT_URL+'/../../storage/app/car/default.jpg';
      let offer_data='';
      
      if(this.props.offerdata.offer_data != null)
      {
         //console.log(this.props.offerdata.offer_data,'here');
          offer_data=this.props.offerdata.offer_data;
        data=this.props.offerdata.offer_data.car;
        car_detail=JSON.parse(data.car_detail);
        carimagelength=data.carimages.length;
        data.offers.map((item,i)=>{
          if(max_offer_amount < item.offer_amount)
              max_offer_amount=item.offer_amount;
        });
        this.props.change('car_id', data.car_id);
        
        if(data.carimages.length > 0){
          first_image=ROOT_URL+'/../../storage/app/'+data.carimages[0].file_name;
          var indents = [];
          /*for (var i = 0; i < 4; i++) {
            //let img_src=ROOT_URL+'/../../storage/app/'+data.carimages[i].file_name;
            //if(i==0){first_image=img_src;}
            
          }*/
        } 
        this.props.change('offer_amount', offer_data.offer_amount);
        this.props.change('offer_id', offer_data.offer_id);
        this.props.change('collect', offer_data.collect);
        this.props.change('description', offer_data.description);
        this.props.change('exp_date', offer_data.offer_expire);
      }

      
  
      
      const { handleSubmit } = this.props
     return (
      <div>
      <style jsx>{`
                  
                  
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
                  select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                  .wheels-car .panel-default{border-radius: 0;  margin-left: auto; margin-right: auto; max-width: 372px;}
                  .wheels-car .price{font-size: 18px;}
                  select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                  .offer-detells-popup .pad-offer {display: block; padding: 10px 0;}
                  .make-offer-btn .btn {margin-left: 10px; min-width: 130px; margin-top: 10px;}
                  .offer-detells-popup h4{margin-bottom: 25px;}
                  .make-offer-btn {margin-top: 25px;}

                  @media all and (max-width: 767px) {
                  .vehicle-details .vehicle-details-tittle {text-align: left;}
                  }
      `}</style> 
                 <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                      <div className="col-sm-5 wheels-car">
                        <div className="form-group panel panel-body panel-default">
                          <div className="text-center form-group">
                            <img src={first_image} alt="" />
                          </div>
                            <h4 className="font-l form-group text-uppercase"><span className="text-success-dark font-b"> {data!=''?data.car_year:''}</span> </h4>
                            <h4 className="form-group">
                               {data!=''?data.reg_no:''}&nbsp;
                               {car_detail!=null?car_detail.data.make_name:''}&nbsp;
                               {car_detail!=null?car_detail.data.model_name:''}</h4>
                            <div className="clearfix form-group">
                              <span className="font-b text-yellow-dark text-uppercase pull-left price">£{data!=''?data.asking_price:''} </span> 
                              <span className="font-m text-gray pull-right">Mileage : <span className="text-success-dark">{data!=''?data.mileage:''} </span>  </span>
                            </div>
                      </div>
                      </div>
                      <div className="col-sm-7 offer-detells-popup">
                        <h4 className="font-m form-group mar-t">Enter your offer detells belor and click more offer.</h4>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m"><span className="pad-offer">Offer Amout :</span></div>
                          <div className="col-md-8 col-sm-7">
                              <Field name="offer_amount" classes="form-control" type="text" component={renderField} value={offer_data != ''?offer_data.offer_amount:'34'}/>
                              <Field name="car_id" classes="form-control" type="hidden" component={renderField} value={data!=null?data.car_id:''} />
                              <Field name="offer_id" classes="form-control" type="hidden" component={renderField} value={data!=null?offer_data.offer_id:''} />
                         </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m">Lotus fee :</div>
                          <div className="col-md-8 col-sm-7">£400  
                            <Field name="lotus_fee" id="lotus_fee" classes="form-control" type="hidden" component={renderField} />
                            </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m">Total :</div>
                          <div className="col-md-8 col-sm-7">£<span id="total_offer_amount"></span>  </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m">Car Listing Expire :</div>
                          <div className="col-md-8 col-sm-7">{data.exp_date !=  null ?moment(moment.unix(data.exp_date).format("YYYY-MM-DD")).from(moment(moment().format("YYYY-MM-DD"))):''} </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m"><span className="pad-offer">Offer Will Expire :</span></div>
                          <div className="col-md-8 col-sm-7">
                            <Field name="exp_date" classes="form-control" component={renderSelectField} label="Offer Will Expire">
                                <option value="0">When Advert Expires</option>
                                <option value="2">2 days</option>
                                <option value="3">3 days</option>
                                <option value="4">4 days</option>
                                <option value="5">5 days</option>
                            </Field>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m"><span className="pad-offer">Collection :</span></div>
                          <div className="col-md-8 col-sm-7">
                            <Field name="collect" classes="form-control" component={renderSelectField} label="Offer Will Expire">
                                <option value="1">We will Collect</option>
                                <option value="2">Seller must Drop off</option>
                            </Field>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m"><span className="pad-offer">Message :</span></div>
                          <div className="col-md-8 col-sm-7">
                            <Field name="description" className="form-control" rows="2" cols="5" component="textarea" placeholder="Message"/>
                          </div>
                        </div>
                    <div className="form-group">
                      <p>{data.description != ''? data.description :''}</p>
                    </div>
                    <div className="form-group make-offer-btn text-center">
                          <a href="#" className="btn btn-success font-m btn-lg" onClick={this.props.closeModalHandler} >Back</a> 
                          
                          <button type="submit"  className="btn btn-yellow font-m btn-lg">Make Offer</button>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                </form>
          </div>
        );
    }
}
function mapStateToProps(state) {
  /*State.REDUDER.vars*/

 // console.log('component111',state.Offers);
  return {
    offerdata:state.Offers,
    
  }

}
function mapDispatchToProps (dispatch) {
  return {
    makeOfferHandler: (params,token) => dispatch(MakeOffer(params,token))
  }
}
Offerform = connect(mapStateToProps,mapDispatchToProps)(Offerform);

export default reduxForm({
  form: 'offer-edit',  //Form name is same
  destroyOnUnmount: false,
  validate
})(Offerform)