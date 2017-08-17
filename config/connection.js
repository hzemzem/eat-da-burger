var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
		port: 3306,
		host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'mna6fy990j6el2va',
		password: 'llt61mbmjkoex6zc',
		database: 'oeql25dpfmx6fbfe'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;