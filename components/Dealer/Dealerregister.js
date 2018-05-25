import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from '../Forms/renderField'
import { connect } from 'react-redux';
import {FUEL_TYPE,CAR_TYPE,ROOT_URL,DEALER_TYPE
} from './../../actions/types';
import renderRadioField from '../Forms/renderRadio';
import {registerNewDealer} from './../../actions/register_dealer';

const renderSelectField = ({ input, classes, type, meta: { touched, error }, children }) => (
    <div>
      <select {...input} className={classes}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
)
class DealerRegister extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    fcacheck=(event)=>{
      if(event.target.checked)
        document.getElementById('fca_box').style.display="None";
      else
        document.getElementById('fca_box').style.display="block";  
    }
    handleFormSubmit(formProps) {
          //console.log(formProps,'formProps');
          this.props.registerDealerHandler(formProps,this.props.token);
    }
    render() {

      let data='';
      const { handleSubmit, pristine, previousPage, submitting } = this.props
      
      let success=null;
      if(this.props.data!=null) {
          if(this.props.data.success){
              success=<div class="alert alert-success"><strong>Success!</strong> {this.props.data.data.message}</div>;
          }
      }else{
          if(this.props.message!=""){
              let errors="Something Went Wrong";
              if(this.props.message.error!=null) {
                  errors=Object.keys(this.props.message.error).map((item,i)=>{
                      return <div>{this.props.message.error[item][0]}</div>;
                  });
              }
              success=<div class="alert alert-danger"><strong>Error!</strong> {errors}</div>
          }
      }
      
     return (
      <div>
      <style jsx>{`
                  .create-account-page .well{border-radius: 0; box-shadow: 0 0 10px #ededed; padding: 30px;}
                  .create-account-page .create-account-text {margin-bottom: 40px;}
                  .create-account-page .heading-number {border-radius: 100%; display: inline-block; margin-bottom: 2px; height: 30px; line-height: 29px; margin-right: 10px; text-align: center; vertical-align: middle; width: 30px;}
                  select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                  .full-checkbox {margin-top: 19px;}
                  .full-checkbox input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
                  .full-checkbox input[type="checkbox"] + label span {margin-right: 10px; display: inline-block; vertical-align: top; width: 21px; height: 21px; background: url(../images/uncheck.png) no-repeat;}
                  .full-checkbox input[type="checkbox"]:checked + label span {background: url(../images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: top; width: 21px;    height: 21px;}
                  .full-checkbox label{font-weight: normal; font-size: 15px; color: #6f6f6f; margin-bottom: 0;}
                  .create-account-page hr {border-color: #edc600; margin-bottom: 30px;}
                  .create-account-page .account-btn{margin-top: 30px;}
                  .create-account-page h4 .heading-text {display: block; padding-left: 44px; padding-top: 6px;}
                  
                  .dealer-checkbox {margin-bottom: 46px; margin-top: 8px;}
                  .dealer-checkbox .radio-box,
                  .dealer-checkbox h5 {display: inline-block; margin-top: 0; vertical-align: middle; margin-bottom: 0;}
                  
                  .radio-box input[type="radio"]{ display: none; border: none !important; box-shadow: none !important;}
                  .radio-box input[type="radio"] + label span {margin-right: 12px; display: inline-block; vertical-align: middle; width: 18px; height: 18px; background: url(../images/radio-uncheck.png) no-repeat;}
                  .radio-box input[type="radio"]:checked + label span {background: url(../images/radio-check.png) no-repeat; content: ''; color: #fff; vertical-align: middle; width: 18px;    height: 18px;}
                  .radio-box label{font-weight: normal; font-size: 15px; color: #6f6f6f; margin-bottom: 0;}
                  
                  @media all and (max-width: 991px) {
                  .create-account-page .well{padding: 20px;}
                  .create-account-page h4 .heading-text {font-size: 16px;}
                  .create-account-page .create-account-text {margin-bottom: 30px;}
                  }
                  
      `}</style> 
          
           <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 col-md-offset-1 col-sm-offset-0 create-account-page">
                          <h3 className="font-l text-uppercase text-gray text-center form-group"><span className="font-b text-success-dark">Create</span> a Dealer / Trade Account</h3>
                          <h5 className="font-m text-gray text-center create-account-text">Create an account and be notified when cars come up for sale that may interest you, this account also allows you<br /> to market and sell your trade / overage stock to the dealer and specialist network.</h5>
                          <div className="well mar-b">
                            {success} 
                              <h4 className="font-b text-uppercase text-success-dark form-group mar-t"><span className="btn-yellow heading-number pull-left">1</span> <span className="heading-text">Dealership information</span></h4>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Company Name</h5>
                                    <Field placeholder="Company Name" name="company_name" classes="form-control" type="text" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Address</h5>
                                    <Field placeholder="Address" name="address" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Company Phone Number</h5>
                                    <Field placeholder="Company Phone Number" name="company_phone" classes="form-control" type="text" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Postcode</h5>
                                    <Field placeholder="Postcode" name="postcode" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              {/*<div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Type of Dealership</h5>
                                    <Field name="dealership_type" classes="form-control" component={renderSelectField} label="Type of Dealership">
                                      <option value="">Type of Dealership</option>
                                        { DEALER_TYPE.map(option => <option value={option} key={option}>{option}</option>) }
                                    </Field>
                                </div>
                                <div className="col-sm-6 form-group">
                                    
                               </div>
                              </div>*/}
                              <div className="row">
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Company Website</h5>
                                    <Field placeholder="Company Website" name="website" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-sm-6 form-group" id="fca_box">
                                    <h5 className="font-m text-gray">FCA Registration Number</h5>
                                    <Field placeholder="FCA Registration Number" name="fca_number" classes="form-control" type="text" component={renderField} />
                                    
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Not FCA Registered </h5>
                                    <div className="full-checkbox">
                                       <Field placeholder="FCA Registration Number" name="not_fca" classes="" type="checkbox" component="input" onClick={this.fcacheck} /> 
                                      <label htmlFor="not_fca" className="font-m"> <span></span></label>
                                    </div>
                                </div>
                              </div>
                              <hr />
                              <h4 className="font-b text-uppercase text-success-dark form-group mar-t"><span className="btn-yellow heading-number pull-left">2</span> <span className="heading-text">Primary Contact Information</span></h4>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">First Name</h5>
                                    <Field placeholder="First Name" name="first_name" classes="form-control" type="text" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Phone Number</h5>
                                    <Field placeholder="Phone Number" name="phone_number" classes="form-control" type="text" component={renderField} />
                                    
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Last Name</h5>
                                    <Field placeholder="Last Name" name="last_name" classes="form-control" type="text" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Email Address</h5>
                                    <Field placeholder="Email Address" name="email" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Password</h5>
                                    <Field placeholder="Password" name="password" classes="form-control" type="password" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Confirm Password</h5>
                                    <Field placeholder="Confirm Password" name="c_password" classes="form-control" type="password" component={renderField} />
                                </div>
                              </div>
                              {/*<div className="row">
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Job Title </h5>
                                    <Field placeholder="" name="" classes="form-control" type="text" component={renderField} />
                                    <input placeholder="Job Title" className="form-control" type="text" />
                                </div>
                            </div>*/}
                              <div className="row">
                                <div className="dealer-checkbox form-inline">
                               
                                 
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <Field
                                            id="dealership_type"
                                            component="input"
                                            name="dealership_type"
                                            type="radio"
                                            value="1"
                                            className="mh2"
                                          />
                                          <label htmlFor="main-dealer" className="font-m"> <span></span></label>
                                      </div>
                                      <h5 className="font-m text-gray">Are You a Main Dealer?</h5>
                                    </div>
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <Field
                                            id="dealership_type"
                                            component="input"
                                            name="dealership_type"
                                            type="radio"
                                            value="2"
                                            className="mh2"
                                          />
                                          <label htmlFor="specialist" className="font-m"> <span></span></label>
                                      </div>
                                      <h5 className="font-m text-gray">Are You a Lotus Specialist?</h5>
                                    </div>
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <Field
                                            id="dealership_type"
                                            component="input"
                                            name="dealership_type"
                                            type="radio"
                                            value="3"
                                            className="mh2"
                                          />
                                          <label htmlFor="trader" className="font-m"> <span></span></label>
                                      </div>
                                      <h5 className="font-m text-gray">Are You a Trader?</h5>
                                    </div>
                                </div>
                              </div>
                              <hr />
                              <h4 className="font-b text-uppercase text-success-dark form-group mar-t"><span className="btn-yellow heading-number pull-left">3</span> <span className="heading-text">Additional Contact Information</span></h4>
                              <div className="row">
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Email Secondary</h5>
                                    <Field placeholder="Email Secondary" name="email_secondary" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="form-group account-btn text-center">
                                <button type="submit" className="btn font-m btn-success btn-lg text-uppercase form-group" onclick="location.href='http://111.93.221.218/CUS/Lotus/HTML/Deshbord-offers/deshbord-offers.php';">Submit</button>
                              </div>
                          </div>
                        </div>
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
  console.log(state.Dealerregister);
  return {
    data:state.Dealerregister.data,
    message:state.Dealerregister.message,
  }

}
function mapDispatchToProps (dispatch) {
  return {
    registerDealerHandler: (params,token) => dispatch(registerNewDealer(params,token))
  }
}
DealerRegister = connect(mapStateToProps,mapDispatchToProps)(DealerRegister);
export default reduxForm({
  form: 'dealer-register',  //Form name is same
  destroyOnUnmount: false,
  validate
})(DealerRegister)