import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/../../uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 5 * 1024 * 1024, // Limitar archivos a 5MB
    },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'image/png' ||  // Tipos de archivos permitidos
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'application/pdf' 
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('This file type is not allowed'));
      }
    },
});

import {
    createTaskController,
    deleteTaskController,
    updateTaskController,
    getTaskController,
    getTaskListController,
    addCommentController,
    getByStatusController,
    getByDateController,
    getByResponsibleController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post('/', upload.any(), createTaskController.run.bind(createTaskController));
taskRouter.delete('/:id', deleteTaskController.run.bind(deleteTaskController));
taskRouter.put('/:id', upload.any(), updateTaskController.run.bind(updateTaskController));
taskRouter.get('/:id', getTaskController.run.bind(getTaskController));
taskRouter.get('/', getTaskListController.run.bind(getTaskListController));
taskRouter.post('/comment/:id', addCommentController.run.bind(addCommentController));
taskRouter.get('/filter/status', getByStatusController.run.bind(getByStatusController));
taskRouter.get('/filter/date', getByDateController.run.bind(getByDateController));
taskRouter.get('/filter/responsible', getByResponsibleController.run.bind(getByResponsibleController));