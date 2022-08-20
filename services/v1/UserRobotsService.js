const {users_robot} = require('../../models');


class UserRobotsService {
    async getAllUserRobot(req,res,next){
        try{
            let result = await users_robot.findAll();
            return res.status(200).json({
                status: true,
                message: 'All User Robots',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async createUserRobot(req, res, next){
        try {
            let body = req.body;                    
            const newBlock = await users_robot.create(body);
            return res.status(200).json({status: true, message: 'successfully created'});      
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findUserRobotById(req, res, next){
        try {
            let {usersRobotId} = req.params;                  
            const isExist = await users_robot.findOne({where: {
                id: usersRobotId
             }
            });
            if(isExist){
                return res.status(200).json({status: true, message: 'success result', field : isExist});      
            } else {
                return res.status(301).json({status: true, message: 'Users robot not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findUserRobotByIdAndUpdate(req, res, next){
        try {
            let {usersRobotId} = req.params;   
            let { user_id, robot_type_id } = req.body;               
            const isExist = await users_robot.findOne({ where: { id: usersRobotId } })
            if(isExist){
                const updated = await isExist.update({ 
                    user_id, 
                    robot_type_id
                });
                return res.status(200).json({
                    status: true, 
                    message: 'successfully Updated result', 
                    updatedField : updated
                });      
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Users robot not found.'
                });         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async deleteUserRobotById(req, res, next) {
        try {
            let {usersRobotId} = req.params;   
            console.log(usersRobotId, "<==userRobotId");
        
            let n = await users_robot.destroy({ where: { id: usersRobotId } });
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'User robot not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
}

module.exports = new UserRobotsService();