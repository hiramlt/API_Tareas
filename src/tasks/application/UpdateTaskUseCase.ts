import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export class UpdateTaskUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(task: Task) {
        return await this.taskRepository.update(task);
    }
}