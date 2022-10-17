import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class  FollowUpGetOneController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    const attachment = await db.attachment.findOne({ where: { id } });

    return ok(attachment);
  }
}
