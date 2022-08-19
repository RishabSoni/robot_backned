const { task_type } = require('../../models');

class task_typeService {
    async getAllTaskType(req,res,next){
        try{
            let result = await task_type.findAll();
            return res.status(200).json({
                status: true,
                message: 'All type task list.',
                data: result
            });
        }catch(error){
            return res. status(500).json({
                status: false, 
                error, 
                message: 'error---------???'
            });   
        }
    }

    async createNewTaskType(req,res,next){
        try{
            let body = req.body;
            let result = await task_type.create(body);
            return res.status(200).json({
                status: true,
                message: 'New task type created successfully.',
                data: result,
            });
        }catch(error){
            return res. status(500).json({
                status: false, 
                error, 
                message: 'error---------?'
            });   
        }
    }

    async findTaskTypeById(req,res,next){
        try{
            let {tasktypeId} = req.params;
            const isExist = await task_type.findOne({where: {
                id: tasktypeId
             }
            });
          if(isExist){
            return res.status(200).json({
                status: true,
                message: 'successfully result.',
                data: isExist,
            });
          } else {
            return res.status(301).json({
                status: true,
                message: 'Task type no found.'
            });
          }
        }catch(error){
            return res. status(500).json({
                status: false, 
                error, 
                message: 'error---------?'
            });   
        }
    }

    async findTaskTypeByIdAndUpdate(req, res, next){
        try {
            let {tasktypeId} = req.params;   
            let { name, robot_type_id } = req.body;               

            const isExist = await task_type.findOne({where : {id : tasktypeId}})
            
            if(isExist){
                const updated = await isExist.update({ name, robot_type_id });
                    return res.status(200).json({
                        status: true, 
                        message: 'successfully Updated result', 
                        updatedRobot : updated
                    });       
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Task type no found.'
                });         
            }
        } catch (error) {
            return res.status(500).json({
                status: false,
                error, 
                message: 'error---------?'
            });      
        }
    }

    async deleteTaskTypeById(req, res, next) {
        try {
            let {tasktypeId} = req.params;
            let n = await task_type.destroy({ where: { id: tasktypeId } });
            if(n){
                return res.status(200).json({
                    status: true, 
                    message: 'Deletd successfully.'
                });      
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Task type no found.'
                });         
            }
        } catch (error) {
            return res.status(500).json({
                status: false,
                error, 
                message: 'error---------?'
            });      
        }
    }
}

module.exports = new task_typeService();