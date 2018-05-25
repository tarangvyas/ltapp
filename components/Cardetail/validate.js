const validate = values => {
  const errors = {}
  console.log(values);
  if (!values.offer_amount) {
    errors.offer_amount = 'Offer Amount is Required'
  }
  return errors
}
export default validate