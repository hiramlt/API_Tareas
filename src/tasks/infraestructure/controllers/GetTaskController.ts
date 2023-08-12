import { Request, Response } from "express";
import { GetTaskUseCase } from "../../application/GetTaskUseCase";

export class GetTaskController {
    constructor(readonly getTaskUseCase: GetTaskUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const task = await this.getTaskUseCase.run(Number(id));
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