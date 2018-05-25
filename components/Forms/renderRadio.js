import * as React from 'react';
import { Field } from 'redux-form';

export const Radio = props => {
    const { input, meta, options } = props
    const hasError = meta.touched && meta.error;
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
        console.log(props);
      return (
        <label className="sans-serif w-100" key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
          <Field
            id={`${props.input.name}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="mh2"
            checked={key==props.check?true:false}
            onChange={input.onChange}
          />
          &nbsp;{props.options[key]}&nbsp;
        </label>
      )
    };
    return (
      <div className="mv3 w-100">
        <div className="b sans-serif pv2 w-100">
          {props.label}
        </div>
        <div>
          {props.options &&
            Object.keys(props.options).map(renderRadioButtons)}
            {hasError && <div><span className="text-danger">{meta.error}</span></div>}
        </div>
      </div>
    );
  }
  return <div></div>
}

export default Radio;