import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UserGetAll } from "../../../domain/usecases/user/user-getAll";

export class UserGetController implements Controller {
  private readonly userGetAll: UserGetAll;
  constructor(userGetAll: UserGetAll) {
    this.userGetAll = userGetAll;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const token = httpRequest.params["token"];

    const user = await this.userGetAll.getAll();

    return ok({user,token});
  }
}
