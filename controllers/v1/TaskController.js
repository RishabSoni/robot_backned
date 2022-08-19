const {TaskService} = require('../../services');

class TaskController {
    async allTasks(req,res,next) {
		try{
			await TaskService.getAllTasks(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createTask(req,res,next) {
		try{
			await TaskService.createTask(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTask(req,res,next) {
		try{
			await TaskService.findTaskById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTaskAndUpdate(req,res,next) {
		try{
			await TaskService.findTaskByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTaskAndRemove(req,res,next) {
		try{
			await TaskService.deleteTaskById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new TaskController();