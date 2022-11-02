import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { FollowUpPost } from "../../../domain/usecases/followup/followup-post";
import { token } from "../../../data/protocols/jwt";

export class FollowUpPostController implements Controller {
  private readonly followUpPost: FollowUpPost;
  private readonly jwt: token;
  constructor(followUpPost: FollowUpPost,jwt:token) {
    this.followUpPost = followUpPost;
    this.jwt = jwt;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const requireFields = ["description"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const body = httpRequest.body;
    const token = httpRequest.params["token"];
    const task_id = httpRequest.params["id"];

    const {id} = this.jwt.decode(token);

    const followups = await this.followUpPost.post(Object.assign(body,{task_id,createdBy:id}));

    return ok({followups,token});
  }
}
