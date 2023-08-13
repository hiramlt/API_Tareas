import { Request, Response } from "express";
import { GetByDateUseCase } from "../../application/GetByDateUseCase";

export class GetByDateController {
    constructor(readonly getByDateUseCase: GetByDateUseCase) {}
  
    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const task = await this.getByDateUseCase.run(data.date);
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