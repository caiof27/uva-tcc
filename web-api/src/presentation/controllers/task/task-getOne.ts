import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class TaskGetOneController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    console.log(db.task.findOne({ where: { id } }))

    const account = await db.task.findOne({ where: { id } });

    return ok(account);
  }
}
