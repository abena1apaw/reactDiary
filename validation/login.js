const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginData(data) {
  let errors = {};
// 
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// validating email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email not in proper format";
  }
// validating password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
