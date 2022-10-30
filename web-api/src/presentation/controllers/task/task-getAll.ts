import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { TaskGetAll } from "../../../domain/usecases/task/task-getAll";
import { token } from "../../../data/protocols/jwt";
export class TaskGetAllController implements Controller {
  private readonly taskGetAll: TaskGetAll;
  private readonly jwt: token
  constructor(taskGetAll: TaskGetAll,jwt:token) {
    this.taskGetAll = taskGetAll;
    this.jwt = jwt;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const task = await this.taskGetAll.getAll();
      const token = httpRequest.params["token"];

      return ok({task,token});
  }
}
