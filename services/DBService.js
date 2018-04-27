const mysql = require('mysql');

var connection;

const dbConfig = {
	host: '192.168.64.2', // you need to provide your xampp ip (see the image)
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

	connection = mysql.createConnection(dbConfig);
	// console.log(connection)

	connection.connect(printStatus);

	// console.log(connection)
}

module.exports = {
	connectDB
};