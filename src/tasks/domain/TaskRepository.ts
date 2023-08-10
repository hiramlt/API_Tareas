import { Task } from "./Task";

export interface TaskRepository {
    create(task: Task): Promise<Task | null>
    update(task: Task): Promise<Task | null>
    delete(taskId: number): Promise<void>
    findById(taskId: number): Promise<Task | null>
    findAll(): Promise<Task[] | null>
}