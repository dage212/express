var express = require('express');
var router = express.Router();

router.get(/^(\/cpts_824_bkr)?\/price(.html)?$/,function(req,res,next){
    res.render('client/price',{})
})

module.exports = router;