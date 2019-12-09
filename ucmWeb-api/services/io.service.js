'use strict';
//const shell = require('node-powershell');
var fs = require("fs");
var shell = require("shelljs");
const { exec } = require('child_process');

global.__basedir = __dirname;
// let ps = new shell({

//     usePwsh: true
// });

class IOService{
    initializeScripts(req ,callback){
        console.log('<----------API Terraform Scripts Initialization Called ---------->')

    var scripts = req;
    //console.log('<----------Instance Details : ---------->', req)
    console.log('<----------Instance Details : ---------->', req.body)
    var region = req.body.region
    var ADomain = req.body.AD
    var shape_name = req.body.shape
    var instance = req.body.instance
    var nodepoolnameprefix = 'np';
    var clustername = 'testoke';
    var nodepoolimagename = 'Oracle-Linux-7.5';
    var nodepoolnodeshape = 'VM.Standard2.1';
    var nodepoolquantitypersubnet = 1;
    var nodepools = 1;
    var tenancyid = req.body.TenancyId;
    var compartment_id = req.body.cmptId;
    var subnet_id = req.body.subnetId;
    var vcn_id = req.body.vcnId;
    var owner_chargeback = req.body.owner_chargeback;
    var owner_team = req.body.owner_team;
    var owner_type = req.body.owner_type;
    var owner_uptime = req.body.owner_uptime;
    // console.log("hostname_label", hostname_label)
    // console.log("subnetid", subnet_id);
    // console.log("ad domain", ADomain);
    // var cmdAD = `AD=${ADomain}`
    // var cmdShape = `shape_name=${shape}`
    // var cmdRegion = `region=${region}`
    console.log("<---------- Applying changes to the file ---------->")

    if (instance == "Linux") {
        console.log("====inside linux if loop=====")
        
        fs.readFileSync("/home/opc/ucm_mime/ucmTerraform/oci_bootstrap_with_omc/stage_and_monitor_instance/terraform.tfvars");
        //shell.ls("*.tfvars");
        // shell.cat("terraform.tfvars");
        // var result = "file content changed";
        // shell.echo(result > "terraform.tfvars");
       // callback(null,"success");
        // shell.cd("/home/opc/ucm_mime/ucmTerraform/oci_bootstrap_with_omc/stage_and_monitor_instance/", "utf8", function (err, data) {
        //     console.log("reading file");
            if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaa5arrzhx6wibc7iotaztfkt5bofbrfkw4x56kaplt36tat63lexgq"){
            var result = `tenancy_ocid="${tenancyid}"
            user_ocid="ocid1.user.oc1..aaaaaaaafxc27yfqbfzsde57pxros5kzh55e5c522gwxbbmtlfw2pxqtivkq"
            fingerprint="44:12:e9:ff:71:80:50:c9:d3:4c:52:14:a6:ee:8e:54"
            private_key_path="./userdata/orasenatdhubsblue02.pem"
            region="${region}"
            compartment_ocid="${compartment_id}"
            ssh_public_key="./userdata/omc_ssh.pub"
           
            oci_identity_tag_value1="${owner_chargeback}"
            oci_identity_tag_value2="${owner_team}"
            oci_identity_tag_value3="${owner_type}"
            oci_identity_tag_value4="${owner_uptime}"
            ad="${ADomain}"
            subnet_ocid="${subnet_id}"
            shape_name="${shape_name}"`
            }
            //hostname_label = "${hostname_label}"
            else if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaajehugl3ryss2gaxf3os7g5w4xdztfhy4coqnoizm2wpmrclnv5da"){
                console.log("====inside red tennacy====");
                var result = `tenancy_ocid="${tenancyid}"
                user_ocid="ocid1.user.oc1..aaaaaaaaaokf6knekj3ielf62iuxddwseskq5i3fi64ptob2abu3d2xcvxra"
                fingerprint="55:2a:51:99:9f:fb:d5:0d:34:2b:67:5b:cc:60:95:8e"
                private_key_path="./userdata/red_key.pem"
                region="${region}"
                compartment_ocid="${compartment_id}"
                ssh_public_key="./userdata/omc_ssh.pub"
               
                oci_identity_tag_value1="${owner_chargeback}"
                oci_identity_tag_value2="${owner_team}"
                oci_identity_tag_value3="${owner_type}"
                oci_identity_tag_value4="${owner_uptime}"
                ad="${ADomain}"
                subnet_ocid="${subnet_id}"
                shape_name="${shape_name}"`
                console.log("===result===",result);
            }
        // exec(`sh /home/opc/ucm_mime/test.sh '${result}'`,(error, stdout, stderr) => {
        //     if (error) {
        //       console.error(`exec error: ${error}`);
        //       return;
        //     }
        //     else
        //     console.log("done editing");
        //    return;
            
