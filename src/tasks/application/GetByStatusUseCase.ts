import { TaskRepository } from "../domain/TaskRepository";

export class GetByStatusUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(status: string) {
        return await this.taskRepository.filterByStatus(status);
    }
}