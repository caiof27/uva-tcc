import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError} from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class FollowUpPutController implements Controller {
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

    await db.attachment.update(
      {
        name,
        price,
      },
      { where: { id } }
    );

    const attachment = await db.attachment.findOne({ where: { id } });

    return ok(attachment);
  }
}
