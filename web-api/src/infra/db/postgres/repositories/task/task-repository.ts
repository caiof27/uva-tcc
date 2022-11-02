import { TaskGetAllRepository, TaskGetOneRepository, TaskPostRepository } from "../../../../../data/protocols/task";
import { TaskModel } from "../../../../../domain/models/task";
import db from "../../models";

export class TaskRepository implements TaskGetAllRepository,TaskGetOneRepository,TaskPostRepository {
    async getOne(id: number): Promise<TaskModel> {
        const return_value =  await db.sequelize.query(`select tasks.*,status.status as status_name,users1.name as "createdBy_name",users2.name as "assignTo_name"  from tasks left join status on tasks.status = status.id left join users as users1 on tasks."createdBy" = users1.id left join users as users2 on tasks."assignTo" = users2.id where tasks.id = ${id}` );
        return return_value[0];
    }
    async getAll(): Promise<TaskModel[]> {
        const return_value =  await db.sequelize.query(`select tasks.*,status.status as status_name,users1.name as "createdBy_name",users2.name as "assignTo_name"  from tasks left join status on tasks.status = status.id left join users as users1 on tasks."createdBy" = users1.id left join users as users2 on tasks."assignTo" = users2.id` );
        return return_value[0];
    }
    async put(task: TaskModel,taskId:number): Promise<void> {
        await db.task.update(task,{where:{id:taskId}})
    }
    async post(user: TaskModel): Promise<TaskModel>{
        return await db.task.create(user)
    }
}