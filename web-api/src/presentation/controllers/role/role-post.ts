import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class RolePostController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["name", "price"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { name, price } = httpRequest.body;

    const role = await db.role.create({
      name,
      price,
    });

    return ok(role);
  }
}
