var express = require('express');
var router = express.Router();
router.get(/^(\/cpts_824_bkr)?\/sidebar(.html)?$/,function(req,res,next){
    res.render('client/sidebar-right',{})
})

module.exports = router;