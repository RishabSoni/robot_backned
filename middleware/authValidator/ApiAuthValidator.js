const jwt = require('jsonwebtoken');
const commonConfig = require('../../config/common.config');

class ApiAuthValidator {
	/** ***** Api auth validator: Method to validate api key ******/
	validateApiKey(req, res, next) {
		if (!req.headers['x-api-key']) {
            return res
                .status(403)
                .send({status: false, message: 'No api key found in request'});
        } else {
            let key = commonConfig.API_KEY;
            if (req.headers['x-api-key'] == key) {
                next();
            } else {
                return res
                    .status(401)
                    .send({status: false, message: 'Invalid api key or platform'});
            }
            
        }
	}
	/** ***** Api auth validator: Method to validate access token ******/
	validateAccessToken(req, res, next) {
		const token = req.headers.authorization.split(' ')[1];
		if (token) {
			jwt.verify(token, commonConfig.JWT_SECRET, function(err, decoded) {
				if (err) {
					return res
						.status(401)
						.json({status: false, message: 'Access Token Expired'});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			return res
				.status(403)
				.send({status: false, message: 'Access Token Required'});
		}
	}

	/** ***** Api auth validator: Method to validate refresh token ******/
	validateRefreshToken(req, res, next) {
		const token = req.headers.authorization.split(' ')[1];
		if (token) {
			jwt.verify(
				token,
				commonConfig.JWT_REFRESH_TOKEN_SECRET,
				function(err, decoded) {
					if (err) {
						return res
							.status(401)
							.json({status: false, message: 'Refresh Token Expired'});
					}
					req.decoded = decoded;
					next();
				},
			);
		} else {
			return res
				.status(403)
				.send({status: false, message: 'Refresh Token Required'});
		}
	}
}
module.exports = new ApiAuthValidator();
