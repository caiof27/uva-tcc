import { TaskGetController } from "../../presentation/controllers/task/task-get";
import { Controller } from "../../presentation/protocols";

export const makeTaskGetController = (): Controller =>{
    return new TaskGetController();
}