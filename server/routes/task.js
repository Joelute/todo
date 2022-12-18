const express = require('express')
const router = express.Router();

const { getTask, getAllTasks, createTask, updateTask, deleteTask} = require('../controller/task')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router