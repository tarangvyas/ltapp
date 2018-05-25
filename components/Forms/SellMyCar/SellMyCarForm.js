import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Router from 'next/router';
import { Field, FieldArray, reduxForm } from 'redux-form';

import validate from './validate';
import renderField from './../renderField';
import renderFieldArray from './../renderFieldArray';
import renderRadioField from './../renderRadio';
import renderDatePicker from './../renderDatepicker';
import CheckboxGroup from './../CheckboxGroup';

import SellerSideBar from './../../Sidebar/SellerSidebar';
import {Unpublishcar, Specificationlist, AddSpecification,Addcarimage,sellMyCarAction} from './../../../actions/sell_my_car';
import {STORAGE_URL,TYRE_LENGTH}  from './../../../actions/types';


import moment from 'moment'


const car_images =['3/4 Drivers Side Front','3/4 passenger side front','3/4 drivers side rear','3/4 passenger side rear','Close up on wheels','Speedometer','Dashboard','Interior','Key Features','Any Defects / Stone Chips etc','Any Defects / Dents Etc','Any Defects / Scratches etc','Service History','MOT Details','Tyre Tread Depths'];

const servicetype = [{"value":1,"text":"Full Service History"},{"value":2,"text":"No Service History"},{"value":3,"text":"Part Service History"}]

const renderSelectField = ({ input, classes, type, meta: { touched, error }, children }) => (
    <div>
      <select {...input} className={classes}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
)


const renderMembers = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Member</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}/>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"/>
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"/>
        
      </li>
    )}
  </ul>
)
const renderServerHistory = ({ fields,services, meta: { touched, error } }) => {
    
    

return (<div>    
    <div className="service-history form-group table-responsive">
<table width="100%" border="0" className="table">
                                <thead>
                                    <tr>
                                        <th className="text-gray" width="25%">Date (DD/MM/YYYY)*</th>
                                        <th className="text-gray" width="20%">Mileage</th>
                                        <th className="text-gray" width="20%">Service Dealer</th>
                                        <th className="text-gray" colSpan="2" width="35%">Additional Info <br />(Cambelt change etc.)</th>
                                    </tr>
                                </thead>
                                <tbody id="service_history_tbody">
                                    {fields.map((services, index) =>
                                        <tr key={index}>
                                            <td>
                                                 <Field
                                                    name={`${services}.service_date`}
                                                    inputValueFormat="MM-DD-YYYY"
                                                    dateFormat="L"
                                                    dateFormatCalendar="dddd"
                                                    fixedHeight
                                                    showMonthDropdown
                                                    showYearDropdown
                                                    dropdownMode="select"
                                                    normalize={value => (value ? moment(value).format('MM-DD-YYYY') : null)}
                                                    component={renderDatePicker}
                                                    style={{position:'relative'}}
                                                    />
                                            </td>
                                            <td>
                                            <Field
                                            placeholder="999"
                                            classes="form-control"
                                            name={`${services}.mileage`}
                                            type="text"
                                            component={renderField}
                                            label="" />    
                                            </td>
                                            <td>
                                                <Field
                                                placeholder="Strstton Lotus"
                                                classes="form-control"
                                                name={`${services}.service_dealer`}
                                                type="text"
                                                component={renderField}
                                                label="" />
                                            </td>
                                            <td>
                                                <Field
                                                placeholder="Brake ....."
                                                classes="form-control"
                                                name={`${services}.description`}
                                                type="text"
                                                component={renderField}
                                                label="" />
                                            </td>
                                            <td className="service-his-delete"><button type="button" onClick={() => fields.remove(index)} className="text-dark btn btn-danger"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Remove</button></td> 
                                        </tr>
                                        )}
                                    
                                </tbody>
</table>
</div>
<div className="row form-group">
    <div className="col-md-12">
        <button type="button" onClick={() => fields.push({})} className="btn font-m btn-yellow text-uppercase add-features-btn"><span>Add Service</span></button>
    </div>
</div>
<style jsx>{`
 
.add-features-btn span {background: url("./../../static/images/add-features-ico.png") no-repeat 6px 0; display: inline-block; padding: 4px 4px 4px 41px;}
.service-history table{border-left: 1px solid #c0c6c0; border-top: 1px solid #c0c6c0;}
.service-history th{background-color: #d3dcd4; line-height: 1.1; padding: 8px 10px;}
.service-history tr:nth-child(even) {background: #f1f1f1}
.service-history tr:nth-child(odd) {background: #FFF}
.service-history th, .service-history td {padding: 8px 10px; font-size: 13px; border-right: 1px solid #c0c6c0; border-bottom: 1px solid #c0c6c0;}
.submit-advert-btn span{background: url(./../../static/images/submit-advert-icon.png) no-repeat 0 center; padding-left: 32px;}
.submit-advert-btn {box-shadow: 0 0 9px #a0a0a0; margin-top: 30px;}
.service-his-delete {min-width: 70px;}
.service-his-delete .glyphicon {color: #ffa921; margin-right: 8px;}
.service-history .date .input-group-addon{border-radius: 0; background-color: inherit;}
.service-history .date .input-group-addon .fa-calendar{color: #ffa921;}
.service-history {overflow:inherit}
`}</style>
</div>)
}

