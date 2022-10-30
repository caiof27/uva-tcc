import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskGetOne } from "../../../domain/usecases/task/task-getOne";
export class TaskGetOneController implements Controller {
  private readonly taskGetOne: TaskGetOne;
  

  constructor(taskGetOne: TaskGetOne) {
    this.taskGetOne = taskGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const idTask = httpRequest.params["idTask"];
    const token = httpRequest.params["token"];

    const task = await this.taskGetOne.getOne(idTask);


    return ok({task,token});
  }
}
