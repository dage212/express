var express = require('express');
var router = express.Router();

router.get(/^(\/cpts_824_bkr)?\/projects(.html)?$/,function(req,res,next){
    res.render('client/projects',{})
})

module.exports = router;