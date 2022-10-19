import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskGetAll } from "../../../domain/usecases/task/task-getAll";
export class TaskGetAllController implements Controller {
  private readonly taskGetAll: TaskGetAll;
  constructor(taskGetAll: TaskGetAll) {
    this.taskGetAll = taskGetAll;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const task = await this.taskGetAll.getAll();

      return ok(task);
  }
}
