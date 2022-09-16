import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class RoleDeleteController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];

    const role = await db.role.destroy({ where: { id } });

    return ok(role);
  }
}
