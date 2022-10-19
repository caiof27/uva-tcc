import { Controller, HttpRequest } from "../../protocols";
import { TaskPut } from "../../../domain/usecases/task/task-put";

export class TaskPutController implements Controller {
  private readonly taskPut: TaskPut;
  constructor(taskPut: TaskPut) {
    this.taskPut = taskPut;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {

    const id = httpRequest.params["id"];

    const body = httpRequest.body;

    await this.taskPut.put(body,id);


  }
}
