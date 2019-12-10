var mysql = require('mysql');

class UCM_Database{
    databaseConnection(arg, callback) {
        var dbparams = {};
        dbparams = {
            host: '150.136.145.149',
            user: 'uiportal',
            password: '(Ys3mB5GZvu',
            database: 'cloudautomation',
            port: '1521',
            multipleStatements: true
        };
        return callback(null, mysql.createConnection(dbparams));
    }
}

module.exports = UCM_Database;
