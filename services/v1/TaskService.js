const {tasks} = require('../../models');

class TaskService  {
    async getAllTasks(req,res,next){
        try{
            let result = await tasks.findAll();
            return res.status(200).json({
                status: true,
                message: 'All Task list',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async createTask(req, res, next){
        try {
            let body = req.body;                    
            const newBlock = await tasks.create(body);
            return res.status(200).json({status: true, message: 'successfully created'});      
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findTaskById(req, res, next){
        try {
            let {taskId} = req.params;                  
            const isExist = await tasks.findOne({where: {
                id: taskId
             }
            });
            if(isExist){
                return res.status(200).json({status: true, message: 'success result', field : isExist});      
            } else {
                return res.status(301).json({status: true, message: 'Block not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findTaskByIdAndUpdate(req, res, next){
        try {
            let {taskId} = req.params;   
            let { name, field_id, task_type_id, user_id, block_id, task_status, status } = req.body;               
            const isExist = await tasks.findOne({ where: { id: taskId } })
            if(isExist){
                const updated = await isExist.update({ 
                    name, 
                    field_id, 
                    task_type_id, 
                    user_id, 
                    block_id, 
                    task_status, 
                    status
                });
                return res.status(200).json({
                    status: true, 
                    message: 'successfully Updated result', 
                    updatedField : updated
                });      
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Task not found.'
                });         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async deleteTaskById(req, res, next) {
        try {
            let {taskId} = req.params;   
        
            let n = await tasks.destroy({ where: { id: taskId } });
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Block not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
}

module.exports = new TaskService();