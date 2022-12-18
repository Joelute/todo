const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const taskItem = await Task.find()
        res.status(200).json({taskItem})
    } catch (err) {
        res.status(500).json(err)
    }
    
}

const getTask = async (req, res) => {
    try {
        const taskItem = await Task.findById({ _id: req.params.id })

        if (!taskItem) {
            return res.status(404).json({error: `No task found with id: ${req.params.id}`})
        }
        res.status(200).json({taskItem})
    } catch (err) {
        res.status(500).json(err)
    }
    
}

const createTask = async (req, res) => {
    try {
        const taskItem = await Task.create(req.body)
        res.status(201).json({taskItem})
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateTask = async (req, res) => {
    try {
        const taskItem = await Task.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new:true,
                runValidators: true
            }
        )
        if (!taskItem) {
            res.status(404).json({error: `No task found with id: ${req.params.id}`})
        }
        res.status(202).send({taskItem})
    } catch (err) {
        res.status(500).json(err)
    }
    
}

const deleteTask = async (req, res) => {
    try {
        const taskItem = await Task.findByIdAndDelete({ _id: req.params.id })

        if (!taskItem) {
            return res.status(404).json({error: `No task found with id ${req.params.id}`})
        }
        res.status(204).json({taskItem})
    } catch(err) {
        res.status(500).json(err)
    }
    
}



module.exports = {
    getTask,
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}