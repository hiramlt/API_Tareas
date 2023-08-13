import { Request, Response } from "express";
import { GetByResponsibleUseCase } from "../../application/GetByResponsibleUseCase";

export class GetByResponsibleController {
    constructor(readonly getByResponsibleUseCase: GetByResponsibleUseCase) {}
  
    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const task = await this.getByResponsibleUseCase.run(data.responsible);
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