        //   });
        fs.writeFile('/home/opc/ucm_mime/ucmTerraform/oci_bootstrap_with_omc/stage_and_monitor_instance/terraform.tfvars', result, 'utf8', function (err) {
           console.log("inside write function");
           
           if (err) {
               return;
            }
            else{
               callback(null,"success");
              
            }
        });
        // callback(result,"success");
         
            //hostname_label = "${hostname_label}"
            // else{
            //     console.log("no tenancy matched");
            // }
        //     deployment_id=randomstring.generate({
        //         length: 15,
        //         charset: 'alphanumeric'
        //       })
        //     let connection = mysql.createConnection(config);
        //        console.log("deployment id",deployment_id) 
        //     let sql = `CALL add_deployment('${deployment_id}','initialized')`;
        //    // console.log("<---------- Tenancy Details : ", tenancy, " and sql statement is : ", sql, " ---------->");
        //    console.log("calling procedure")
        //     connection.query(sql, true, (error, results, fields) => {
        //         if (error) {
        //             return console.error('<---------- Error : Error occured while connecting to database and error essage is ---------->\n', error.message);
        //         }
        //         else {
                   
        //             console.log('<---------- Success : Successfully added  is:  ---------->\n', deployment_id);
        
        //         }
        //     });
    //         var result = `### Authentication details
    // tenancy_ocid="ocid1.tenancy.oc1..aaaaaaaaqaghoakhcdlsdsej676gkzli4gbeeqw3ge46kgnm224lagmfj4xq"
    // user_ocid="ocid1.user.oc1..aaaaaaaakxbsfvniijteqcqpofw2lydl7asejfjsup54pyzmx7gxt7mwn2ha"
    // fingerprint="ea:c3:7e:43:85:25:a5:fa:91:4f:00:a5:fd:8b:2e:6c"
    // private_key_path="./userdata/oci_api_key.pem"
    
    // ### Instance details
    // region="${region}"
    // ad="${ADomain}"
    // compartment_name="Jeff-comp"
    // server_display_name="Test0918"
    // shape_name="${shape_name}"
    // subnet_id="ocid1.subnet.oc1.iad.aaaaaaaabxrxngnwdn2pvvhgkuypd73xrekn3r3wfb2ob5neatvbudvoddea"
    
    // ### Public/private keys used on the instance
    // ssh_public_key="./userdata/omc_ssh.pub"
    // ssh_private_key="./userdata/omc_ssh"
    
    // ### OMC Service details
    // omc_tennant_name="8c6c35d577d2447b9983977ff316c58d"
    // omc_registration_key="R6xpX8jJPhxs3P6YBMSGKouTeP"
    // omc_agent_repo_url="https://storage.us2.oraclecloud.com/v1/Storage-a511425/omcprodglobal/cloudagent/linux.x64/latest/cloudagent_linux.x64.zip"
    // omc_url="https://omctraining8-natdsecurity.uscom-east-1.oraclecloud.com/"`
    // console.log("===result===",result);
    // shell.echo('$result > terraform.tfvars', 'utf8', function (err) {
    //            console.log("writing the file with data")
    //             if (err) {
    //                callback(null,'fail');
    //             }
    //             else{
    //                 callback(null,'success');
    //             }
                
            //  fetch('http://localhost:3200/api/RunScriptsInit', { method: 'POST', headers:{
            // 'Content-Type': 'application/json'
            // },
            //     body: JSON.stringify({
            //         "instance" : "Linux"
            //     })    
            // })
    // .then(res => res.json()) // expecting a json response
    // .then(json => console.log("running run scripts init"));
    
                    //
                   
