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
exports.GetByResponsibleController = void 0;
class GetByResponsibleController {
    constructor(getByResponsibleUseCase) {
        this.getByResponsibleUseCase = getByResponsibleUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const task = yield this.getByResponsibleUseCase.run(data.responsible);
                if (task != null) {
                    res.status(200).send(task);
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
exports.GetByResponsibleController = GetByResponsibleController;
