const validate = values => {
  const errors = {}
  
  if (!values.car_mileage) {
    errors.car_mileage = 'Required'  
  }
  if (!values.car_service_type) {
    errors.car_service_type = 'Required'  
  }
  if (!values.car_asking_price) {
    errors.car_asking_price = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.first_name) {
    errors.first_name = 'Required'
  }
  if (!values.postcode) {
    errors.postcode = 'Required'
  }
  if (!values.phone_number) {
    errors.phone_number = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 7) {
    errors.password = 'Password should be at least 7 characters'
  }
  if (!values.c_password) {
    errors.c_password = 'Required'
  } else if (values.password != values.c_password) {
    errors.c_password = ' Confrim Password Must be Same as Password'
  }
  return errors
}

export default validate