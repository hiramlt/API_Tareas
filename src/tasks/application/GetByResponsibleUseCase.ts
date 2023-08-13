import { TaskRepository } from "../domain/TaskRepository";

export class GetByResponsibleUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(responsible: number) {
        return await this.taskRepository.filterByResponsible(responsible);
    }
}