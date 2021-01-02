const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


const validateRegisterData = require("../../validation/register");
const validateLoginData = require("../../validation/login");
// Load user data
const User = require("../../models/User");


router.post("/register", (req, res) => {
   
    
  const { errors, isValid } = validateRegisterData(req.body);
  // validate users
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
 
          
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
  router.post("/login", (req, res) => {
    // validate forms
  const { errors, isValid } = validateLoginData(req.body);
  // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Locate user by email
    User.findOne({ email }).then(user => {
      
        
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not in database" });
      }

        
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // Users matched by information
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };

         //Sign in validated   
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password is incorrect" });
        }
      });
    });
  });
  module.exports = router;
