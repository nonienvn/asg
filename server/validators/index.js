const {check, validationResult} = require("express-validator") 

exports.validateRequest = [
    check("name")
    .notEmpty()
    .withMessage("name is required"),
    check("email")
    .isEmail()
    .withMessage('email is required'),
    check("address")
    .notEmpty()
    .withMessage("address is required"),
    check("gender")
    .notEmpty()
    .withMessage("gender is required"),
    check("dob")
    .notEmpty()
    .withMessage("dob is required")
  ];


  exports.isRequestValidated = (req,res,next) => {
      const errors = validationResult(req);
      if(errors.array().length > 0) {
          return res.status(400).json({error: errors.array()[0].msg})
      }
      next();
  }