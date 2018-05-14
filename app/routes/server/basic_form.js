var express = require('express');
var router = express.Router();
/* GET home page. */
router.get(/^\/basic_form(.html)?$/, function(req, res, next) {
    console.log('===========basic.html============')
    res.render('server/basic_form', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
module.exports = router;