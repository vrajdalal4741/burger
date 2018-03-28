const connection = require('../config/connection.js');

//selectAll selects everything from the db to put onto the handlebars
const orm = {
	selectAll: function(tableInput, cb) {
		const queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
}

module.exports = orm;