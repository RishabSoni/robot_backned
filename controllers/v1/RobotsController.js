const { RobotsService } = require('../../services')

class RobotsController {
    async allRobots(req,res,next) {
		try{
			await RobotsService.getAllRobots(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createRobot(req,res,next) {
		try{
			await RobotsService.createNewRobots(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobot(req,res,next) {
		try{
			await RobotsService.findRobotsById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobotAndUpdate(req,res,next) {
		try{
			await RobotsService.findRobotsByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobotAndRemove(req,res,next) {
		try{
			await RobotsService.deleteRobotsById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new RobotsController();