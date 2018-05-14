var express = require('express');
var router = express.Router();
var Services = require('../../server/model/services');
/* GET home page. */
router.get(/^(\/)?(cpts_824_bkr)?(\/index(.html)?)?$/, function(req, res, next) {
    Services.findAll({limit:6}).then(function(data){
        console.log("data="+data[0].dataValues.img)
        res.render('client/index', {data:{list:data,path:'http://localhost:4000/'}});
    }).catch(function(err){
        console.log(err)
    })
});
module.exports = router;
