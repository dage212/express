var express = require('express');
var multer = require('multer');
var upload = multer({dest:'./public/upload'});
var router = express.Router();
var fs = require('fs');
var Services = require('../../server/model/services');

/* GET home page. */
router.get(/^\/add(.html)?$/, function(req, res, next) {
    console.log('===========basic.html============')
    res.render('server/add', { title: 'Express',arr:[{id:'AAA'},{id:'BBB'},{id:'CCC'}] });
});
router.post(/^\/submit(.html)?$/,upload.single('img'),function(req,res,next){
    console.log('============add==========')
    try{
        var file = req.file;
        fs.rename(file.path,'public/img/'+file.originalname,function(err){
            if(err){
                throw err;
            }else{
                console.log('Upload Success')
                req.body.img = req.file.originalname;
                Services.create(req.body).then(function(){
                    console.log('========添加成功======')
                }).catch(function(err){
                    console.log(err)
                    res.render('server/tip',{message:'添加失败',color:''})
                })
            }
        })
    }catch(err){
        console.log("Upload Error:"+err)
        Services.create(req.body).then(function(){
            console.log('========添加成功======')
        }).catch(function(err){
            console.log(err)
            res.render('server/tip',{message:'添加失败',color:''})
        })
    }

    res.render('server/tip',{message:'添加成功',color:'st-red'})
})
module.exports = router;