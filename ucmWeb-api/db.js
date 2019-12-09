var mysql = require('mysql');

class UCM_Database{
    databaseConnection(arg, callback) {
        var dbparams = {};
        dbparams = {
<<<<<<< HEAD
            host: '192.168.1.5',
            user: 'uiportal',
            password: '(Ys3mB5GZvu',
            database: 'cloudautomation',
            port: '3306',
=======
            host: '192.168.1.3',
            user: 'uiportal',
            password: '(Ys3mB5GZvu',
            database: 'cloudautomation',
            port: '6603',
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
            multipleStatements: true
        };
        return callback(null, mysql.createConnection(dbparams));
    }
}

<<<<<<< HEAD
module.exports = UCM_Database;
=======
module.exports = UCM_Database;
>>>>>>> 2d1feee49d5385f200c210f2b77b7ee49b81f63c
