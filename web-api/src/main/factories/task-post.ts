import { TaskPostController } from "../../presentation/controllers/task/task-post";
import { Controller } from "../../presentation/protocols";

export const makeTaskPostController = (): Controller =>{
    return new TaskPostController();
}