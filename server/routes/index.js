const express = require("express")
const mongoose = require("mongoose");
const {save, view,delt} = require('../controller/index')

const router = express.Router();


router.get('/view', view)

router.post('/save',save)

router.delete('view/:id',  (req, res) => {
    User.findOneAndRemove({_id: req.params.id}, (err) => {
      if (err) {
        req.flash("error", err);
        
      }
  
      req.flash("success", "Your account has been deleted.");
      
      
    });
  });

module.exports = router;