import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../application/CreateTaskUseCase";
import { Task } from "../../domain/Task";
import { Comment } from "../../domain/Comment";
import { QueryFailedError } from "typeorm";

export class CreateTaskController {
  constructor(readonly createTaskUseCase: CreateTaskUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    let tags = [];
    let comments = []
    try {
      if (data.tags != null) {
        if (typeof data.tags === "string") {
          tags.push(data.tags);
        } else {
          tags = data.tags;
        }
      }

      if (data.comments != null) {
        if (typeof data.comments === "string") {
          comments.push(new Comment(
            data.comments,
            data.created_by,
          ));
        } else {
          comments = data.comments.map(
            new Comment(data.comments, data.created_by)
          )
        }
      }

      const task = new Task();
      task.id = data.id;
      task.title = data.title;
      task.description = data.description;
      task.status = data.status;
      task.deadline = data.deadline;
      task.created_by = data.created_by;
      task.responsible = data.responsible;
      task.tags = tags;
      task.comments = comments;
      task.is_public = String(data.is_public).toLowerCase() === 'true';

      const createdTask = await this.createTaskUseCase.run(task);
      res.status(201).send(createdTask)
    } catch (error) {
        if (error instanceof QueryFailedError){
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error)
        }
    }
  }
}
