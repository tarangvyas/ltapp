import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props
  return (
      
<div id="menu2" className="tab-pane fade register-step  active in">
   <div className="bg-light"> 
        <form onSubmit={handleSubmit}>
            <div className="btn-yellow text-center we-dealers-loking">
                <h4 className="font-b text-dark text-uppercase form-group">Contact Details</h4>
                <h4 className="font-m text-white">Setup a free Tootle account. Existing members please <a href="#" className="text-dark"><u>Login now</u></a></h4>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="email">Email :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field name="email" classes="form-control" type="email" component={renderField}/>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">First name :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="First name" name="first_name" classes="form-control" type="text" component={renderField}/>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Last name :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Last name" name="last_name" classes="form-control form-group" type="text" component={renderField}/>
                    <div className="clearfix">
                    <a href="#" className="finance-tooltip" data-toggle="tooltip" title="" data-placement="right" data-original-title="Hooray!"><img src="./../../static/images/car-on-finance-icon.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Postcode :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Postcode" name="postcode" classes="form-control" type="text" component={renderField}/>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Phone number :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Phone number" name="phone_number" classes="form-control" type="text" component={renderField}/>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Landline :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Landline" name="landline" classes="form-control" type="text" component={renderField}/>
                </div>
            </div>
            <hr />
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Password :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Password" name="password" classes="form-control" type="password" component={renderField}/>
                    <p className="text-gray font-m mar-b">Password should be at least 7 characters</p>
                </div>
            </div>
            <div className="form-group clearfix">
                <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Re-type Password :</span></div>
                <div className="col-sm-5 text-muted">
                    <Field placeholder="Re-type Password" name="c_password" classes="form-control" type="password" component={renderField}/>
                </div>
            </div>
            <div className="clearfix form-group"></div>
            <div className="form-group clearfix">
                <div className="contact-details-text">
                    <p className="form-group">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="form-group clearfix">
                        <div className="full-checkbox">
                            <input id="damage" type="checkbox" />
                            <label htmlFor="damage" className="font-m"> <span></span>My car doesn't have any damage </label>
                        </div>
                    </div>
                    <div className="clearfix terms-conditions text-center font-m">
                        By clicking "Next step" you agree to Lotus <a href="#" className="text-success"><u>Terms and Conditions</u></a>.
                    </div>
                </div>
            </div>

            <div className="col-sm-12 form-group">
                <ul className="list-unstyled list-inline">
                <li><button type="button" className="previous btn btn-yellow prev-step font-m text-uppercase" onClick={previousPage}><i className="fa fa-chevron-left"></i> Back</button></li>
                <li><button type="submit" className="next btn btn-success next-step font-m text-uppercase" onClick={(e)=>this.validateSteps(e,'contact-detail')}>Next <i className="fa fa-chevron-right"></i></button></li>
                </ul>
                <div className="clearfix form-group"></div>
            </div>
            <div className="clearfix form-group"></div>    
        </form>
    </div>
    <style jsx>{`
                                        .process-step .btn:focus{outline:none}
                    .process{display:table;width:100%;position:relative}
                    .process-row{display:table-row}
                    .process-step button[disabled]{opacity:1 !important;filter: alpha(opacity=100) !important}
                    .process-row::before {background-color: #dcdcdc; bottom: 0; content: " "; display: block; height: 3px; left: 0px; position: absolute; right: 0px; top: 20px;}
                    .process-step{display:table-cell;text-align:center;position:relative; width: 33.333%;}
                    .process-step p{margin-top:8px}
                    .btn-circle{width:40px;height:40px;text-align:center;font-size:18px;border-radius:50%;}
                    .list-unstyled {margin: 0;}
                    .register-step .bg-light{margin-top: 20px;}
                    .we-dealers-loking{padding: 20px 15px; margin-bottom: 30px;}
                    .field-name {display: block; margin-top: 8px;}
                    select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(./../../static/images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                    .satellite-navigation .btn.active,
                    .satellite-navigation .btn:hover,
                    .satellite-navigation .btn:focus{background-color: #f3f3f3;}
                    .satellite-navigation .btn{padding: 8px 15px;}
                    .register-step hr{border-color: #d3d3d3; margin-left: 30px; margin-right: 30px;}
                    .contact-details-text{margin: 0 30px;}

                    .full-checkbox input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
                    .full-checkbox input[type="checkbox"] + label span {margin-right: 10px; display: inline-block; vertical-align: top; width: 21px; height: 21px; background: url(./../../static/images/uncheck.png) no-repeat;}
                    .full-checkbox input[type="checkbox"]:checked + label span {background: url(./../../static/images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: top; width: 21px;    height: 21px;}
                    .full-checkbox label{font-weight: normal; font-size: 15px; color: #6f6f6f; margin-bottom: 0;}

                    .terms-conditions {margin-top: 40px; font-size: 16px;}
                    .registration-r-mad{margin-right: 15px;}
                    .asking-price {margin: 15px auto 25px;}
                    .process .check-register-icon {background: #ffffff url("./../../static/images/check-register-icon.png") no-repeat center center; border: 2px solid #38954f; font-size: 0; position: relative; top: 0px;}
                    .register-step .list-unstyled{text-align: center; margin-top: 15px;}

                    @media all and (max-width: 991px) {
                    .process-step p {font-size: 13px;}
                    .we-dealers-loking {margin-bottom: 20px; padding: 15px;}
                    }
                    @media all and (max-width: 767px) {
                    .register-step .col-sm-4{text-align: left; margin-bottom: 5px;}	
                    .register-step hr {margin-left: 16px; margin-right: 16px;}
                    .contact-details-text {margin: 0 16px;}
                    .register-step .list-unstyled {margin-bottom: 15px; margin-top: 30px;}
                    .register-step h2 {font-size: 26px;}
                    }	

                    @media all and (max-width: 567px) {
                    .process-step {display: block; text-align: left; width: 100%; padding: 12px 0;}
                    .process-row::before {height: auto; left: 20px; width: 3px; top: 0;}
                    .process-step p {display: inline-block; font-size: 13px; margin: 0 12px; vertical-align: middle;}
                    .process-row.nav.nav-tabs {display: block; padding: 10px 0; border: none;}
                    }

                `}</style>
</div>
  )
}

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false,
  validate
})(WizardFormSecondPage)