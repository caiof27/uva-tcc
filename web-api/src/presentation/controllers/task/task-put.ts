import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskPut } from "../../../domain/usecases/task/task-put";
import { TaskGetOne } from "../../../domain/usecases/task/task-getOne";
import { ok } from "../../helpers/http-helper";
import { token } from "../../../data/protocols/jwt";

export class TaskPutController implements Controller {
  private readonly taskPut: TaskPut;
  private readonly taskGetOne: TaskGetOne;
  constructor(taskPut: TaskPut, taskGetOne: TaskGetOne) {
    this.taskPut = taskPut;
    this.taskGetOne = taskGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const idTask = httpRequest.params["idTask"];
    const token = httpRequest.params["token"];

    let body = httpRequest.body;

    

    await this.taskPut.put(body,idTask);

    const task = await this.taskGetOne.getOne(idTask);

    return ok({task,token})

  }
}
