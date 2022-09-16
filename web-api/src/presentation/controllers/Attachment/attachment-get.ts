import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import db from "../../../infra/db/postgres/models";

export class  AttachmentGetController implements Controller {
  constructor() {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const  attachment = await db.attachment.findAll({ order: [["id", "ASC"]] });

      return ok(attachment);
  }
}
