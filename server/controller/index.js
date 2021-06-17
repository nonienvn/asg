const User = require("../model/user")
const {validationResult} = require("express-validator")

exports.save = (req,res) => {

   
    User.findOne({ email: req.body.email})
    .exec((error,user) => {
        if(user) return res.status(400).json({
            message: "user already here"
        });
        const {
            name,
            dob,
            email,
            gender,
            address
        } = req.body
        const _user = new User({
            name,
            dob,
            email,
            gender,
            address
        })

        _user.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message: "what something went wrong"
                })
            }
            if(data) {
                return res.status(201).json({
                    message: "users  saved"
                })
            }
        })
    })
}


exports.view = (req,res) => {
    User.find()
    .exec((error, users) => {
        if(error) return res.status(400).json({error})
        if(users){
            
            
               res.status(200).json({
                   users
               })
            }
            
    })
}


  


