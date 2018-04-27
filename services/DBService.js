const mysql = require('mysql');

var connection;

const dbConfig = {
	// for mac
	host: '192.168.64.2', // you need to provide your xampp ip (see the image)
	
	// for windows
	// host: 'localhost',

	user: 'admin', // your username
	password: 'admin', // user password
	database: 'my_db'  // optional
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