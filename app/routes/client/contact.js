var express = require('express');
var router = express.Router();

/*get router*/
router.get(/^(\/cpts_824_bkr)?\/contact(.html)?$/,function(req,res,next){
    res.render('client/contact',{})
})

module.exports = router;