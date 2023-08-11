import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../../application/UpdateTaskUseCase";
import { Task } from "../../domain/Task";

export class UpdateTaskController {
    constructor(readonly updateTaskUseCase: UpdateTaskUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        const data = req.body;
        let tags = [];
        try {
            if (data.tags != null) {
                if (typeof data.tags === "string") {
                  tags.push(data.tags);
                } else {
                  tags = data.tags;
                }
            }

            const task = new Task();
            task.id = Number(id);
            task.title = data.title;
            task.description = data.description;
            task.status = data.status;
            task.deadline = data.deadline;
            task.responsible = data.responsible;
            task.tags = tags;

            const updatedTask = await this.updateTaskUseCase.run(task);
            res.status(200).send(updatedTask)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}