                    //

        //     });
        // });
    }


    else if (instance == "ubuntu") {
        console.log("Inside Ubuntu function");
        fs.readFile("./workdir/terraform.tfvars", "utf8", function (err, data) {

            if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaa5arrzhx6wibc7iotaztfkt5bofbrfkw4x56kaplt36tat63lexgq"){
                var result = `tenancy_ocid="${tenancyid}"
                user_ocid="ocid1.user.oc1..aaaaaaaafxc27yfqbfzsde57pxros5kzh55e5c522gwxbbmtlfw2pxqtivkq"
                fingerprint="44:12:e9:ff:71:80:50:c9:d3:4c:52:14:a6:ee:8e:54"
                private_key_path="./userdata/orasenatdhubsblue02.pem"
                region="${region}"
                compartment_ocid="${compartment_id}"
                ssh_public_key="./userdata/omc_ssh.pub"
               
                oci_identity_tag_value1="${owner_chargeback}"
                oci_identity_tag_value2="${owner_team}"
                oci_identity_tag_value3="${owner_type}"
                oci_identity_tag_value4="${owner_uptime}"
                ad="${ADomain}"
                subnet_ocid="${subnet_id}"
                shape_name="${shape_name}"
                hostname_label = "${hostname_label}"`
                }
                else if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaajehugl3ryss2gaxf3os7g5w4xdztfhy4coqnoizm2wpmrclnv5da"){
                    var result = `tenancy_ocid="${tenancyid}"
                    user_ocid="ocid1.user.oc1..aaaaaaaaaokf6knekj3ielf62iuxddwseskq5i3fi64ptob2abu3d2xcvxra"
                    fingerprint="55:2a:51:99:9f:fb:d5:0d:34:2b:67:5b:cc:60:95:8e"
                    private_key_path="./userdata/red_key.pem"
                    region="${region}"
                    compartment_ocid="${compartment_id}"
                    ssh_public_key="./userdata/omc_ssh.pub"
                   
                    oci_identity_tag_value1="${owner_chargeback}"
                    oci_identity_tag_value2="${owner_team}"
                    oci_identity_tag_value3="${owner_type}"
                    oci_identity_tag_value4="${owner_uptime}"
                    ad="${ADomain}"
                    subnet_ocid="${subnet_id}"
                    shape_name="${shape_name}"
                    hostname_label = "${hostname_label}"`
                }
                else{
                    console.log("no tenancy matched");
                }

            fs.writeFile('./workdir/terraform.tfvars', result, 'utf8', function (err) {
                if (err) {
                    res.status(200)
                        .json({
                            msg: "failure"
                        })
                }
                res.status(200)
                    .json({
                        msg: "success"
                    })
            });
        });
    }
    else if (instance == "windows") {
        console.log("Inside windows function");
        fs.readFile("./windows/terraform.tfvars", "utf8", function (err, data) {

            if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaa5arrzhx6wibc7iotaztfkt5bofbrfkw4x56kaplt36tat63lexgq"){
                var result = `tenancy_ocid="${tenancyid}"
                user_ocid="ocid1.user.oc1..aaaaaaaafxc27yfqbfzsde57pxros5kzh55e5c522gwxbbmtlfw2pxqtivkq"
                fingerprint="44:12:e9:ff:71:80:50:c9:d3:4c:52:14:a6:ee:8e:54"
                private_key_path="./userdata/orasenatdhubsblue02.pem"
                region="${region}"
                compartment_ocid="${compartment_id}"
                
               
                oci_identity_tag_value1="${owner_chargeback}"
                oci_identity_tag_value2="${owner_team}"
                oci_identity_tag_value3="${owner_type}"
                oci_identity_tag_value4="${owner_uptime}"
                ad="${ADomain}"
                subnet_ocid="${subnet_id}"
                shape_name="${shape_name}"
                hostname_label = "${hostname_label}"`
                }
                else if(tenancyid == "ocid1.tenancy.oc1..aaaaaaaajehugl3ryss2gaxf3os7g5w4xdztfhy4coqnoizm2wpmrclnv5da"){
                    var result = `tenancy_ocid="${tenancyid}"
                    user_ocid="ocid1.user.oc1..aaaaaaaaaokf6knekj3ielf62iuxddwseskq5i3fi64ptob2abu3d2xcvxra"
                    fingerprint="55:2a:51:99:9f:fb:d5:0d:34:2b:67:5b:cc:60:95:8e"
                    private_key_path="./userdata/red_key.pem"
                    region="${region}"
                    compartment_ocid="${compartment_id}"
                    
                   
                    oci_identity_tag_value1="${owner_chargeback}"
                    oci_identity_tag_value2="${owner_team}"
                    oci_identity_tag_value3="${owner_type}"
                    oci_identity_tag_value4="${owner_uptime}"
                    ad="${ADomain}"
                    subnet_ocid="${subnet_id}"
                    shape_name="${shape_name}"
                    hostname_label = "${hostname_label}"`
                }
                else{
                    console.log("no tenancy matched");
                }

            fs.writeFile('./windows/terraform.tfvars', result, 'utf8', function (err) {
                if (err) {
                    res.status(200)
                        .json({
                            msg: "failure"
                        })
                }
                res.status(200)
                    .json({
                        msg: "success"
                    })
            });
        });
    }

    else if (instance == "JDE") {
        fs.readFile("./jde/jde_automation/vars.tf", "utf8", function (err, data) {

            var result = `variable "tenancy_ocid" {}
            variable "user_ocid" {}
            variable "fingerprint" {}
            variable "private_key_path" {}
            variable "image_ocid" {}
            variable "compartment_ocid" {}
            variable "ssh_public_key" {}
            variable "ssh_private_key" {}
            
            variable "dns_vcn" {
              default = "jdevcn"
            }
            
            variable "vcn_display" {
              default = "VCNforJDE"
            }
            
            variable "vpc-cidr" {
              default = "10.0.0.0/16"
            }
            
            variable "instance_prov_count" {
              default = "1"
            }
            
            variable "instance_ent_count" {
              default = "1"
            }
            
            variable "instance_html_count" {
              default = "1"
            }
            
            variable "instance_ais_count" {
              default = "1"
            }
            
            variable "instance_dp_count" {
              default = "1"
            }
            
            variable "region" {
              default = "${region}"
            }
            
            variable "subnet" {
              default = "jdesubnet"
            }
            
            #variable subnet_id {
            #  type = "map"
            #  default = {
            #    "ubhz:PHX-AD-1" = "ocid1.subnet.oc1.phx.aaaaaaaarmjzkoc34rbcbysfom54qlb3vaejspuvnyud6sofox53u2cio4mq"
            #    "ubhz:PHX-AD-2" = "ocid1.subnet.oc1.phx.aaaaaaaaqpod7rqnpsd56gkgcplsdvk6gkmfc6jxcqn65jasmxon345kxntq"
            #    "ubhz:PHX-AD-3" = "ocid1.subnet.oc1.phx.aaaaaaaaqfcfzbr6pp3plfav4y6jel2cvxlrptipj7ztjzsrtgzgozz7ijia"
            #  }
            #}
            
            # Choose an Availability Domain
            #variable "availability_domain" {
            #    default = "ubhz:PHX-AD-2"
            #}
            
            variable "InstanceShape_prov" {
              default = "${shape_name}"
            }
            
            variable "InstanceShape_ent" {
                default = "${shape_name}"
            }
            
            variable "InstanceShape_html" {
                default = "${shape_name}"
            }
            
            variable "InstanceShape_ais" {
                default = "${shape_name}"
            }
            
            variable "InstanceShape_dp" {
                default = "${shape_name}"
            }
            
            variable "2TB" {
              default = "2097152"
            }
            
            variable "50GB" {
              default = "50"
            }
            `

            fs.writeFile('./jde/jde_automation/vars.tf', result, 'utf8', function (err) {
                if (err) {
                    console.error('<----------Error: Error occured while initializing scripts ---------->', err)
                    res.status(200)
                        .json({
                            msg: "failure"
                        })
                }
                res.status(200)
                    .json({
                        msg: "success"
                    })
            });
        });
    }

    else if (instance == "oke") {
        region = 'us-phoenix-1'
        fs.readFile("./oke_oci/terraform.tfvars", "utf8", function (err, data) {

            var result = `# Identity and access parameters

tenancy_ocid = "ocid1.tenancy.oc1..aaaaaaaaqaghoakhcdlsdsej676gkzli4gbeeqw3ge46kgnm224lagmfj4xq"

user_ocid = "ocid1.user.oc1..aaaaaaaakxbsfvniijteqcqpofw2lydl7asejfjsup54pyzmx7gxt7mwn2ha"
            
compartment_ocid = "ocid1.compartment.oc1..aaaaaaaafi4svitnwdmpppeita6cr4fky6vyp26bvnwz6lqhpzdl3q7txwpa"

fingerprint = "ea:c3:7e:43:85:25:a5:fa:91:4f:00:a5:fd:8b:2e:6c"

region = "${region}"

#private_key_path = "./userdata/oci_api_key.pem"

#public_key = "./userdata/demo_ssh.openssh"

label_prefix = "oke"

# networking

vcn_dns_name = "ocioke"

vcn_cidr = "10.0.0.0/16"

vcn_name = "oke vcn"

# new mask for the subnet within the virtual network. use as newbits parameter for cidrsubnet function
newbits = 8

subnets = {
    "bastion_ad1"     = "11"
    "bastion_ad2"     = "21"
    "bastion_ad3"     = "31"
    "lb_ad1"      = "12"
    "lb_ad2"      = "22"
    "lb_ad3"      = "32"
    "workers_ad1" = "13"
    "workers_ad2" = "23"
    "workers_ad3" = "33"
}

# compute

imageocids = {
    "us-phoenix-1"   = "ocid1.image.oc1.phx.aaaaaaaagtiusgjvzurghktkgphjuuky2q6qjwvsstzbhyn4czroszbjimvq"
    "us-ashburn-1"   = "ocid1.image.oc1.iad.aaaaaaaagqwnrno6c35vplndep6hu5gevyiqqag37muue3ich7g6tbs5aq4q"
    "eu-frankfurt-1" = "ocid1.image.oc1.eu-frankfurt-1.aaaaaaaat7npzgm7lquxd3k53krh7ffiwc6jv3ug5geu2pnq64djaxvpnh6q"
    "uk-london-1"    = "ocid1.image.oc1.uk-london-1.aaaaaaaasvgkftekukdo6325eu3tgvu2q54tct2zgezlzu2q6d26bemvf5fq"
}

bastion_shape = "VM.Standard2.1"

#storage

# availability_domains

availability_domains = {
    "bastion_ad1"     = "false"
    "bastion_ad2"     = "false"
    "bastion_ad3"     = "false"
    "lb_ad1"      = "true"
    "lb_ad2"      = "true"
    "lb_ad3"      = "false"
    "workers_ad1" = "true"
    "workers_ad2" = "true"
    "workers_ad3" = "true"
}

# nat
create_nat_gateway = "true"

nat_gateway_name = "okenat"

# oke

worker_mode = "public"

kubernetes_version = "v1.11.5"

cluster_name = "${clustername}"

dashboard_enabled = "true"

tiller_enabled = "true"

pods_cidr = "10.244.0.0/16"

services_cidr = "10.96.0.0/16"

node_pool_name_prefix = "${nodepoolnameprefix}"

node_pool_node_image_name = "${nodepoolimagename}"

node_pool_node_shape = "${nodepoolnodeshape}"

node_pool_quantity_per_subnet = ${nodepoolquantitypersubnet}

# maximum of node_pools = 3
node_pools = ${nodepools}

nodepool_topology = "3"

# ocir

create_auth_token = "false"

tenancy_name = "cloud_pursuit_west"

username = "varsha.bhatnagar@oracle.com"

email_address = "varsha.bhatnagar@oracle.com"

# helm

install_helm = "true"

helm_version= "2.10.0"

# calico
# Use calico for controlling pod network policy

install_calico = "false"

calico_version = "3.2"`

            fs.writeFile('./oke_oci/terraform.tfvars', result, 'utf8', function (err) {
                if (err) {
                    res.status(200)
                        .json({
                            msg: "failure"
                        })
                }

                res.status(200)
                    .json({
                        msg: "success"
                    })
            });
        });
    }
   
   

    }
}
module.exports = IOService;