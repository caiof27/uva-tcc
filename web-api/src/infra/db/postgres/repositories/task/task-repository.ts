import { TaskGetAllRepository, TaskGetOneRepository, TaskPostRepository ,TaskPutRepository } from "../../../../../data/protocols/task";
import { TaskModel } from "../../../../../domain/models/task";
import db from "../../models";

export class TaskRepository implements TaskGetAllRepository,TaskGetOneRepository,TaskPostRepository,TaskPutRepository {
    async getOne(id: number): Promise<TaskModel> {
        return db.task.findOne({where:{id}})
    }
    async put(task: TaskModel,taskId:number): Promise<void> {
        await db.task.update(task,{where:{id:taskId}})
    }
    async getAll(): Promise<TaskModel[]> {
        return await db.task.findAll();
    }
    async post(user: TaskModel): Promise<TaskModel>{
        const result = await db.task.create(user)
        return result;
    }
}