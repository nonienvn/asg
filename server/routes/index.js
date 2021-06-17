const express = require("express")
const mongoose = require("mongoose");
const {save, view,} = require('../controller/index')
const User = require("../model/user")
const router = express.Router();
const {check} = require("express-validator")
const {validateRequest, isRequestValidated} = require("../validators/index")

router.get('/view', view)

router.post('/save',validateRequest,isRequestValidated,save)

router.delete('/view/:name',  (req, res) => {
  User.findOne({name: req.params.name}, function (error, user){
    console.log("This object will get deleted " + user);
    user.remove();

});
  });

module.exports = router;