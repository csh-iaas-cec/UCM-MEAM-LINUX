'use strict';
var fs = require("fs");
const pythonshel = require('python-shell')

class PythonService{

    getSecurityListsFromPython(req,res){

        console.log('<----------API Python Scripts execution for security List is Called ---------->')
        // pythonshel.PythonShell.run('securityscan/Vul_scan_json_tenancy_json_exp.py', null, function (err, results) {
        //     if (err) throw err;
        //     console.log('finished');
        //     console.log(results);
    
<<<<<<< HEAD
        if (req.query.tenancyname == 'orasenatdhubsred01') {
            
            fs.readFile("orasenatdhubsred01.json", "utf8", function (err, data) {
                if (err) {
                    console.log('<---------- Error: Error reading the json file ----------> ')
                    res(err)
                }
                console.log('<---------- Success: Successfully read security lists from the json file ---------->')
                res(null, JSON.parse(data))
=======
        if (req.query.tenancyname = 'orasenatdhubsred01') {
            fs.readFile("./securityscan/orasenatdhubsred01security.json", "utf8", function (err, data) {
                if (err) {
                    console.log('<---------- Error: Error reading the json file ----------> ')
                    res.json(err)
                }
                //   console.log(data);
                console.log('<---------- Success: Successfully read security lists from the json file ---------->')
                res.json(JSON.parse(data))
                console.log(data)
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
            })
        }
        else if (req.query.tenancyname = 'orasenatdhubsblue02') {
            fs.readFile("./securityscan/orasenatdhubsblue02security.json", "utf8", function (err, data) {
                if (err) {
                    console.log('<---------- Error: Error reading the json file ----------> ')
                    res.json(err)
                }
                //   console.log(data);
                console.log('<---------- Success: Successfully read security lists from the json file ---------->')
                res.json(JSON.parse(data))
                console.log(data)
    
            })
        }
        else {
            res.status(404).json({
                msg: 'failure'
            })
        }
    }

    runPythonForServiceAutomation(req,res){
        console.log('<----------API Python Scripts execution for Service Automation is Called ---------->')

        const jsonData = req.body;
        jsonData['private_key_path'] = "C:/Users/thrshett/.oci/oci_api_key.pem";
        jsonData["ssh_public_key"] = "C:/Users/thrshett/.ssh/id_rsa.pub";
        jsonData["ssh_private_key_file"] = "C:/Users/thrshett/.ssh/id_rsa"
        console.log("<---------- Terraform Package is ", jsonData, " ---------->")
    
        var currentdate = strftime('%m%d%H%M%S');
        console.log('<---------- Date of the package testing is ', currentdate)
        var options = {
            args: ['testing', 'json', currentdate]
        };
    
        fs.writeFile(`./csh_cloud_automation_v3/service/tf_generator/json${currentdate}.json`, JSON.stringify(jsonData), 'utf8', function (err) {
            if (err) {
                res.status(200)
                    .json({
                        msg: "failure"
                    })
            }
            console.log('<---------- Performing ', req.query.task, ' on the python scripts ---------->')
            if (req.query.task == 'apply') {
                pythonshel.PythonShell.run('csh_cloud_automation_v3/service/tf_generator/ApplyPackage.py', options, function (err, results) {
                    if (err) throw err;
                    console.log('<---------- Success: Terraform applied successfully and output is ---------->\n', results)
    
                    res.status(200)
                        .msg('success')
    
    
                });
            }
    
            else if (req.query.task == 'zipup') {
    
                pythonshel.PythonShell.run(`./csh_cloud_automation_v3/service/tf_generator/ZipUpPackage.py`, options, function (err, results) {
                    if (err) throw err;
                    console.log('<---------- Success: Package zipped up successfully and output is ---------->\n', results)
                    res.json({
                        foldername: `testing${currentdate}`
                    })
    
                });
            }
    
        });
    }
}
module.exports = PythonService;