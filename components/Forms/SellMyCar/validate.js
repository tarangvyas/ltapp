const validate = values => {
  const errors = {}
  
  if (!values.asking_price) {
    errors.asking_price = 'Asking Price is Required'
  }
  if (!values.mileage) {
    errors.mileage = 'Mileage is Required'
  }
  if (!values.color) {
    errors.color = 'Vehicle Colour is Required'
  }
  if (!values.mot_exp_date) {
    errors.mot_exp_date = 'Mot expiry date is Required'
  }

  if (!values.is_finance) {
    errors.is_finance = 'Finance is Required'
  }

  if (!values.fuel) {
    errors.fuel = 'Fuel is Required'
  }
  if (!values.tyre_depth_fl) {
    errors.tyre_depth_fl = 'Front Left Tyre Depth is Required'
  }
  if (!values.tyre_depth_fr) {
    errors.tyre_depth_fr = 'Front Right Tyre Depth is Required'
  }
  if (!values.tyre_depth_rl) {
    errors.tyre_depth_rl = 'Rear Left Tyre Depth is Required'
  }
  if (!values.tyre_depth_rr) {
    errors.tyre_depth_rr = 'Rear Right Tyre Depth is Required'
  }


  

  if (!values.settlement_price) {
    errors.settlement_price = 'Settlement price is Required'
  }
  if (!values.service_type) {
    errors.service_type = 'Service type is Required'
  }
  return errors
}
export default validate