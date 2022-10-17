import { TaskModel } from "../../models/task" 

export interface TaskDelete{
    delete(task: TaskModel):Promise<void>
}