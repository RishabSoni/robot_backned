const {AuthService} = require('../../services/index');
const commonConfig = require('../../config/common.config');


class AuthController {
	/** Auth Controller : Method to get role list **/
	async role(req,res,next) {
		try{
			await AuthService.role(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error'});
		}
	}

	/** ***** Auth Controller: Method to register new user ******/
	async registerUser(req, res, next) {
		try {
			await AuthService.registerUser(req, res, next);
		} catch (error) {
			return res.status(500).json({status: false, message: 'Error'});
		}
	}

    /** Auth Controller: Method to login user **/
    async login(req,res,next){
        try {
			await AuthService.login(req, res, next);
		} catch (error) {
			return res.status(500).json({status: false, message: 'Error'});
		}
    }
	
	/**Auth Controller: Method to change passsword **/ 
	async changePassword(req, res, next){
		console.log("Ff");
		try {
			await AuthService.changePassword(req, res, next);
		} catch (error) {
			return res.status(500).json({status: false, message: 'Error'});
		}
	}

	async verifyToken(req, res, next){
		try {
			await AuthService.verifyToken(req, res, next);
		} catch (error) {
			return res.status(500).json({status: false, message: 'Error'});
		}
	}
}

module.exports = new AuthController();
