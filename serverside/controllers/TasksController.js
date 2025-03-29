const { prisma } = require('../prisma/prisma-client');

const TasksController = {
    createTask: async (req, res) => {
        const { text, done } = req.body;

        if (!text && done === undefined) {
            return res.status(400).json({error: 'All fields must be filled'})
        }

        try {
            const task = await prisma.task.create({
                data: { text, done: done  === 'true' }
            })

            res.setHeader("cross-origin-resource-policy", "cross-origin")
            res.json(task)
        } catch (e) {
            console.error('createTask error ', e);
            res.status(500).json({error: 'Internal error'})
        }
    },
    getTasks: async (req, res) => {
        try {
            const tasks = await prisma.task.findMany()
            res.json(tasks)
        } catch (e) {
            console.error('getTasks error ', e);
            res.status(500).json({error: 'Internal error'})
        }
    },
    editTask: async (req, res) => {
        const { taskId } = req.params;
        const { text, done } = req.body;

        if (!text && done === undefined) {
            return res.status(400).json({error: 'One of fields must be filled'})
        }

        try {
            const task = await prisma.task.update({
                where: {id: taskId},
                data: { text,  done: String(done)  === 'true' }
            })

            res.json(task)
        } catch (e) {
            console.error('editTask error ', e);
            res.status(500).json({error: 'Internal error'})
        }
    },
    deleteTask: async (req, res) => {
        const { taskId } = req.params;

        try {
            if (prisma.task.findUnique({ id: taskId })) {
                await prisma.task.delete({
                    where: { id: taskId }
                })
                return res.status(200).json({Message: 'Task deleted'})
            }
            return res.status(404).json({Error: 'Not found'})
        }catch (e) {
            console.error('deleteTask error ', e);
            res.status(500).json({error: 'Internal error'})
        }


    },
}

module.exports = TasksController