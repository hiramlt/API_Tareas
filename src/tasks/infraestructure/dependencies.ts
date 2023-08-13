import { CreateTaskUseCase } from "../application/CreateTaskUseCase";
import { DeleteTaskUseCase } from "../application/DeleteTaskUseCase";
import { UpdateTaskUseCase } from "../application/UpdateTaskUseCase";
import { GetTaskUseCase } from "../application/GetTaskUseCase";
import { GetTaskListUseCase } from "../application/GetTaskListUseCase";
import { AddCommentUseCase } from "../application/AddCommentUseCase";

import { CreateTaskController } from "./controllers/CreateTaskController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";
import { GetTaskController } from "./controllers/GetTaskController";
import { GetTaskListController } from "./controllers/GetTaskListController";
import { AddCommentController } from "./controllers/AddCommentController";

import { TaskRepositoryImp } from "./TaskRepositoryImp";

const taskRepositoryImp = new TaskRepositoryImp();

export const createTaskUseCase = new CreateTaskUseCase(taskRepositoryImp);
export const createTaskController = new CreateTaskController(createTaskUseCase);

export const deleteTaskUseCase  = new DeleteTaskUseCase(taskRepositoryImp);
export const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export const updateTaskUseCase = new UpdateTaskUseCase(taskRepositoryImp);
export const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export const getTaskUseCase = new GetTaskUseCase(taskRepositoryImp);
export const getTaskController = new GetTaskController(getTaskUseCase);

export const getTaskListUseCase = new GetTaskListUseCase(taskRepositoryImp);
export const getTaskListController = new GetTaskListController(getTaskListUseCase);

export const addCommentUseCase = new AddCommentUseCase(taskRepositoryImp);
export const addCommentController = new AddCommentController(addCommentUseCase);

