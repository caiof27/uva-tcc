import { TaskPutController } from "../../presentation/controllers/task/task-put";
import { Controller } from "../../presentation/protocols";

export const makeTaskPutController = (): Controller =>{
    return new TaskPutController();
}