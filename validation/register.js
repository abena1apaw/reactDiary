const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterData(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// validate name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Please enter your name";
  }
// validatee email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email not in proper format";
  }
// validate password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm your password";
  }
if (!Validator.isLength(data.password, { min: 8, max: 45 })) {
    errors.password = "At least 8 characters are needed for the password";
  }
if (!Validator.equals(data.password, data.password2)) {
    error.password2="Both passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
