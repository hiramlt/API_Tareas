import { Request, Response } from "express";
import { GetTaskListUseCase } from "../../application/GetTaskListUseCase";

export class GetTaskListController {
    constructor(readonly getTaskListUseCase: GetTaskListUseCase) {}
  
    async run(req: Request, res: Response) {
        try {
            const tasks = await this.getTaskListUseCase.run();
            res.status(200).send(tasks)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}