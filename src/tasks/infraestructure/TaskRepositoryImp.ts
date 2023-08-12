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
        const found_task = await this.repository.findOneBy( {id: task.id} );

        if (found_task && Boolean(found_task.is_public) === true) {
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
        return null;
    }

    async delete(taskId: number): Promise<boolean | null> {
        const task = await this.repository.findOneBy( {id: taskId} );

        if (task && Boolean(task.is_public) === true) {
            const deleted = await this.repository.delete({ id: taskId });
            return deleted.affected! > 0;
        } 
        return null;
    }

    async findById(taskId: number): Promise<Task | null> {
        const task =  await this.repository.findOneBy( {id: taskId} );

        if (task && Boolean(task.is_public) === true) {
            return task;
        } 
        return null;
    }

    async findAll(): Promise<Task[] | null> {
        return await this.repository.find({
            where: {
                is_public: true
            }
        });
    }
}