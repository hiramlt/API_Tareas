"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const Task_1 = require("../../domain/Task");
const Comment_1 = require("../../domain/Comment");
const typeorm_1 = require("typeorm");
class CreateTaskController {
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const data = req.body;
            let tags = [];
            let comments = [];
            let file_paths = [];
            try {
                if (files.length > 0) { // Guardado de ruta de archivos
                    files.map((file) => {
                        file_paths.push(`/uploads/${file.filename}`);
                    });
                }
                if (data.tags != null) { // Validación de multiples/único tag
                    if (typeof data.tags === "string") {
                        tags.push(data.tags);
                    }
                    else {
                        tags = data.tags;
                    }
                }
                if (data.comments != null) { // Validación de multiples/único commentario
                    if (typeof data.comments === "string") {
                        comments.push(new Comment_1.Comment(data.comments, data.created_by));
                    }
                    else {
                        comments = data.comments.map(new Comment_1.Comment(data.comments, data.created_by));
                    }
                }
                const task = new Task_1.Task();
                task.id = data.id;
                task.title = data.title;
                task.description = data.description;
                task.status = data.status;
                task.deadline = data.deadline;
                task.created_by = data.created_by;
                task.responsible = data.responsible;
                task.tags = tags;
                task.comments = comments;
                task.files = file_paths;
                task.is_public = String(data.is_public).toLowerCase() === 'true';
                const createdTask = yield this.createTaskUseCase.run(task);
                res.status(201).send(createdTask);
            }
            catch (error) {
                if (error instanceof typeorm_1.QueryFailedError) {
                    res.status(400).send(error.message);
                }
                else {
                    res.status(500).send(error);
                }
            }
        });
    }
}
exports.CreateTaskController = CreateTaskController;
