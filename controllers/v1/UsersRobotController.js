const {UserRobotsService} = require('../../services');

class UsersRobotController {

    async allUsersRobots(req,res,next) {
		try{
			await UserRobotsService.getAllUserRobot(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createUsersRobot(req,res,next) {
		try{
			await UserRobotsService.createUserRobot(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findUsersRobot(req,res,next) {
		try{
			await UserRobotsService.findUserRobotById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findUsersRobotAndUpdate(req,res,next) {
		try{
			await UserRobotsService.findUserRobotByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findUsersRobotAndRemove(req,res,next) {
		try{
			await UserRobotsService.deleteUserRobotById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

}

module.exports = new UsersRobotController();