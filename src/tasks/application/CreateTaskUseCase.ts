import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export class CreateTaskUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(task: Task) {
        return await this.taskRepository.create(task);
    }
}