"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../../uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limitar archivos a 5MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || // Tipos de archivos permitidos
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'application/pdf') {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('This file type is not allowed'));
        }
    },
});
const dependencies_1 = require("./dependencies");
exports.taskRouter = express_1.default.Router();
exports.taskRouter.post('/', upload.any(), dependencies_1.createTaskController.run.bind(dependencies_1.createTaskController));
exports.taskRouter.delete('/:id', dependencies_1.deleteTaskController.run.bind(dependencies_1.deleteTaskController));
exports.taskRouter.put('/:id', upload.any(), dependencies_1.updateTaskController.run.bind(dependencies_1.updateTaskController));
exports.taskRouter.get('/:id', dependencies_1.getTaskController.run.bind(dependencies_1.getTaskController));
exports.taskRouter.get('/', dependencies_1.getTaskListController.run.bind(dependencies_1.getTaskListController));
exports.taskRouter.post('/comment/:id', dependencies_1.addCommentController.run.bind(dependencies_1.addCommentController));
exports.taskRouter.get('/filter/status', dependencies_1.getByStatusController.run.bind(dependencies_1.getByStatusController));
exports.taskRouter.get('/filter/date', dependencies_1.getByDateController.run.bind(dependencies_1.getByDateController));
exports.taskRouter.get('/filter/responsible', dependencies_1.getByResponsibleController.run.bind(dependencies_1.getByResponsibleController));
