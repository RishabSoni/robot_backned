const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    SERVER: process.env.SERVER,
    API_VERSION: process.env.API_VERSION,
	JWT_SECRET: process.env.JWT_SECRET,
	JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
	JWT_TOKEN_LIFE: process.env.JWT_TOKEN_LIFE,
	JWT_REFRESH_TOKEN_LIFE: process.env.JWT_REFRESH_TOKEN_LIFE,
	WD_SECRET: process.env.PWD_SECRET,
	API_KEY: process.env.API_KEY,
	RANDOM_TOKEN:process.env.RANDOM_TOKEN
}