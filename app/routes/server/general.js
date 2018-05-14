var express = require('express');
var router = express.Router();
/* GET home page. */
router.get(/^\/general(.html)?$/, function(req, res, next) {
    res.render('server/general', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
module.exports = router;