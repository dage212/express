var express = require('express');
var router = express.Router();
var Services = require('../../server/model/services');
var multer = require('multer');
var upload = multer({dest:'./public/upload'});
var fs = require('fs');

/* GET home page. */
router.get(/^\/simple(.html)?$/, function(req, res, next) {
    var findAll = Services.findAll().then(v=>{
        res.render('server/simple', {all:v,pagination:Math.ceil(v.length/2) });
    }).catch(err=>{
        console.log(err)
    })
});
//查询
router.post('/simple/find',function(req,res,next){
    var page = req.body.page;
    var search = req.body.search;
    var option = {
        offset:(page-1)*2,
        limit:2,
        where:{
            title:{
                $like:'%'+search+'%'
            }
        }
    }
    var optionall = {
        where:{
            title:{
                $like:'%'+search+'%'
            }
        }}
    Services.findAll(option).then(function(data){
        Services.findAll(optionall).then(function(dataAll){
            res.json({msg:'true',data:data,length:Math.ceil(dataAll.length/2),page:page||1,forLength:data.length})
        }).catch(function(err){
            res.json({msg:'false',data:data})
            console.log(err)
        })

    }).catch(function(err){
        res.json({msg:'false',data:data})
        console.log(err)
    })



})
//修改
router.get('/simple/edit/:id',function(req,res,next){
    var id = req.params.id;
    Services.findOne({where:{id:id}}).then(function(data){
        res.render('server/edit',{data:data.dataValues,path:'http://'+req.get('host')})
    }).catch(function(err){
        console.log(err)
    })

})
router.post('/simple/update',upload.single('img'),function (req,res,next) {
    var file = req.file;
    console.log(file);
    fs.rename(file.path,'public/img/'+file.originalname,function(err){
        if(err){
            throw err;
        }else{
            console.log("Success Upload")
        }
    })
    req.body.img = file.originalname;
    Services.update(req.body,{where:{id:req.body.id}}).then(function(data){
        if(data){
            res.render('server/tip',{message:'修改成功',color:'st-red',path:'http://'+req.get('host')})
        }else{
            res.render('server/tip',{message:'修改失败',color:''})
        }
    }).catch(function(err){
        console.log(err)
    })
})
//删除
router.post('/simple/delete',function(req,res,next){
    var id = req.body.id;
    Services.destroy({where:{id:id}}).then(function(data){
        if(data > 0){
            res.json({msg:"删除成功",status:true})
        }else{
            res.json({msg:"删除失败",status:false})
        }
    }).catch(function(err){
        console.log(err)
    })
})
module.exports = router;