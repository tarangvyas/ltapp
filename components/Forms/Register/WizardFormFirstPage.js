import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const servicetype = [{"value":1,"text":"Full Service History"},{"value":2,"text":"No Service History"},{"value":3,"text":"Part Service History"}]

const renderNationwideSelector = ({ input, classes, meta: { touched, error } }) => (
  <div>
    <select {...input} className={classes}>
      <option value="">Please select</option>
      {nationwides.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {error}
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

const renderSelectField = ({ input, classes, type, meta: { touched, error }, children }) => (
    <div>
      <select {...input} className={classes}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
)

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span className="text-danger">{error}</span> : false

class WizardFormFirstPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      this.props.change('car_reg_no', this.props.regno);
      this.props.change('car_make', 'Hyundai');
      this.props.change('car_model', 'Atoz Hatchback');
      this.props.change('car_reg_date', '15-06-2000');
      this.props.change('car_mot_exp_date', '22-12-2018');
      this.props.change('car_color', 'Red');
      this.props.change('trim_color', 'white');
      this.props.change('car_previous_owner', 'Mohsin');
      this.props.change('car_engine_size', '1251520');
      this.props.change('car_type', 1);
      this.props.change('user_type', 1);
      this.props.change('gdpr', 1);
      this.props.change('is_approve', 2);
      this.props.change('device_token', '123456');
    }
    render(){
       const { handleSubmit } = this.props
       return (
          
<div id="menu1" className="tab-pane fade active in">
    <div className="bg-light">
    <form onSubmit={handleSubmit}>
      <div className="btn-yellow text-center we-dealers-loking">
        <h4 className="font-b text-dark text-uppercase form-group">We have dealers loking for cars just like yours</h4>
        <h4 className="font-m text-white">Lorem Ipsum is simply dummy text!</h4>
      </div>  
      <div className="form-group clearfix">
          <div className="col-sm-4 text-gray font-m text-right">Registration :</div>
          <div className="col-sm-5 text-muted text-uppercase">{this.props.regno}
                <Field name="car_reg_no" id="car_reg_no" type="hidden" component={renderField}/>
          </div>
      </div>
      <div className="form-group clearfix">
        <div className="col-sm-4 text-gray font-m text-right">Manufacturer :</div>
        <div className="col-sm-5 text-muted text-uppercase">Hyundai
            <Field name="car_make" id="car_make" type="hidden" component={renderField}/>
        </div>
      </div>
      <div className="form-group clearfix">
           <div className="col-sm-4 text-gray font-m text-right">Model :</div>
           <div className="col-sm-5 text-muted text-uppercase">Atoz Hatchback
                <Field name="car_model" id="car_model" type="hidden" component={renderField}/>
           </div>
      </div>
      <div className="form-group clearfix">
        <div className="col-sm-4 text-gray font-m text-right">Year :</div>
        <div className="col-sm-5 text-muted text-uppercase">2000
            <Field name="car_reg_date" id="car_reg_date"  type="hidden" component={renderField}/>
            <Field name="car_color" id="car_color" type="hidden" component={renderField}/>
            <Field name="trim_color" id="trim_color" type="hidden" component={renderField}/>
            <Field name="car_previous_owner" id="car_previous_owner" type="hidden" component={renderField}/>
            <Field name="car_engine_size" id="car_engine_size" type="hidden" component={renderField}/>
            <Field name="car_type" id="car_type" type="hidden" component={renderField}/>
            <Field name="car_mot_exp_date" id="car_mot_exp_date" type="hidden" component={renderField}/>
            <Field name="user_type" id="user_type" type="hidden" component={renderField}/>
            <Field name="gdpr" id="gdpr" type="hidden" component={renderField}/>
            <Field name="is_approve" id="is_approve" type="hidden" component={renderField}/>
            <Field name="device_token" id="device_token" type="hidden" component={renderField}/>
        </div>
      </div>
      <div className="form-group clearfix">
        <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Mileage :</span></div>
        <div className="col-sm-5 text-muted">
            <Field placeholder="Mileage" name="car_mileage" id="car_mileage"  classes="form-control form-group" type="text" component={renderField}/>
            <div className="clearfix">
            <a href="#" className="finance-tooltip" data-toggle="tooltip" title="" data-placement="right" data-original-title="Hooray!"><img src="./../../static/images/car-on-finance-icon.png" alt="" /></a>
            </div>
        </div>
      </div>
      <hr />
      <div className="form-group clearfix">
        <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Service history :</span></div>
        <div className="col-sm-5 text-muted">
            {/*<Field name="nationwide" classes="form-control" component={renderNationwideSelector}/>*/}
            <Field name="car_service_type" classes="form-control" component={renderSelectField} label="Username">
            <option value="">Please select</option>
            { servicetype.map(option => <option value={option.value} key={option.value}>{option.text}</option>) }
            </Field>
        </div>
      </div>
       <hr />
       <div className="form-group clearfix">
            <div className="col-sm-4 text-gray font-m text-right"><span className="field-name">Set your asking price :</span></div>
            <div className="col-sm-5 text-muted">
                <Field placeholder="Set your asking price" name="car_asking_price" id="car_asking_price"  classes="form-control" type="text" component={renderField}/>
            </div>
       </div>


       <div className="col-sm-12 form-group">
            <center><ul className="list-unstyled list-inline">
                <li>
                    <button type="submit" className="btn btn-success next-step font-m text-uppercase">Next <i className="fa fa-chevron-right"></i></button>
                </li>
            </ul>
            </center>
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
} 
export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(WizardFormFirstPage)