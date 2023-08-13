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
exports.UpdateTaskController = void 0;
const Task_1 = require("../../domain/Task");
class UpdateTaskController {
    constructor(updateTaskUseCase) {
        this.updateTaskUseCase = updateTaskUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = req.body;
            let tags = [];
            try {
                if (data.tags != null) {
                    if (typeof data.tags === "string") {
                        tags.push(data.tags);
                    }
                    else {
                        tags = data.tags;
                    }
                }
                const task = new Task_1.Task();
                task.id = Number(id);
                task.title = data.title;
                task.description = data.description;
                task.status = data.status;
                task.deadline = data.deadline;
                task.responsible = data.responsible;
                task.tags = tags;
                task.is_public = String(data.is_public).toLowerCase() === 'true';
                const updatedTask = yield this.updateTaskUseCase.run(task);
                if (updatedTask != null) {
                    res.status(200).send(updatedTask);
                }
                else {
                    res.status(404).send("Task not available");
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.UpdateTaskController = UpdateTaskController;
