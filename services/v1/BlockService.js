'use restrict';
const { blocks } = require('../../models');

class BlockService {  
    async getAllBlock(req,res,next){
        try{
            let result = await blocks.findAll();
            return res.status(200).json({
                status: true,
                message: 'All Block list',
                data: result,
            });
        }catch(error){
            return res. status(500).json({status: false, error, message: 'error---------?'});   
        }
    }

    async createBlock(req, res, next){
        try {
            let body = req.body;                    
            const newBlock = await blocks.create(body);
            return res.status(200).json({status: true, message: 'successfully created'});      
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async findBlockById(req, res, next){
        try {
            let {blockId} = req.params;                  
            const isExist = await blocks.findOne({where: {
                id: blockId
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

    async findBlockByIdAndUpdate(req, res, next){
        try {
            let {blockId} = req.params;   
            let { name, area , coordinates, width, height, field_id } = req.body;               
            const isExist = await blocks.findOne({ where: { id: blockId } })
            if(isExist){
                const updated = await isExist.update({ 
                    name, 
                    area, 
                    coordinates, 
                    width, 
                    height, 
                    field_id 
                });
                return res.status(200).json({
                    status: true, 
                    message: 'successfully Updated result', 
                    updatedField : updated
                });      
            } else {
                return res.status(301).json({
                    status: true, 
                    message: 'Block not found.'
                });         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }

    async deleteBlockById(req, res, next) {
        try {
            let {blockId} = req.params;   
        
            let n = await blocks.destroy({ where: { id: blockId } });
            if(n){
                return res.status(200).json({status: true, message: 'Deletd successfully.'});      
            } else {
                return res.status(301).json({status: true, message: 'Block not found.'});         
            }
        } catch (error) {
            return res.status(500).json({status: false,error, message: 'error---------?'});      
        }
    }
 };

module.exports = new BlockService()