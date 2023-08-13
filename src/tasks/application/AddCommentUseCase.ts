import { Comment } from "../domain/Comment";
import { TaskRepository } from "../domain/TaskRepository";

export class AddCommentUseCase {
    constructor (readonly taskRepository: TaskRepository) {}

    async run(taskId: number, comment: Comment) {
        return await this.taskRepository.addComment(taskId, comment);
    }
}