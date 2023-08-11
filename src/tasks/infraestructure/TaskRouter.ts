import express from "express";

import {
    createTaskController,
    deleteTaskController,
    updateTaskController,
    getTaskController,
    getTaskListController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post('/', createTaskController.run.bind(createTaskController));
taskRouter.delete('/:id', deleteTaskController.run.bind(deleteTaskController));
taskRouter.put('/:id', updateTaskController.run.bind(updateTaskController));
taskRouter.get('/:id', getTaskController.run.bind(getTaskController));
taskRouter.get('/', getTaskListController.run.bind(getTaskListController));

