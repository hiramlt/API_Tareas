import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../../application/DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(readonly deleteTaskUseCase: DeleteTaskUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const deleted = await this.deleteTaskUseCase.run(Number(id));
            if (deleted != null) {
                if (deleted){
                    res.status(200).send('Task deleted successfully')
                } else {
                    res.status(404).send("Task not found");
                }
            } else {
                res.status(400).send("Task not available");
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}