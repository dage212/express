var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(/^(\/cpts_824_bkr)?\/about(.html)?$/, function(req, res, next) {
    res.render('client/about', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});

module.exports = router;