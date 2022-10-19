import { DbTaskGetOne } from "../../../data/usecases/task/task-getOne";
import { TaskRepository } from "../../../infra/db/postgres/repositories/task/task-repository";
import { TaskGetOneController } from "../../../presentation/controllers/task/task-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeTaskGetOneController = (): Controller =>{
    const taskRepository = new TaskRepository();
    const dbTaskGetOne = new DbTaskGetOne(taskRepository);
    return new TaskGetOneController(dbTaskGetOne);
}