import { Request, Response } from "express";
import { GetByStatusUseCase } from "../../application/GetByStatusUseCase";

export class GetByStatusController {
    constructor(readonly getByStatusUseCase: GetByStatusUseCase) {}
  
    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const task = await this.getByStatusUseCase.run(data.status);
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