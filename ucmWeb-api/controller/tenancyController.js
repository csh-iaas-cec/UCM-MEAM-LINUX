'use strict';

const TenancyService = require('../services/tenancy.service');
exports.getOnlyActiveTenancies = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.getOnlyActiveTenancies(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}

exports.getAllTenancies = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.getAllTenancies(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}

exports.getAllTenancyReports = function(req,res,next){
    var tenancy = new TenancyService();
    console.log("====controller request body====",req)
    tenancy.getAllTenancyReports(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}
exports.getTenancyDetailsById = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.getTenancyDetailsById(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}
exports.updateTenancyDetailsById = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.updateTenancyDetailsById(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}

exports.addTenancyDetailsById = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.addTenancyDetailsById(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}

exports.getmporderformDataByTenancy = function(req,res,next){
    var tenancy = new TenancyService();
    tenancy.getmporderformDataByTenancy(req,function(err,data){
        if(err){
            return next(err);
        }else{
            res.send(data);
        }
    });
}
