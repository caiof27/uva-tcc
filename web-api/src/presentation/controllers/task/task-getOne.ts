import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskGetOne } from "../../../domain/usecases/task/task-getOne";
export class TaskGetOneController implements Controller {
  private readonly taskGetOne: TaskGetOne;

  constructor(taskGetOne: TaskGetOne) {
    this.taskGetOne = taskGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    const task = await this.taskGetOne.getOne(id);

    return ok(task);
  }
}
