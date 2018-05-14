var express = require('express');
var router = express.Router();

router.get(/^(\/cpts_824_bkr)?\/services(.html)?$/,function(req,res,next){
    res.render('client/services',{})
})

module.exports = router;