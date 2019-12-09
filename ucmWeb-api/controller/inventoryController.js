'use strict';
const InventoryService = require('../services/inventory.service');

exports.summaryCountById = function(req,res,next){
    var inventory = new InventoryService();
    inventory.summaryCountById(req,function(err,result){
        if(err){
            return next(err);
        }else{
            res.send(result);
        }
    });
}

exports.getTableDetailsForCompute = function(req,res,next){
    var inventory = new InventoryService();
    inventory.getTableDetailsForCompute(req,function(err,result){
        if(err){
            return next(err);
        }else{
            res.send(result);
        }
    });
}