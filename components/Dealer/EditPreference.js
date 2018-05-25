import React, {Component} from 'react';
import {connect} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Router from 'next/router';
import DealerSideBar from './../Sidebar/DealerSidebar';
import {STORAGE_URL,TYRE_LENGTH,ROOT_URL}  from './../../actions/types';
import moment from 'moment'
import {Fetchmodellist,setPreference,FetchContent} from './../../actions/editpreferences';
import { Field, reduxForm } from 'redux-form';
import validate from './preferencevalidate'
import renderField from './../Forms/renderField';
import CheckboxGroup from './CheckboxGroup';
import Slider from 'react-rangeslider';
require('react-rangeslider/lib/index.css');

const renderSelectField = ({ input, classes, type, meta: { touched, error }, children }) => (
  <div>
    <select {...input} className={classes}>
      {children}
    </select>
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

class EditPreference extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mileage:'',
      from_year:'',
      to_year:'',
      distance:'',
      from_price:'',
      to_price:'',
    }
  }
  handleChange =(value,field) => {
    
    if(field=='mileage')
    {
      this.setState({
        mileage: value,
      })
    }
    if(field=='distance')
    {
      this.setState({
        distance: value,
      })
    }
    if(field=='from_price')
    {
      this.setState({
        from_price: value,
      })
    }
    if(field=='to_price')
    {
      this.setState({
        to_price: value,
      })
    }
    document.getElementById(field).value=value;
    document.getElementById('lbl_mileage').innerText=value;
    
  };
  handleFormSubmit(formProps) {
    console.log(formProps);
    this.props.EditPreferenceHandler(formProps,this.props.token);
  }
  componentWillMount() {
    this.props.modellistHandler(this.props.token);
    this.props.viewPreferenceHandler(this.props.token);
    
  }
  changeField=(e,field) =>{
    if(field=='from_year') {
      this.setState({from_year:e.target.value});
    } else if(field=='to_year') {
      this.setState({to_year:e.target.value});
    } else if(field=='mileage') {
      this.setState({mileage:e.target.value});
    }else if(field=='from_price') {
      this.setState({from_price:e.target.value});
    }else if(field=='to_price') {
      this.setState({to_price:e.target.value});
    }else if(field=='model') {
      this.setState({model:e.target.value});
    }else if(field=='distance') {
      this.setState({distance:e.target.value});
    }
  } 
  selectmodels=(e)=>{
    var x = document.getElementsByClassName("model");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].type == "checkbox") {
          if(e.target.checked)
            x[i].checked = true;
          else  
            x[i].checked = false;
        }
    } 
  }
  handleChangeComplete = () => {
    //document.getElementById('mileage').value=this.state.value;
  };
  render() {
    let modellist='';
    let newState=this.state;


    
    var year_option = [];
    for (var i = 1962; i <= 2018; i++) {
        year_option.push(<option value={i}>{i}</option>);
    }
   // console.log(this.props.modeldata);
    var model_option = [];
    if(this.props.modeldata)
    {
        this.props.modeldata.data.map((item,i)=>{
              model_option[item.model_id]=item.make.make_name+' '+item.model_name;
          });
    }
    const {mileage,distance,from_price,to_price} = this.state;
    
    let selected='';
    if(this.props.preference_data)
    {
      this.props.change('mileage', this.props.preference_data.data.mileage); 
      this.props.change('from_year', this.props.preference_data.data.from_year); 
      this.props.change('to_year', this.props.preference_data.data.to_year); 
      this.props.change('distance', this.props.preference_data.data.distance);
      this.props.change('from_price', this.props.preference_data.data.from_price);
      this.props.change('to_price', this.props.preference_data.data.to_price);
      this.props.change('model', this.props.preference_data.data.model);
      
      selected=this.props.preference_data.data.model;
      selected = selected.split(","); 
    
    if(newState.mileage=='') {
      newState.mileage=this.props.preference_data.data.mileage;
    } else {
      this.props.change('mileage', newState.mileage);
    }
    if(newState.from_year=='') {
      newState.from_year=this.props.preference_data.data.from_year;
    } else {
      this.props.change('from_year', newState.from_year);
    }
    if(newState.to_year=='') {
      newState.to_year=this.props.preference_data.data.to_year;
    } else {
      this.props.change('to_year', newState.to_year);
    }
    if(newState.distance=='') {
      newState.distance=this.props.preference_data.data.distance;
    } else {
      this.props.change('distance', newState.distance);
    }
    if(newState.from_price=='') {
      newState.from_price=this.props.preference_data.data.from_price;
    } else {
      this.props.change('from_price', newState.from_price);
    }
    if(newState.to_price=='') {
      newState.to_price=this.props.preference_data.data.to_price;
    } else {
      this.props.change('to_price', newState.to_price);
    }
    if(newState.model=='') {
      newState.model=this.props.preference_data.data.model;
    } else {
      this.props.change('model', newState.model);
    }
    if(document.getElementById('lbl_mileage'))
    {
      document.getElementById('lbl_mileage').innerText=newState.mileage;
      document.getElementById('lbl_distance').innerText=newState.distance;
      document.getElementById('lbl_from_price').innerText=newState.from_price;
      document.getElementById('lbl_to_price').innerText=newState.to_price;
    }
  }
    const { handleSubmit} = this.props
    return (
        <div className="container">
        <div className="row">
          <DealerSideBar page="edit-preference"/>
          <div className="col-md-8 col-sm-12 edit-preferences-page">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h3 className="font-l text-uppercase text-gray form-group edit-tittle"><span className="text-success-dark font-b">Edit</span> Preferences </h3>
                <h4 className="font-m text-gray form-group">Tell us which cars you are looking for and we will inform you when one comes to market.....</h4>
                <div className="well mar-b">
                  <h4 className="font-b text-uppercase text-success-dark form-group mar-t"><span className="btn-yellow heading-number pull-left">1</span> <span className="header-text">Set preference for age, Mileage & distance to seller :</span></h4>
                  <div className="form-group">
                    <h5 className="text-uppercase font-m">Mleage : or . &#163; <span id="lbl_mileage">100</span> Miles</h5>
                    <div className="form-group">
                    <Field name="mileage" id="mileage" classes="form-control" type="hidden" component={renderField} />
                    
                    <Slider min={0}  max={20}  value={mileage} 
                     onChange={(e)=>this.handleChange(e,'mileage')}  />
                    {/*<input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="-5" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>*/}
                </div>
                  </div>
              <h5 className="form-group text-uppercase font-m">Age (Year)</h5>
              <div className="row">
              <div className="col-sm-6 form-group">
                <h5 className="form-tittle text-muted mar-t">From :</h5>
                  <Field name="from_year" classes="form-control" component={renderSelectField}  onChange={(e)=>this.changeField(e,'from_year')} >
                    <option value="">All Year</option>
                    {year_option}
                    </Field>
              </div>
              <div className="col-sm-6 form-group">
              <h5 className="form-tittle text-muted mar-t">To :</h5>
                  <Field name="to_year" classes="form-control" component={renderSelectField} onChange={(e)=>this.changeField(e,'to_year')} >
                    <option value="">All Year</option>
                    {year_option}
                  </Field>
              </div>
              </div>
                  
                  <div className="form-group">
                    <h5 className="text-uppercase font-m">Distance to seller : 1 Mile to <span id="lbl_distance">National</span></h5>
                    <div className="form-group">
                      <Field name="distance" id="distance" classes="form-control" type="hidden" component={renderField}  onChange={(e)=>this.changeField(e,'distance')} />
                      <Slider
                        min={1}
                        max={20}
                        onChange={(e)=>this.handleChange(e,'distance')}
                        value={distance} 
                        />
                      {/*<input id="distance" name="distance" data-slider-id='ex1Slider' type="text" data-slider-min="1" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>*/}
                    </div>
                  </div>
                  <div className="form-group">
                    <h5 className="text-uppercase font-m">Car Value : </h5>
                    <div className="form-group">
                    <div className="col-md-6">
                        <h5 className="form-tittle text-muted mar-t">From : &#163;<span id="lbl_from_price"></span></h5>  
                        <Slider min={0}  max={100000}  value={from_price}
                         onChange={(e)=>this.handleChange(e,'from_price')} />
                        <Field name="from_price" id="from_price" classes="form-control" type="hidden" component={renderField}  onChange={(e)=>this.changeField(e,'from_price')} />
                    </div>
                    <div className="col-md-6">
                        <h5 className="form-tittle text-muted mar-t">To : &#163;<span id="lbl_to_price"></span></h5>
                        <Slider min={10000}  max={150000}  value={to_price}  onChange={(e)=>this.handleChange(e,'to_price')}   />
                        <Field name="to_price" id="to_price" classes="form-control" type="hidden" component={renderField} onChange={(e)=>this.changeField(e,'to_price')} />
                    </div>  
                    
                    {/*<input id="price" name="price" type="text" className="span2" value="" data-slider-min="10" data-slider-max="100" data-slider-step="5" data-slider-value="[1,100]"/> */}
                </div>
                  </div>
                  <h5 className="text-uppercase font-m form-group">Interested Models :</h5>
                  <div className="row">
                <div className="col-sm-12 form-group select-all">
                  <div className="full-checkbox">
                            <input id="select-all" type="checkbox"  onClick={(e)=>this.selectmodels(e)}/>
                            <label for="select-all"> <span></span><small className="text-success-dark font-m">Select All</small></label>
                          </div>
                </div>
              </div>
              <div className="row interested-models">
              
                  {this.props.modeldata != null?
                      <CheckboxGroup name="model" selected={selected} options={model_option}  />
                      
                  :''                      
                  }
              </div>
                  <hr/>
                  <h4 className="font-b text-uppercase text-success-dark form-group mar-t"><span className="btn-yellow heading-number pull-left">2</span> <span className="header-text">Tell us how you would like to be alerted :</span></h4>
                  <div className="form-group">
                  <input placeholder="Email" className="form-control" type="text" />
                  </div>
                  <div className="form-group Preference-btn">
                      <button type="submit"  className="btn font-m btn-success btn-lg form-group">Save Preferences</button>
                    </div>
                </div>
                </form>
              </div>
          </div>
          <style jsx>{`
              .edit-tittle {border-bottom: 1px solid #d8d8d8; margin-bottom: 25px; padding-bottom: 15px;}
              .edit-preferences-page .heading-number {border-radius: 100%; display: inline-block; height: 30px; line-height: 29px; margin-bottom: 2px; text-align: center; vertical-align: middle; width: 30px;}
              .edit-preferences-page .well {border-radius: 0; box-shadow: none; padding: 30px; margin-top: 25px;}
              /**.age-year a {background: #fff; color: #202020; box-shadow: 0 0 6px #e6e6e6; display: inline-block; font-size: 13px; height: 50px; line-height: 1.4; margin-bottom: 8px; margin-right: 4px; padding: 6px; text-decoration: none; width: 50px;}
              .age-year a.active,
              .age-year a:hover{background: #fdd60f; color: #000;}*/
              .edit-preferences-page hr {border-color: #edc600; margin-bottom: 30px; margin-top: 30px;}
              .Preference-btn .btn{margin-right: 8px;}
              .search-preference .input-group-btn {background: #ffffff; border: 1px solid #bfbfbf; font-size: 0; padding: 0 10px; position: relative; right: 0; white-space: nowrap; z-index: 9;}
              #custom-search-input .search-query {padding-right: 3px; padding-right: 4px \9; padding-left: 15px; padding-left: 15px \9; margin-bottom: 0; border-left: 0;}
              #custom-search-input button {border: 0; background: none; padding: 2px 5px;  margin-top: 2px; position: relative; left: 0px; margin-bottom: 0; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; color:#a0a0a0;}
              .search-query:focus + button {z-index: 3;}
              select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(./../../static/images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
              .edit-preferences-page h4 .header-text {display: block; padding-left: 44px; padding-top: 6px;}
              .edit-preferences-page h4{margin-bottom: 25px;}
              
              .full-checkbox input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
              .full-checkbox input[type="checkbox"] + label span {float: left; margin-right: 10px; display: inline-block; vertical-align: top; width: 21px; height: 21px; background: url(./../../static/images/uncheck.png) no-repeat;}
              .full-checkbox input[type="checkbox"]:checked + label span {background: url(./../../static/images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: top; width: 21px;    height: 21px;}
              .full-checkbox label,
              .full-checkbox small{font-weight: normal; font-size: 14px; color: #6f6f6f; margin-bottom: 0;}
              .add-features-btn span {background: url("./../../static/images/add-features-ico.png") no-repeat 6px 0; display: inline-block; padding: 4px 4px 4px 41px;}
              .full-checkbox small {display: block; padding-left: 32px;}
              .select-all .full-checkbox .text-success-dark{color: #146227;}
              .form-tittle{}
              
              @media all and (max-width: 1199px) {
              .edit-tittle {font-size: 22px;}
              .edit-preferences-page h4 {font-size: 16px;}
              .age-year a{height: 46px; line-height: 1.2; width: 48px;}
              }
              
              @media all and (max-width: 767px) {
              .edit-preferences-page .well {padding: 20px;}
              .edit-preferences-page {margin-top: 35px;}
              }	
              
              @media all and (max-width: 639px) {
              .interested-models .full-checkbox small{font-size: 13px;}
              }	
              @media all and (max-width: 479px) {
              .interested-models .col-sm-4{width: 100%;}
              }  
              
          `}</style> 
        
        </div>
      );
  }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  console.log('component111',state);
  
  return {
    modeldata:state.Preferences.model_data,
    preference_data:state.Preferences.data
   // offers:state.Offers.data
  }

}
function mapDispatchToProps (dispatch) {
    return {
      modellistHandler: (token) => dispatch(Fetchmodellist(token)),
      EditPreferenceHandler: (params,token) => dispatch(setPreference(params,token)),
      viewPreferenceHandler: (token) => dispatch(FetchContent(token))
    }
}


EditPreference = connect(
  mapStateToProps,mapDispatchToProps
)(EditPreference)
export default reduxForm({
  form: 'offer-edit',  //Form name is same
  initialValues: {
          mileage:1998
  },
  validate,
  destroyOnUnmount: false,
})(EditPreference)