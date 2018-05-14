var express = require('express');
var router = express.Router();
/* GET home page. */
router.get(/^\/tip(.html)?$/, function(req, res, next) {
    console.dir('============wwwwww===================')
    res.render('server/tip', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
module.exports = router;