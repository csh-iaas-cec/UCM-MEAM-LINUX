var mysql = require('mysql');

class UCM_Database{
    databaseConnection(arg, callback) {
        var dbparams = {};
        dbparams = {
            host: '192.168.1.5',
            user: 'uiportal',
            password: 'cde3CDE#',
            database: 'cloudautomation',
            port: '3306',
            multipleStatements: true
        };
        return callback(null, mysql.createConnection(dbparams));
    }
}

module.exports = UCM_Database;
