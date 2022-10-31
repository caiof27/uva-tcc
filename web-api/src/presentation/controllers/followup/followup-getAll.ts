import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { FollowUpGetAll } from "../../../domain/usecases/followup/followup-getAll";

export class  FollowUpGetAllController implements Controller {
  private readonly followUpGetAll: FollowUpGetAll;
  constructor(followUpGetAll: FollowUpGetAll) {
    this.followUpGetAll = followUpGetAll;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const token = httpRequest.params["token"];
    const id = httpRequest.params["id"];


    const followups = await this.followUpGetAll.getAllFromOne(id);

    return ok({followups,token});
  }
}
