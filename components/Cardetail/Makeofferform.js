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
class Makeofferform extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    updatelist(e) 
    {
      let commission_data=this.props.cardata.commission_data;
      let com_amount=0;
      commission_data.map((item,i)=>{
        if((parseFloat(e.target.value) > parseFloat(item.from_price)) && (parseFloat(e.target.value) <= parseFloat(item.to_price))) 
        {
          com_amount=item.commission_amount;
        }
      });
      document.getElementById('lotus_fee').value=com_amount;
      document.getElementById('lbl_lotusfee').innerText=com_amount;
      let total_amount=parseFloat(e.target.value)+parseFloat(document.getElementById('lotus_fee').value);
      document.getElementById('total_offer_amount').innerText=total_amount;
    }
    handleFormSubmit(formProps) {
          this.props.submitHandler(formProps);
    }
    render() {

      let data='';
      let car_detail=null;
      let carimagelength=0;
      let max_offer_amount=0;
      let first_image='';
      let commission_data='';
      
      if(this.props.cardata != null)
      {
        //console.log(this.props.cardata.commission_data,'now');

        data=this.props.cardata;
        car_detail=JSON.parse(data.car_detail);
        carimagelength=data.carimages.length;
        //console.log(car_detail,'cdetail');
        data.offers.map((item,i)=>{
          if(max_offer_amount < item.offer_amount)
              max_offer_amount=item.offer_amount;
        });
        this.props.change('car_id', data.car_id);

        if(data.carimages!=null && data.carimages.length > 0){
          first_image=ROOT_URL+'/../../storage/app/'+data.carimages[0].file_name;
          
          var indents = [];

        }
      
      }
      const { handleSubmit, pristine, previousPage, submitting } = this.props
     return (
      <div>
      <style jsx>{`
                  .gallery-col {max-width: 458px; margin: 0 auto;}
                  .car-gallery .thumbnail {border: 0 none; border-radius: 0; padding: 0; margin-bottom: 0;}
                  .car-gallery .gallery {border: 3px solid #dad9d9; margin-bottom: 20px;}
                  #slider-thumbs{padding: 0 35px;}
                  #slider-thumbs .thumbnail {border: 2px solid #e6e5e5; border-radius: 0; margin-bottom: 0; padding: 0;}
                  .gallery-thumbs .items {float: left; margin: 0 5px; width: 86px; cursor: pointer;}
                  .gallery-thumbs .carousel-control.left, .gallery-thumbs .carousel-control.right {background: #146227 url("../../static/images/home-arrow.png") no-repeat; box-shadow: none; font-size: 0; height: 38px; margin-top: -19px; opacity: 1; width: 30px; top: 50%;}
                  .gallery-thumbs .carousel-control.left{left: -35px; background-position: 1px 6px;}
                  .gallery-thumbs .carousel-control.right{right: -35px; background-position: -45px 6px;}
                  .make-an-offer-btn {margin-top: 28px;}

                  .detail-gallery-right h3{margin-top: 0; border-bottom: 1px solid #d8d8d8; padding-bottom: 10px;}
                  .detail-services {margin-top: 32px;}
                  .detail-services ul{margin: 0; padding: 0; list-style: none;}
                  .detail-services li {background: #edeaea; border-radius: 5px; color: #181818; float: left; font-family: "DINOT-Medium"; font-size: 13px; margin-right: 1%; min-height: 132px; line-height: 1.2; padding: 13px 5px 10px; position: relative; text-align: center; text-transform: uppercase; width: 19.2%;}
                  .detail-services li:last-child{margin-right: 0;}
                  .detail-services li:hover{background-color: #146227; color: #fff;}
                  .detail-services li::before {background: url("../../static/images/detail-services-icon.png") no-repeat; transition: all 0.3s ease 0s; content: ""; display: block; height: 63px; margin: 0 auto 6px; width: 70px;}
                  .detail-services li.petrol-ico::before{background-position: 7px -4px;}
                  .detail-services li.petrol-ico:hover::before{background-position: 7px -154px;}
                  .detail-services li.automatic-ico::before{background-position: -137px -4px;}
                  .detail-services li.automatic-ico:hover::before{background-position: -137px -153px;}
                  .detail-services li.registered-ico::before{background-position: -284px -4px;}
                  .detail-services li.registered-ico:hover::before{background-position: -284px -153px;}
                  .detail-services li.mot-valid-ico::before{background-position: -430px -4px;}
                  .detail-services li.mot-valid-ico:hover::before{background-position: -430px -153px;}
                  .detail-services li.full-service-ico::before{background-position: -574px -4px;}
                  .detail-services li.full-service-ico:hover::before{background-position: -574px -153px;}
                  .expiresdays-icon {background: url("../../static/images/expiresdays-icon.png") no-repeat 0 -2px; float: right; margin-top: -44px; padding: 3px 4px 3px 40px; position: relative;}
                  .detail-list {color: #3f3f3f; font-size: 18px; margin-bottom: 17px;}
                  .detail-list .anupat{font-weight: normal;}
                  .fancybox-overlay .fancybox-skin{;padding: 8px !important; border-radius: 0px;}

                  @media all and (max-width: 1199px) {
                  .detail-gallery-right h3 {font-size: 20px;}
                  .expiresdays-icon {float: none; font-size: 13px; margin-bottom: 8px; margin-top: 0; position: relative; right: 0;}
                  .gallery-thumbs .carousel-control.left, .gallery-thumbs .carousel-control.right {height: 30px; margin-top: -15px; width: 24px; background-size: 46px auto;}
                  .gallery-thumbs .carousel-control.left {background-position: 3px 7px;}
                  .gallery-thumbs .carousel-control.right {background-position: -25px 7px;}
                  .detail-services li::before {background-size: 400px auto; height: 40px; width: 40px;}

                  .detail-services li.petrol-ico::before {background-position: 3px -2px;}
                  .detail-services li.petrol-ico:hover::before{background-position: 3px -96px;}
                  .detail-services li.automatic-ico::before {background-position: -89px -2px;}
                  .detail-services li.automatic-ico:hover::before{background-position: -89px -96px;}
                  .detail-services li.registered-ico::before {background-position: -181px -2px;}
                  .detail-services li.registered-ico:hover::before{background-position: -181px -97px;}
                  .detail-services li.mot-valid-ico::before {background-position: -272px -2px;}
                  .detail-services li.mot-valid-ico:hover::before{background-position: -272px -97px;}
                  .detail-services li.full-service-ico::before {background-position: -363px -2px;}
                  .detail-services li.full-service-ico:hover::before{background-position: -363px -96px;}

                  .detail-services li {font-size: 12px; margin-bottom: 1%; min-height: 100px; padding: 10px; width: 30%;}
                  .detail-services {margin-top: 20px;}
                  .make-an-offer-btn {margin-top: 15px;}
                  .detail-list {font-size: 15px; margin-bottom: 10px;}
                  .detail-gallery-right h3 {margin-bottom: 8px; padding-bottom: 8px;}
                  .make-an-offer-btn a {font-size: 14px;}
                  }
                  @media all and (max-width: 991px) {
                  .gallery-col {margin: 0 auto 34px;}
                  .detail-services li {margin-bottom: 0; margin-right: 0.6%; width: 19.4%;}
                  }

                  @media all and (max-width: 767px) {
                  .detail-services li {min-height: 114px;}
                  }
                  @media all and (max-width: 567px) {
                  .detail-services{text-align: center;}
                  .detail-services li {display: inline-block; float: none; margin-bottom: 4px; margin-right: 0; min-height: 110px; vertical-align: top; width: 32.6%;}
                  .gallery-thumbs .items {margin: 0 1%; width: 23%;}
                  }

                  @media all and (max-width: 440px) {
                  .detail-services li {width: 49.4%;}
                  }   
      `}</style> 
                 
                 <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                      <div className="col-sm-5 wheels-car">
                        <div className="form-group panel panel-body panel-default">
                          <div className="text-center form-group">
                            <img src={first_image} alt="Car image" />
                          </div>
                            <h4 className="font-l form-group text-uppercase"><span className="text-success-dark font-b"> {data!=''?data.car_year:''}</span> </h4>
                            <h4 className="form-group">{data!=''?data.reg_no:''}&nbsp;
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
                              <Field name="offer_amount" classes="form-control" type="text" component={renderField} onChange={(e)=>this.updatelist(e)} />
                              <Field name="car_id" classes="form-control" type="hidden" component={renderField} value={data!=null?data.car_id:''} />
                         </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m">Lotus fee :</div>
                          <div className="col-md-8 col-sm-7">£ <span id="lbl_lotusfee">0</span>
                            <Field name="lotus_fee" id="lotus_fee" classes="form-control" type="hidden" component={renderField} value="32"/>
                            </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-4 col-sm-5 font-m">Total :</div>
                          <div className="col-md-8 col-sm-7">£ <span id="total_offer_amount"></span>  </div>
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
  return {
    cardata:state.Cardetail.car_data,
    
  }

}
function mapDispatchToProps (dispatch) {
  return {
    makeOfferHandler: (params,token) => dispatch(MakeOffer(params,token))
  }
}
Makeofferform = connect(mapStateToProps,mapDispatchToProps)(Makeofferform);
export default reduxForm({
  form: 'make-offer',  //Form name is same
  destroyOnUnmount: false,
  validate
})(Makeofferform)