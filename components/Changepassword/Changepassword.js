import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from '../Forms/renderField'
import { connect } from 'react-redux';
import {FUEL_TYPE,CAR_TYPE,ROOT_URL,DEALER_TYPE
} from './../../actions/types';
import renderRadioField from '../Forms/renderRadio';
import {changePassword} from './../../actions/login';
import DealerSideBar from './../Sidebar/DealerSidebar';


class Changepassword extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    handleFormSubmit(formProps) {
          this.props.changePasswordHandler(formProps,this.props.token);
    }
    render() {

      let data='';
      const { handleSubmit, pristine, previousPage, submitting } = this.props
      
      let success=null;
      if(this.props.data!=null) {
          if(this.props.data.success){
              success=<div className="alert alert-success"><strong>Success!</strong> {this.props.data.message}</div>;
          }
          else{
            success=<div className="alert alert-danger"><strong>Error!</strong> {this.props.data.message}</div>
          }
      }else{
          
      }
      
     return (
    <div className="container">
        <div className="row">
          <DealerSideBar page='change-password'/>
          
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
                <div className="col-md-8 col-sm-12 my-account-page">
                {success}
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <h3 className="font-l text-uppercase text-gray text-center form-group"><span className="font-b text-success-dark">Change</span> Password</h3>
                        <div className="well">
                        <div className="form-group user-johan text-center"><img className="img-circle" src="../images/car-thams-01.jpg" alt="" /></div>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Current Password</h5>
                                    <Field name="old_password" id="old_password" classes="form-control" type="password" component={renderField} />
                                </div>
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">New Password</h5>
                                    <Field name="new_password" id="new_password" classes="form-control" type="password" component={renderField} />
                                </div>
                                <div className="col-sm-12 form-group">
                                    <h5 className="font-m text-gray">Confirm Password</h5>
                                    <Field name="con_password" id="con_password" classes="form-control" type="password" component={renderField} />
                                </div>
                            </div>
                            <div className="account-btn text-center">
                                <button type="submit" className="btn font-m btn-yellow btn-lg text-uppercase form-group">Submit</button>
                            </div>
                        </div>
                </form> 
               </div>  
          </div>
          </div>
        );
    }
}
function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  console.log(state.Login);
  return {
    data:state.Login.data,
    //message:state.Dealerregister.message,
  }

}
function mapDispatchToProps (dispatch) {
  return {
        changePasswordHandler: (params,token) => dispatch(changePassword(params,token))
  }
}
Changepassword = connect(mapStateToProps,mapDispatchToProps)(Changepassword);
export default reduxForm({
  form: 'dealer-register',  //Form name is same
  destroyOnUnmount: false,
  validate
})(Changepassword)