import { Request, Response } from "express";
import { GetTaskListUseCase } from "../../application/GetTaskListUseCase";

export class GetTaskListController {
    constructor(readonly getTaskListUseCase: GetTaskListUseCase) {}
  
    async run(req: Request, res: Response) {
        try {
            const tasks = await this.getTaskListUseCase.run();
            if (tasks != null){
                res.status(200).send(tasks)
            } else {
                res.status(404).send("No tasks available");
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}