import { TaskPatchController } from "../../../presentation/controllers/task/task-patch";
import { Controller } from "../../../presentation/protocols";

export const makeTaskPatchController = (): Controller =>{
    return new TaskPatchController();
}