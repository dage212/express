var express = require('express');
var router = express.Router();
/* GET home page. */
router.get(/^\/edit(.html)?$/, function(req, res, next) {
    console.log('===========basic.html============')
    res.render('server/edit', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
module.exports = router;