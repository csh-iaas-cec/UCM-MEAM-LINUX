'use strict';

const IOService = require('../services/io.service');

exports.initializeScripts = function(req,res,next){
    var io = new IOService();
    io.initializeScripts(req,function(err,result){
        if(result){
            console.log("controller result",result);
            res.status(200)
            .json({
                msg: "success"
            })
        }else{
            
            res.json({
                msg: "failure"
          })
        }
    });
}