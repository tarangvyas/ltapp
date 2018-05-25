const validate = values => {
  const errors = {}
  
  if (!values.email) {
    errors.email = 'Email is Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.first_name) {
    errors.first_name = 'First Name is Required'
  }
  if (!values.company_name) {
    errors.company_name = 'Company Name is Required'
  }
  if (!values.phone_number) {
    errors.phone_number = 'Phone Number is Required'
  }
  if (!values.dealership_type) {
    errors.dealership_type = 'Select Dealership Type'
  }
  if (!values.email_secondary) {
    errors.email_secondary = 'Secondary Email is Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_secondary)) {
    errors.email_secondary = 'Invalid email address'
  }
  if (!values.postcode) {
    errors.postcode = 'Postcode is Required'
  }
  if (!values.password) {
    errors.password = 'Password is Required'
  } else if (values.password.length < 7) {
    errors.password = 'Password should be at least 7 characters'
  }
  if (!values.c_password) {
    errors.c_password = 'Confirm Password is Required'
  } else if (values.password != values.c_password) {
    errors.c_password = ' Confrim Password Must be Same as Password'
  }
  if (!values.gdpr) {
    //errors.gdpr = 'First Name is Required'
  }
  return errors
}
export default validate