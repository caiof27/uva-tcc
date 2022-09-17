import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError} from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class TaskPatchController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];

    const body = httpRequest.body;

    await db.task.update(body,
      { where: { id } }
    );

    const task = await db.task.findOne({ where: { id } });

    return ok(task);
  }
}
