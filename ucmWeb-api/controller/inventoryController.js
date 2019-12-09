'use strict';
const InventoryService = require('../services/inventory.service');

exports.summaryCountById = function(req,res,next){
    var inventory = new InventoryService();
<<<<<<< HEAD
    inventory.summaryCountById(req,function(err,result){
=======
    inventory.summaryCountById(req.body,function(err,result){
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
        if(err){
            return next(err);
        }else{
            res.send(result);
        }
    });
}

exports.getTableDetailsForCompute = function(req,res,next){
    var inventory = new InventoryService();
<<<<<<< HEAD
    inventory.getTableDetailsForCompute(req,function(err,result){
=======
    inventory.getTableDetailsForCompute(req.body,function(err,result){
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
        if(err){
            return next(err);
        }else{
            res.send(result);
        }
    });
}