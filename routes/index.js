const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const authRoutes = require('./auth');
const fieldsRoutes = require('./fields');
const blocksRoutes = require('./blocks');
const roboTypesRoutes = require('./robotypes');
const robotsRouter = require('./robots');
const taskTypesRouter = require('./taskTypes');
const tasksRoutes = require('./tasks');
const usersRobotRouter = require('./usersRobot');
const robotTasksRouter = require('./robotTasks');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/fields', fieldsRoutes);
router.use('/blocks', blocksRoutes);
router.use('/robotypes', roboTypesRoutes);
router.use('/robots', robotsRouter);
router.use('/tasktype', taskTypesRouter);
router.use('/tasks', tasksRoutes);
router.use('/usersrobo', usersRobotRouter);
router.use('/robottasks', robotTasksRouter);


module.exports = router;
