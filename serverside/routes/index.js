const express = require('express');
const router = express.Router();
const TaskRouter = require('../controllers/TasksController')

router.post('/tasks', TaskRouter.createTask)
router.get('/tasks', TaskRouter.getTasks)
router.put('/tasks/:taskId', TaskRouter.editTask)
router.delete('/tasks/:taskId', TaskRouter.deleteTask)

module.exports = router;
