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
    console.log(options,'specification_title');
    const checkboxes = options.map(({specification_title, specification_id}, index) => {
      
      let label=specification_title;
      let value=specification_id;
      

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
              if(item.id==value){
                checked=true;
              }
            });
          }
      }
      return (
        <div key={`checkbox-${index}`} className="col-sm-4 col-xs-4 form-group">
          <div className="full-checkbox">
              <label htmlFor={label+'_'+value}>
                <input id={label+'_'+value} name={`${name}[${index}]`} type="checkbox" value={value} checked={checked} onChange={handleChange}   /> <span></span><small>{label}</small>
              </label>
          </div>
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
    return <Field {...this.props} type="checkbox" component={this.field} />;
  }
}