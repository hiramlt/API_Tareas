import { Request, Response } from "express";
import { GetTaskUseCase } from "../../application/GetTaskUseCase";

export class GetTaskController {
    constructor(readonly getTaskUseCase: GetTaskUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const task = await this.getTaskUseCase.run(Number(id));
            res.status(200).send(task)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}