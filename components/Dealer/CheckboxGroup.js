import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

export default class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  field = ({input, meta, options,selected}) => {
    //console.log('checkbox input selected',selected);
    const {name, onChange} = input;
    const {touched, error} = meta;
    const inputValue = input.value;
    const checkboxes = options.map((title, id) => {
      
      let label=title;
      let value=id;

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      let checked = inputValue.includes(value);
      if(!checked){
        
          if(selected.length){
            selected.map((item, index) => {
              
              if(item==value){
               
                checked=true;
              }
            });
          }
      }
      return (
        <div key={`checkbox-${value}`} className="col-sm-4 col-xs-4 form-group">
          <div className="full-checkbox">
              <input id={label+'_'+value}  className={`${name}`}  name={`${name}[${value}]`} type="checkbox" value={value} checked={checked} onChange={handleChange}   />
              <label htmlFor={label+'_'+value}>
                 <span></span><small>{label}</small>
              </label>
          </div>
          <style jsx>{`
          .full-checkbox input[type="checkbox"]{ display: none; border: none !important; box-shadow: none !important;}
          .full-checkbox input[type="checkbox"] + label span {float: left; margin-right: 10px; display: inline-block; vertical-align: top; width: 21px; height: 21px; background: url(./../../static/images/uncheck.png) no-repeat;}
          .full-checkbox input[type="checkbox"]:checked + label span {background: url(./../../static/images/check_2.png) no-repeat; content: ''; color: #fff; vertical-align: top; width: 21px;    height: 21px;}
          .full-checkbox label,
          .full-checkbox small{font-weight: normal; font-size: 14px; color: #6f6f6f; margin-bottom: 0;}
          .add-features-btn span {background: url("./../../static/images/add-features-ico.png") no-repeat 6px 0; display: inline-block; padding: 4px 4px 4px 41px;}
          .full-checkbox small {display: block; padding-left: 32px;}
          .select-all .full-checkbox .text-success-dark{color: #146227;}
          .form-tittle{}
      `}</style> 
        </div>
        
      );
    });

    return (
      <div className="row">
        {checkboxes}
        {touched && error && <p className="error">{error}</p>}
        
      </div>
     
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} />
    
    ;
  }
}