import { TaskRepository } from "../domain/TaskRepository";

export class GetTaskUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(taskId: number) {
        return await this.taskRepository.findById(taskId);
    }
}