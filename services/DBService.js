const mysql = require('mysql');

var connection;

const dbConfig = {
	host: '192.168.62.2',
	// host: 'localhost',
	user: 'admin',
	password: 'admin'
	// database: 'test'
}

const connectDB = () => {
	console.log("connecting...")

	function printStatus(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
		
		console.log('connected as id ' + connection.threadId);
	}

	// var pool  = mysql.createPool(dbConfig);   
	// pool.getConnection(printStatus);

	connection = mysql.createConnection(dbConfig);
	// console.log(connection)

	connection.connect(printStatus);

	// console.log(connection)
}

module.exports = {
	connectDB
};