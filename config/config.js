const dbConfig = require('./db.config');

module.exports = {
	'development': {
		'username': dbConfig.DB_USER,
		'password': dbConfig.DB_PASSWORD,
		'database': dbConfig.DB_NAME,
		'host': dbConfig.DB_HOST,
		'dialect': dbConfig.DB_DIALECT,
		'port': dbConfig.DB_PORT,
	},
	'production': {
		'username': dbConfig.DB_USER,
		'password': dbConfig.DB_PASSWORD,
		'database': dbConfig.DB_NAME,
		'host': dbConfig.DB_HOST,
		'dialect': dbConfig.DB_DIALECT,
		'port': dbConfig.DB_PORT,
	},
};
