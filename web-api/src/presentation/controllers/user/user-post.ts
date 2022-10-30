import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UserPost } from "../../../domain/usecases/user/user-post";

export class UserPostController implements Controller {
  private readonly userPost: UserPost;
  constructor(userPost: UserPost) {
    this.userPost = userPost;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["name", "role_id","username","password"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { name, role_id, username, password } = httpRequest.body;
    const token = httpRequest.params["token"];

    const user = await this.userPost.post({
      name,
      role_id,
      username,
      password
    });

    return ok({user,token});
  }
}
