import { TaskRepository } from "../domain/TaskRepository";

export class DeleteTaskUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(taskId: number) {
        return await this.taskRepository.delete(taskId);
    }
}