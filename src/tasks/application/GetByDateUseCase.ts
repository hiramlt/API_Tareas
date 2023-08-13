import { TaskRepository } from "../domain/TaskRepository";

export class GetByDateUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(date: string) {
        return await this.taskRepository.filterByDate(date);
    }
}