const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginData(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email not in proper format";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
