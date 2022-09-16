import { TaskGetOneController } from "../../../presentation/controllers/task/task-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeTaskGetOneController = (): Controller =>{
    return new TaskGetOneController();
}