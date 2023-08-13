import { Task } from "./Task";
import { Comment } from "./Comment";

export interface TaskRepository {
    create(task: Task): Promise<Task | null>
    update(task: Task): Promise<Task | null>
    delete(taskId: number): Promise<boolean | null>
    findById(taskId: number): Promise<Task | null>
    findAll(): Promise<Task[] | null>
    addComment(taskId: number, comment: Comment): Promise<Task | null>
}