import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../../application/DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(readonly deleteTaskUseCase: DeleteTaskUseCase) {}
  
    async run(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await this.deleteTaskUseCase.run(Number(id));
            res.status(200).send('Task deleted successfully')
        } catch (error) {
            res.status(500).send(error)
        }
    }
}