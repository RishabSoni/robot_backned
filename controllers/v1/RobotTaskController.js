const {RobotTasksService} = require('../../services');

class RobotTaskController {

    async allRobotTask(req,res,next) {
		try{
			await RobotTasksService.getAllRobotTasks(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createRobotTask(req,res,next) {
		try{
			await RobotTasksService.createRobotTasks(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobotTask(req,res,next) {
		try{
			await RobotTasksService.findRobotTasksById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobotTaskAndUpdate(req,res,next) {
		try{
			await RobotTasksService.findRobotTasksByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findRobotTaskAndRemove(req,res,next) {
		try{
			await RobotTasksService.deleteRobotTasksById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

}

module.exports = new RobotTaskController();