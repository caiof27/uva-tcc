import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError} from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class UserPutController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["name", "price"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const id = httpRequest.params["id"];

    const { name, price } = httpRequest.body;

    await db.user.update(
      {
        name,
        price,
      },
      { where: { id } }
    );

    const user = await db.user.findOne({ where: { id } });

    return ok(user);
  }
}
