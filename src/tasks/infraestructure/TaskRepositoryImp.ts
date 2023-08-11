import { Repository } from "typeorm";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";
import { AppDataSource } from "../../db";

export class TaskRepositoryImp implements TaskRepository {
    private repository: Repository<Task>

    constructor () { this.repository = AppDataSource.getRepository(Task) }

    async create(task: Task): Promise<Task | null> {
        return await this.repository.save(task);
    }

    async update(task: Task): Promise<Task | null> {
        await this.repository.update(task.id, { 
            title: task.title, 
            description: task.description,
            status: task.status,
            deadline: task.deadline,
            responsible: task.responsible,
            tags: task.tags,
        })

        return this.repository.findOneBy( {id: task.id} )
    }

    async delete(taskId: number): Promise<void> {
        await this.repository.delete( {id: taskId} )
    }

    async findById(taskId: number): Promise<Task | null> {
        return await this.repository.findOneBy( {id: taskId} )
    }

    async findAll(): Promise<Task[] | null> {
        return await this.repository.find()
    }
}