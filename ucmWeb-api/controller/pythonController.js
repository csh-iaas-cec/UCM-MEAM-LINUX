'use strict';

const PythonService = require('../services/python.service');
exports.getSecurityListsFromPython = function(req,res,next){
<<<<<<< HEAD
    // console.log(req.query)
    var python = new PythonService();
    python.getSecurityListsFromPython(req,function(err,result){
        if(err){
            return next(err);
        }else{
            console.log(result)
=======
    var python = new PythonService();
    python.getSecurityListsFromPython(req.body,function(err,result){
        if(err){
            return next(err);
        }else{
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
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