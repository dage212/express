var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var upload = multer({dest:'./public/upload'});
var create = require('../../server/model/details').create;

router.get(/^\/details_add(.html)?$/,function(req,res){

    res.render('server/details_add',{})
})
router.post('/details/add',upload.single('img'),function(req,res){
    try{
        create(req,'create',function(){
            fs.rename(req.file.path,'public/img/'+req.file.originalname,function(err){
                throw err;
                console.log('Upload Img Successfully!')
            })
            res.render('server/tip',{message:'添加成功',color:'st-red'})
        })
    }catch(err){
        console.log('Upload Img Error:'+err)
    }
})

router.get(/^\/details(.html)?$/,function(req,res){
    res.render('server/details',{})
})
module.exports = router;