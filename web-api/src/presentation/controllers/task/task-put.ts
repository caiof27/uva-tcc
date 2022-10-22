import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskPut } from "../../../domain/usecases/task/task-put";
import { TaskGetOne } from "../../../domain/usecases/task/task-getOne";
import { ok } from "../../helpers/http-helper";

export class TaskPutController implements Controller {
  private readonly taskPut: TaskPut;
  private readonly taskGetOne: TaskGetOne;
  constructor(taskPut: TaskPut, taskGetOne: TaskGetOne) {
    this.taskPut = taskPut;
    this.taskGetOne = taskGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];

    const body = httpRequest.body;

    await this.taskPut.put(body,id);

    const task = await this.taskGetOne.getOne(id);

    return ok(task)

  }
}
