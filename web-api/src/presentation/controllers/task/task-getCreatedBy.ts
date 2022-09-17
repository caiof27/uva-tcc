import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class TaskGetController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

      const createdBy = httpRequest.params["id"];
      
      const task = await db.task.findAll({ where: { createdBy } });

      return ok(task);
  }
}
