import { TaskRepository } from "../domain/TaskRepository";

export class GetTaskListUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run() {
        return await this.taskRepository.findAll();
    }
}