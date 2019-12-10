'use strict';
const Connection = require('../db');
var fs = require("fs");
const uploaddir ='../uploads';

class TenancyService{

    getOnlyActiveTenancies(req,callback){
        console.log('<----------API Database get only active instances Called ---------->');
   
         //let connection = mysql.createConnection(config);
         var connection = new Connection();
         console.log("====request=====",req)
         const tenancy_id = req.query.id;
         let tenancies;

         connection.databaseConnection(null, function(err, data) {
            if (err) {
                logger.error(JSON.stringify(err));
               // callback(boom.badImplementation(err));
                return;
            } else {
                     let sql = `CALL get_active_tenancies(@tenancyName)`;
                     console.log('<---------- SQL statement is : ', sql, " ---------->")
                     data.query(sql, true, (error, results, fields) => {
                         if (error) {
                             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                         }
                         else {
                             tenancies = results[0];
                             console.log('<---------- Success : Successfully fetched all active instances ---------->\n', tenancies);
                        
                            // res.json(tenancies);
                             callback(null, tenancies);
                         }
                        });
            }
         });
         
    }

    getAllTenancies(req,callback){
        console.log('<----------API Database get all active instances Called ---------->')
       // let connection = mysql.createConnection(config);

       var connection = new Connection();
        const tenancy_id = req.query.id;
        let tenancies;

        connection.databaseConnection(null, function(err, data) {
            if (err) {
                return;
            } else {
                     let sql = `CALL get_active_inactive_tenancies(@tenancyName)`;
                     console.log('<---------- SQL statement is : ', sql, " ---------->")
                     data.query(sql, true, (error, results, fields) => {
                         if (error) {
                             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                         }
                         else {
                             tenancies = results[0];
                             console.log('<---------- Success : Successfully fetched all  instances ---------->\n', tenancies);

                             //res.json(tenancies);
                             callback(null, fields);
                         }
                     });
                 }
        });
    }

    getAllTenancyReports(req,callback){
        console.log('<----------API Database get all active reports Called ---------->')

        //let connection = mysql.createConnection(config);
        var connection = new Connection();
        const tenancy_id = req.query.id;
        let tenancies;

        connection.databaseConnection(null, function(err, data) {
            if (err) {
                logger.error(JSON.stringify(err));
                callback(boom.badImplementation(err));
                return;
            } else {
                     let sql = `CALL get_report_date(@report)`;
                     console.log('<---------- SQL statement is : ', sql, " ---------->")

                     data.query(sql, true, (error, results, fields) => {
                         if (error) {
                             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                         }
                         else {
                             tenancies = results[0];
                             console.log('<---------- Success : Successfully fetched all tenancy reports ---------->\n', tenancies);

                             
                             callback(null, tenancies);
                         }
                     });
                 }
        });
    }

    getTenancyDetailsById(req,callback){
        console.log('<----------API Database get Tenancy detail by Id Called ---------->')

    //let connection = mysql.createConnection(config);
    var connection = new Connection();
    const tenancy_id = req.query.id;
    let tenancies;
    connection.databaseConnection(null, function(err, data) {
        if (err) {
            logger.error(JSON.stringify(err));
            callback(boom.badImplementation(err));
            return;
        } else {
                let tenancyDetails = `CALL get_tenancy('${tenancy_id}',@1,@2,@3,@4,@5,@6,@7,@8,@9,@10,@11)`;
                console.log("<---------- Tenancy Id is : ", tenancy_id, " and sql statement is : ", tenancyDetails, " ---------->");

                data.query(tenancyDetails, true, (error, results, fields) => {
                    if (error) {
                        return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                    }
                    else {
                        tenancies = results[0];
                        console.log('<---------- Success : Successfully fetched tenancy detail by id and output is:  ---------->\n', tenancies);
                    
                        //res.json(tenancies);
                        callback(null, fields);
                    
                    }
                });
            }
     });
    }

    updateTenancyDetailsById(req,res){
        console.log('<----------API Database Update Tenancy detail by Id Called ---------->')
   // let connection = mysql.createConnection(config);
   var connection = new Connection();
    const tenancy = req.body;
    let tenancies;
    connection.databaseConnection(null, function(err, data) {
        if (err) {
            logger.error(JSON.stringify(err));
            callback(boom.badImplementation(err));
            return;
        } else {
                 let sql = `CALL update_tenancy('${tenancy.tstatus}','${tenancy.currenttenancy}','${tenancy.Tenancy_owner}','${tenancy.Tenancy_owner_email}','${tenancy.bo_name}','${tenancy.bo_email}')`;
                 console.log("<---------- Tenancy Details : ", tenancy, " and sql statement is : ", sql, " ---------->");
                 data.query(sql, true, (error, results, fields) => {
                     if (error) {
                         return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                     }
                     else {
                         tenancies = results[0];
                         res.json(tenancies);
                         console.log('<---------- Success : Successfully updated tenancy detail by id and output is:  ---------->\n', tenancies);

                     }
                 });
            }
     });
    }

    addTenancyDetailsById(req,res){
        console.log('<----------API Database Add Tenancy detail by Id Called ---------->')

       // let connection = mysql.createConnection(config);
        var connection = new Connection();
        const tenancy = req.body;
        let tenancies;
        connection.databaseConnection(null, function(err, data) {
            if (err) {
                logger.error(JSON.stringify(err));
                callback(boom.badImplementation(err));
                return;
            } else {
                     let sql = `CALL addtenancy('${tenancy.report_date}','${tenancy.tenancyid}','${tenancy.adminuid}','${tenancy.tenancyname}','${tenancy.Tenancy_owner}','${tenancy.Tenancy_owner_email}','${tenancy.bo_name}','${tenancy.bo_email}','${tenancy.homeregion}','${tenancy.creditlimit}','${tenancy.status}')`;
                     console.log("<---------- Tenancy Details : ", tenancy, " and sql statement is : ", sql, " ---------->");
                     data.query(sql, true, (error, results, fields) => {
                         if (error) {
                             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                         }
                         else {
                             tenancies = results[0];
                             res.json(tenancies);
                             console.log('<---------- Success : Successfully added tenancy details by id and output is:  ---------->\n', tenancies);

                         }
                     });
                }
        });
    }

    getmporderformDataByTenancy(req,callback){
        console.log('<----------API Database Mp_Order form By tenancy Called ---------->')
        fs.readdir(uploaddir, (err, files) => {
            if (err) throw err;
        
            for (const file of files) {
              fs.unlink(path.join(uploaddir, file), err => {
                if (err) throw err;
              });
            }
          });
        
        //let connection = mysql.createConnection(config);
        var connection = new Connection();
        const tenancy = req.query.id;
        let tenancies;
        connection.databaseConnection(null, function(err, data) {
            if (err) {
                logger.error(JSON.stringify(err));
                callback(boom.badImplementation(err));
                return;
            } else {
                    let sql = `CALL get_mp_orderform('${tenancy}')`;
                    console.log("<---------- Tenancy Details : ", tenancy, " and sql statement is : ", sql, " ---------->");
                    data.query(sql, true, (error, results, fields) => {
                        if (error) {
                            return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
                        }
                        else {
                            tenancies = results[0];
                            console.log('<---------- Success : Successfully fetched output   ---------->\n', tenancies);
                        
                            //res.json(tenancies);
                            callback(null, tenancies);
                        
                        }
                    });
                }           
         });         
    }

}
module.exports = TenancyService;