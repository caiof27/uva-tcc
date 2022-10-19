import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { FollowUpPost } from "../../../domain/usecases/followup/followup-post";

export class FollowUpPostController implements Controller {
  private readonly followUpPost: FollowUpPost;
  constructor(followUpPost: FollowUpPost) {
    this.followUpPost = followUpPost;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["description", "task_id"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const body = httpRequest.body;

    const followup = await this.followUpPost.post(body);

    return ok(followup);
  }
}
