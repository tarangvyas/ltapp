const preferencevalidate = values => {
  const errors = {}
  
  if (!values.mileage) {
    errors.mileage = 'Mileage is Required'
  }
  if (!values.from_year) {
    errors.from_year = 'From Year is Required'
  }
  if (!values.to_year) {
    errors.to_year = 'To Year is Required'
  }
  if (!values.distance) {
    errors.distance = 'Distance is Required'
  }
  if (!values.price) {
    errors.price = 'Price is Required'
  }
  if (!values.model) {
    errors.model = 'Model is Required'
  }
  
  
  return errors
}
export default preferencevalidate