import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class TaskPostController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["title", "description","createdBy"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { title, description, createdBy } = httpRequest.body;

    const task = await db.task.create({
      title, 
      description, 
      createdBy,
      status: 1
    });

    return ok(task);
  }
}
