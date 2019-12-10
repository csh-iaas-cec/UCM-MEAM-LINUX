'use strict';
module.exports = function(app){

    var terraform = require('../controller/terraformController');
    var io = require('../controller/IOController');
    var tenancy = require('../controller/tenancyController');
    var inventory = require('../controller/inventoryController');
    var python = require('../controller/pythonController');
    console.log("routing to the api")

    app.route('/api/RunScriptsInit')
        .post(terraform.runScriptsInit);

    app.route('/api/RunScriptsApply')
        .post(terraform.runScriptsApply);

    app.route('/api/InitializeScripts')
        .post(io.initializeScripts);
    
    app.route('/api/getOnlyActiveTenancies')
        .get(tenancy.getOnlyActiveTenancies);

    app.route('/api/getAllTenancies')
        .get(tenancy.getAllTenancies);
    
    app.route('/api/getAllTenancyReports')
        .get(tenancy.getAllTenancyReports);

     app.route('/api/getTenancyDetailsById')
        .get(tenancy.getTenancyDetailsById);

    app.route('/api/updateTenancyDetailsById')
        .post(tenancy.updateTenancyDetailsById);

    app.route('/api/addTenancyDetailsById')
        .post(tenancy.addTenancyDetailsById);
    
    app.route('/api/getmporderformDataByTenancy')
        .get(tenancy.getmporderformDataByTenancy);
    
    app.route('/api/summaryCountById')
        .get(inventory.summaryCountById);

    app.route('/api/getTableDetailsForCompute')
        .get(inventory.getTableDetailsForCompute);

    app.route('/api/getSecurityListsFromPython')
        .get(python.getSecurityListsFromPython);

    app.route('/api/runPythonForServiceAutomation')
        .post(python.runPythonForServiceAutomation);
}
