import React, {Component} from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import renderField from './renderField';
import renderDatePicker from './renderDatepicker';

export default class renderFieldArray extends Component {
  constructor(props) {
    super(props)
    this.initializeForm = this.initializeForm.bind(this);
  }
  componentDidMount() {
    this.initializeForm();
  }
  initializeForm() {
      const { fields } = this.props;
  }
  renderForm({fields}) {
    return (
            <div>
            {fields.map((members, index) =>
                <div className="form">
                
                </div>
            )}
            </div>
    );
  }
  render() {
    return (<FieldArray name="members" component={this.renderForm}/>);
  }
}