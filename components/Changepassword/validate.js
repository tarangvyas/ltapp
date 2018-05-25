const validate = values => {
  const errors = {}
  if (!values.old_password) {
    errors.old_password = 'Current Password is Required'
  }
  if (!values.new_password) {
    errors.new_password = 'New Password is Required'
  } else if (values.new_password.length < 7) {
    errors.new_password = 'Password should be at least 7 characters'
  }
  if (!values.con_password) {
    errors.con_password = 'Confirm Password is Required'
  } else if (values.new_password != values.con_password) {
    errors.con_password = ' Confrim Password Must be Same as New Password'
  }
  return errors
}
export default validate