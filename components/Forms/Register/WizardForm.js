import React, {Component} from 'react'
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Router from 'next/router';
import {registerNewSeller} from './../../../actions/register_seller'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    console.log(this.props);
    const { onSubmit } = this.props
    const { page } = this.state
    let classtab1=['btn','btn-success','btn-circle','font-m'];
    let classtab2=['btn','btn-success','btn-circle','font-m'];
    let classtab3=['btn','btn-success','btn-circle','font-m'];
    if(page === 1){
        classtab1=['btn','btn-yellow','btn-circle','font-m'];
    }else if(page === 2){
        classtab2=['btn','btn-yellow','btn-circle','font-m'];   
    }
    else if(page === 3){
        classtab3=['btn','btn-yellow','btn-circle','font-m'];       
    }
    let success=null;
    if(this.props.data!=null) {
        if(this.props.data.success){
            success=<div class="alert alert-success"><strong>Success!</strong> {this.props.data.data.message}</div>;
        }
    }else{
        if(this.props.message!=""){
            let errors="Something Went Wrong";
            if(this.props.error!=null) {
                errors=Object.keys(this.props.message.error).map((item,i)=>{
                    return <div>{this.props.message.error[item][0]}</div>;
                });
            }
            success=<div class="alert alert-danger"><strong>Error!</strong> {errors}</div>
        }
    }
    return (<div className="container">
               {success} 
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 col-sm-offset-0">
                         <div className="process">
                            <div className="process-row nav nav-tabs">
                                <div className="process-step">
                                    <button type="button" id="tab1" className={classtab1.join(' ')}>1</button>
                                    <p className="font-m text-uppercase">Car details</p>
                                </div>
                                <div className="process-step">
                                    <button type="button" id="tab2" className={classtab2.join(' ')}>2</button>
                                    <p className="font-m text-uppercase">Contact details</p>
                                </div>
                                <div className="process-step">
                                    <button type="button" id="tab3" className={classtab3.join(' ')}>3</button>
                                    <p className="font-m text-uppercase">Publish advert</p>
                                </div>
                            </div>
                         </div>
                         <div className="tab-content register-step">
                            {page === 1 && <WizardFormFirstPage  {...this.props} onSubmit={this.nextPage}/>}
                            
                            {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                                
                            {page === 3 && <WizardFormThirdPage submitHandler={this.props.registerNewSeller} previousPage={this.previousPage} onSubmit={onSubmit}/>}
                        </div>
                    </div>
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

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

function mapStateToProps(state) {
   return {
        data:state.Sellerregister.data,
        message:state.Sellerregister.message,
    }
}

export default connect(mapStateToProps,{registerNewSeller})(WizardForm)