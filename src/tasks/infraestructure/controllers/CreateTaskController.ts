import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../application/CreateTaskUseCase";
import { Task } from "../../domain/Task";

export class CreateTaskController {
  constructor(readonly createTaskUseCase: CreateTaskUseCase) {}

  async run(req: Request, res: Response) {
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
      task.id = data.id;
      task.title = data.title;
      task.description = data.description;
      task.status = data.status;
      task.deadline = data.deadline;
      task.responsible = data.responsible;
      task.tags = tags;

      const createdTask = await this.createTaskUseCase.run(task);
      res.status(201).send(createdTask)
    } catch (error) {
        res.status(500).send(error)
    }
  }
}
