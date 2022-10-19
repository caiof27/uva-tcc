import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { RolePost } from "../../../domain/usecases/role/role-post";

export class RolePostController implements Controller {
  private readonly rolePost: RolePost;
  constructor(rolePost: RolePost) {
    this.rolePost = rolePost;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["role"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const body = httpRequest.body;

    const role = await this.rolePost.post(body);

    return ok(role);
  }
}
