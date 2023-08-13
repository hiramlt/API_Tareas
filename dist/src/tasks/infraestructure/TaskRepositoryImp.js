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
exports.TaskRepositoryImp = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = require("../domain/Task");
const db_1 = require("../../db");
class TaskRepositoryImp {
    constructor() { this.repository = db_1.AppDataSource.getRepository(Task_1.Task); }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(task);
        });
    }
    update(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const found_task = yield this.repository.findOneBy({ id: task.id });
            if (found_task && Boolean(found_task.is_public) === true) {
                yield this.repository.update(task.id, {
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    deadline: task.deadline,
                    responsible: task.responsible,
                    tags: task.tags,
                    is_public: task.is_public
                });
                return this.repository.findOneBy({ id: task.id });
            }
            return null;
        });
    }
    delete(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.repository.findOneBy({ id: taskId });
            if (task && Boolean(task.is_public) === true) {
                const deleted = yield this.repository.delete({ id: taskId });
                return deleted.affected > 0;
            }
            return null;
        });
    }
    findById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.repository.findOneBy({ id: taskId });
            if (task && Boolean(task.is_public) === true) {
                return task;
            }
            return null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                where: {
                    is_public: true
                }
            });
        });
    }
    addComment(taskId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.repository.findOneBy({ id: taskId });
            if (task && Boolean(task.is_public) === true) {
                task.comments.push(comment);
                yield this.repository.update(task.id, {
                    comments: task.comments
                });
                return this.repository.findOneBy({ id: task.id });
            }
            return null;
        });
    }
    filterByResponsible(responsible) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                where: {
                    is_public: true,
                    responsible: responsible,
                }
            });
        });
    }
    filterByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(status);
            return yield this.repository.find({
                where: {
                    is_public: true,
                    status: (0, typeorm_1.Like)(`%${status}%`),
                }
            });
        });
    }
    filterByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                where: {
                    is_public: true,
                    deadline: date,
                }
            });
        });
    }
}
exports.TaskRepositoryImp = TaskRepositoryImp;
