'use strict';

const TerraformService = require('../services/terraform.service')

exports.runScriptsInit = function(req,res,next){
    //console.log("request ", req);
    var terraform = new TerraformService();
    terraform.inItScript(req.body,function(err,result){
        if(err){
            res.json({
                msg: "failure"
          })
        }else{
            res.status(200)
            .json({
                msg: "success"
            })
        }
    });
}

exports.runScriptsApply = function(req,res,next){
    var terraform = new TerraformService();
    terraform.applyScript(req.body,function(err,result){
        if(err){
            res.json({
                             msg: "failure"
                       })
        }else{
            res.status(200)
            .json({
                msg: "success"
            })
        }
    });
}