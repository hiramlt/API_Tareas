import { Request, Response } from "express";
import { AddCommentUseCase } from "../../application/AddCommentUseCase";
import { Comment } from "../../domain/Comment";

export class AddCommentController {
    constructor(readonly addCommentUseCase: AddCommentUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        const data = req.body;
        try {
            const task = await this.addCommentUseCase.run(Number(id), new Comment(data.comment, data.created_by) );
            if (task != null){
                res.status(200).send(task)
            } else {
                res.status(404).send("Task not available");
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}