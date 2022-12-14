import { DbTaskGetall } from "../../../data/usecases/task/task-getAll";
import { TaskRepository } from "../../../infra/db/postgres/repositories/task/task-repository";
import { JwtAdapter } from "../../../infra/token/jwt-adapter";
import { TaskGetAllController } from "../../../presentation/controllers/task/task-getAll";
import { Controller } from "../../../presentation/protocols";

export const makeTaskGetController = (): Controller =>{
    const taskRepository = new TaskRepository();
    const jwtAdapter = new JwtAdapter();
    const dbTaskGetAll = new DbTaskGetall(taskRepository);
    return new TaskGetAllController(dbTaskGetAll,jwtAdapter);
}