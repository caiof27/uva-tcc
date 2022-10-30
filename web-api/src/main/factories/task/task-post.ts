import { DbTaskPost } from "../../../data/usecases/task/task-post";
import { TaskRepository } from "../../../infra/db/postgres/repositories/task/task-repository";
import { JwtAdapter } from "../../../infra/token/jwt-adapter";
import { TaskPostController } from "../../../presentation/controllers/task/task-post";
import { Controller } from "../../../presentation/protocols";

export const makeTaskPostController = (): Controller =>{
    const jwtAdapter = new JwtAdapter();
    const taskRepository = new TaskRepository();
    const dbTaskPost = new DbTaskPost(taskRepository);
    return new TaskPostController(dbTaskPost,jwtAdapter);
}