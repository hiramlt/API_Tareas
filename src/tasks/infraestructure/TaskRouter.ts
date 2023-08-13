import express from "express";

import {
    createTaskController,
    deleteTaskController,
    updateTaskController,
    getTaskController,
    getTaskListController,
    addCommentController,
    getByStatusController,
    getByDateController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post('/', createTaskController.run.bind(createTaskController));
taskRouter.delete('/:id', deleteTaskController.run.bind(deleteTaskController));
taskRouter.put('/:id', updateTaskController.run.bind(updateTaskController));
taskRouter.get('/:id', getTaskController.run.bind(getTaskController));
taskRouter.get('/', getTaskListController.run.bind(getTaskListController));
taskRouter.post('/comment/:id', addCommentController.run.bind(addCommentController));
taskRouter.get('/filter/status', getByStatusController.run.bind(getByStatusController));
taskRouter.get('/filter/date', getByDateController.run.bind(getByDateController));