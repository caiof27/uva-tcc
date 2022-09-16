import { TaskDeleteController } from "../../../presentation/controllers/task/task-delete";
import { Controller } from "../../../presentation/protocols";

export const makeTaskDeleteController = (): Controller =>{
    return new TaskDeleteController();
}