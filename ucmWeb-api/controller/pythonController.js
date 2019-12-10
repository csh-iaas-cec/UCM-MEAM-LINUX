'use strict';

const PythonService = require('../services/python.service');
exports.getSecurityListsFromPython = function(req,res,next){
    var python = new PythonService();
    python.getSecurityListsFromPython(req,function(err,result){
        if(err){
            return next(err);
        }else{
            console.log(result)
            res.send(result);
        }
    });
}

exports.runPythonForServiceAutomation = function(req,res,next){
    var python = new PythonService();
    python.runPythonForServiceAutomation(req.body,function(err,result){
        if(err){
            return next(err);
        }else{
            res.send(result);
        }
    });
}
