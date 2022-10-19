import { FollowUpGetOne } from "../../../domain/usecases/followup/followup-getOne";
import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class  FollowUpGetOneController implements Controller {
  private readonly followUpGetOne: FollowUpGetOne;
  constructor(followUpGetOne: FollowUpGetOne) {
    this.followUpGetOne = followUpGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    const attachment = await this.followUpGetOne.getOne(id);

    return ok(attachment);
  }
}
