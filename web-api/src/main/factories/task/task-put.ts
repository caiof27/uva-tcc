import { DbTaskGetOne } from "../../../data/usecases/task/task-getOne";
import { DbTaskPut } from "../../../data/usecases/task/task-put";
import { TaskRepository } from "../../../infra/db/postgres/repositories/task/task-repository";
import { TaskPutController } from "../../../presentation/controllers/task/task-put";
import { Controller } from "../../../presentation/protocols";

export const makeTaskPutController = (): Controller =>{
    const taskRepository = new TaskRepository();
    const dbTaskPost = new DbTaskPut(taskRepository);
    const dbTaskGetOne = new DbTaskGetOne(taskRepository);
    return new TaskPutController(dbTaskPost,dbTaskGetOne);
}