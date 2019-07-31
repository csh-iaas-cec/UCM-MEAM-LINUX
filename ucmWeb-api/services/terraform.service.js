'use strict';
//const shell = require('node-powershell');
var fs = require("fs")

global.__basedir = __dirname;
// let ps = new shell({

//     usePwsh: true
// });
var ps = require('shelljs');
var randomstring = require("randomstring");


class TerraformService{


    inItScript(req,callback){
        console.log("requet body of instance name",req.instance)
        if (req.instance == "Linux") {
            ps.cd('/home/opc/ucm_mime/ucmTerraform/oci_bootstrap_with_omc/stage_and_monitor_instance/')
    
        }else if (req.instance == "ubuntu") {
            console.log("changing directory");
            ps.addCommand('cd ./workdir/')
            ps.addCommand('dir')
    
        }else if (req.instance == "windows") {
            console.log("changing directory");
            ps.addCommand('cd ./windows')
            ps.addCommand('dir')
    
        }else if (req.instance == "JDE") {
            ps.addCommand('cd ./jde/jde_automation')
    
        }else if (req.instance == "oke") {
            ps.addCommand('cd ./oke_oci')
    
        }
        
        if(ps.exec("terraform init"))
             {
            console.log("<---------- Success: Terraform Initialization Successfull ---------->")
           if( ps.exec("terraform plan") ){
                console.log("<---------- Terraform Plan Successful ---------->")
                    callback(null, "success");
                   
                   
            }
            else{
                console.log("error");
            }
               
        }
        else{
            console.log("error");
        }
           
           
    
    }

    applyScript(req,callback){
        var hostname_label = randomstring.generate({
            length: 15,
            charset: 'alphanumeric'
          });
        console.log("hostname_label", hostname_label)
       if( ps.exec(`terraform apply -auto-approve -state ${hostname_label}`)){
        console.log("<---------- Success: Terraform Apply Successfull ---------->")
        ps.cd(`${__dirname}`)
        callback(null,"success");
       }
       else{
           console.log("error while applying terraform")
           ps.cd(`${__dirname}`)
           callback(null,"failure");
       }
        // var initializePromise = initialize();
        // initializePromise.then(function (result) {

        //     console.log("<----------Success : Terraform Apply Successful ---------->", result);
        //     ps.cd(`${__dirname}`)
        //     ps.invoke().then(output => {
        //         res.json({
        //             msg: "success"
        //         })
        //     })


        // }, function (err) {
        //     console.log('<---------- Error: Changing to root directory ---------->', err);
        //     ps.cd(`${__dirname}`)
        //     ps.invoke().then(output => {
        //         res.json({
        //             msg: "failure"
        //         })
        //     })

        // })
        
    }

    // initialize(){
    //     // Return new promise 
    //     return new Promise(function (resolve, reject) {
    //         // Do async job
    //         console.log("hostname_label", hostname_label)
    //         ps.exec(`terraform apply -auto-approve -state ${hostname_label}`)

    //         ps.invoke().then(output => {
    //             console.log("<---------- Success: Terraform Apply Successfull ---------->", output)
    //             ps.invoke().then(output => {
    //                 console.log("<---------- Success: Terraform Apply Successfull ---------->", output)
    //                 resolve("success")
    //             })
    //                 .catch(err => {
    //                     console.log('<---------- Error:  Error Occured while running Terraform Apply command and error is ---------->', err);
    //                     reject("failure")
    //                 });
    //         })
    //             .catch(err => {
    //                 console.log('<---------- Error: Error Occured while running Terraform Apply command and error is ---------->', err);
    //                 reject("failure")
    //             });



    //     })

    // }
}
module.exports = TerraformService;