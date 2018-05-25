import React, {Component} from 'react'
import classes from './Searchcars.css';
import {Fetchmakelist,Fetchmodellist,loadData} from './../../actions/searchcar';
import { connect } from 'react-redux';
import Link from 'next/link'
import { Field, reduxForm } from 'redux-form'


class SearchcarForm extends Component {
    constructor(props) {
        super(props);
        this.updatelist = this.updatelist.bind(this)
    }
    componentDidMount(){
      let page_name='fd';
      this.props.makelistHandler(this.props.token);
    }
    converthtml(desc) {
     return {__html: desc};
    }
    handleChange = (event) => {
      this.props.modellistHandler(event.target.value);
    }
    yearlist=()=> {
      
       
    }
    FilterColumn(e,name){
      let newState=this.props.allstate;
      console.log(newState);
      let index=newState.filter.findIndex(x => x.field==name);
      newState.filter[index].q=e.target.value;
      newState.page=1;
      this.loadGridData(newState);
      e.preventDefault();
    }
    updatelist() 
    {

      this.loadGridData(this.props.allcars,this.props.token);
    }
    resetfilter = () =>{

      let index =0;
      let inputs = document.getElementsByTagName('input');
      for (index = 0; index < inputs.length; ++index) {
          inputs[index].value='';

      }
      index =0;
      inputs = document.getElementsByTagName('select');
      for (index = 0; index < inputs.length; ++index) {
          if(inputs[index].id != 'sortorder')
            inputs[index].value='';

      }

      document.getElementById('make_id').value='';
      this.loadGridData(this.props.allcars,this.props.token);

    }
    loadGridData(makeData,token){
                let urlParams='';
                if(makeData.sortBy !=null){
                  urlParams=urlParams+'?orderBy='+makeData.sortBy+'&sort='+makeData.order;
                }
                let hasFilter="N";
                let filters=makeData.filter.map((item,i)=>{
                    if(item.q!='') {
                      hasFilter="Y";
                      if(i==0)
                         return item.field+'='+item.q;
                      else
                        return '&'+item.field+'='+item.q;
                    }
                });
                if(hasFilter=="Y"){
                  if(urlParams==""){
                      urlParams="?"+filters.join('');
                  }else{
                    urlParams=urlParams+"&"+filters.join('');
                  }
                }
                if(urlParams==""){
                  urlParams="?page=1";
                }else{
                   urlParams=urlParams+"&page=1";
                }

                let make=document.getElementById('make_id');
                let model=document.getElementById('model_id');
                let make_id=document.getElementById('make_id').value;
                let model_id=document.getElementById('model_id').value;
                let min_price=document.getElementById('min_price').value;
                let max_price=document.getElementById('max_price').value;
                let min_mileage=document.getElementById('min_mileage').value;
                let max_mileage=document.getElementById('max_mileage').value;
                let min_year=document.getElementById('min_year').value;
                let max_year=document.getElementById('max_year').value;
                let keyword=document.getElementById('keyword').value;
                let address=document.getElementById('address').value;
                
                var checkboxes = document.getElementsByName('fuel[]');
                var fvals = "";
                for (var i=0, n=checkboxes.length;i<n;i++) 
                {
                    if (checkboxes[i].checked) 
                    {
                      if(fvals != '')
                        fvals += ","+checkboxes[i].value;
                      else
                         fvals = checkboxes[i].value;
                    }
                }

                var car_check = document.getElementsByName('car_type[]');
                var cvals = "";
                for (var i=0, n=car_check.length;i<n;i++) 
                {
                    if (car_check[i].checked) 
                    {
                        cvals += ","+car_check[i].value;
                    }
                }
                if (cvals) cvals = cvals.substring(1);
                //alert(cvals);

                urlParams=urlParams+"&make_id="+make_id+"&model_id="+model_id+"&min_price="+min_price+"&max_price="+max_price+"&min_mileage="+min_mileage+"&max_mileage="+max_mileage;
                urlParams=urlParams+"&min_year="+min_year+"&max_year="+max_year+"&fuel="+fvals+"&car_type="+cvals+"&keyword="+keyword+"&address="+address;
                //alert(urlParams);
                this.props.loadDataHandler(urlParams,token);  
 
                var make_name = make.options[make.selectedIndex].text;
                var model_name = model.options[model.selectedIndex].text;
                let tag_name='';
                if(make_id != '')
                  tag_name="<a  href='#'>"+make_name+"</a>"
                if(model_id != '')
                  tag_name+="<a  href='#'>"+model_name+"</a>"
                if(tag_name != '')
                document.getElementById("tag_block").innerHTML = tag_name;
                //alert(make_name);        
    }
    render() {


        let data = this.props.page_data;
        let make_option='';
        let module_option='';

        if(this.props.make_list){
            let first_make=this.props.make_list.data[0]['make_id'];
            make_option=this.props.make_list.data.map((item,i)=>{
                return (<option value={item.make_id}>{item.make_name}</option>
                    );
            });
        }
        if(this.props.model_list){
            module_option=this.props.model_list.data.map((item,i)=>{
                console.log(item.model_name);
                return (<option value={item.model_id}>{item.model_name}</option>
                    );
                
            });
        }
        var year_option = [];
        for (var i = 1962; i <= 2018; i++) {
            year_option.push(<option>{i}</option>);
        }
        
        return (<div className="col-lg-4 col-md-4 col-sm-12">
                    <form name="frm_searchcar">
                    <h3 className="filter-tittle font-m text-uppercase text-white green-bg"><span className="pull-left">Filters</span> <a href="javascript:void(0)" onClick={this.resetfilter} className="btn btn-default pull-right">Show All</a></h3>
                    <div className="filter-group well">
                        <div className="form-group">
                            <input className="form-control" placeholder="NR15 2XJ" type="text" name="address" id="address"  onChange={this.updatelist} />
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="Nationwide">
                              <option value="">Nationwide</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="make_id" onChange={this.handleChange}  name="make_id">
                              <option value="">All</option>
                              {make_option}
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="model_id" name="model_id">
                              <option value="">All</option>
                              {module_option}
                            </select>
                        </div>
                        <div className="update-results text-center">
                            <button type="button" className="btn btn-yellow-dark uppercase-text font-b btn-block btn-lg" onClick={this.updatelist}>Update Results</button>
                        </div>
                        <div className="tag" id="tag_block">
                            <a href="#">Tag1</a>
                        </div>
                    </div>  
                    <div className="price-group well">
                    <h4 className="uppercase-text font-m text-gray">Price</h4>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <select className="form-control" id="min_price" name="min_price" onChange={this.updatelist}>
                              <option value="">Min</option>
                              <option value="1000">1000</option>
                              <option value="2000">2000</option>
                              <option value="3000">3000</option>
                              <option value="4000">4000</option>
                              <option value="5000">5000</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control" id="max_price" name="max_price" onChange={this.updatelist}>
                              <option value="">Max</option>
                              <option value="2000">2000</option>
                              <option value="3000">3000</option>
                              <option value="4000">4000</option>
                              <option value="5000">5000</option>
                              <option value="6000">6000</option>
                            </select>
                        </div>
                    </div>
                    <h4 className="uppercase-text font-m text-gray">Mileage</h4>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <select className="form-control" id="min_mileage" name="min_mileage" onChange={this.updatelist}>
                              <option value="">Min</option>
                              <option value="500">500 Miles</option>
                              <option value="600">600 Miles</option>
                              <option value="700">700 Miles</option>
                              <option value="800">800 Miles</option>
                              <option value="900">900 Miles</option>
                              <option value="1000">1000 Miles</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control" id="max_mileage" name="max_mileage" onChange={this.updatelist}>
                              <option value="">Max</option>
                              <option value="600">600 Miles</option>
                              <option value="700">700 Miles</option>
                              <option value="800">800 Miles</option>
                              <option value="900">900 Miles</option>
                              <option value="1000">1000 Miles</option>
                              <option value="2000">2000 Miles</option>
                            </select>
                        </div>
                    </div>
                    <h4 className="uppercase-text font-m text-gray">Year</h4>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <select className="form-control" id="min_year" name="min_year" onChange={this.updatelist}>
                              <option value="">Min</option>
                              {year_option}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control" id="max_year" name="max_year" onChange={this.updatelist}>
                              <option value="">Max</option>
                              {year_option}
                            </select>
                        </div>
                    </div>
                    <div className="more-option-main">
                    <button type="button" className="btn more-option btn-yellow-dark uppercase-text font-b btn-block btn-lg" data-toggle="collapse" data-target="#demo">More options</button>
                      <div id="demo" className="collapse">
                        <h4 className="uppercase-text font-m text-gray">Fuel Type</h4>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Petrol" type="checkbox" name="fuel[]" value="1" className="fuel" onClick={this.updatelist} />
                                  <label for="Petrol"> <span></span>Petrol</label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Diesel" type="checkbox" name="fuel[]" value="2" className="fuel" onClick={this.updatelist} />
                                  <label for="Diesel"> <span></span>Diesel</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Hybrid" type="checkbox" name="fuel[]" value="3" className="fuel" onClick={this.updatelist} />
                                  <label for="Hybrid"> <span></span>Hybrid</label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Electric" type="checkbox" name="fuel[]" value="4" className="fuel" onClick={this.updatelist} />
                                  <label for="Electric"> <span></span>Electric</label>
                                </div>
                            </div>
                        </div>
                        <h4 className="uppercase-text font-m text-gray">Gearbox</h4>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Automatic" type="checkbox" name="car_type[]" value="1" onClick={this.updatelist} />
                                  <label for="Automatic"> <span></span>Automatic</label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="checkbox-table">
                                  <input id="Manual" type="checkbox" name="car_type[]" value="2" onClick={this.updatelist} />
                                  <label for="Manual"> <span></span>Manual</label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="form-group">
                            <div className="checkbox-show">
                            </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="uppercase-text font-m text-gray">Keyword</h4>
                        <div className="form-group">
                            <input className="form-control" placeholder="E.G. Sat-Nav" type="text" name="keyword" id="keyword" onChange={this.updatelist} />
                        </div>
                    </div>  
                 </form> 
                <style jsx>{`
                    .filter-tittle {display: block; margin-bottom: 0; font-size: 20px; overflow: hidden; padding: 10px 10px 10px 20px;}
                    .filter-tittle span {margin-top: 6px;}
                    .filter-tittle .btn {border: none; display: inline-block; padding: 8px 15px; text-transform: capitalize;}
                    select.form-control{-webkit-appearance:none; -moz-appearance:none; appearance:none; cursor:pointer; background:#fff url(../../static/images/select-dropdown.png) no-repeat right center; padding-left: 10px;}
                    .filter-group {margin-bottom: 30px;}
                    .filter-group,
                    .price-group {background-color: #fff; border-radius: 0; box-shadow: none;}
                    .update-results {margin-top: 35px; margin-bottom: 35px;}

                    .price-group h4{font-size: 16px; margin-top: 4px;}
                    .filter-group .btn-yellow-dark,
                    .price-group .btn-yellow-dark{font-size: 16px;}
                    .more-option-main{margin: 20px auto;}
                    .more-option-main .more-option{text-align: left; position: relative;}
                    .more-option::before {background: url("../../static/images/more-option-arrow.png") no-repeat scroll center center; content: ""; display: block; height: 22px; position: absolute; right: 12px; top: 10px; width: 12px;}

                    .checkbox-table input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
                    .checkbox-table input[type="checkbox"] + label span {margin-right: 12px; display: inline-block; vertical-align: middle; width: 21px; height: 21px; background: url(../../static/images/uncheck.png) no-repeat;}
                    .checkbox-table input[type="checkbox"]:checked + label span {background: url(../../static/images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: middle; width: 21px;    height: 21px;}
                    .checkbox-table label{font-weight: normal; font-size: 16px; color: #6f6f6f; margin-bottom: 0;}

                    .checkbox-show input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
                    .checkbox-show input[type="checkbox"] + label span {margin-right: 12px; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: url(../../static/images/showcars-uncheck.png) no-repeat;}
                    .checkbox-show input[type="checkbox"]:checked + label span {background: url(../../static/images/showcars-check.png) no-repeat; content: ''; color: #fff; vertical-align: middle; width: 20px; height: 20px;}
                    .checkbox-show label{font-weight: normal; font-size: 16px; color: #282828; margin-bottom: 0;}
                    .more-option-main #demo{margin-top: 20px;}
                    .more-option-main #demo h4:first-child{margin-top: 0;}
                    .more-option-main #demo hr{margin-top: 10px;}

                    .tag{border: 1px solid #cbcbcb; padding: 10px;}
                    .tag a {background: #fff url("../../static/images/close-ico.png") no-repeat right center; text-decoration: none; border: 1px solid #cbcbcb; border-radius: 40px; color: #3b3b3b; display: inline-block; margin-bottom: 14px; margin-right: 10px; min-width: 86px; padding: 5px 18px; text-align: left;}


                    `}</style> 
                    </div>   

        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  return {
    make_list:state.SearchCar.make_list,
    model_list:state.SearchCar.model_list,
    allcars:state.SearchCar,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        makelistHandler: (token) => dispatch(Fetchmakelist(token)),
        modellistHandler: (first_make) => dispatch(Fetchmodellist(first_make)),
        loadDataHandler: (params,token) => dispatch(loadData(params,token)),
    }
}

SearchcarForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchcarForm);

export default reduxForm({
  form: 'searchform',              
})(SearchcarForm)