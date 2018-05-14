var express = require('express');
var router = express.Router();
/* GET home page. */
router.get(/^\/(index(.html)?)?$/, function(req, res, next) {
  res.render('server/index', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
module.exports = router;