class SellMyCarForm extends Component {
   constructor(props) {
        super(props)
        this.uploadCars = this.uploadCars.bind(this);
        this.changeField = this.changeField.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            cardetail:null,
            asking_price:'',
            mileage:'',
            color:'',
            mot_exp_date:'',
            car_type:'',
            is_finance:'',
            fuel:'',
            description:'',
            tyre_depth_fl:'',
            tyre_depth_fr:'',
            tyre_depth_rl:'',
            tyre_depth_rr:'',
            service_type:''
        }
   }
   handleFormSubmit(formProps) {
     this.props.sellMyCarAction(this.props.token,formProps);
   }
   handleChange(date) {
    this.setState({
      mot_exp_date: moment(date).format('MM-DD-YYYY')
    });
  }
  changeField(e,field) {
      if(field=='car_type') {
        this.setState({car_type:e.target.value});
      } else if(field=='is_finance') {
        this.setState({is_finance:e.target.value});
      } else if(field=='fuel') {
        this.setState({fuel:e.target.value});
      }else if(field=='asking_price') {
        this.setState({asking_price:e.target.value});
      }else if(field=='mileage') {
        this.setState({mileage:e.target.value});
      }else if(field=='color') {
        this.setState({color:e.target.value});
      }else if(field=='mot_exp_date') {
        this.setState({mot_exp_date:e.target.value});
      }else if(field=='description') {
        this.setState({description:e.target.value});
      }else if(field=='tyre_depth_fl') {
        this.setState({tyre_depth_fl:e.target.value});
      }else if(field=='tyre_depth_fr') {
        this.setState({tyre_depth_fr:e.target.value});
      }else if(field=='tyre_depth_rl') {
        this.setState({tyre_depth_rl:e.target.value});
      }else if(field=='tyre_depth_rr') {
        this.setState({tyre_depth_rr:e.target.value});
      }else if(field=='service_type') {
        this.setState({service_type:e.target.value});
      }
  }
  fileValidation(fileInput,index) {
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)) {
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{
            /*var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('img_dvPreview_'+index).src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);*/
        return true;
    }
  }
  uploadCars(index,e,car_id) {
    let image_type=index;
    let file_name=e.target.files[0];
    const data = new FormData();
    data.append('file_name', file_name);
    data.append('image_type', image_type);
    data.append('car_id', car_id);
    if(this.fileValidation(e.target,index)){
        this.props.Addcarimage(this.props.token,data)
    }
  }
  addNewFeatures() {
    let field = document.getElementById('txt_add_new_feature');
    field.style.borderColor = null;
    field.value = '';
    let divid=document.getElementById('add_new_feature');
    divid.style.display='block';
  }
  cancelNewFeatures() {
    let field = document.getElementById('txt_add_new_feature');
    field.style.borderColor = null;
    field.value = '';
    let divid = document.getElementById('add_new_feature');
    divid.style.display = 'none';
    
  }
  saveNewFeatures(e) {
      let field = document.getElementById('txt_add_new_feature');
      let title = field.value;
      field.style.borderColor = null;
      if(title.trim() != "") {
        let data = {specification_title:title}
        this.props.AddSpecification(this.props.token,data);
      }else{
        field.style.borderColor = 'Red';
      }
  }
  componentWillMount() {
    this.props.Unpublishcar(this.props.token);
    this.props.Specificationlist(this.props.token);
  }
  render() {
    let newState=this.state;
    let cardetail=null;
    let specification=null;

    if(this.props.lastposted_car)
    {
        cardetail=this.props.lastposted_car.data;
    }
    if(this.props.specification_list)
    {
        specification=this.props.specification_list.data;
    }

    if(cardetail!=null){
      this.props.change('car_id', cardetail.car_id);
      this.props.change('asking_price', cardetail.asking_price);
      this.props.change('mileage', cardetail.mileage);
      this.props.change('color', cardetail.color);
      this.props.change('mot_exp_date',moment.unix(cardetail.mot_exp_date).format("MM-DD-YYYY"));
      this.props.change('car_type', cardetail.car_type);
      this.props.change('is_finance', cardetail.is_finance);
      this.props.change('fuel', cardetail.fuel);
      this.props.change('description', cardetail.description);
      this.props.change('tyre_depth_fl', cardetail.tyre_depth_fl);
      this.props.change('tyre_depth_fr', cardetail.tyre_depth_fr);
      this.props.change('tyre_depth_rl', cardetail.tyre_depth_rl);
      this.props.change('tyre_depth_rr', cardetail.tyre_depth_rr);
      this.props.change('service_type', cardetail.service_type);
      
      if(newState.description=='') {
        newState.description=cardetail.description;
      } else {
        this.props.change('description', newState.description);
      }

      if(newState.asking_price=='') {
        newState.asking_price=cardetail.asking_price;
      } else {
        this.props.change('asking_price', newState.asking_price);
      }

      if(newState.mileage=='') {
        newState.mileage=cardetail.mileage;
      } else {
        this.props.change('mileage', newState.mileage);
      }

      if(newState.color=='') {
        newState.color=cardetail.color;
      } else {
        this.props.change('color', newState.color);
      }

      if(newState.service_type=='') {
        newState.service_type=cardetail.service_type;
      } else {
        this.props.change('service_type', newState.service_type);
      }

      if(newState.tyre_depth_rr==''){
        newState.tyre_depth_rr=cardetail.tyre_depth_rr;
      }else{
        this.props.change('tyre_depth_rr', newState.tyre_depth_rr);
      }

      if(newState.tyre_depth_rl==''){
        newState.tyre_depth_rl=cardetail.tyre_depth_rl;
      }else{
        this.props.change('tyre_depth_rl', newState.tyre_depth_rl);
      }

      if(newState.tyre_depth_fr==''){
        newState.tyre_depth_fr=cardetail.tyre_depth_fr;
      }else{
        this.props.change('tyre_depth_fr', newState.tyre_depth_fr);
      }

      if(newState.tyre_depth_fl==''){
        newState.tyre_depth_fl=cardetail.tyre_depth_fl;
      }else{
        this.props.change('tyre_depth_fl', newState.tyre_depth_fl);
      }

      if(newState.car_type==''){
        newState.car_type=cardetail.car_type;
      }else{
        this.props.change('car_type', newState.car_type);
      }

      if(newState.is_finance==''){
        newState.is_finance=cardetail.is_finance;
      }else{
        this.props.change('is_finance', newState.is_finance);
      }

      if(newState.fuel==''){
        newState.fuel=cardetail.fuel;
      }else{
        this.props.change('fuel', newState.fuel);
      }

      /*if(cardetail.car_detail.service.length){
            cardetail.car_detail.service.map((item,index)=>{
                this.props.services.push(item);
            });
      }*/
       console.log('services',this.props.services);
    }
    
   

    const { handleSubmit, pristine, reset, submitting } = this.props;
    if(this.props.specification_added === true){
        this.cancelNewFeatures();
        this.props.Specificationlist(this.props.token);
    }
    if(this.props.carimage_added === true){
        this.props.Unpublishcar(this.props.token);
    }
    let sellmycar_message=null;
    if(this.props.sellcar!=""){
        if(this.props.sellcar.success==true){
            sellmycar_message=<div className="alert alert-success">Car Detail Updated Successfully</div>
            setTimeout(function(){
                this.props.Unpublishcar(this.props.token);    
            },500);
            
        }
    }
    return (
  <div className="container">
	<div className="row">
    <SellerSideBar />
    {sellmycar_message}
    {cardetail!=null?
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="col-lg-8 col-md-8 col-sm-12 sell-my-car-mad">
            <h3 className="font-b text-uppercase text-gray form-group citroen-saxo-tittle">
                {cardetail.reg_no}
                <Field name="car_id" classes="form-control" type="hidden" component={renderField}/>    
            </h3>

            <button className="btn font-m btn-yellow pull-right text-uppercase save-btn"><span>Save</span></button>

            <div className="row sell-my-mad">
                <div className="col-md-12">
                    <div className="citroen-saxo pull-left">
                        <img src="./../../static/images/car-list-img-01.jpg" alt="" />
                    </div>
                    <div className="citroen-saxo-right">
                        <h3 className="font-l text-uppercase text-gray form-group mar-t"><span className="text-success-dark font-b">{cardetail.make.make_name}</span> {cardetail.model.model_name}</h3>
                        <div className="form-group miles-pad"><span>{cardetail.car_year}</span> <span className="dot-ico">SAXO 1.6i VTR 3dr ???</span></div>
                        <div className="form-group">
                    <div className="pill-left">		
                        <a href="javascript:void(0)" className="btn btn-success font-m text-uppercase live-btn btn-lg">Live</a>
                        <span className="font-m text-yellow-dark">Expires on {moment.unix(cardetail.mot_exp_date).format("MM-DD-YYYY")}</span>
                        <div className="pull-right delete-sell-my-car">
                            <a href="javascript:void(0)" className="btn btn-default font-m text-uppercase delete-btn btn-lg"><span>Delete</span></a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>





            <div className="row sell-my-mad">
                <div className="col-md-12">
                    <div className="bg-light price-key-details">
                        <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Price</span> and Key Details</h3>
                        <p className="text-gray price-key-text form-group">Fill in the following fields to give the buyers a better understanding of your Lotus. If you follow our reccomended step by step process the chances are you will receive stronger bids for your car.</p>
                        <div className="row">
                            <div className="col-sm-4 form-group">
                                <h5 className="font-m text-uppercase text-gray">Asking Price</h5>
                                <Field placeholder="Set your asking price" name="asking_price" id="asking_price"  classes="form-control" type="text" component={renderField}/>

                                
                            </div>
                            <div className="col-sm-4 form-group">
                                <h5 className="font-m text-uppercase text-gray">Mileage</h5>
                                <Field placeholder="Mileage" name="mileage" id="mileage"  classes="form-control" type="text" component={renderField} onChange={(e)=>this.changeField(e,'mileage')}  />

                                
                            </div>
                            <div className="col-sm-4 form-group">
                                <h5 className="font-m text-uppercase text-gray">Vehicle Colour</h5>
                                <Field name="color" id="color" classes="form-control" type="text" component={renderField} onChange={(e)=>this.changeField(e,'color')} />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 form-group mot-expiry-date">
                                <h5 className="font-m text-uppercase text-gray">Mot expiry date</h5>
                                <Field
                                        name="mot_exp_date"
                                        id="mot_exp_date"
                                        inputValueFormat="MM-DD-YYYY"
                                        dateFormat="L"
                                        dateFormatCalendar="dddd"
                                        fixedHeight
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        onChange={this.handleChange}
                                        normalize={value => (value ? moment(value).format('MM-DD-YYYY') : null)}
                                        component={renderDatePicker}
                                        />
                            </div>
                            <div className="col-md-8 col-sm-8 form-group form-inline automatic-radio">
                                <Field
                                name="car_type"
                                label=""
                                check={newState.car_type}
                                onChange={(e)=>this.changeField(e,'car_type')}
                                component={renderRadioField}
                                options={{
                                    '1': 'Automatic',
                                    '2': 'Manual'
                                }}
                                />
                                
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-sm-12 form-group form-inline">
                                <h5 className="font-m text-uppercase text-gray">
                                    Is your car on finance? 
                                    <a href="javascript:void(0)" className="finance-tooltip" data-toggle="tooltip" title="Hooray!" data-placement="right">
                                    <img src="./../../static/images/car-on-finance-icon.png" alt=""/>
                                    </a>
                                </h5>
                                <Field
                                name="is_finance"
                                label=""
                                check={newState.is_finance}
                                onChange={(e)=>this.changeField(e,'is_finance')}
                                component={renderRadioField}
                                options={{
                                    '1': 'Yes',
                                    '2': 'No'
                                }}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 form-group form-inline">
                                <h5 className="font-m text-uppercase text-gray">
                                    Car Fuel 
                                </h5>
                                <Field
                                name="fuel"
                                label=""
                                check={newState.fuel}
                                onChange={(e)=>this.changeField(e,'fuel')}
                                component={renderRadioField}
                                options={{
                                    '1': 'Petrol',
                                    '2': 'Diesel',
                                    '3': 'Gas'
                                }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="font-m text-muted">If Yes do you know your settlement figure?</h5>
                                <div className="form-inline">
                                        <h5 className="font-m text-muted form-group mar-t finance-yes">If so please enter it here</h5> 
                                        <div className="form-group please-inter-here">
                                                <Field name="settlement_price" id="settlement_price" classes="form-control" type="text" component={renderField}  />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row sell-my-mad">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Main</span> Features</h3>
                    <ul className="main-features-bullet">
                        <li>First registered on {moment.unix(cardetail.reg_date).format("DD/MM/YYYY")}</li>
                        <li>{cardetail.previous_owner}</li>
                    </ul>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 specification-mad">
                    <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Full</span> Specification</h3>
                    {specification!=null?<CheckboxGroup name="specification_ids" selected={cardetail!=null?cardetail.car_detail.specification:null} options={specification}  />:null}
                    <div id="add_new_feature" style={{display:"none"}}> 
                            <div className="row" >
                                <div className="col-md-4"><label>New Feature</label></div>
                                <div className="col-md-4">
                                        <input type="text" className="form-control" id="txt_add_new_feature" />
                                </div>
                                <div className="col-md-4">
                                    <button onClick={(e)=>this.saveNewFeatures(e)} type="button" className="btn btn-success">Save</button>&nbsp;<button onClick={()=>this.cancelNewFeatures()} type="button" className="btn btn-danger">Cancel</button>    
                                </div>
                            </div>
                            <div className="clearfix"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={()=>this.addNewFeatures()}  type="button" className="btn font-m btn-yellow text-uppercase add-features-btn"><span>Add features</span></button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row sell-my-mad">
                <div className="col-md-12">
                    <div className="bg-light price-key-details">
                        <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">car</span> images</h3>
                        
                        <p className="text-gray price-key-text">Increase your Advert Strength by adding at least 15 images of your car. Please include damaged parts.</p>
                        <div className="browse-files-row">
                            <ul>
                                {car_images.map((item,index)=>{
                                       let carimage='./../../static/images/brose-file-icon.png';
                                       if(cardetail.carimages.length){
                                         for(let carimg of cardetail.carimages){
                                             if(index==carimg.image_type){
                                                 carimage=STORAGE_URL+carimg.file_name;
                                                 break;
                                             }
                                         }
                                       }
                                       return  <li key={item}>
                                    <h6 className="text-muted">{item}</h6>
                                    <div className="browse-files-box">
                                        <div id="dvPreview">
                                            <img id={["img_dvPreview_",index].join('')} src={carimage} alt="" />
                                            <p className="text-muted">Add or drop images here</p>
                                        </div>
                                    </div>
                                    <span className="fileupload-files text-center btn btn-yellow font-m">
                                        <input id="fileupload" type="file" multiple="multiple" onChange={(e)=>this.uploadCars(index,e,cardetail.car_id)} />Browse Files
                                    </span>
                                </li>
                                })}
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

            <div className="row sell-my-mad">
                <div className="col-md-12">
                    <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Panel</span> Grader</h3>
                    <p className="text-gray price-key-text form-group">Increase your Advert Strength by using the panel grader to assess you car’s damages.</p>
                    <div className="form-group panel-grader-mad">
                        <div className="full-checkbox">
                        <input id="damage" type="checkbox" />
                        <label htmlFor="damage" className="font-m"> <span></span>My car doesn't have any damage </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="panel-grader-box">
                                <div className="form-group"><img src="./../../static/images/panel-grader-img.jpg" alt="" /></div>
                                <div className="text-center remote">
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Broken">br</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Chip">c</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Multiple Chips">mc</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Scratch">s</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Dent">de</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Previous Repair">pr</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Rust">r</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Crack ">C </a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Off Colour Panel">oc</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Scuff">sc</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Scratched Wheel">sw</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Tear">te</a>
                                    <a href="javascript:void(0)" className="btn font-m btn-success text-uppercase add-features-btn" data-toggle="tooltip" data-placement="top" title="Hole">h</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="form-group please-select">
                                <em className="text-muted">Please select from the diagram, the damaged parts of your car.</em>
                            </div>
                            <h4 className="font-b text-uppercase text-success-dark form-group">Tyre Tread Depths</h4>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-dark">Front Left Tyre Depth (mm) <span className="red">*</span></h5>
                                    <Field name="tyre_depth_fl" classes="form-control" component={renderSelectField} onChange={(e)=>this.changeField(e,'tyre_depth_fl')}>
                                    <option value="">Please select</option>
                                    { TYRE_LENGTH.map(option => <option value={option} key={option}>{option} mm</option>) }
                                    </Field>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-dark">Front Right Tyre Depth (mm) <span className="red">*</span></h5>
                                    <Field name="tyre_depth_fr" classes="form-control" component={renderSelectField}onChange={(e)=>this.changeField(e,'tyre_depth_fr')}>
                                       <option value="">Please select</option>
                                        { TYRE_LENGTH.map(option => <option value={option} key={option}>{option} mm</option>) }
                                    </Field>
                                        
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-dark">Rear Left Tyre Depth (mm) <span className="red">*</span></h5>
                                        <Field name="tyre_depth_rl" classes="form-control" component={renderSelectField} onChange={(e)=>this.changeField(e,'tyre_depth_rl')}>
                                        <option value="">Please select</option>
                                        { TYRE_LENGTH.map(option => <option value={option} key={option}>{option} mm</option>) }
                                        </Field>
                                    
                                </div>
                                <div className="col-sm-6 form-group">
                                    <h5 className="font-m text-dark">Rear Right Tyre Depth (mm) <span className="red">*</span></h5>
                                        <Field name="tyre_depth_rr" id="Lotus" classes="form-control" component={renderSelectField} onChange={(e)=>this.changeField(e,'tyre_depth_rr')}>
                                        <option value="">Please select</option>
                                        { TYRE_LENGTH.map(option => <option value={option} key={option}>{option} mm</option>) }
                                        </Field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row sell-my-mad">
                <div className="col-md-12">
                    <div className="bg-light price-key-details">
                        <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Description</span></h3>
                        <p className="text-gray price-key-text">Increase your Advert Strength by adding 100 or more characters.</p>
                        <div className="form-group mar-b">
                            <Field name="description" className="form-control" rows="4" cols="5" component="textarea" placeholder="Additional comments here" onChange={(e)=>this.changeField(e,'description')} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <h3 className="font-l text-uppercase text-gray mar-t sell-my-heading"><span className="text-success-dark font-b">Service</span> History</h3>
                    <div className="row form-group">
                        <div className="col-sm-6 form-group">
                            <h5 className="font-m text-dark text-uppercase">Service History Type <span className="red">*</span></h5>
                            <Field name="service_type" classes="form-control" component={renderSelectField} label="Username" onChange={(e)=>this.changeField(e,'service_type')}>
                            <option value="">Please select</option>
                            { servicetype.map(option => <option value={option.value} key={option.value}>{option.text}</option>) }
                            </Field>
                        </div>
                    </div>
                    <FieldArray name="services" component={renderServerHistory}/>
                    <div className="row">
                           <div className="col-md-12 text-center">
                               <button className="btn font-m btn-success text-uppercase submit-advert-btn btn-lg" type="submit" disabled={pristine || submitting}><span>Submit Advert</span></button>
                           </div>
                    </div>

                    </div>
                </div>



        </div>
    </form>:'cardetail not found'}
    </div>
  <style jsx>{`
        .citroen-saxo-tittle{padding-bottom: 12px; border-bottom: 1px solid #d8d8d8; margin-bottom: 32px;}
.save-btn {margin-top: -80px; position: relative;}
.save-btn span {background: url(./../../static/images/save-ico.png) no-repeat 6px 2px; display: inline-block; padding: 2px 4px 2px 35px;}
.dot-ico {background: url("./../../static/images/dot-ico.png") no-repeat scroll 0 8px; padding-left: 15px;}
.miles-pad span{margin-right: 15px;}
.citroen-saxo-right{padding-left: 200px; font-size: 15px;}
.live-btn {font-size: 14px; margin-right: 15px; min-width: 104px; padding: 9px 16px;}
.delete-btn{font-size: 14px; padding: 9px 16px;}
.delete-btn span{background:url("./../../static/images/close-ico.png") no-repeat 0 center; padding-left: 22px;}
.sell-my-mad{margin-bottom: 40px;}
.price-key-details{padding: 30px;}
.sell-my-heading {margin-bottom: 20px; padding-bottom: 14px; position: relative;}
.sell-my-heading::before {background: #146227; bottom: 0; content: ""; height: 1px; left: 0; position: absolute; width: 70px;}
.price-key-text{font-size: 15px;}
.automatic-radio {margin-top: 42px;}
.radio-box input[type="radio"]{ display: none; border: none !important; box-shadow: none !important;}
.radio-box input[type="radio"] + label span {margin-right: 12px; display: inline-block; vertical-align: middle; width: 18px; height: 18px; background: url(../images/radio-uncheck.png) no-repeat;}
.radio-box input[type="radio"]:checked + label span {background: url(./../../static/images/radio-check.png) no-repeat; content: ''; color: #fff; vertical-align: middle; width: 18px;    height: 18px;}
.radio-box label{font-weight: normal; font-size: 15px; color: #6f6f6f; margin-bottom: 0;}
.finance-yes{margin-right: 15px;}
.please-inter-here .form-control{width: 98px;}
ul.main-features-bullet{margin: 0; padding: 0; list-style: none;}
ul.main-features-bullet li {color: #454545; line-height: 1.2; font-size: 16px; margin-bottom: 10px; position: relative; padding-left: 20px;}
ul.main-features-bullet li::before {background: url("./../../static/images/bullet.png") no-repeat; content: ""; display: block; position: absolute; height: 16px; left: 0; top: 6px; width: 16px;}
.mot-expiry-date .date .input-group-addon .fa-calendar {color: #ffa921;}
.mot-expiry-date .date .input-group-addon {background-color: #ffffff; border-radius: 0;}

.full-checkbox input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
.full-checkbox input[type="checkbox"] + label span {float: left; margin-right: 10px; display: inline-block; vertical-align: top; width: 21px; height: 21px; background: url(../images/uncheck.png) no-repeat;}
.full-checkbox input[type="checkbox"]:checked + label span {background: url(./../../static/images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: top; width: 21px;    height: 21px;}
.full-checkbox label,
.full-checkbox small{font-weight: normal; font-size: 14px; color: #6f6f6f; margin-bottom: 0;}
.add-features-btn span {background: url("./../../static/images/add-features-ico.png") no-repeat 6px 0; display: inline-block; padding: 4px 4px 4px 41px;}
.full-checkbox small {display: block; padding-left: 32px;}

.browse-files-row ul{margin: 0 -0.8%; padding: 0; list-style: none;}
.browse-files-row li {float: left; margin: 0.8%; text-align: center; width: 18.4%;}
.browse-files-row li .browse-files-box {background-color: #ffffff; min-height: 150px; border: 1px solid #bebebe; padding: 15px 3px;}
.browse-files-row li .browse-files-box p {font-style: italic; line-height: 1.2; margin-bottom: 2px;}
.browse-files-row li h6 {font-size: 14px; font-style: italic; font-weight: normal; min-height: 32px;}
.browse-files-row li .btn {border-radius: 0; display: block; margin-top: 1px; min-width: 100%; padding: 8px 8px;}
.browse-files-row li .browse-files-box img {height: 64px; margin-bottom: 12px; width: 80px;}
.browse-files-row li .browse-files-box .upload-img {height: 90px; margin-bottom: 0; margin-top: 11%; width: 86%;}
.panel-grader-mad{margin-bottom: 30px;}
select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
.red{color: red; font-size: 18px;} 
.remote a {border-radius: 100%; font-size: 13px; height: 32px; line-height: 29px; margin: 0 1px 6px; padding: 0; text-align: center; width: 32px;}
.please-select{margin-bottom: 26px;}

.service-history table{border-left: 1px solid #c0c6c0; border-top: 1px solid #c0c6c0;}
.service-history th{background-color: #d3dcd4; line-height: 1.1; padding: 8px 10px;}
.service-history tr:nth-child(even) {background: #f1f1f1}
.service-history tr:nth-child(odd) {background: #FFF}
.service-history th, .service-history td {padding: 8px 10px; font-size: 13px; border-right: 1px solid #c0c6c0; border-bottom: 1px solid #c0c6c0;}
.submit-advert-btn span{background: url(./../../static/images/submit-advert-icon.png) no-repeat 0 center; padding-left: 32px;}
.submit-advert-btn {box-shadow: 0 0 9px #a0a0a0; margin-top: 30px;}
.service-his-delete {min-width: 70px;}
.service-his-delete .glyphicon {color: #ffa921; margin-right: 8px;}
.service-history .date .input-group-addon{border-radius: 0; background-color: inherit;}
.service-history .date .input-group-addon .fa-calendar{color: #ffa921;}
.finance-tooltip{margin-left: 10px;}

.sell-my-car-mad {margin-top: 10px;}
.panel-grader-box .tooltip-inner{min-width: 90px;}

.fileupload-files {position: relative;}
.fileupload-files #fileupload {bottom: 0; left: 0; opacity: 0; position: absolute; right: 0; top: 0; cursor: pointer;}

@media all and (max-width: 1199px) {
.specification-mad {margin-top: 28px;}
}

@media all and (max-width: 767px) {
.citroen-saxo {max-width: 130px;}
.citroen-saxo-right {font-size: 14px; padding-left: 150px;}
.citroen-saxo-right h3 {font-size: 18px;}
.live-btn {margin-right: 8px;}
.price-key-details {padding: 22px;}
.automatic-radio {margin-top: 20px;}
.radio-box,
.please-inter-here,
.finance-yes { display: inline-block; margin-bottom: 0;}
.specification-mad {margin-top: 35px;}
.panel-grader-box {margin: 0 auto 22px; max-width: 259px;}
.sell-my-car-mad {margin-top: 40px;}
.sell-my-heading {font-size: 21px;}
}

@media all and (max-width: 639px) {
.browse-files-row li {width: 31.7%;}
}

@media all and (max-width: 567px) {
.citroen-saxo-right {clear: both; padding-left: 0;}
.citroen-saxo {margin-bottom: 18px; max-width: 100%; width: 100%;}
.citroen-saxo img{width: 100%;}
.specification-mad .row .col-xs-4{width: 100%;}
}

@media all and (max-width: 479px) {
.delete-sell-my-car {clear: both; float: none !important; margin-top: 12px;}
.browse-files-row li {width: 48.4%;}
.please-inter-here {display: block; margin-top: 12px;}
.please-inter-here .form-control {width: 100%;}
}
  `}</style>
  </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

function mapStateToProps(state) {
   return {
        lastposted_car: state.SellMyCar.lastposted_car,
        specification_list: state.SellMyCar.specification_list,
        specification_added: state.SellMyCar.specification_added,
        carimage_added: state.SellMyCar.carimage_added,
        sellcar: state.SellMyCar.sellcar,
        
    }
}

SellMyCarForm = connect(
    mapStateToProps,
    {Unpublishcar,Specificationlist,AddSpecification,Addcarimage,sellMyCarAction}
)(SellMyCarForm);
export default reduxForm({
  form: 'sell-my-car',              
  enableReinitialize : true,
  validate
})(SellMyCarForm)