const {TaskTypeService} = require('../../services')

class TaskTypeController {
    async allTaskTypes(req,res,next) {
		try{
			await TaskTypeService.getAllTaskType(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async createTaskTypes(req,res,next) {
		try{
			await TaskTypeService.createNewTaskType(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTaskTypes(req,res,next) {
		try{
			await TaskTypeService.findTaskTypeById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTaskTypesAndUpdate(req,res,next) {
		try{
			await TaskTypeService.findTaskTypeByIdAndUpdate(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}

    async findTaskTypesAndRemove(req,res,next) {
		try{
			await TaskTypeService.deleteTaskTypeById(req, res, next);
		}catch(error){
			return res.status(500).json({status: false, message: 'Error------------>'});
		}
	}
}

module.exports = new TaskTypeController();