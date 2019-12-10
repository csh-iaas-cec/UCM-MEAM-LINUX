'use strict';
const Connection = require('../db');

class InventoryService{

    summaryCountById(req,res){

        console.log('<----------API Database Get summary Count by Id Called ---------->')

        //let connection = mysql.createConnection(config);
        var connection = new Connection();
        const tenancy_id = req.query.id;
        const report_date = req.query.date;
        let tenancies;
        connection.databaseConnection(null, function(err, data) {
            if (err) {
                return;
            } else {
                     let tenancyDetails = `CALL get_summary_count('${report_date}','${tenancy_id}',@compute,@vcn,@boot,@block,@subnet,@others,@bucket,@object,@size)`;
                     console.log("<---------- Tenancy Id : ", tenancy_id, " and the report date is ", report_date, " and sql statement is : ", tenancyDetails, " ---------->");
                     data.query(tenancyDetails, true, (error, results, fields) => {
                         if (error) {
                             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                         }
                         else {
                             tenancies = results[0];
                             res(null, tenancies);
                             console.log('<---------- Success : Successfully fetched summary count details by Id and report date and output is:  ---------->\n', tenancies);

                         }
                     });
                    }
            });
    }

    getTableDetailsForCompute(req,res){
        console.log('<----------API Database Get Compute resource details Called ---------->')
        //let connection = mysql.createConnection(config);
        var connection = new Connection();
        const name = req.query.name;
        const reportDate = req.query.reportdate;
        const tenancyName = req.query.tenancyname;
        var details;
        let instancetable;
        if (name == 'virtualMachine') {
            details = `CALL get_summary_compute('${reportDate}', '${tenancyName}',@1,@2,@3,@4,@5,@6,@7,@8)`;
        }
        if (name == 'bootvolume') {
            details = `CALL get_summary_bootvolume('${reportDate}', '${tenancyName}',@1,@2,@3,@4,@5)`;

        }
        if (name == 'blockvolume') {
            details = `CALL get_summary_blockvolume('${reportDate}', '${tenancyName}',@1,@2,@3,@4,@5)`;

        }
        if (name == 'vcn') {
            details = `CALL get_summary_vcn('${reportDate}', '${tenancyName}',@1,@2,@3)`;

        }
        if (name == 'subnet') {
            details = `CALL get_summary_subnet('${reportDate}', '${tenancyName}',@1,@2,@3,@4)`;

        }
        if (name == 'others') {
            details = `CALL get_summary_others('${reportDate}', '${tenancyName}',@1,@2)`;

        }
        if (name == 'bucket' || name == 'object' || name == 'size'){
            details = `call get_summary_bucket('${reportDate}','${tenancyName}',@1,@2,@3,@4,@5,@6,@7)`;
        }
        console.log("<---------- Resource name :", name, " and sql statement is ", details, " ---------->");
        connection.databaseConnection(null, function(err, data) {
            if (err) {
                return;
            } else {
                    data.query(details, true, (error, results, fields) => {
                        if (error) {
                            return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                        }
                        else {
                            instancetable = results[0];
                            res(null, instancetable);
                            console.log('<---------- Success : Successfully computr resource deatils and output is:  ---------->\n', instancetable);
                        
                        }
                    });
                }
        });
    }
}
module.exports = InventoryService;
