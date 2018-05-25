import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from '../Forms/renderField';
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
class Dealerregister extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    updatelist() 
    {
      let total_amount=parseFloat(document.getElementById('offer_amount').value)+parseFloat(document.getElementById('lotus_fee').value);
      document.getElementById('total_offer_amount').innerHTML=total_amount;
    }
    handleFormSubmit(formProps) {
          this.props.submitHandler(formProps);
    }
    render() {

  
      const { handleSubmit, pristine, previousPage, submitting } = this.props
     return (
      <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 col-md-offset-1 col-sm-offset-0 create-account-page">
                          <h3 className="font-l text-uppercase text-gray text-center form-group"><span className="font-b text-success-dark">Create</span> a Dealer / Trade Account</h3>
                          <h5 className="font-m text-gray text-center create-account-text">Create an account and be notified when cars come up for sale that may interest you, this account also allows you<br /> to market and sell your trade / overage stock to the dealer and specialist network.</h5>
                          <div className="well mar-b">
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
                                    <Field placeholder="Company Phone Number" name="phone_number" classes="form-control" type="text" component={renderField} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Postcode</h5>
                                    <Field placeholder="Postcode" name="postcode" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Type of Dealership</h5>
                                    <select className="form-control" id="Lotus">
                                      <option>Type of Dealership</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Company Number</h5>
                                    <Field placeholder="" name="" classes="form-control" type="text" component={renderField} />
                                    <input placeholder="Company number" className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Company Website</h5>
                                    <Field placeholder="Company Website" name="website" classes="form-control" type="text" component={renderField} />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">FCA Registration Number</h5>
                                    <Field placeholder="FCA Registration Number" name="fca_number" classes="form-control" type="text" component={renderField} />
                                    
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-gray">Not FCA Registered </h5>
                                    <div className="full-checkbox">
                                      <input id="damage" type="checkbox" />
                                      <label for="damage" className="font-m"> <span></span></label>
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
                                    <Field placeholder="" name="" classes="form-control" type="text" component={renderField} />
                                    <input placeholder="Phone Number" className="form-control" type="text" />
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
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Job Title </h5>
                                    <Field placeholder="" name="" classes="form-control" type="text" component={renderField} />
                                    <input placeholder="Job Title" className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="dealer-checkbox form-inline">
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <input id="main-dealer" checked="checked" name="radio" type="radio" />
                                          <label for="main-dealer" className="font-m"> <span></span></label>
                                      </div>
                                      <h5 className="font-m text-gray">Are You a Main Dealer?</h5>
                                    </div>
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <input id="lotus-specialist" name="radio" type="radio" />
                                          <label for="lotus-specialist" className="font-m"> <span></span></label>
                                      </div>
                                      <h5 className="font-m text-gray">Are You a Lotus Specialist?</h5>
                                    </div>
                                    <div className="form-group col-sm-4">
                                      <div className="radio-box">
                                          <input id="trader" type="radio" name="radio" />
                                          <label for="trader" className="font-m"> <span></span></label>
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
  return {
    cardata:state.Cardetail.car_data,
    
  }

}
function mapDispatchToProps (dispatch) {
  return {
    makeOfferHandler: (params,token) => dispatch(MakeOffer(params,token))
  }
}
Dealerregister = connect(mapStateToProps,mapDispatchToProps)(Dealerregister);
export default reduxForm({
  form: 'make-offer',  //Form name is same
  destroyOnUnmount: false,
  validate
})(Dealerregister)